/* Pagine progetto: palette e stile di ciascun progetto */
(function(){
var THEMES={
  martesana:{bg:'#2A1510',bg2:'#38201A',ink:'#F7ECDF',ink2:'#E5D3C2',muted:'#C29F8A',accent:'#E2694C',onacc:'#2A1510',paper:'#F5E9DA',line:'rgba(247,236,223,.14)',
    fh:"'DM Serif Display',Georgia,serif",fhw:400,fb:"'Inter',system-ui,sans-serif",hero:'img03.jpg',
    dots:['#E2694C','#9DB4C9','#A9A06B','#4A2418','#F5E9DA']},
  mono:{bg:'#18121A',bg2:'#241A26',ink:'#FCEFF4',ink2:'#EBD6DF',muted:'#BFA2B1',accent:'#F2A7BE',onacc:'#18121A',paper:'#FCEFF4',line:'rgba(252,239,244,.13)',
    fh:"'Outfit',system-ui,sans-serif",fhw:800,fhls:'-.02em',fb:"'Outfit',system-ui,sans-serif",hs:.78,hero:'img39.jpg',
    dots:['#D9382F','#F2A7BE','#F4D35E','#3AA89A','#9C8CD9','#E5762F']},
  vangogh:{bg:'#071D33',bg2:'#0F2B48',ink:'#F4EDDD',ink2:'#D8DCD6',muted:'#93A9BA',accent:'#C9AB64',onacc:'#071D33',paper:'#F4EDDD',line:'rgba(244,237,221,.13)',
    fh:"'Cormorant Garamond',Georgia,serif",fhw:600,fb:"'Inter',system-ui,sans-serif",hs:1.12,hero:'img05.jpg',
    dots:['#071D33','#1E466C','#587884','#869582','#C9AB64','#B27B1D']},
  storie:{bg:'#F2EADD',bg2:'#E8DCC9',ink:'#3A2A1E',ink2:'#5A4636',muted:'#8B6F4E',accent:'#C45F5E',onacc:'#FFF8EE',paper:'#FBF6EE',line:'rgba(58,42,30,.14)',
    fh:"'EB Garamond',Georgia,serif",fhw:600,fb:"'Inter',system-ui,sans-serif",hs:1.06,hero:'img06.jpg',
    dots:['#CBB89D','#8B6F4E','#D9777A','#A7C4D9']},
  naba:{bg:'#0A0A11',bg2:'#15151F',ink:'#F3F3F8',ink2:'#D2D2DE',muted:'#9A9AB2',accent:'#C5E153',onacc:'#0A0A11',paper:'#F4F4F6',line:'rgba(243,243,248,.13)',
    fh:"'Press Start 2P',monospace",fhw:400,fb:"'Space Mono',monospace",hs:.5,hero:'img07.jpg',
    dots:['#5ACEEE','#C5E153','#E58845','#D95599','#823CB5']},
  incanto:{bg:'#0C1A33',bg2:'#132748',ink:'#F8F1E2',ink2:'#DCD6CB',muted:'#A6B3CB',accent:'#D9B35C',onacc:'#0C1A33',paper:'#F7EFDF',line:'rgba(248,241,226,.13)',
    fh:"'Cinzel',Georgia,serif",fhw:500,fb:"'Inter',system-ui,sans-serif",hs:.82,hero:'img08.jpg',
    dots:['#0C1A33','#2F6DB5','#3E7A4B','#D9B35C','#E79BB5']}
};
// immagini con fondo bianco: vanno su carta colorata, il bianco sparisce
var PAPER={};['img04','img12','img13','img26','img27','img28','img29','img31','img32','img46','img47','img48','img49','img50','img51','img52','img53','img54','img61','img62','img63','img64','img65','img66','img73'].forEach(function(k){PAPER[k+'.jpg']=1;PAPER[k+'.png']=1;});

function L(it,en){return (window.LANG==='en'&&en!=null)?en:it;}
function lab(s){var p=String(s).split(' / ');return p.length>1?(window.LANG==='en'?p[1]:p[0]):s;}
function strip(h){return String(h||'').replace(/^\s*\d+\s*[·.\-–]\s*/,'');}
function fig(src,cap,opt){opt=opt||{};var cls='fr'+(PAPER[src]?' paper':(opt.fill?' fill':''));
  return '<figure class="pj-fig rv"><div class="'+cls+'"><img loading="lazy" decoding="async" src="'+src+'" alt=""></div>'+(cap?'<figcaption class="pj-cap">'+cap+'</figcaption>':'')+'</figure>';}
function cap(c){return c?'<p class="pj-cap">'+c+'</p>':'';}

function media(b,hero){
  var c;
  switch(b.t){
  case 'full': if(b.img===hero)return ''; return fig(b.img,L(b.it,b.en),{fill:1});
  case 'duo':
    c=L(b.it,b.en);
    if(b.a===hero)return fig(b.b,c,{fill:1});
    if(b.b===hero)return fig(b.a,c,{fill:1});
    return '<div class="rv"><div class="pj-row c2">'+fig(b.a,'',{fill:1})+fig(b.b,'',{fill:1})+'</div>'+cap(c)+'</div>';
  case 'grid':
    c=L(b.it,b.en);var cols=b.cols||2;var h='<div class="rv"><div class="pj-row c'+cols+'">';
    b.imgs.forEach(function(im){h+=fig(im,'',{fill:1});});return h+'</div>'+cap(c)+'</div>';
  case 'logoba':
    return '<div class="pj-box rv"><div class="pj-ba"><div><div class="lab">'+L(b.ol_it,b.ol_en)+'</div><img src="'+b.old+'" alt=""></div><div class="arr">→</div><div><div class="lab nw">'+L(b.nl_it,b.nl_en)+'</div><img src="'+b.new+'" alt=""></div></div></div>';
  case 'titleba':
    return '<div class="pj-box rv"><h3>'+L(b.it_h,b.en_h)+'</h3><div class="pj-ba stack"><div><div class="lab">'+L('Prima','Before')+'</div><img src="'+b.old+'" alt=""></div><div><div class="lab nw">'+L('Dopo','After')+'</div><img src="'+b.new+'" alt=""></div></div>'+cap(L(b.it,b.en))+'</div>';
  case 'covergrid':
    var g='<div class="pj-box rv"><h3>'+L(b.it_h,b.en_h)+'</h3><div class="pj-covers">';
    b.items.forEach(function(it){g+='<figure><img loading="lazy" src="'+it.img+'" alt=""><figcaption>'+L(it.it,it.en)+'</figcaption></figure>';});
    return g+'</div>'+cap(L(b.cap_it,b.cap_en))+'</div>';
  case 'specs':
    var s='<div class="pj-box rv"><h3>'+L(b.it_h,b.en_h)+'</h3><div class="pj-spec">';
    b.items.forEach(function(it){s+='<div><div class="k">'+L(it.it_h,it.en_h)+'</div><div class="v">'+L(it.it,it.en)+'</div></div>';});
    return s+'</div></div>';
  case 'palette':
    var p='<div class="pj-box rv"><h3>'+L(b.it_h,b.en_h)+'</h3><div class="pj-pal">';
    b.items.forEach(function(it){p+='<div class="pj-sw"><div class="c" style="background:'+it.hex+'"></div><div class="t"><div class="n">'+it.name+'</div><div class="h">'+it.hex+(it.cmyk?'<br>'+it.cmyk:'')+'</div></div></div>';});
    return p+'</div></div>';
  case 'features':
    var f='<div class="pj-box rv"><h3>'+L(b.it_h,b.en_h)+'</h3><div class="pj-val">';
    b.items.forEach(function(it){f+='<div>'+((window.ICONS||{})[it.icon]||'')+'<div class="t">'+L(it.it_h,it.en_h)+'</div><div class="d">'+L(it.it,it.en)+'</div></div>';});
    return f+'</div></div>';
  }
  return '';
}

var obs=null;
window.renderDetail=function(pid){
  window.CUR=pid;try{CUR=pid;}catch(e){}
  var d=window.DET[pid];if(!d)return;
  var T=THEMES[pid]||THEMES.martesana,el=document.getElementById('detail');
  var vars={'--bg':T.bg,'--bg2':T.bg2,'--ink':T.ink,'--ink2':T.ink2,'--muted':T.muted,'--accent':T.accent,'--onacc':T.onacc,'--paper':T.paper,'--line':T.line,'--fh':T.fh,'--fhw':T.fhw,'--fb':T.fb,'--hs':T.hs||1,'--fhls':T.fhls||'0'};
  for(var k in vars)el.style.setProperty(k,vars[k]);
  var hero=T.hero,meta=null,chapters=[],cur={media:[]};
  d.blocks.forEach(function(b){
    if(b.t==='meta'){meta=b;return;}
    if(b.t==='text'){if(cur.h||cur.media.length)chapters.push(cur);cur={h:L(b.it_h,b.en_h),p:L(b.it,b.en),media:[]};return;}
    cur.media.push(b);
  });
  if(cur.h||cur.media.length)chapters.push(cur);
  var en=window.LANG==='en';
  var h='<div class="pj">';
  // barra
  h+='<div class="pj-bar"><div class="w"><button class="pj-back" id="pjBack">← '+(en?'All work':'Tutti i lavori')+'</button><span class="pj-name">'+d.title+'</span><nav class="pj-chips" id="pjChips">';
  var n=0;chapters.forEach(function(c,i){if(c.h){n++;h+='<a href="#pjc'+i+'" data-i="'+i+'">'+strip(c.h)+'</a>';}});
  h+='</nav><button class="pj-lang" id="pjLang">'+(en?'IT · <b>EN</b>':'<b>IT</b> · EN')+'</button></div><div class="pj-prog" id="pjProg"></div></div>';
  // apertura
  var cats=String(L(d.cat_it,d.cat_en)).split(' · ');
  h+='<header class="pj-hero"><div class="w"><div class="rv"><div class="pj-tags">';
  cats.forEach(function(c,i){h+='<span class="pj-tag'+(i===0?' acc':'')+'">'+c+'</span>';});
  h+='<span class="pj-tag">'+d.year+'</span></div><h1>'+d.title+'</h1><p class="pj-intro">'+L(d.intro_it,d.intro_en)+'</p><div class="pj-dots">';
  T.dots.forEach(function(c){h+='<span style="background:'+c+'"></span>';});
  h+='<small>'+(en?'Project palette':'Palette del progetto')+'</small></div></div><div class="pj-cover rv"><img src="'+hero+'" alt="'+d.title+'"></div></div></header>';
  // scheda
  if(meta){h+='<section class="pj-facts"><div class="w"><div class="grid">';meta.pairs.forEach(function(p){h+='<div class="pj-fact rv"><div class="k">'+lab(p[0])+'</div><div class="v">'+p[1]+'</div></div>';});h+='</div></div></section>';}
  // capitoli
  var num=0;
  chapters.forEach(function(c,i){
    var mh='';c.media.forEach(function(b){mh+=media(b,hero);});
    if(!c.h&&!mh)return;
    h+='<section class="pj-ch'+(c.h?'':' nohead')+'" id="pjc'+i+'"><div class="w">';
    if(c.h){num++;h+='<div class="pj-ch-head rv"><span class="pj-ch-n">'+(num<10?'0':'')+num+'</span><h2>'+strip(c.h)+'</h2></div><div class="pj-ch-text rv"><p>'+c.p+'</p></div>';}
    if(mh)h+='<div class="pj-ch-media">'+mh+'</div>';
    h+='</div></section>';
  });
  // precedente / successivo
  var O=window.ORDER,ix=O.indexOf(pid),pv=O[(ix-1+O.length)%O.length],nx=O[(ix+1)%O.length];
  function th(id){return (THEMES[id]||{}).hero||'';}
  h+='<section class="pj-next"><div class="w"><button class="pj-nx" data-p="'+pv+'"><img src="'+th(pv)+'" alt=""><div><div class="l">← '+(en?'Previous':'Precedente')+'</div><div class="t">'+window.DET[pv].title+'</div></div></button>';
  h+='<button class="pj-nx r" data-p="'+nx+'"><img src="'+th(nx)+'" alt=""><div><div class="l">'+(en?'Next':'Successivo')+' →</div><div class="t">'+window.DET[nx].title+'</div></div></button></div></section>';
  h+='</div>';
  document.getElementById('dinner').innerHTML=h;
  el.scrollTop=0;
  wire(el);
};

function wire(el){
  document.getElementById('pjBack').onclick=function(){window.closeDetail();};
  document.getElementById('pjLang').onclick=function(){window.setLang(window.LANG==='it'?'en':'it');};
  el.querySelectorAll('.pj-nx').forEach(function(b){b.onclick=function(){window.openDetail(b.getAttribute('data-p'));};});
  el.querySelectorAll('.pj-chips a').forEach(function(a){a.onclick=function(e){e.preventDefault();var t=document.getElementById(a.getAttribute('href').slice(1));if(t)el.scrollTo({top:t.offsetTop-63,behavior:'smooth'});};});
  el.querySelectorAll('.pj-fig .fr img,.pj-ba img,.pj-covers img,.pj-cover img').forEach(function(im){im.addEventListener('click',function(){openLB(im.currentSrc||im.src);});});
  if(obs)obs.disconnect();
  obs=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');obs.unobserve(e.target);}});},{root:el,threshold:.08,rootMargin:'0px 0px -6% 0px'});
  el.querySelectorAll('.rv').forEach(function(r){obs.observe(r);});
}

// avanzamento e capitolo attivo
function onScroll(){
  var el=document.getElementById('detail'),pr=document.getElementById('pjProg');if(!pr)return;
  var max=el.scrollHeight-el.clientHeight;pr.style.transform='scaleX('+(max>0?el.scrollTop/max:0)+')';
  var act=null;el.querySelectorAll('.pj-ch[id]').forEach(function(s){if(s.offsetTop-140<=el.scrollTop)act=s.id;});
  el.querySelectorAll('.pj-chips a').forEach(function(a){var on=a.getAttribute('href')==='#'+act;if(on&&!a.classList.contains('on')){a.classList.add('on');var c=a.parentNode;c.scrollTo({left:a.offsetLeft-c.clientWidth/2+a.clientWidth/2,behavior:'smooth'});}else if(!on)a.classList.remove('on');});
}
var lb=document.createElement('div');lb.className='pj-lb';lb.innerHTML='<img alt="">';document.body.appendChild(lb);
function openLB(src){lb.querySelector('img').src=src;lb.classList.add('open');}
lb.onclick=function(){lb.classList.remove('open');};
addEventListener('keydown',function(e){if(e.key==='Escape'&&lb.classList.contains('open')){e.stopImmediatePropagation();lb.classList.remove('open');}},true);
document.getElementById('detail').addEventListener('scroll',onScroll,{passive:true});
})();
