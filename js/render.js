/* Llena la página con lo que está en contenido.js y libros.js.
   No necesitas editar este archivo. */
(function(){
  const C=window.CONTENIDO||{}, LIB=window.LIBROS||[];
  const add=window.__addDict||function(){};
  // Texto bilingüe: devuelve el español y registra la traducción
  const L=v=>{if(v==null)return '';if(typeof v==='string'||typeof v==='number')return String(v);if(v.en)add(v.es,v.en);return v.es||''};
  const $=id=>document.getElementById(id);
  const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const set=(id,v)=>{const e=$(id);if(e)e.textContent=L(v)};
  const MES=['ene.','feb.','mar.','abr.','may.','jun.','jul.','ago.','sept.','oct.','nov.','dic.'];
  const fechaCorta=f=>{const [y,m,d]=f.split('-').map(Number);return d?`${d} ${MES[m-1]} ${y}`:`${MES[m-1]} ${y}`};
  const ym=f=>{const [y,m]=f.split('-').map(Number);return y+(m-1)/12};
  const P=C.perfil||{},B=C.libreria||{},T=C.trabajo||{},G=C.garabatos||{},TR=C.tribulat||{},H=C.historias||{};

  /* portada */
  set('cSub',P.subtitulo);
  window.INTRO_FRASES=[L(P.introFrase1),L(P.introFrase2)];

  /* sobre mí */
  set('cSobre',P.sobreMi);
  const facts=$('cDatos');if(facts)facts.innerHTML=(P.datos||[]).map(d=>`<div><b>${esc(L(d.titulo))}</b><span>${esc(L(d.detalle))}</span></div>`).join('');
  const me=$('me');if(me){me.insertAdjacentHTML('afterbegin',(P.fotos||[]).map((f,i)=>`<img src="sobre/${esc(f.archivo)}" alt="${esc(L(f.alt))}" style="object-position:${esc(f.foco||'50% 40%')}"${i===0?' class="on"':''} loading="${i===0?'eager':'lazy'}">`).join(''))}

  /* librería */
  set('cLibIntro',B.intro);
  const fav=LIB.find(b=>b.t===B.ultimoFavorito);const ln=B.leyendoAhora;
  window.LEYENDO=ln?{t:ln.titulo,a:ln.autor,s:0,p:ln.paginas||0,i:(ln.portada||'').replace(/\.jpg$/,''),c:ln.portada?1:0,o:ln.publicado,e:ln.editorial,now:1}:null;
  const stars=n=>'★'.repeat(n);
  const now=$('cAhora');if(now){let h='';
    if(ln)h+=`<button type="button" data-open="now"><img src="covers/${esc(ln.portada)}" alt=""><div><p class="lbl">Leyendo ahora</p><h3>${esc(ln.titulo)}</h3><p>${esc(ln.autor)}</p></div></button>`;
    if(fav)h+=`<button type="button" data-open="${fav.i}"><img src="covers/${fav.i}.jpg" alt=""><div><p class="lbl">Último favorito</p><h3>${esc(fav.t)}</h3><p>${esc(fav.a)} · <span class="stars">${stars(fav.s)}</span></p></div></button>`;
    now.innerHTML=h}
  const fmt=n=>n.toLocaleString('es-CO');
  const st=$('cStats');if(st)st.innerHTML=[['leídos',LIB.length],['páginas',LIB.reduce((a,b)=>a+(b.p||0),0)],['con 5 estrellas',LIB.filter(b=>b.s===5).length],['por leer',B.porLeer||0]].map(([k,v])=>`<div><dt>${k}</dt><dd>${fmt(v)}</dd></div>`).join('');
  const au=$('cAutores');if(au)au.innerHTML=(B.autores||[]).map(a=>`<li>${a.foto?`<img src="autores/${esc(a.foto)}" alt="Foto de ${esc(a.nombre)}" loading="lazy">`:`<span class="ini" aria-hidden="true">${esc(a.nombre.split(' ').map(w=>w[0]).slice(0,2).join(''))}</span>`}<span class="an">${esc(a.nombre)}</span><b>${a.libros} libros</b></li>`).join('');
  const q=$('quotes');if(q)q.innerHTML=(B.frases||[]).map(f=>{const t=`“${f.es}”`;if(f.en)add(t,`“${f.en}”`);return `<li><p>${esc(t)}</p><cite>${esc(f.libro||'')}</cite></li>`}).join('');

  /* trabajo */
  set('cTrabajoIntro',T.intro);
  const hoyY=new Date().getFullYear()+new Date().getMonth()/12;
  const rango=(a,b)=>`${fechaCorta(a)} – ${b==='hoy'?'hoy':fechaCorta(b)}`;
  window.EMPLEOS=(T.empleos||[]).map(j=>({s:ym(j.inicio),e:j.fin==='hoy'?hoyY:ym(j.fin),a:j.area||'lab',now:j.fin==='hoy'?1:0,
    r:L(j.cargo),o:L(j.lugar),w:rango(j.inicio,j.fin),d:L(j.descripcion)}));

  /* garabatos */
  set('cGarIntro',G.intro);set('cGarNota',G.nota);
  window.GARABATOS=(G.obras||[]).map(o=>({k:o.tipo||'digital',t:L(o.titulo),tec:L(o.tecnica),y:o['año']||o.ano||'',tam:L(o['tamaño']||o.tamano||''),
    src:'garabatos/'+o.archivo,video:o.video?'garabatos/'+o.video:null,cr:L(o.credito),note:L(o.nota)}));

  /* tribulat */
  set('cTribuTitulo',TR.titulo);set('cTribuTexto',TR.texto);

  /* historias */
  set('cHistIntro',H.intro);
  const sl=$('cHistorias');if(sl)sl.innerHTML=(H.lista||[]).map(s=>{const res=esc(L(s.resumen));const body=`<h3>${esc(s.titulo)}</h3><p>${res}</p>`;
    return `<li${s.imagen?' class="with-img"':''}><span class="sd">${fechaCorta(s.fecha)}</span>${s.imagen?`<div class="st-img"><img src="medium/${esc(s.imagen)}" alt=""><div>${body}</div></div>`:`<div>${body}</div>`}<a href="${esc(s.enlace)}" target="_blank" rel="noopener">${s.minutos||2} min · Leer en Medium ↗</a></li>`}).join('');
  const hp=$('cHistPerfil');if(hp&&H.perfil)hp.href=H.perfil;

  /* contacto */
  const m=$('mail');if(m&&C.contacto)m.textContent=C.contacto.correo;
})();
