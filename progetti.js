/* Pagine progetto: palette, stile e immagini di ciascun progetto */
(function(){
/* ---------- temi ---------- */
var D=function(bg,ink,ink2,muted,accent,line,bg2){return {bg:bg,ink:ink,ink2:ink2,muted:muted,accent:accent,line:line,bg2:bg2};};
var DARKTXT=function(bg,ink){ink=ink||'#1B120E';return D(bg,ink,ink,ink,ink,'rgba(0,0,0,.18)','rgba(255,255,255,.22)');};
var LIGHTTXT=function(bg,ink){ink=ink||'#FFF7EE';return D(bg,ink,ink,'rgba(255,255,255,.78)',ink,'rgba(255,255,255,.22)','rgba(0,0,0,.14)');};
var THEMES={
  martesana:{bg:'#2A1510',bg2:'#38201A',ink:'#F7ECDF',ink2:'#E5D3C2',muted:'#C29F8A',accent:'#D86654',onacc:'#2A1510',line:'rgba(247,236,223,.14)',
    fh:"'DM Serif Display',Georgia,serif",fhw:400,fb:"'Inter',system-ui,sans-serif",hero:'img03.jpg',c2:'#739AAA',
    dots:['#D86654','#739AAA','#D4B27E','#4A2418'],
    facts:[['#739AAA','#1B120E'],['#D86654','#1B120E'],['#D4B27E','#1B120E'],['#4A2418','#F7ECDF']],
    bands:{acqua:DARKTXT('#739AAA','#1B120E'),terra:DARKTXT('#D86654','#1B120E'),oro:DARKTXT('#D4B27E','#2A1510')},
    chap:[null,'acqua',null,'oro','terra']},
  mono:{bg:'#18121A',bg2:'#241A26',ink:'#FCEFF4',ink2:'#EBD6DF',muted:'#BFA2B1',accent:'#F2A7BE',onacc:'#18121A',line:'rgba(252,239,244,.13)',
    fh:"'Outfit',system-ui,sans-serif",fhw:800,fhls:'-.02em',fb:"'Outfit',system-ui,sans-serif",hs:.7,hero:'img39.jpg',c2:'#F4D35E',
    dots:['#D9382F','#F2A7BE','#F4D35E','#3AA89A','#9C8CD9','#E5762F'],
    facts:[['#F2A7BE','#18121A'],['#F4D35E','#18121A'],['#3AA89A','#0F1A18']],
    bands:{pink:DARKTXT('#F2A7BE','#18121A'),yellow:DARKTXT('#F4D35E','#18121A'),teal:DARKTXT('#3AA89A','#0D1716'),red:LIGHTTXT('#C8352E','#FFF4F2'),lilla:DARKTXT('#9C8CD9','#140F22')},
    chap:[null,'pink',null,null,'teal',null,'red','yellow']},
  vangogh:{bg:'#071D33',bg2:'#0F2B48',ink:'#F4EDDD',ink2:'#D8DCD6',muted:'#93A9BA',accent:'#C9AB64',onacc:'#071D33',paper:'#F4EDDD',line:'rgba(244,237,221,.13)',
    fh:"'Cormorant Garamond',Georgia,serif",fhw:600,fb:"'Inter',system-ui,sans-serif",hs:.98,hero:'img05.jpg',c2:'#B27B1D',
    dots:['#071D33','#1E466C','#587884','#869582','#C9AB64','#B27B1D'],
    facts:[['#1E466C','#F4EDDD'],['#C9AB64','#071D33'],['#587884','#F4EDDD']],
    bands:{oro:DARKTXT('#C9AB64','#071D33'),petrolio:LIGHTTXT('#587884','#F8F3E6'),salvia:DARKTXT('#869582','#08182A'),blu:LIGHTTXT('#1E466C','#F4EDDD')},
    chap:[null,'oro','blu',null,'petrolio']},
  storie:{bg:'#F2EADD',bg2:'#E8DCC9',ink:'#3A2A1E',ink2:'#5A4636',muted:'#8B6F4E',accent:'#B9504F',onacc:'#FFF8EE',line:'rgba(58,42,30,.14)',
    fh:"'EB Garamond',Georgia,serif",fhw:600,fb:"'Inter',system-ui,sans-serif",hs:1.06,hero:'img06.jpg',c2:'#A7C4D9',
    dots:['#CBB89D','#8B6F4E','#D9777A','#A7C4D9'],
    facts:[['#D9777A','#2B1D14'],['#A7C4D9','#2B1D14'],['#8B6F4E','#FFF8EE'],['#CBB89D','#2B1D14']],
    bands:{rosa:DARKTXT('#D9777A','#2B1D14'),celeste:DARKTXT('#A7C4D9','#2B1D14'),marrone:LIGHTTXT('#8B6F4E','#FFF8EE'),beige:DARKTXT('#CBB89D','#2B1D14')},
    chap:[null,'rosa',null,'marrone',null,'celeste',null,'rosa',null,'celeste','marrone']},
  naba:{bg:'#0A0A11',bg2:'#15151F',ink:'#F3F3F8',ink2:'#D2D2DE',muted:'#9A9AB2',accent:'#C5E153',onacc:'#0A0A11',line:'rgba(243,243,248,.13)',
    fh:"'Press Start 2P',monospace",fhw:400,fb:"'Space Mono',monospace",hs:.5,hero:'img07.jpg',c2:'#823CB5',
    dots:['#5ACEEE','#C5E153','#E58845','#D95599','#823CB5'],
    facts:[['#5ACEEE','#0A0A11'],['#C5E153','#0A0A11'],['#E58845','#0A0A11'],['#D95599','#0A0A11']],
    bands:{ciano:DARKTXT('#5ACEEE','#0A0A11'),lime:DARKTXT('#C5E153','#0A0A11'),arancio:DARKTXT('#E58845','#0A0A11'),magenta:DARKTXT('#D95599','#0A0A11'),viola:LIGHTTXT('#823CB5','#FFFFFF')},
    chap:[null,'viola','ciano',null,'lime',null,'magenta',null]},
  incanto:{bg:'#0C1A33',bg2:'#132748',ink:'#F8F1E2',ink2:'#DCD6CB',muted:'#A6B3CB',accent:'#D9B35C',onacc:'#0C1A33',line:'rgba(248,241,226,.13)',
    fh:"'Cinzel',Georgia,serif",fhw:500,fb:"'Inter',system-ui,sans-serif",hs:.82,hero:'img08.jpg',c2:'#E79BB5',
    dots:['#0C1A33','#2F6DB5','#3E7A4B','#D9B35C','#E79BB5'],
    facts:[['#2F6DB5','#FFFFFF'],['#D9B35C','#0C1A33'],['#E79BB5','#0C1A33'],['#3E7A4B','#FFFFFF']],
    bands:{blu:LIGHTTXT('#2F6DB5','#FFFFFF'),rosa:DARKTXT('#E79BB5','#0C1A33'),oro:DARKTXT('#D9B35C','#0C1A33'),verde:LIGHTTXT('#3E7A4B','#FFFFFF')},
    chap:[null,'blu',null,null,'blu','rosa','oro']}
};


var MARQ={martesana:"Panettun de l'Enzo ✶ Milano ✶ Natale 2026 ✶ Martesana dal 1966 ✶ ",
 mono:"a + b ✶ un segno, infinite combinazioni ✶ ab ✶ ",
 vangogh:"Pennellate di emozione ✶ una vita fra i colori ✶ Vincent van Gogh ✶ ",
 storie:"il biscotto che racconta ❦ Storie Sbriciolate ❦ ogni biscotto è un capitolo ❦ ",
 naba:"EVERY PIXEL COUNTS ■ NABA AWARDS 26 ■ PIXEL BY PIXEL ■ ",
 incanto:"Incanto ✦ Thea Stilton ✦ Il Segreto delle Principesse ✦ Le Guardiane dei Sogni ✦ "};
function roman(n){return ['','I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII','XIII'][n]||n;}
function chapNum(pid,n){if(pid==='storie')return (window.LANG==='en'?'Chapter ':'Capitolo ')+roman(n);if(pid==='incanto')return '✦ '+roman(n)+' ✦';return (n<10?'0':'')+n;}
function deco(pid,T){var h='<div class="pj-deco" aria-hidden="true">',i;
 if(pid==='mono'){var sh=[['d','#D9382F',8,12,90],['bar','#F4D35E',84,8,70],['d','#3AA89A',90,62,64,180],['bar','#9C8CD9',4,70,56],['d','#F2A7BE',46,86,48,90],['d','#E5762F',70,30,36,270]];
   sh.forEach(function(s,k){h+='<span class="sh '+s[0]+'" style="background:'+s[1]+';left:'+s[2]+'%;top:'+s[3]+'%;--s:'+s[4]+'px;--r:'+(s[5]||0)+'deg;animation-delay:'+(k*-1.3)+'s"></span>';});}
 else if(pid==='vangogh'){for(i=0;i<26;i++){h+='<span class="st" style="left:'+((i*37)%100)+'%;top:'+((i*53)%100)+'%;--s:'+(3+(i%4)*2)+'px;animation-delay:'+(i*-0.37)+'s"></span>';}}
 else if(pid==='incanto'){for(i=0;i<14;i++){h+='<span class="sp" style="left:'+((i*41+7)%100)+'%;top:'+((i*29+11)%100)+'%;font-size:'+(10+(i%4)*6)+'px;animation-delay:'+(i*-0.5)+'s">✦</span>';}}
 else if(pid==='naba'){var cs=T.dots;for(i=0;i<22;i++){h+='<span class="px" style="left:'+((i*23+5)%100)+'%;top:'+((i*47+13)%100)+'%;background:'+cs[i%cs.length]+';animation-delay:'+(i*-0.31)+'s"></span>';}}
 else if(pid==='martesana'){h+='<span class="word">Milano</span>';}
 else if(pid==='storie'){h+='<span class="word">❦</span>';}
 return h+'</div>';}

/* ---------- immagini ricavate dalle tavole (ritaglio e scontorno nel browser) ---------- */
var W=[255,255,255];
var R={
 m_mood1:{src:'img26.jpg',crop:[496,3,252,341]},m_mood2:{src:'img26.jpg',crop:[765,52,443,217]},m_mood3:{src:'img26.jpg',crop:[26,221,456,258]},
 m_mood4:{src:'img26.jpg',crop:[763,292,253,425]},m_mood5:{src:'img26.jpg',crop:[494,358,253,359]},
 m_pal1:{src:'img27.jpg',crop:[1019,5,256,223]},m_pal2:{src:'img27.jpg',crop:[678,126,320,221]},m_pal3:{src:'img27.jpg',crop:[1026,252,249,368]},m_pal4:{src:'img27.jpg',crop:[716,367,286,348]},
 m_var1:{src:'img29.jpg',crop:[71,176,339,255]},m_var2:{src:'img29.jpg',crop:[426,176,339,255]},m_var3:{src:'img29.jpg',crop:[71,446,279,202]},m_var4:{src:'img29.jpg',crop:[369,446,253,202]},m_var5:{src:'img29.jpg',crop:[641,446,281,202]},
 m_fust:{src:'img28.jpg',crop:[60,60,1240,1163],key:[252,252,244]},
 o_pat:{parts:[{src:'img34.jpg',crop:[0,40,990,910]},{src:'img35.jpg',crop:[8,40,990,910]}]},
 o_col:{src:'img04.jpg',key:W},o_cost:{src:'img31.jpg',key:W},o_pos:{src:'img32.jpg',key:W},
 s_coll:{src:'img58.jpg',crop:[0,0,1300,752]},
 s_pack1:{src:'img60.jpg',crop:[0,0,912,948]},s_pack2:{src:'img60.jpg',crop:[936,0,464,460]},s_pack3:{src:'img60.jpg',crop:[936,520,464,428]},
 s_fust:{src:'img61.jpg',crop:[80,170,1430,845],key:[252,244,236]},s_mecc:{src:'img62.jpg',crop:[20,110,1170,660],key:[252,244,236]},
 s_f1:{src:'img63.jpg',key:W},s_f2:{src:'img64.jpg',key:W},s_f3:{src:'img65.jpg',key:W},s_f4:{src:'img66.jpg',key:W},
 n_face:{src:'img70.jpg',crop:[961,28,355,435]},n_refs:{src:'img70.jpg',crop:[20,495,1356,165]},
 n_cost:{src:'img73.jpg',crop:[250,90,580,610],key:[252,252,252]},
 n_est:{src:'img74.jpg',crop:[36,111,388,182]},n_vis:{src:'img74.jpg',crop:[470,423,251,300]},n_mon:{src:'img74.jpg',crop:[1104,254,215,211]},
 n_icons:{src:'img75.jpg',crop:[89,200,575,486]},
 n_r1:{src:'img78.jpg',crop:[81,541,160,164]},n_r2:{src:'img78.jpg',crop:[294,541,166,164]},n_r3:{src:'img78.jpg',crop:[513,541,155,164]},n_r4:{src:'img78.jpg',crop:[722,541,165,164]},n_r5:{src:'img78.jpg',crop:[940,543,167,160]},
 n_big:{src:'img79.jpg',crop:[69,128,406,640]},n_s1:{src:'img79.jpg',crop:[1164,109,131,267]},n_s2:{src:'img79.jpg',crop:[674,435,118,282]},n_s3:{src:'img79.jpg',crop:[910,459,135,257]},n_s4:{src:'img79.jpg',crop:[1148,457,159,254]},
 n_tov:{src:'img80.jpg',crop:[74,271,652,362]},n_city:{src:'img81.jpg',crop:[80,470,1240,317]},
 i_var:{src:'img12.jpg',key:W},i_mat:{src:'img13.jpg',key:W},i_cart:{src:'img14.jpg',key:[204,196,172]}
};
var CACHE={},LOADS={};
function loadImg(s){if(!LOADS[s])LOADS[s]=new Promise(function(ok,ko){var i=new Image();i.onload=function(){ok(i);};i.onerror=ko;i.src=s;});return LOADS[s];}
function keyOut(cx,w,h,bg){var d=cx.getImageData(0,0,w,h),p=d.data,t0=14,t1=70;
  for(var i=0;i<p.length;i+=4){var dr=Math.abs(p[i]-bg[0]),dg=Math.abs(p[i+1]-bg[1]),db=Math.abs(p[i+2]-bg[2]);var m=dr>dg?dr:dg;if(db>m)m=db;
    var a=(m-t0)/(t1-t0);if(a<=0){p[i+3]=0;continue;}if(a>=1)continue;
    for(var k=0;k<3;k++){var v=(p[i+k]-bg[k]*(1-a))/a;p[i+k]=v<0?0:v>255?255:v;}p[i+3]=a*255;}
  cx.putImageData(d,0,0);}
function make(id){
  if(CACHE[id])return CACHE[id];
  var r=R[id];var parts=r.parts||[{src:r.src,crop:r.crop}];
  CACHE[id]=Promise.all(parts.map(function(p){return loadImg(p.src);})).then(function(ims){
    var cr=parts.map(function(p,i){return p.crop||[0,0,ims[i].naturalWidth,ims[i].naturalHeight];});
    var w=0,h=0;cr.forEach(function(c){w+=c[2];h=Math.max(h,c[3]);});
    var cv=document.createElement('canvas');cv.width=w;cv.height=h;var cx=cv.getContext('2d',{willReadFrequently:!!r.key});
    var x=0;cr.forEach(function(c,i){cx.drawImage(ims[i],c[0],c[1],c[2],c[3],x,0,c[2],c[3]);x+=c[2];});
    if(r.key)keyOut(cx,w,h,r.key);
    return new Promise(function(ok){cv.toBlob(function(b){ok(URL.createObjectURL(b));},r.key?'image/png':'image/jpeg',.92);});
  });
  return CACHE[id];
}
function isR(s){return s&&s.charAt(0)==='@';}
function srcAttr(s){return isR(s)?'data-r="'+s.slice(1)+'" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="':'src="'+s+'"';}
function resolve(root){root.querySelectorAll('img[data-r]').forEach(function(im){var id=im.getAttribute('data-r');make(id).then(function(u){im.src=u;im.removeAttribute('data-r');im.classList.add('ok');}).catch(function(){});});}

/* ---------- riorganizzazione dei contenuti ---------- */
var OVR={
 martesana:function(b){
  if(b.img==='img26.jpg')return [{t:'mosaic',lay:'mood',items:['@m_mood3','@m_mood1','@m_mood2','@m_mood5','@m_mood4'],it:b.it,en:b.en}];
  if(b.img==='img27.jpg')return [{t:'palette',it_h:'La palette del pack',en_h:'The pack palette',items:[
      {name:'Acqua',hex:'#739AAA',cmyk:'Pantone 2163 U · RGB 115 154 170'},{name:'Terra rossa',hex:'#D86654',cmyk:'Pantone 7579 U · RGB 216 102 84'},
      {name:'Oro',hex:'#D4B27E',cmyk:'Pantone 10118 C · RGB 212 178 126'},{name:'Cioccolato',hex:'#4A2418',cmyk:'Variante classica'}]},
    {t:'mosaic',lay:'quad',items:['@m_pal2','@m_pal1','@m_pal4','@m_pal3'],it:'Il richiamo al rebranding Martesana 2022: acqua, terra rossa e oro.',en:'A nod to the 2022 Martesana rebrand: water blue, terracotta red and gold.'}];
  if(b.img==='img28.jpg')return [{t:'cut',src:'@m_fust',it:b.it,en:b.en}];
  if(b.img==='img29.jpg')return [{t:'mosaic',lay:'var',items:['@m_var1','@m_var2','@m_var3','@m_var4','@m_var5'],it:b.it,en:b.en}];
 },
 mono:function(b){
  if(b.t==='duo'&&b.a==='img34.jpg')return [{t:'bleed',src:'@o_pat',it:b.it,en:b.en}];
  if(b.img==='img04.jpg')return [{t:'cut',src:'@o_col',it:b.it,en:b.en}];
  if(b.img==='img31.jpg')return [{t:'cut',src:'@o_cost',it:b.it,en:b.en}];
  if(b.t==='duo'&&b.a==='img32.jpg')return [{t:'posneg',a:'@o_pos',b:'img33.jpg',it:b.it,en:b.en}];
 },
 storie:function(b){
  if(b.img==='img58.jpg')return [{t:'full',img:'@s_coll',it:b.it,en:b.en}];
  if(b.img==='img60.jpg')return [{t:'mosaic',lay:'pack',items:['@s_pack1','@s_pack2','@s_pack3'],it:b.it,en:b.en}];
  if(b.img==='img61.jpg')return [{t:'cut',src:'@s_fust',it:b.it,en:b.en}];
  if(b.img==='img62.jpg')return [{t:'cut',src:'@s_mecc',it:b.it,en:b.en}];
  if(b.t==='grid'&&b.imgs[0]==='img63.jpg')return [{t:'cuts',items:['@s_f1','@s_f2','@s_f3','@s_f4'],it:b.it,en:b.en}];
 },
 naba:function(b){
  if(b.img==='img70.jpg')return [{t:'mosaic',lay:'concept',items:['@n_face','img07.jpg'],it:b.it,en:b.en}];
  if(b.img==='img71.jpg')return [{t:'strip',src:'@n_refs',it:'Riferimenti visivi: pixel art, glitch, data visualization, ritratti e pattern generativi.',en:'Visual references: pixel art, glitch, data visualization, portraits and generative patterns.'}];
  if(b.img==='img72.jpg')return [{t:'palette',it_h:'Palette colore',en_h:'Colour palette',items:[
      {name:'Ciano',hex:'#5ACEEE',cmyk:'RGB 92 207 238 · CMYK 71 0 6 0'},{name:'Lime',hex:'#C5E153',cmyk:'RGB 196 225 82 · CMYK 29 0 100 0'},
      {name:'Arancio',hex:'#E58845',cmyk:'RGB 229 137 69 · CMYK 0 62 100 0'},{name:'Magenta',hex:'#D95599',cmyk:'RGB 217 85 154 · CMYK 0 81 31 0'},
      {name:'Viola',hex:'#823CB5',cmyk:'RGB 111 68 186 · CMYK 64 82 0 0'}]}];
  if(b.t==='duo'&&b.a==='img73.jpg')return [{t:'cut',src:'@n_cost',it:'La costruzione isometrica del logo: moduli a «L» che si incastrano come mattoncini, su griglia.',en:'The isometric construction of the logo: interlocking L-shaped modules, built on a grid.'},
    {t:'trio',items:[['@n_est','Versione estesa','Extended version'],['@n_vis','Versione visual','Visual version'],['@n_mon','Monogramma','Monogram']]}];
  if(b.img==='img75.jpg')return [{t:'cut',src:'@n_icons',it:b.it,en:b.en}];
  if(b.t==='duo'&&b.a==='img78.jpg')return [{t:'mosaic',lay:'n3d',items:['@n_big','@n_s1','@n_s2','@n_s3','@n_s4'],it:b.it,en:b.en},{t:'row',items:['@n_r1','@n_r2','@n_r3','@n_r4','@n_r5'],it:'Le viste del modello 3D.',en:'Views of the 3D model.'}];
  if(b.t==='duo'&&b.a==='img80.jpg')return [{t:'cut',src:'@n_tov',it:'Tone of voice: «Every Pixel Counts», inclusivo, amichevole e informale.',en:'Tone of voice: “Every Pixel Counts”, inclusive, friendly and informal.'},
    {t:'full',img:'@n_city',it:'Milano + Roma: la campagna come rete diffusa sul territorio.',en:'Milan + Rome: the campaign as a network across the territory.'}];
 },
 incanto:function(b){
  if(b.img==='img12.jpg')return [{t:'cut',src:'@i_var',it:b.it,en:b.en}];
  if(b.img==='img13.jpg')return [{t:'cut',src:'@i_mat',it:b.it,en:b.en}];
  if(b.img==='img14.jpg')return [{t:'cut',src:'@i_cart',it:b.it,en:b.en}];
 }
};
// solo le pagine del libro di Van Gogh restano su carta chiara
var PAPER={};['img46','img47','img48','img49','img50','img51','img52','img53','img54'].forEach(function(k){PAPER[k+'.jpg']=1;});

function L(it,en){return (window.LANG==='en'&&en!=null)?en:it;}
function lab(s){var p=String(s).split(' / ');return p.length>1?(window.LANG==='en'?p[1]:p[0]):s;}
function strip(h){return String(h||'').replace(/^\s*\d+\s*[·.\-–]\s*/,'');}
function capH(c){return c?'<p class="pj-cap">'+c+'</p>':'';}
function img(s,cls){return '<img loading="lazy" decoding="async" '+srcAttr(s)+(cls?' class="'+cls+'"':'')+' alt="">';}
function fig(src,c){var cls='fr'+(PAPER[src]?' paper':'');
  return '<figure class="pj-fig rv"><div class="'+cls+'">'+img(src)+'</div>'+(c?'<figcaption class="pj-cap">'+c+'</figcaption>':'')+'</figure>';}

function media(b,hero){
  var c=L(b.it,b.en);
  switch(b.t){
  case 'full': if(b.img===hero)return ''; return fig(b.img,c);
  case 'duo':
    if(b.a===hero)return fig(b.b,c);
    if(b.b===hero)return fig(b.a,c);
    return '<div class="rv"><div class="pj-row c2">'+fig(b.a,'')+fig(b.b,'')+'</div>'+capH(c)+'</div>';
  case 'grid':
    var h='<div class="rv"><div class="pj-row c'+(b.cols||2)+'">';
    b.imgs.forEach(function(im){h+=fig(im,'');});return h+'</div>'+capH(c)+'</div>';
  case 'mosaic':
    var m='<div class="pj-mosaic lay-'+b.lay+'">';
    b.items.forEach(function(s,i){m+='<div class="mi rv" style="transition-delay:'+(i*90)+'ms">'+img(s)+'</div>';});
    return m+'</div>'+capH(c);
  case 'cut': return '<figure class="pj-cut rv">'+img(b.src)+(c?'<figcaption class="pj-cap">'+c+'</figcaption>':'')+'</figure>';
  case 'cuts':
    var k='<div class="pj-cuts">';b.items.forEach(function(s,i){k+='<div class="rv" style="transition-delay:'+(i*90)+'ms">'+img(s)+'</div>';});return k+'</div>'+capH(c);
  case 'bleed': return '<div class="pj-bleed rv">'+img(b.src)+'</div>'+capH(c);
  case 'strip': return '<div class="pj-strip rv">'+img(b.src)+'</div>'+capH(c);
  case 'row':
    var r='<div class="pj-rowimg">';b.items.forEach(function(s,i){r+='<div class="rv" style="transition-delay:'+(i*70)+'ms">'+img(s)+'</div>';});return r+'</div>'+capH(c);
  case 'trio':
    var t='<div class="pj-trio">';b.items.forEach(function(it,i){t+='<figure class="rv" style="transition-delay:'+(i*90)+'ms"><div class="tb">'+img(it[0])+'</div><figcaption>'+L(it[1],it[2])+'</figcaption></figure>';});return t+'</div>';
  case 'posneg':
    return '<div class="pj-posneg rv"><div class="pos">'+img(b.a)+'</div><div class="neg">'+img(b.b)+'</div></div>'+capH(c);
  case 'logoba':
    return '<div class="pj-logoba rv"><div><div class="lab">'+L(b.ol_it,b.ol_en)+'</div>'+img(b.old)+'</div><div class="arr">↓</div><div><div class="lab nw">'+L(b.nl_it,b.nl_en)+'</div>'+img(b.new)+'</div></div>';
  case 'titleba':
    return '<div class="pj-tba rv"><h3>'+L(b.it_h,b.en_h)+'</h3><div class="cols"><figure><figcaption>'+L('Prima','Before')+'</figcaption><div class="ti">'+img(b.old)+'</div></figure><figure><figcaption class="nw">'+L('Dopo','After')+'</figcaption><div class="ti">'+img(b.new)+'</div></figure></div>'+capH(c)+'</div>';
  case 'covergrid':
    var g='<div class="pj-box rv"><h3>'+L(b.it_h,b.en_h)+'</h3><div class="pj-covers">';
    b.items.forEach(function(it){g+='<figure>'+img(it.img)+'<figcaption>'+L(it.it,it.en)+'</figcaption></figure>';});
    return g+'</div>'+capH(L(b.cap_it,b.cap_en))+'</div>';
  case 'specs':
    var s='<div class="pj-box rv"><h3>'+L(b.it_h,b.en_h)+'</h3><div class="pj-spec">';
    b.items.forEach(function(it){s+='<div><div class="k">'+L(it.it_h,it.en_h)+'</div><div class="v">'+L(it.it,it.en)+'</div></div>';});
    return s+'</div></div>';
  case 'palette':
    var p='<div class="pj-palx rv"><h3>'+L(b.it_h,b.en_h)+'</h3><div class="sws">';
    b.items.forEach(function(it,i){var lt=lum(it.hex)<0.42;p+='<div class="sw" style="background:'+it.hex+';color:'+(lt?'#fff':'#111')+'"><div class="n">'+it.name+'</div><div class="h">'+it.hex.toUpperCase()+'</div>'+(it.cmyk?'<div class="x">'+it.cmyk+'</div>':'')+'</div>';});
    return p+'</div></div>';
  case 'features':
    var f='<div class="pj-box rv"><h3>'+L(b.it_h,b.en_h)+'</h3><div class="pj-val">';
    b.items.forEach(function(it){f+='<div>'+((window.ICONS||{})[it.icon]||'')+'<div class="t">'+L(it.it_h,it.en_h)+'</div><div class="d">'+L(it.it,it.en)+'</div></div>';});
    return f+'</div></div>';
  }
  return '';
}
function lum(hex){var n=parseInt(hex.slice(1),16),r=(n>>16&255)/255,g=(n>>8&255)/255,b=(n&255)/255;
  function f(c){return c<=.03928?c/12.92:Math.pow((c+.055)/1.055,2.4);}return .2126*f(r)+.7152*f(g)+.0722*f(b);}
function bandStyle(B){return '--bg:'+B.bg+';--ink:'+B.ink+';--ink2:'+B.ink2+';--muted:'+B.muted+';--accent:'+B.accent+';--line:'+B.line+';--bg2:'+B.bg2+';--onacc:'+B.bg;}

var obs=null;
window.renderDetail=function(pid){
  window.CUR=pid;try{CUR=pid;}catch(e){}
  var d=window.DET[pid];if(!d)return;
  var T=THEMES[pid]||THEMES.martesana,el=document.getElementById('detail');
  var vars={'--bg':T.bg,'--bg2':T.bg2,'--ink':T.ink,'--ink2':T.ink2,'--muted':T.muted,'--accent':T.accent,'--onacc':T.onacc,'--paper':T.paper||T.bg2,'--line':T.line,'--fh':T.fh,'--fhw':T.fhw,'--fb':T.fb,'--hs':T.hs||1,'--fhls':T.fhls||'0','--c2':T.c2};
  for(var k in vars)el.style.setProperty(k,vars[k]);
  var hero=T.hero,meta=null,chapters=[],cur={media:[]},ov=OVR[pid];
  d.blocks.forEach(function(b0){
    if(b0.t==='meta'){meta=b0;return;}
    if(b0.t==='text'){if(cur.h||cur.media.length)chapters.push(cur);cur={h:L(b0.it_h,b0.en_h),p:L(b0.it,b0.en),media:[]};return;}
    var rep=ov&&ov(b0);(rep||[b0]).forEach(function(x){cur.media.push(x);});
  });
  if(cur.h||cur.media.length)chapters.push(cur);
  var en=window.LANG==='en';
  var h='<div class="pj t-'+pid+'">';
  h+='<div class="pj-bar"><div class="w"><button class="pj-back" id="pjBack">← '+(en?'All work':'Tutti i lavori')+'</button><span class="pj-name">'+d.title+'</span><nav class="pj-chips" id="pjChips">';
  chapters.forEach(function(c,i){if(c.h){h+='<a href="#pjc'+i+'">'+strip(c.h)+'</a>';}});
  h+='</nav><button class="pj-lang" id="pjLang">'+(en?'IT · <b>EN</b>':'<b>IT</b> · EN')+'</button></div><div class="pj-prog" id="pjProg"></div></div>';
  var cats=String(L(d.cat_it,d.cat_en)).split(' · ');
  h+='<header class="pj-hero">'+deco(pid,T)+'<div class="w"><div class="rv"><div class="pj-tags">';
  cats.forEach(function(c,i){h+='<span class="pj-tag'+(i===0?' acc':'')+'">'+c+'</span>';});
  h+='<span class="pj-tag">'+d.year+'</span></div><h1>'+d.title+'</h1><p class="pj-intro">'+L(d.intro_it,d.intro_en)+'</p></div><div class="pj-cover rv"><img src="'+hero+'" alt="'+d.title+'"></div></div>';
  h+='<div class="w"><div class="pj-palbar rv">';T.dots.forEach(function(c){h+='<span style="background:'+c+'"></span>';});h+='</div></div></header>';
  var mq=MARQ[pid]||'';h+='<div class="pj-marq" aria-hidden="true"><div class="tr"><span>'+mq+mq+mq+'</span><span>'+mq+mq+mq+'</span></div></div>';
  if(meta){h+='<section class="pj-facts"><div class="w"><div class="grid">';meta.pairs.forEach(function(p,i){var fs=T.facts||[[T.bg2,T.ink]];var fc=fs[i%fs.length];h+='<div class="pj-fact rv" style="background:'+fc[0]+';color:'+fc[1]+';transition-delay:'+(i*80)+'ms"><div class="k">'+lab(p[0])+'</div><div class="v">'+p[1]+'</div></div>';});h+='</div></div></section>';}
  var num=0,hi=0;
  chapters.forEach(function(c,i){
    var mh='';c.media.forEach(function(b){mh+=media(b,hero);});
    if(!c.h&&!mh)return;
    var bk=c.h?(T.chap||[])[hi]:null;if(c.h)hi++;var B=bk&&T.bands[bk];
    h+='<section class="pj-ch'+(c.h?'':' nohead')+(B?' band':'')+'" id="pjc'+i+'"'+(B?' style="'+bandStyle(B)+'"':'')+'><div class="w">';
    if(c.h){num++;h+='<div class="pj-ch-head rv"><span class="pj-ch-n">'+chapNum(pid,num)+'</span><h2>'+strip(c.h)+'</h2></div><div class="pj-ch-text rv"><p>'+c.p+'</p></div>';}
    if(mh)h+='<div class="pj-ch-media">'+mh+'</div>';
    h+='</div></section>';
  });
  var O=window.ORDER,ix=O.indexOf(pid),pv=O[(ix-1+O.length)%O.length],nx=O[(ix+1)%O.length];
  function th(id){return (THEMES[id]||{}).hero||'';}
  h+='<section class="pj-next"><div class="w"><button class="pj-nx" data-p="'+pv+'"><img src="'+th(pv)+'" alt=""><div><div class="l">← '+(en?'Previous':'Precedente')+'</div><div class="t">'+window.DET[pv].title+'</div></div></button>';
  h+='<button class="pj-nx r" data-p="'+nx+'"><img src="'+th(nx)+'" alt=""><div><div class="l">'+(en?'Next':'Successivo')+' →</div><div class="t">'+window.DET[nx].title+'</div></div></button></div></section>';
  h+='</div>';
  var din=document.getElementById('dinner');din.innerHTML=h;
  el.scrollTop=0;
  resolve(din);wire(el);
};

function wire(el){
  document.getElementById('pjBack').onclick=function(){window.closeDetail();};
  document.getElementById('pjLang').onclick=function(){window.setLang(window.LANG==='it'?'en':'it');};
  el.querySelectorAll('.pj-nx').forEach(function(b){b.onclick=function(){window.openDetail(b.getAttribute('data-p'));};});
  el.querySelectorAll('.pj-chips a').forEach(function(a){a.onclick=function(e){e.preventDefault();var t=document.getElementById(a.getAttribute('href').slice(1));if(t)el.scrollTo({top:t.offsetTop-63,behavior:'smooth'});};});
  el.querySelectorAll('.pj-ch img,.pj-cover img').forEach(function(im){im.addEventListener('click',function(){var sec=im.closest('.pj-ch')||el;openLB(im.currentSrc||im.src,getComputedStyle(sec).getPropertyValue('--bg'));});});
  if(obs)obs.disconnect();
  obs=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');obs.unobserve(e.target);}});},{root:el,threshold:.08,rootMargin:'0px 0px -6% 0px'});
  el.querySelectorAll('.rv').forEach(function(r){obs.observe(r);});
}
var RM=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
function onScroll(){
  var el=document.getElementById('detail'),pr=document.getElementById('pjProg');if(!pr)return;
  var max=el.scrollHeight-el.clientHeight;pr.style.transform='scaleX('+(max>0?el.scrollTop/max:0)+')';
  var cv=el.querySelector('.pj-cover img'),dc=el.querySelector('.pj-deco');if(el.scrollTop<1200&&!RM){if(cv)cv.style.transform='translateY('+(el.scrollTop*.06)+'px) scale(1.06)';if(dc)dc.style.transform='translateY('+(el.scrollTop*-.12)+'px)';}
  var act=null;el.querySelectorAll('.pj-ch[id]').forEach(function(s){if(s.offsetTop-140<=el.scrollTop)act=s.id;});
  el.querySelectorAll('.pj-chips a').forEach(function(a){var on=a.getAttribute('href')==='#'+act;if(on&&!a.classList.contains('on')){a.classList.add('on');var c=a.parentNode;c.scrollTo({left:a.offsetLeft-c.clientWidth/2+a.clientWidth/2,behavior:'smooth'});}else if(!on)a.classList.remove('on');});
}
var lb=document.createElement('div');lb.className='pj-lb';lb.innerHTML='<img alt="">';document.body.appendChild(lb);
function openLB(src,bg){lb.querySelector('img').src=src;lb.style.background=bg?bg.trim():'';lb.classList.add('open');}
lb.onclick=function(){lb.classList.remove('open');};
addEventListener('keydown',function(e){if(e.key==='Escape'&&lb.classList.contains('open')){e.stopImmediatePropagation();lb.classList.remove('open');}},true);
document.getElementById('detail').addEventListener('scroll',onScroll,{passive:true});
})();
