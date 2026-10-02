/* Comportamiento de la página (animaciones, galerías, ventanas).
   No necesitas editar este archivo: el contenido está en contenido.js */
/* ---- */
(function(){
  const $=id=>document.getElementById(id);
  const css=n=>getComputedStyle(document.documentElement).getPropertyValue(n).trim();
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hash=t=>{let x=0;for(const ch of t)x=(x*31+ch.charCodeAt(0))|0;return Math.abs(x)};
  const toast=t=>{const el=$('toast');el.textContent=t;el.hidden=false;clearTimeout(toast.h);toast.h=setTimeout(()=>el.hidden=true,2200)};

  /* ---------- Placa Petri ilustrada (tinta + acuarela) ---------- */
  const cv=$('dish'),ctx=cv.getContext('2d'),x=ctx;
  const SEC=[{n:'mi trabajo',c:'#1F9D68',h:'#trabajo'},{n:'TribuLat',c:'#6B3FD8',h:'#tribulat'},{n:'mis garabatos',c:'#FF5A4E',h:'#pintar'},{n:'mi librería',c:'#2D5BFF',h:'#libros'},{n:'mis historias',c:'#E09B00',h:'#historias'}];
  const COL=[{x:.37,y:.4,r:.15,lx:.08,ly:.14},{x:.68,y:.33,r:.1,lx:.84,ly:.1},{x:.63,y:.66,r:.13,lx:.9,ly:.9},{x:.33,y:.68,r:.09,lx:.08,ly:.9},{x:.53,y:.52,r:.05,lx:.55,ly:.03}];
  const rng=seed=>()=>(seed=(seed*9301+49297)%233280)/233280;
  const hex2=(hh,a)=>{const n=parseInt(hh.slice(1),16);return `rgba(${n>>16},${n>>8&255},${n&255},${a})`};
  function blob(cx,cy,r,seed,rough=.06,n=72,pr=1){const R=rng(seed);const k=[...Array(3)].map(()=>R()*6.28);x.beginPath();
    const N=Math.max(1,Math.round(n*pr));for(let i=0;i<=N;i++){const a=i/n*6.283,w=1+Math.sin(a*3+k[0])*rough+Math.sin(a*7+k[1])*rough*.6+Math.sin(a*13+k[2])*rough*.35;const px=cx+Math.cos(a)*r*w,py=cy+Math.sin(a)*r*w;i?x.lineTo(px,py):x.moveTo(px,py)}if(pr>=1)x.closePath()}
  const cl=v=>Math.max(0,Math.min(1,v)),eo=v=>1-Math.pow(1-v,3),pp=(v,a,b)=>cl((v-a)/(b-a));
  let T0=null;const introOn=false;
  function size(){const w=cv.clientWidth,d=devicePixelRatio||1;cv.width=w*d;cv.height=w*d;x.setTransform(d,0,0,d,0,0)}
  function draw(t){const W=cv.clientWidth,C=W/2,Rr=W*.4;x.clearRect(0,0,W,W);x.lineJoin='round';x.lineCap='round';
    const s=(T0===null||!introOn)?99:(performance.now()-T0)/1000;
    const dP=cl(s/1.3),bP=cl((s-.7)/1.5),lP=cl((s-3.1)/1.2);
    x.globalAlpha=eo(cl(dP*1.4));x.fillStyle='#FBF8F1';x.beginPath();x.arc(C,C,Rr*1.14,0,7);x.fill();x.globalAlpha=1;
    COL.forEach((o,i)=>{const g=eo(pp(bP,i*.12,i*.12+.55));if(g<=0)return;const col=SEC[i].c,b=(1+Math.sin(t/3000+i)*.015)*g,cx=o.x*W,cy=o.y*W,rf=o.r*W*.93,r=rf*b;
      for(let k=0;k<4;k++){blob(cx+(k-1.5)*2,cy+(k%2)*2,r*(1.05-k*.06),i*29+k*7,.1);x.fillStyle=hex2(col,(.16+k*.05)*g);x.fill()}
      x.strokeStyle='#1B1614';x.lineWidth=1.4;blob(cx,cy,r*.98,i*29+99,.08,72,g);x.stroke();
      const R=rng(i*13+5);for(let k=0;k<Math.round(rf/3);k++){const a=R()*6.28,d=Math.sqrt(R())*r*.8;if(g>.6){x.beginPath();x.arc(cx+Math.cos(a)*d,cy+Math.sin(a)*d,.9,0,7);x.fillStyle='#1B1614';x.fill()}}
      for(let k=0;k<6;k++){const a=R()*6.28,d=rf*(1.4+R()*.9),sr0=2+R()*3.5;const sg=eo(pp(bP,i*.12+.35+k*.04,i*.12+.6+k*.04));if(sg<=0)continue;const sx=cx+Math.cos(a)*d,sy=cy+Math.sin(a)*d;x.beginPath();x.arc(sx,sy,sr0*sg,0,7);x.fillStyle=hex2(col,.45);x.fill();x.lineWidth=1;x.stroke()}});
    x.strokeStyle='#1B1614';x.lineWidth=2.2;for(let q=0;q<2;q++){blob(C,C,Rr*1.04*(1+q*.012),3+q*31,.012,90,cl(dP*1.15-q*.15));x.stroke()}
    x.lineWidth=1.3;blob(C,C,Rr*.97,9,.012,90,cl(dP*1.2-.25));x.stroke();
    const sh=cl((dP-.6)/.4);for(let a=3.3;a<3.3+1.3*sh;a+=.07){x.beginPath();x.moveTo(C+Math.cos(a)*Rr*.99,C+Math.sin(a)*Rr*.99);x.lineTo(C+Math.cos(a)*Rr*1.03,C+Math.sin(a)*Rr*1.03);x.lineWidth=1;x.stroke()}
    x.font=`700 ${Math.max(15,W*.05)}px Caveat, cursive`;x.fillStyle='#1B1614';
    COL.forEach((o,i)=>{const lv=eo(pp(lP,i*.13,i*.13+.5));if(lv<=0)return;const lx=o.lx*W,ly=o.ly*W;x.globalAlpha=lv;x.textAlign=o.lx>.5?'right':'left';x.textBaseline='middle';x.fillText(window.__t?__t(SEC[i].n):SEC[i].n,lx,ly);
      const ex=o.x*W+(lx-o.x*W)*.38,ey=o.y*W+(ly-o.y*W)*.38;const sx=lx+(o.lx>.5?-6:6),sy=ly+(o.ly>.5?-13:13);
      x.beginPath();x.moveTo(sx,sy);x.quadraticCurveTo((sx+ex)/2+10,(sy+ey)/2,sx+(ex-sx)*lv,sy+(ey-sy)*lv);x.lineWidth=1.1;x.stroke();x.globalAlpha=1});
  }
  const dtip=$('dtip');
  const hit=e=>{const r=cv.getBoundingClientRect(),px=(e.clientX-r.left)/r.width,py=(e.clientY-r.top)/r.height;const i=COL.findIndex(o=>Math.hypot(px-o.x,py-o.y)<o.r*1.15);return {i,px,py}};
  cv.addEventListener('mousemove',e=>{const {i,px,py}=hit(e);if(i>=0){dtip.textContent=(window.__t?__t(SEC[i].n):SEC[i].n)+' →';dtip.style.left=(cv.offsetLeft+px*cv.clientWidth)+'px';dtip.style.top=(cv.offsetTop+py*cv.clientWidth)+'px';dtip.classList.add('on');cv.style.cursor='pointer'}else{dtip.classList.remove('on');cv.style.cursor=''}});
  cv.addEventListener('mouseleave',()=>dtip.classList.remove('on'));
  cv.addEventListener('click',e=>{const {i}=hit(e);if(i>=0)document.querySelector(SEC[i].h).scrollIntoView({behavior:reduce?'auto':'smooth'})});
  size();draw(0);addEventListener('resize',()=>{size();draw(performance.now())});
  /* entrada de la portada (se dispara al terminar la intro de la placa) */
  window.__heroGo=function(){if(reduce)return;const E='cubic-bezier(.22,1,.36,1)',head=document.querySelector('header.top');
    document.querySelectorAll('.hero h1 .w').forEach((w,i)=>w.animate([{transform:'translateY(105%)'},{transform:'none'}],{duration:800,delay:150+i*200,easing:E,fill:'backwards'}));
    document.querySelector('.hero .sub').animate([{opacity:0,transform:'translateY(16px)'},{opacity:1,transform:'none'}],{duration:700,delay:800,easing:E,fill:'backwards'});
    document.querySelector('.dishbox').animate([{opacity:0,transform:'scale(.9)'},{opacity:1,transform:'none'}],{duration:900,delay:250,easing:E,fill:'backwards'});
    if(head)head.animate([{opacity:0},{opacity:1}],{duration:600,delay:400,fill:'backwards'});};
  if(document.fonts)document.fonts.ready.then(()=>draw(performance.now()));
  if(!reduce)(function loop(t){draw(t);requestAnimationFrame(loop)})(0);

  /* ---------- Libros ---------- */
  const BOOKS=window.LIBROS||[];
  const JK=window.LEYENDO;
  const MESES=['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
  const fecha=d=>{const [y,m,dd]=d.split('-').map(Number);return `${dd} de ${MESES[m-1]} de ${y}`};
  const bd=$('bookDlg');
  function openBook(b){
    const c=$('bC');c.innerHTML='';
    if(b.c){const im=document.createElement('img');im.src=`covers/${b.i}.jpg`;im.alt=`Portada de ${b.t}`;c.appendChild(im)}
    else{const d=document.createElement('div');d.className='nocov';d.textContent=b.t;c.appendChild(d)}
    $('bS').textContent=b.now?'Leyendo ahora':(b.s===5?'Uno de mis favoritos':'Leído');
    $('bT').textContent=b.t;$('bA').textContent=b.a;
    $('bSt').textContent=b.now?'':(b.s?'★'.repeat(b.s)+'☆'.repeat(5-b.s):'Sin calificar');
    const m=$('bM');m.innerHTML='';
    [['Lo terminé',b.now?'Lo estoy leyendo':(b.d?fecha(b.d):'Sin fecha registrada')],['Páginas',b.p?String(b.p):'—'],['Publicado',b.o?String(b.o):'—'],['Editorial',b.e||'—']]
      .forEach(([k,v])=>{const d=document.createElement('div'),dt=document.createElement('dt'),dd=document.createElement('dd');dt.textContent=k;dd.textContent=v;d.append(dt,dd);m.appendChild(d)});
    const r=$('bR');r.innerHTML='';
    if(b.r){const l=document.createElement('p');l.className='lbl';l.textContent='Mi reseña';const p=document.createElement('p');p.textContent=b.r;r.append(l,p)}
    $('bG').href=`https://www.goodreads.com/book/show/${b.i}`;
    bd.showModal();bd.querySelector('.bd').scrollTop=0;
  }
  $('bX').addEventListener('click',()=>bd.close());bd.addEventListener('click',e=>{if(e.target===bd)bd.close()});
  document.querySelectorAll('.bk-now [data-open]').forEach(el=>el.addEventListener('click',()=>{const k=el.dataset.open;openBook(k==='now'?JK:BOOKS.find(b=>String(b.i)===k))}));

  /* estante de cuero */
  const LEATHER=[['#1E3A2A','#6E1F1C'],['#6B1D1B','#1A1412'],['#8A4A22','#2A1A12'],['#4A1A1E','#1E3A2A'],['#3B2418','#6E1F1C'],['#23392F','#1A1412'],['#7A2A22','#1E3A2A'],['#5A2E1E','#6E1F1C'],['#2B2A22','#6E1F1C'],['#9A5A2A','#3B2418']];
  const ORN=['<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="2.2"/><ellipse cx="10" cy="4.5" rx="2" ry="3.2"/><ellipse cx="10" cy="15.5" rx="2" ry="3.2"/><ellipse cx="4.5" cy="10" rx="3.2" ry="2"/><ellipse cx="15.5" cy="10" rx="3.2" ry="2"/></svg>','<svg viewBox="0 0 20 20"><path d="M10 1 19 10 10 19 1 10Z" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M10 6 14 10 10 14 6 10Z"/></svg>','<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="7.5" fill="none" stroke="currentColor" stroke-width="1.3"/><circle cx="10" cy="10" r="2.6"/></svg>','<svg viewBox="0 0 20 20"><path d="M10 2c2 3 5 4 8 4-2 2-3 4-3 7-2-1-3-2-5-5-2 3-3 4-5 5 0-3-1-5-3-7 3 0 6-1 8-4Z"/><rect x="9" y="12" width="2" height="6"/></svg>'];
  document.querySelectorAll('.case-shelf').forEach(row=>{
    const y=+row.dataset.y,H=parseFloat(getComputedStyle(row).getPropertyValue('--H'))||210;let prev=-1;
    BOOKS.filter(b=>b.y===y).forEach(b=>{
      const hs=hash(b.t+b.a);let ci=hs%LEATHER.length;if(ci===prev)ci=(ci+3)%LEATHER.length;prev=ci;
      const slot=document.createElement('div');slot.className='bslot';
      const el=document.createElement('button');el.type='button';el.className='bspine';el.title=`${b.t} · ${b.a}`;el.setAttribute('aria-label',`${b.t}, de ${b.a}`);
      el.style.cssText=`--c:${LEATHER[ci][0]};--lab:${LEATHER[ci][1]};width:${Math.round(30+Math.min(b.p,720)/720*24)}px;height:${Math.round(H*(.82+(hs%16)/100))}px`;
      const part=(c,h)=>{const d=document.createElement('span');d.className=c;if(h)d.innerHTML=h;return d};
      const o=ORN[(hs>>3)%ORN.length],tt=part('ttl'),t=document.createElement('span');t.textContent=b.t;if(b.t.length>22)t.style.fontSize='8.5px';tt.appendChild(t);
      el.append(part('cap'),part('pan',o),part('rib'),tt,part('rib'),part('pan',o),part('cap b'));
      el.addEventListener('click',()=>openBook(b));slot.appendChild(el);row.appendChild(slot);
    });
  });

  /* portadas */
  const grid=$('covers');
  function renderCovers(f){
    const list=BOOKS.filter(b=>b.c&&(f==='all'||b.s===5));grid.innerHTML='';
    list.forEach(b=>{const el=document.createElement('button');el.type='button';el.className='cv';el.setAttribute('aria-label',`${b.t}, de ${b.a}`);
      const im=document.createElement('img');im.loading='lazy';im.alt='';im.src=`covers/${b.i}.jpg`;el.appendChild(im);el.addEventListener('click',()=>openBook(b));grid.appendChild(el)});
    $('fcount').textContent=list.length+' libros';
  }
  document.querySelectorAll('.fl[data-f]').forEach(b=>b.addEventListener('click',()=>{
    const wasOn=b.getAttribute('aria-pressed')==='true';
    document.querySelectorAll('.fl[data-f]').forEach(x=>x.setAttribute('aria-pressed','false'));
    if(wasOn){grid.hidden=true;$('fcount').textContent=BOOKS.filter(x=>x.c&&x.s===5).length+' libros';return}
    b.setAttribute('aria-pressed','true');renderCovers(b.dataset.f);grid.hidden=false}));
  $('fcount').textContent=BOOKS.filter(x=>x.c&&x.s===5).length+' libros';


  /* ---------- Trabajo ---------- */
  document.querySelectorAll('.ja').forEach(b=>b.addEventListener('click',()=>{
    document.querySelectorAll('.ja').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));
    document.querySelectorAll('#jobs li').forEach(li=>{li.hidden=!(b.dataset.a==='all'||li.dataset.a.split(' ').includes(b.dataset.a))});
  }));


  /* ---------- Pintar: marcadores generativos ---------- */
  const pal=['#FF5A4E','#F2A900','#2D5BFF','#1F9D68','#6B3FD8','#FF8FB1','#141112','#FDF6E3'];
  document.querySelectorAll('.art canvas').forEach(c=>{let s=+c.dataset.seed;const r=()=>(s=(s*9301+49297)%233280)/233280;
    const w=400,h=500;c.width=w;c.height=h;const g=c.getContext('2d');g.fillStyle=pal[Math.floor(r()*pal.length)];g.fillRect(0,0,w,h);
    for(let i=0;i<9;i++){g.fillStyle=pal[Math.floor(r()*pal.length)];g.globalAlpha=.75+r()*.25;const k=r();
      if(k<.4){g.beginPath();g.arc(r()*w,r()*h,30+r()*140,0,7);g.fill()}
      else if(k<.75){g.save();g.translate(r()*w,r()*h);g.rotate(r()*3);g.fillRect(-120,-25,240+r()*120,40+r()*60);g.restore()}
      else{g.beginPath();g.moveTo(r()*w,r()*h);g.lineTo(r()*w,r()*h);g.lineTo(r()*w,r()*h);g.closePath();g.fill()}}g.globalAlpha=1});

  /* ---------- ⌘K ---------- */
  const dlg=$('cmdk'),q=$('kq'),list=$('klist');
  const copy=()=>{const m=$('mail').textContent;try{navigator.clipboard.writeText(m).then(()=>toast('Correo copiado'),()=>toast(m))}catch(e){toast(m)}};
  const ITEMS=[['Inicio','#inicio','Ir'],['Sobre mí','#sobre','Ir'],['Mi librería','#libros','Ir'],['Mi trabajo','#trabajo','Ir'],['Mis garabatos','#pintar','Ir'],['TribuLat','#tribulat','Ir'],['Mis historias','#historias','Ir'],['Contacto','#contacto','Ir'],['Copiar correo',copy,'Acción']];
  function render(f=''){list.innerHTML='';ITEMS.filter(i=>i[0].toLowerCase().includes(f.toLowerCase())).forEach(([n,go,k])=>{const li=document.createElement('li'),b=document.createElement('button');b.type='button';
    const sp=document.createElement('span');sp.textContent=n;const sm=document.createElement('small');sm.textContent=k;b.append(sp,sm);
    b.addEventListener('click',()=>{dlg.close();typeof go==='string'?document.querySelector(go).scrollIntoView({behavior:reduce?'auto':'smooth'}):go()});li.appendChild(b);list.appendChild(li)})}
  const openK=()=>{render();q.value='';dlg.showModal();q.focus()};
  $('kOpen').addEventListener('click',openK);
  q.addEventListener('input',()=>render(q.value));
  q.addEventListener('keydown',e=>{if(e.key==='Enter'){const f=list.querySelector('button');f&&f.click()}});
  dlg.addEventListener('click',e=>{if(e.target===dlg)dlg.close()});
  addEventListener('keydown',e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();dlg.open?dlg.close():openK()}});
  $('copyMail').addEventListener('click',copy);
})();

