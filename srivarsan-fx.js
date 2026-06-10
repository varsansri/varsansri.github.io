/* S.Srivarsan — Universal Animation Layer
   Drop this script at bottom of any site to add:
   cursor, particles, scroll reveal, counters, WhatsApp btn, progress bar, entry anim
*/
(function(){
  const ACCENT = document.documentElement.style.getPropertyValue('--accent') ||
    getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() ||
    '#4361EE';
  const WA = 'https://wa.me/919XXXXXXXXX?text=Hi%20Srivarsan%2C%20I%20want%20a%20website%20for%20my%20business.';

  /* ---------- CSS INJECT ---------- */
  const css = `
  #sri-overlay{position:fixed;inset:0;background:#070710;z-index:99999;pointer-events:none;transition:opacity .7s ease .1s}
  #sri-overlay.gone{opacity:0}
  #sri-progress{position:fixed;top:0;left:0;width:0%;height:3px;background:linear-gradient(90deg,var(--accent,#4361EE),#a78bfa);z-index:10001;transition:width .08s linear;pointer-events:none}
  #sri-cursor{position:fixed;width:9px;height:9px;background:var(--accent,#4361EE);border-radius:50%;pointer-events:none;z-index:99990;transform:translate(-50%,-50%);transition:transform .12s,background .2s;mix-blend-mode:difference}
  #sri-ring{position:fixed;width:34px;height:34px;border:1.5px solid var(--accent,#4361EE);border-radius:50%;pointer-events:none;z-index:99989;transform:translate(-50%,-50%);opacity:.6;transition:width .2s,height .2s,opacity .2s}
  @media(hover:none){#sri-cursor,#sri-ring{display:none}}
  #sri-wa{position:fixed;bottom:1.8rem;right:1.8rem;z-index:9999;width:3.4rem;height:3.4rem;background:#25D366;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 20px rgba(37,211,102,.4);text-decoration:none;transition:.3s}
  #sri-wa:hover{transform:scale(1.12);box-shadow:0 6px 28px rgba(37,211,102,.6)}
  #sri-wa::before{content:'';position:absolute;inset:0;border-radius:50%;background:rgba(37,211,102,.35);animation:wa-pulse 2s ease-out infinite}
  @keyframes wa-pulse{0%{transform:scale(1);opacity:.8}100%{transform:scale(2.2);opacity:0}}
  #sri-wa svg{width:1.6rem;height:1.6rem;fill:#fff;position:relative;z-index:1}
  #sri-credit{text-align:center;padding:.8rem;font-size:.78rem;border-top:1px solid rgba(255,255,255,.06);color:rgba(255,255,255,.3);font-family:inherit;margin-top:.5rem}
  #sri-credit a{color:rgba(255,255,255,.55);text-decoration:none;font-weight:600}
  #sri-credit a:hover{color:#fff}
  .sri-reveal{opacity:0;transform:translateY(32px);transition:opacity .65s ease,transform .65s ease}
  .sri-reveal.sri-in{opacity:1;transform:translateY(0)}
  `;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  /* ---------- ENTRY OVERLAY ---------- */
  const overlay = document.createElement('div');
  overlay.id = 'sri-overlay';
  document.body.appendChild(overlay);
  window.addEventListener('load', () => setTimeout(() => overlay.classList.add('gone'), 200));

  /* ---------- PROGRESS BAR ---------- */
  const bar = document.createElement('div');
  bar.id = 'sri-progress';
  document.body.appendChild(bar);
  window.addEventListener('scroll', () => {
    const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    bar.style.width = Math.min(pct, 100) + '%';
  }, {passive:true});

  /* ---------- CURSOR ---------- */
  const dot = document.createElement('div'); dot.id = 'sri-cursor';
  const ring = document.createElement('div'); ring.id = 'sri-ring';
  document.body.appendChild(dot); document.body.appendChild(ring);
  let mx = -100, my = -100, rx = -100, ry = -100;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; dot.style.left=mx+'px'; dot.style.top=my+'px'; }, {passive:true});
  (function raf(){ rx += (mx-rx)*.13; ry += (my-ry)*.13; ring.style.left=rx+'px'; ring.style.top=ry+'px'; requestAnimationFrame(raf); })();
  document.querySelectorAll('a,button,[onclick]').forEach(el=>{
    el.addEventListener('mouseenter',()=>{dot.style.transform='translate(-50%,-50%) scale(2.5)';ring.style.width='52px';ring.style.height='52px';ring.style.opacity='.3'});
    el.addEventListener('mouseleave',()=>{dot.style.transform='translate(-50%,-50%) scale(1)';ring.style.width='34px';ring.style.height='34px';ring.style.opacity='.6'});
  });

  /* ---------- WHATSAPP BUTTON ---------- */
  const wa = document.createElement('a');
  wa.id = 'sri-wa'; wa.href = WA; wa.target = '_blank'; wa.rel = 'noopener';
  wa.innerHTML = `<svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;
  document.body.appendChild(wa);

  /* ---------- SRIVARSAN CREDIT ---------- */
  const footer = document.querySelector('footer');
  if(footer){
    const credit = document.createElement('div');
    credit.id = 'sri-credit';
    credit.innerHTML = `Website designed & built by <a href="${WA}" target="_blank">S. Srivarsan</a>`;
    footer.appendChild(credit);
  }

  /* ---------- PARTICLE CANVAS ON HERO ---------- */
  const hero = document.querySelector('.hero, [class*="hero"], section:first-of-type');
  if(hero){
    const cv = document.createElement('canvas');
    cv.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:1;opacity:.45';
    if(getComputedStyle(hero).position === 'static') hero.style.position = 'relative';
    hero.insertBefore(cv, hero.firstChild);
    function resizeCV(){ cv.width = hero.offsetWidth; cv.height = hero.offsetHeight; }
    resizeCV(); window.addEventListener('resize', resizeCV, {passive:true});
    const ctx = cv.getContext('2d');
    const pts = Array.from({length:65}, () => ({
      x: Math.random()*cv.width, y: Math.random()*cv.height,
      vx: (Math.random()-.5)*.35, vy: (Math.random()-.5)*.35,
      r: .6+Math.random()*1.4
    }));
    (function draw(){
      ctx.clearRect(0,0,cv.width,cv.height);
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if(p.x<0)p.x=cv.width; if(p.x>cv.width)p.x=0;
        if(p.y<0)p.y=cv.height; if(p.y>cv.height)p.y=0;
        ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle='rgba(255,255,255,.45)'; ctx.fill();
      });
      for(let i=0;i<pts.length;i++) for(let j=i+1;j<pts.length;j++){
        const d=Math.hypot(pts[i].x-pts[j].x,pts[i].y-pts[j].y);
        if(d<110){ ctx.beginPath(); ctx.moveTo(pts[i].x,pts[i].y); ctx.lineTo(pts[j].x,pts[j].y);
          ctx.strokeStyle=`rgba(255,255,255,${.18*(1-d/110)})`; ctx.lineWidth=.5; ctx.stroke(); }
      }
      requestAnimationFrame(draw);
    })();
  }

  /* ---------- SCROLL REVEAL ---------- */
  const revealEls = document.querySelectorAll('section > *, .service-card, .svc, .testi-card, .gallery-grid img, .work-card, .step, .about-grid > *');
  revealEls.forEach(el => { if(!el.closest('#sri-overlay') && !el.closest('nav')) el.classList.add('sri-reveal'); });
  const ro = new IntersectionObserver(entries => entries.forEach((e,i) => {
    if(e.isIntersecting){ setTimeout(()=>e.target.classList.add('sri-in'), i*60); ro.unobserve(e.target); }
  }), {threshold:.1});
  document.querySelectorAll('.sri-reveal').forEach(el => ro.observe(el));

  /* ---------- COUNTER ANIMATION ---------- */
  const numRe = /^[\d,]+[+%k]?$/i;
  document.querySelectorAll('.stat h3, [class*="stat"] h3, [class*="number"], [class*="count"]').forEach(el => {
    const raw = el.textContent.trim();
    const num = parseInt(raw.replace(/[^0-9]/g,''));
    if(!num || num > 1e7) return;
    const suffix = raw.replace(/[0-9,]/g,'').trim();
    el.dataset.target = num; el.dataset.suffix = suffix; el.textContent = '0'+suffix;
    const co = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting){
        co.disconnect(); let n=0,total=num,dur=1400,start=Date.now();
        (function tick(){ const elapsed=Date.now()-start,prog=Math.min(elapsed/dur,1);
          const ease=1-Math.pow(1-prog,3); n=Math.floor(ease*total);
          el.textContent=(n>=1000?n.toLocaleString():n)+suffix;
          if(prog<1) requestAnimationFrame(tick); })();
      }
    },{threshold:.6});
    co.observe(el);
  });

  /* ---------- MAGNETIC CARDS ---------- */
  document.querySelectorAll('.service-card, .svc, .testi-card, .work-card, .project-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX-r.left-r.width/2)/(r.width/2)*8;
      const y = (e.clientY-r.top-r.height/2)/(r.height/2)*8;
      card.style.transform = `translate(${x*.4}px,${y*.4}px) translateY(-6px)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });

})();