/* ---- */
(function(){
  const C={bio:'var(--green)',lab:'var(--cobalt)',inn:'var(--violet)',edu:'var(--saffron)',bt:'var(--coral)'};
  const HEX={bio:'#1F9D68',lab:'#2D5BFF',inn:'#6B3FD8',edu:'#E09B00',bt:'#FF5A4E'};
  const JOBS=window.EMPLEOS||[];
  const NS='http://www.w3.org/2000/svg';
  const el=(n,a={},p)=>{const e=document.createElementNS(NS,n);for(const k in a)e.setAttribute(k,a[k]);p&&p.appendChild(e);return e};
  const cssv=n=>getComputedStyle(document.documentElement).getPropertyValue(n).trim();

  /* popover compartido */
  const pop=document.getElementById('pop'),body=document.getElementById('popBody');let current=null;
  function jobHTML(j){return `<div class="job"><p class="when"><i style="background:${HEX[j.a]}"></i>${j.w}${j.now?' · actual':''}</p><h3></h3><p class="org"></p><p class="d"></p></div>`}
  function show(jobs,anchor){
    if(current===anchor&&pop.classList.contains('on')){hide();return}
    body.innerHTML=jobs.map(jobHTML).join('');
    body.querySelectorAll('.job').forEach((n,i)=>{n.querySelector('h3').textContent=jobs[i].r;n.querySelector('.org').textContent=jobs[i].o;n.querySelector('.d').textContent=jobs[i].d});
    document.querySelectorAll('[aria-expanded="true"]').forEach(x=>x.setAttribute('aria-expanded','false'));
    anchor.setAttribute('aria-expanded','true');current=anchor;
    pop.classList.add('on');
    const r=anchor.getBoundingClientRect(),pw=pop.offsetWidth,ph=pop.offsetHeight;
    let x=r.left+r.width/2-pw/2+scrollX;x=Math.max(16+scrollX,Math.min(x,scrollX+innerWidth-pw-16));
    let y=r.bottom+12+scrollY;if(r.bottom+ph+24>innerHeight&&r.top-ph-12>0)y=r.top-ph-12+scrollY;
    pop.style.left=x+'px';pop.style.top=y+'px';
  }
  function hide(){pop.classList.remove('on');if(current){current.setAttribute('aria-expanded','false');current=null}}
  pop.querySelector('.x').addEventListener('click',hide);
  addEventListener('keydown',e=>{if(e.key==='Escape')hide()});
  document.addEventListener('click',e=>{if(!pop.contains(e.target)&&!e.target.closest('.hit,.yr'))hide()});
  document.querySelectorAll('.stage').forEach(s=>s.addEventListener('scroll',hide));
  addEventListener('resize',hide);
  const bindHit=(g,jobs,label)=>{g.setAttribute('class','hit');g.setAttribute('tabindex','0');g.setAttribute('role','button');g.setAttribute('aria-label',label);g.setAttribute('aria-expanded','false');
    g.addEventListener('click',e=>{e.stopPropagation();show(jobs,g)});g.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();show(jobs,g)}})};

  /* ---------- A: Serpentina ---------- */
  window.__JOBS=JOBS;window.__buildTL=function(){document.getElementById('stageA').innerHTML='';
    const n=JOBS.length,gap=130,W=gap*n+60,H=360,cy=180,R=34;
    const svg=el('svg',{viewBox:`0 0 ${W} ${H}`,width:W,height:H,role:'img','aria-label':'Línea de tiempo serpentina'});
    document.getElementById('stageA').appendChild(svg);
    const xs=JOBS.map((_,i)=>60+i*gap);
    // camino ondulado
    let d=`M ${xs[0]-50} ${cy}`;
    xs.forEach((x,i)=>{const up=i%2===0;d+=` L ${x-R-6} ${cy} A ${R+6} ${R+6} 0 0 ${up?1:0} ${x+R+6} ${cy}`});
    d+=` L ${xs[n-1]+70} ${cy}`;
    el('path',{d,fill:'none',stroke:cssv('--surface'),'stroke-width':22,'stroke-linecap':'round'},svg);
    el('path',{d,fill:'none',stroke:cssv('--line'),'stroke-width':2},svg);
    JOBS.forEach((j,i)=>{
      const x=xs[i],up=i%2===0,col=HEX[j.a];
      const g=el('g',{},svg);
      el('circle',{cx:x,cy,r:R,fill:cssv('--surface')},g);
      el('circle',{class:'ring',cx:x,cy,r:R,fill:'none',stroke:col,'stroke-width':6,style:'transition:stroke-width .15s'},g);
      el('circle',{cx:x,cy,r:R-12,fill:col},g);
      const t=el('text',{x,y:cy+5,'text-anchor':'middle','font-size':13,'font-weight':600,fill:'#fff'},g);t.textContent=String(Math.floor(j.s)).slice(2).padStart(2,'0').replace(/^/,"'");
      // conector y texto
      const ty=up?cy-R-58:cy+R+44;
      el('line',{x1:x,y1:up?cy-R-10:cy+R+10,x2:x,y2:up?ty+26:ty-18,stroke:col,'stroke-width':1.5,'stroke-dasharray':'2 4'},g);
      el('circle',{cx:x,cy:up?cy-R-10:cy+R+10,r:3,fill:col},g);
      const y1=el('text',{x:x-44,y:up?ty-22:ty,'font-size':12,'font-weight':600,fill:col},g);y1.textContent=j.w.split(' – ')[0].replace(/^\w+\. /,'')+(j.now?(document.documentElement.lang==='en'?' – now':' – hoy'):'');
      const t1=el('text',{x:x-44,y:up?ty-4:ty+18,'font-size':13.5,'font-weight':600,fill:cssv('--ink')},g);t1.setAttribute('data-noi18n','');t1.textContent=j.r.length>22?j.r.slice(0,20)+'…':j.r;
      const t2=el('text',{x:x-44,y:up?ty+13:ty+35,'font-size':12,fill:cssv('--ink-2')},g);const org=j.o.split(' · ')[0];t2.textContent=org.length>24?org.slice(0,22)+'…':org;
      bindHit(g,[j],`${j.r}, ${j.o}, ${j.w}`);
    });
  };window.__buildTL();

})();

/* ---- */
(function(){
  /* ---------- Mis garabatos ---------- */
  const G=window.GARABATOS||[];
  const KN={mano:'A mano',cuadro:'Cuadro',digital:'Digital'};
  const PAINT=['#FF5A4E','#F2A900','#2D5BFF','#1F9D68','#6B3FD8','#FF8FB1','#141112','#FDF6E3'];
  function drawArt(c,g,W){
    const H=Math.round(W*g.ar[1]/g.ar[0]);c.width=W;c.height=H;const x=c.getContext('2d');let s=g.s*7+1;const r=()=>(s=(s*9301+49297)%233280)/233280;
    if(g.k==='mano'){x.fillStyle='#FBF8F1';x.fillRect(0,0,W,H);x.strokeStyle='rgba(30,26,24,.75)';x.lineCap='round';
      for(let i=0;i<26;i++){x.lineWidth=.6+r()*1.6;x.beginPath();let px=r()*W,py=r()*H;x.moveTo(px,py);for(let k=0;k<3;k++){x.bezierCurveTo(px+(r()-.5)*W*.5,py+(r()-.5)*H*.5,px+(r()-.5)*W*.5,py+(r()-.5)*H*.5,px=r()*W,py=r()*H)}x.stroke()}
      x.fillStyle='rgba(30,26,24,.08)';for(let i=0;i<5;i++){x.beginPath();x.ellipse(r()*W,r()*H,20+r()*W*.18,14+r()*H*.14,r()*3,0,7);x.fill()}}
    else if(g.k==='cuadro'){x.fillStyle=PAINT[Math.floor(r()*PAINT.length)];x.fillRect(0,0,W,H);
      for(let i=0;i<10;i++){x.fillStyle=PAINT[Math.floor(r()*PAINT.length)];x.globalAlpha=.7+r()*.3;const k=r();
        if(k<.45){x.beginPath();x.arc(r()*W,r()*H,W*(.08+r()*.3),0,7);x.fill()}else{x.save();x.translate(r()*W,r()*H);x.rotate(r()*3);x.fillRect(-W*.3,-H*.05,W*(.5+r()*.4),H*(.08+r()*.12));x.restore()}}
      x.globalAlpha=.06;for(let i=0;i<900;i++){x.fillStyle=r()<.5?'#000':'#fff';x.fillRect(r()*W,r()*H,2,2)}x.globalAlpha=1}
    else{const gr=x.createLinearGradient(0,0,W,H);gr.addColorStop(0,PAINT[Math.floor(r()*5)]);gr.addColorStop(1,PAINT[Math.floor(r()*5)]);x.fillStyle=gr;x.fillRect(0,0,W,H);
      for(let i=0;i<7;i++){x.fillStyle=PAINT[Math.floor(r()*PAINT.length)];x.globalAlpha=.85;x.beginPath();const cx=r()*W,cy=r()*H,R=W*(.05+r()*.2);
        if(r()<.5){x.arc(cx,cy,R,0,7)}else{x.moveTo(cx,cy-R);x.lineTo(cx+R,cy+R);x.lineTo(cx-R,cy+R);x.closePath()}x.fill()}x.globalAlpha=1}
  }
  const box=document.getElementById('garabatos');const items=[];
  G.forEach((g,i)=>{
    const b=document.createElement('button');b.type='button';b.className='g-item k-'+g.k;b.dataset.k=g.k;b.setAttribute('aria-label',`${g.t}, ${KN[g.k]}`);
    const f=document.createElement('span');f.className='g-frame';
    if(g.src){const im=document.createElement('img');im.src=g.src;im.alt=g.t;im.loading='lazy';if(g.ar){im.width=g.ar[0];im.height=g.ar[1]}f.appendChild(im)}else{const c=document.createElement('canvas');drawArt(c,g,500);f.appendChild(c)}
    if(g.video){const bd=document.createElement('span');bd.className='g-badge';bd.textContent='▶ Proceso';f.appendChild(bd)}
    const cap=document.createElement('span');cap.className='g-cap';const t=document.createElement('b');t.textContent=g.t;const k=document.createElement('span');k.textContent=KN[g.k];cap.append(t,k);
    b.append(f,cap);if(g.cr){const c2=document.createElement('span');c2.className='g-cr';c2.textContent=g.cr;b.appendChild(c2)}b.addEventListener('click',()=>open(i));box.appendChild(b);items.push(b);
  });
  const vis=()=>items.map((b,i)=>b.hidden?-1:i).filter(i=>i>=0);
  const count=()=>{document.getElementById('gcount').textContent=vis().length+' piezas'};count();
  document.querySelectorAll('.gk').forEach(b=>b.addEventListener('click',()=>{
    document.querySelectorAll('.gk').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));
    items.forEach(it=>{it.hidden=!(b.dataset.k==='all'||it.dataset.k===b.dataset.k)});count();
    const all=b.dataset.k==='all';show.hidden=!all;box.hidden=all;if(all)play();else stop();
  }));
  /* carrusel de "Todo" */
  const show=document.getElementById('gShow'),stage=document.getElementById('gsStage'),dots=document.getElementById('gsDots');
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  let si=0,timer=null,playing=!reduce;const imgs=[];
  G.forEach((g,i)=>{const im=document.createElement('img');im.alt=g.t;im.decoding='async';if(i<2)im.src=g.src;else im.dataset.src=g.src;stage.appendChild(im);imgs.push(im);
    const d=document.createElement('button');d.type='button';d.setAttribute('aria-label',`Ir a ${g.t}`);d.addEventListener('click',()=>{go(i);restart()});dots.appendChild(d)});
  const badge=document.createElement('span');badge.className='gs-badge';badge.textContent='▶ Proceso';stage.appendChild(badge);
  const load=i=>{const im=imgs[i];if(im&&im.dataset.src){im.src=im.dataset.src;delete im.dataset.src}};
  function go(i){si=(i+G.length)%G.length;load(si);load((si+1)%G.length);
    imgs.forEach((im,j)=>im.classList.toggle('on',j===si));
    [...dots.children].forEach((d,j)=>d.setAttribute('aria-current',String(j===si)));
    const g=G[si];document.getElementById('gsT').textContent=g.t;document.getElementById('gsK').textContent=KN[g.k]+(g.cr?' · estudio':'');
    document.getElementById('gsN').textContent=`${si+1} / ${G.length}`;badge.hidden=!g.video}
  const pb=document.getElementById('gsPlay');
  function play(){stop();if(!playing)return;timer=setInterval(()=>go(si+1),4000)}
  function stop(){clearInterval(timer);timer=null}
  function restart(){if(playing)play()}
  const setBtn=()=>{pb.textContent=playing?'❚❚':'▶';pb.setAttribute('aria-label',playing?'Pausar':'Reproducir')};
  pb.addEventListener('click',()=>{playing=!playing;setBtn();playing?play():stop()});
  document.getElementById('gsPrev').addEventListener('click',()=>{go(si-1);restart()});
  document.getElementById('gsNext').addEventListener('click',()=>{go(si+1);restart()});
  stage.addEventListener('click',()=>{stop();open(si)});
  show.addEventListener('mouseenter',stop);show.addEventListener('mouseleave',()=>{if(!show.hidden&&!document.getElementById('lightbox').open)restart()});
  let tx=null;stage.addEventListener('touchstart',e=>{tx=e.touches[0].clientX},{passive:true});
  stage.addEventListener('touchend',e=>{if(tx===null)return;const dx=e.changedTouches[0].clientX-tx;tx=null;if(Math.abs(dx)>40){e.preventDefault();go(si+(dx<0?1:-1));restart()}});
  document.addEventListener('visibilitychange',()=>{document.hidden?stop():(!show.hidden&&restart())});
  setBtn();go(0);play();
  const lb=document.getElementById('lightbox');let cur=0;const $=id=>document.getElementById(id);
  function open(i){cur=i;const g=G[i],img=$('lbImg');img.innerHTML='';
    if(g.video){const v=document.createElement('video');v.src=g.video;v.poster=g.src;v.muted=true;v.loop=true;v.autoplay=true;v.playsInline=true;v.controls=true;v.setAttribute('aria-label','Video del proceso de '+g.t);img.appendChild(v);v.play().catch(()=>{})}
    else if(g.src){const im=document.createElement('img');im.src=g.src;im.alt=g.t;img.appendChild(im)}else{const c=document.createElement('canvas');drawArt(c,g,1100);img.appendChild(c)}
    $('lbK').textContent=KN[g.k];$('lbT').textContent=g.t;
    const m=$('lbM');m.innerHTML='';[['Técnica',g.tec],['Año',g.y],['Tamaño',g.tam],['Crédito',g.cr]].filter(r=>r[1]).forEach(([k,v])=>{const d=document.createElement('div'),dt=document.createElement('dt'),dd=document.createElement('dd');dt.textContent=k;dd.textContent=v;d.append(dt,dd);m.appendChild(d)});
    $('lbN').textContent=g.note||(g.video?'El video muestra el proceso de coloreado, acelerado 4 veces.':g.ph?'Espacio reservado: aquí irá una de tus piezas.':'');
    const v=vis();$('lbC').textContent=`${v.indexOf(i)+1} / ${v.length}`;
    if(!lb.open)lb.showModal();
  }
  const step=d=>{const v=vis();open(v[(v.indexOf(cur)+d+v.length)%v.length])};
  $('lbP').addEventListener('click',()=>step(-1));$('lbNx').addEventListener('click',()=>step(1));$('lbX').addEventListener('click',()=>lb.close());lb.addEventListener('close',()=>{$('lbImg').innerHTML='';if(!show.hidden){go(cur);restart()}});
  lb.addEventListener('click',e=>{if(e.target===lb)lb.close()});
  lb.addEventListener('keydown',e=>{if(e.key==='ArrowLeft')step(-1);if(e.key==='ArrowRight')step(1)});
})();

/* ---- */
(function(){
  const box=document.getElementById('qBox');if(!box)return;
  const qs=[...document.querySelectorAll('#quotes li')],dots=document.getElementById('qDots');
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;let i=0,t=null;
  qs.forEach((q,j)=>{const d=document.createElement('button');d.type='button';d.setAttribute('aria-label','Frase '+(j+1));d.addEventListener('click',()=>{go(j);restart()});dots.appendChild(d)});
  function go(n){i=(n+qs.length)%qs.length;qs.forEach((q,j)=>q.classList.toggle('on',j===i));[...dots.children].forEach((d,j)=>d.setAttribute('aria-current',String(j===i)))}
  function restart(){clearInterval(t);if(!reduce)t=setInterval(()=>go(i+1),6500)}
  document.getElementById('qPrev').addEventListener('click',()=>{go(i-1);restart()});
  document.getElementById('qNext').addEventListener('click',()=>{go(i+1);restart()});
  box.addEventListener('mouseenter',()=>clearInterval(t));box.addEventListener('mouseleave',restart);
  go(0);restart();
})();

/* ---- */
(function(){const me=document.getElementById('me');if(!me)return;const im=[...me.querySelectorAll('img')],dots=document.getElementById('meDots');
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;let i=0,t=null;
im.forEach((x,j)=>{const d=document.createElement('button');d.type='button';d.setAttribute('aria-label','Foto '+(j+1));d.addEventListener('click',()=>{go(j);restart()});dots.appendChild(d)});
function go(n){i=(n+im.length)%im.length;im.forEach((x,j)=>x.classList.toggle('on',j===i));[...dots.children].forEach((d,j)=>d.setAttribute('aria-current',String(j===i)))}
function restart(){clearInterval(t);if(!reduce)t=setInterval(()=>go(i+1),4500)}
go(0);restart();})();

/* ---- */
(function(){
  const box=document.getElementById('intro');
  const done=()=>{box.classList.add('gone');window.__heroGo&&window.__heroGo()};
  let seen=false;try{seen=sessionStorage.getItem('introVista')==='1'}catch(e){}
  if(matchMedia('(prefers-reduced-motion: reduce)').matches||seen){box.classList.add('gone');return}
  try{sessionStorage.setItem('introVista','1')}catch(e){}
  const c=document.getElementById('introC'),x=c.getContext('2d');
  const COLS=['#1F9D68','#6B3FD8','#FF5A4E','#2D5BFF','#E09B00'];
  const MAIN=[{x:-.23,y:-.16,r:.25},{x:.3,y:-.28,r:.17},{x:.22,y:.27,r:.22},{x:-.28,y:.3,r:.15},{x:.05,y:.04,r:.085}];
  const rng=s=>()=>(s=(s*9301+49297)%233280)/233280;const R0=rng(42);
  const MANY=[];for(let i=0;i<70;i++){const a=R0()*6.283,d=Math.sqrt(R0())*.43;MANY.push({x:Math.cos(a)*d,y:Math.sin(a)*d,r:.012+R0()*.03,c:COLS[i%5],t:R0()})}
  const cl=v=>Math.max(0,Math.min(1,v)),eo=v=>1-Math.pow(1-v,3),eio=v=>v<.5?4*v*v*v:1-Math.pow(-2*v+2,3)/2,pp=(v,a,b)=>cl((v-a)/(b-a));
  const hex2=(hh,a)=>{const n=parseInt(hh.slice(1),16);return `rgba(${n>>16},${n>>8&255},${n&255},${a})`};
  function blob(cx,cy,r,seed,rough=.06,n=80,pr=1){const R=rng(seed);const k=[R()*6.28,R()*6.28,R()*6.28];x.beginPath();const N=Math.max(1,Math.round(n*pr));
    for(let i=0;i<=N;i++){const a=i/n*6.283,w=1+Math.sin(a*3+k[0])*rough+Math.sin(a*7+k[1])*rough*.6+Math.sin(a*13+k[2])*rough*.35;const px=cx+Math.cos(a)*r*w,py=cy+Math.sin(a)*r*w;i?x.lineTo(px,py):x.moveTo(px,py)}if(pr>=1)x.closePath()}
  let W,H;function size(){const d=devicePixelRatio||1;W=innerWidth;H=innerHeight;c.width=W*d;c.height=H*d;x.setTransform(d,0,0,d,0,0)}size();addEventListener('resize',size);
  const css=n=>getComputedStyle(document.documentElement).getPropertyValue(n).trim();
  let T0=null,raf;const END=5.6;
  function frame(now){if(T0===null)T0=now;const s=(now-T0)/1000;
    const bg=css('--bg')||'#F1DEDF';x.globalAlpha=1;x.clearRect(0,0,W,H);
    const zoom=eio(pp(s,4.4,5.4)),fade=pp(s,4.9,5.6);
    x.save();x.globalAlpha=1-fade;
    const base=Math.min(W,H*.78)*.3,R=base*(1+zoom*6),cx=W/2,cy=H*(W<700?.42:.44);
    x.lineJoin='round';x.lineCap='round';
    const dP=cl(s/1.4),bP=cl((s-.8)/1.6),mP=cl((s-2.1)/1.6);
    x.globalAlpha*=eo(cl(dP*1.4));x.fillStyle='#FBF8F1';x.beginPath();x.arc(cx,cy,R*1.12,0,7);x.fill();x.globalAlpha=1-fade;
    MANY.forEach((m,i)=>{const g=eo(pp(mP,m.t*.7,m.t*.7+.3));if(g<=0)return;const px=cx+m.x*R*2,py=cy+m.y*R*2,r=m.r*R*2*g;
      blob(px,py,r,i*7+3,.12,40);x.fillStyle=hex2(m.c,.35);x.fill();x.lineWidth=1.2;x.strokeStyle='#1B1614';x.stroke()});
    MAIN.forEach((o,i)=>{const g=eo(pp(bP,i*.12,i*.12+.55));if(g<=0)return;const col=COLS[i],px=cx+o.x*R*2,py=cy+o.y*R*2,r=o.r*R*2*.93*g*(1+Math.sin(s*2+i)*.015);
      for(let k=0;k<4;k++){blob(px+(k-1.5)*2,py+(k%2)*2,r*(1.05-k*.06),i*29+k*7,.1);x.fillStyle=hex2(col,(.16+k*.05)*g);x.fill()}
      x.strokeStyle='#1B1614';x.lineWidth=1.8;blob(px,py,r*.98,i*29+99,.08,90,g);x.stroke()});
    x.strokeStyle='#1B1614';x.lineWidth=2.6;for(let q=0;q<2;q++){blob(cx,cy,R*1.04*(1+q*.012),3+q*31,.012,120,cl(dP*1.15-q*.15));x.stroke()}
    x.lineWidth=1.5;blob(cx,cy,R*.97,9,.012,120,cl(dP*1.2-.25));x.stroke();
    x.restore();
    // frase
    const f1=eo(pp(s,2.3,3.0)),f2=eo(pp(s,3.0,3.7)),fo=1-pp(s,4.2,4.7);
    const fs=Math.max(30,Math.min(W*.06,64)),ty=cy+base*1.12+fs*1.25;
    x.save();x.textAlign='center';x.textBaseline='middle';x.fillStyle='#1B1614';
    x.font=`700 ${fs}px Caveat, cursive`;x.globalAlpha=f1*fo;x.fillText(__t((window.INTRO_FRASES||[])[0]||''),W/2,ty+(1-f1)*12);
    x.font=`700 ${fs*.62}px Caveat, cursive`;x.fillStyle='#7A5F61';x.globalAlpha=f2*fo;x.fillText(__t((window.INTRO_FRASES||[])[1]||''),W/2,ty+fs*.95+(1-f2)*10);
    x.restore();
    if(s<END)raf=requestAnimationFrame(frame);else done();
  }
  const skip=()=>{cancelAnimationFrame(raf);done()};
  document.getElementById('introSkip').addEventListener('click',skip);
  box.addEventListener('click',e=>{if(e.target.id!=='introSkip'&&T0!==null&&performance.now()-T0>600)skip()});
  addEventListener('keydown',e=>{if(e.key==='Escape'&&!box.classList.contains('gone'))skip()},{once:true});
  (document.fonts?document.fonts.ready:Promise.resolve()).then(()=>{raf=requestAnimationFrame(frame)});
})();

(function(){var a=document.getElementById("anio");if(a)a.textContent=new Date().getFullYear()})();
