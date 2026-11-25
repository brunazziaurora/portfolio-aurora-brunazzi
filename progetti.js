/* Pagine progetto v6: identità di ogni progetto, ordine, immagini originali in alta risoluzione */
(function(){
var AB='M 207.1 285.6 C 207.1 295.3 204 297.7 194.5 296.1 C 183 294.1 172.1 290.7 162 285 C 147 276.5 135.3 264.8 126.8 249.8 C 121.7 240.8 118.7 231.2 116.6 221.2 C 116 218.2 115.8 215.1 115.8 212.1 C 115.7 144 115.7 75.9 115.7 7.9 C 115.7 2.4 117 1.1 122.4 1.2 C 139.9 1.2 155.1 7.7 169 17.7 C 182.9 27.7 193.5 40.5 200 56.3 C 203 63.7 205.9 71.8 206.1 79.7 C 206.7 115.5 206.4 151.3 206.4 187.2 C 206.6 187.2 207.1 252.8 207.1 285.6M 228.7 114.1 C 241.1 114 252.8 115.7 264 120.2 C 278.2 125.9 289.6 135.5 299.5 146.8 C 309.5 158.4 316.2 171.8 318.7 187.3 C 322.1 208.6 319.4 229 309.6 248.3 C 304 259.4 296.1 268.7 286.1 276.4 C 275.8 284.4 264.5 290.2 251.8 293.3 C 245.6 294.8 239.1 295.2 232.7 296.1 C 230 296.5 229.1 294.7 228.7 292.5 C 228.6 291.9 228.7 291.2 228.7 290.6 C 228.7 232.8 228.7 175 228.7 117.2 Z M 228.7 114.1M 93.3 296.1 C 80.9 296.3 69.3 293.9 58.1 289.5 C 46.4 285 36.5 277.8 28 268.8 C 15.3 255.1 5.9 239.5 2.9 220.8 C 0 202.7 2.9 185.2 10.2 168.3 C 14.7 157.6 20.9 148.1 28.9 139.9 C 36.6 131.9 46 125.8 56.3 121.6 C 66.2 117.5 76.7 115.6 87.3 114.1 C 91.1 113.5 93.4 115.5 93.4 119.3 C 93.4 177.3 93.4 235.4 93.4 293.4 C 93.4 294.1 93.4 294.9 93.3 296.1M 3 91.6 C 1.5 74.7 6.4 59.9 14.8 45.8 C 19.6 37.9 25.2 30.8 31.9 24.4 C 43.3 13.7 56.7 6.8 72 3.4 C 77.3 2.3 82.7 1.7 88.2 1.2 C 92.6 0.9 94.1 2.4 94.1 7 C 94.1 12 93.5 17 93.5 22 C 93.4 43.9 93.4 65.8 93.5 87.7 C 93.5 90.2 93.3 91.8 90 91.8 C 61.7 91.7 33.3 91.8 5 91.8 C 4.4 91.8 3.8 91.7 3 91.6';
function abSvg(fill,cls){return '<svg class="'+(cls||'ab')+'" viewBox="0 0 322 298" aria-hidden="true"><path fill="'+fill+'" d="'+AB+'"/></svg>';}

/* ---------- temi ---------- */
var D=function(bg,ink,ink2,muted,accent,line,bg2){return {bg:bg,ink:ink,ink2:ink2,muted:muted,accent:accent,line:line,bg2:bg2};};
var DARKTXT=function(bg,ink,acc){ink=ink||'#1B120E';return D(bg,ink,ink,ink,acc||ink,'rgba(0,0,0,.14)','rgba(0,0,0,.05)');};
var LIGHTTXT=function(bg,ink,acc){ink=ink||'#FFF7EE';return D(bg,ink,ink,'rgba(255,255,255,.8)',acc||ink,'rgba(255,255,255,.22)','rgba(255,255,255,.08)');};
var THEMES={
  martesana:{bg:'#2A1510',bg2:'#38201A',ink:'#F7ECDF',ink2:'#E5D3C2',muted:'#C29F8A',accent:'#D86654',onacc:'#2A1510',line:'rgba(247,236,223,.14)',
    fh:"'DM Serif Display',Georgia,serif",fhw:400,fb:"'Inter',system-ui,sans-serif",hero:'img25.jpg',
    dots:['#D86654','#739AAA','#D4B27E','#4A2418'],deco:['#D4B27E'],
    facts:[['#739AAA','#1B120E'],['#D86654','#1B120E'],['#D4B27E','#1B120E'],['#4A2418','#F7ECDF']],
    bands:{acqua:DARKTXT('#739AAA','#1B120E'),terra:DARKTXT('#D86654','#1B120E'),oro:DARKTXT('#D4B27E','#2A1510')},
    chap:[null,'acqua',null,'oro','terra']},
  mono:{bg:'#18121A',bg2:'#241A26',ink:'#FCEFF4',ink2:'#EBD6DF',muted:'#BFA2B1',accent:'#F2A7BE',onacc:'#18121A',line:'rgba(252,239,244,.13)',
    fh:"'Outfit',system-ui,sans-serif",fhw:800,fhls:'-.02em',fb:"'Outfit',system-ui,sans-serif",hs:.8,hero:'img39.jpg',
    dots:['#D9382F','#F2A7BE','#F4D35E','#3AA89A','#9C8CD9','#E5762F'],deco:['#F2A7BE','#F4D35E','#3AA89A','#9C8CD9','#E5762F','#8CD2EF'],
    facts:[['#F2A7BE','#18121A'],['#F4D35E','#18121A'],['#3AA89A','#0F1A18']],
    bands:{white:DARKTXT('#FFFFFF','#18121A','#C7588A'),teal:DARKTXT('#3AA89A','#0D1716'),red:LIGHTTXT('#C8352E','#FFF4F2'),yellow:DARKTXT('#F4D35E','#18121A')},
    chap:[null,'white',null,'white','teal',null,'red','yellow']},
  vangogh:{bg:'#071D33',bg2:'#0F2B48',ink:'#F4EDDD',ink2:'#D8DCD6',muted:'#93A9BA',accent:'#C9AB64',onacc:'#071D33',paper:'#F4EDDD',line:'rgba(244,237,221,.13)',
    fh:"'Cormorant Garamond',Georgia,serif",fhw:600,fb:"'Inter',system-ui,sans-serif",hs:1,hero:'img05.jpg',
    dots:['#071D33','#1E466C','#587884','#869582','#C9AB64','#B27B1D'],deco:['#F5D98B'],plain:1,
    bands:{oro:DARKTXT('#C9AB64','#071D33'),petrolio:LIGHTTXT('#587884','#F8F3E6'),blu:LIGHTTXT('#1E466C','#F4EDDD')},
    chap:[null,'oro','blu',null,'petrolio']},
  storie:{bg:'#F2EADD',bg2:'#E8DCC9',ink:'#3A2A1E',ink2:'#5A4636',muted:'#8B6F4E',accent:'#B9504F',onacc:'#FFF8EE',line:'rgba(58,42,30,.14)',
    fh:"'EB Garamond',Georgia,serif",fhw:600,fb:"'Inter',system-ui,sans-serif",hs:1.06,hero:'img06.jpg',
    dots:['#CBB89D','#8B6F4E','#D9777A','#A7C4D9'],deco:['#D9777A','#A7C4D9','#CBB89D'],plain:1,
    cards:[['#D9777A','#2B1D14'],['#A7C4D9','#2B1D14'],['#8B6F4E','#FFF8EE'],['#CBB89D','#2B1D14'],['#3A2A1E','#F2EADD']],
    bands:{rosa:DARKTXT('#D9777A','#2B1D14'),celeste:DARKTXT('#A7C4D9','#2B1D14'),marrone:LIGHTTXT('#8B6F4E','#FFF8EE'),white:DARKTXT('#FFFFFF','#3A2A1E','#B9504F')},
    chap:[null,'rosa',null,'marrone',null,'celeste',null,'white',null,'white',null]},
  naba:{bg:'#0A0A11',bg2:'#15151F',ink:'#F3F3F8',ink2:'#D2D2DE',muted:'#9A9AB2',accent:'#C5E153',onacc:'#0A0A11',line:'rgba(243,243,248,.13)',
    fh:"'Press Start 2P',monospace",fhw:400,fb:"'Space Mono',monospace",hs:.5,hero:'img07.jpg',
    dots:['#5ACEEE','#C5E153','#E58845','#D95599','#823CB5'],deco:['#5ACEEE','#C5E153','#E58845','#D95599','#823CB5'],
    facts:[['#5ACEEE','#0A0A11'],['#C5E153','#0A0A11'],['#E58845','#0A0A11'],['#D95599','#0A0A11']],
    bands:{lime:DARKTXT('#C5E153','#0A0A11'),magenta:DARKTXT('#D95599','#0A0A11'),viola:LIGHTTXT('#823CB5','#FFFFFF'),white:DARKTXT('#FFFFFF','#0A0A11','#823CB5')},
    chap:[null,'viola','white',null,'lime',null,'magenta',null]},
  incanto:{bg:'#0C1A33',bg2:'#132748',ink:'#F8F1E2',ink2:'#DCD6CB',muted:'#A6B3CB',accent:'#D9B35C',onacc:'#0C1A33',line:'rgba(248,241,226,.13)',
    fh:"'Cinzel',Georgia,serif",fhw:500,fb:"'Inter',system-ui,sans-serif",hs:.82,hero:'img08.jpg',
    dots:['#2F4A7A','#D9B35C','#F8F1E2'],deco:['#D9B35C'],plain:1,
    bands:{white:DARKTXT('#FFFFFF','#0C1A33','#A8812E')},
    chap:[null,null,null,'white','white',null,null]}
};

var MARQ={martesana:"Panettun de l'Enzo ✶ Milano ✶ Natale 2026 ✶ Martesana dal 1966 ✶ ",
 mono:"a + b ✶ un segno, infinite combinazioni ✶ ab ✶ ",
 vangogh:"Pennellate di emozione ✶ una vita fra i colori ✶ Vincent van Gogh ✶ ",
 storie:"il biscotto che racconta ❦ Storie Sbriciolate ❦ ogni biscotto è un capitolo ❦ ",
 naba:"EVERY PIXEL COUNTS ■ NABA AWARDS 26 ■ PIXEL BY PIXEL ■ ",
 incanto:"Incanto ✦ Tea Stilton ✦ Il Segreto delle Principesse ✦ Le Guardiane dei Sogni ✦ "};
function roman(n){return ['','I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII','XIII'][n]||n;}
function chapNum(pid,n){if(pid==='storie')return (window.LANG==='en'?'Chapter ':'Capitolo ')+roman(n);if(pid==='incanto')return '✦ '+roman(n)+' ✦';return (n<10?'0':'')+n;}

/* animazioni delicate: solo nei margini laterali, mai sopra testi o immagini */
function gut(pid,T,seed,n){var cs=T.deco||[T.accent],h='<div class="pj-gut" aria-hidden="true">',i;
  for(i=0;i<n;i++){var k=seed*7+i,side=i%2?'right':'left',x=(.12+((k*37)%60)/100).toFixed(2),y=((k*53+seed*17)%92+4),c=cs[k%cs.length],dl=(-(k*0.73)%6).toFixed(2);
    var st='style="'+side+':calc(var(--gw) * '+x+');top:'+y+'%;--c:'+c+';animation-delay:'+dl+'s"';
    if(pid==='naba')h+='<span class="px" '+st+'></span>';
    else if(pid==='vangogh')h+='<span class="st" '+st.replace('style="','style="--s:'+(4+(k%3)*2)+'px;')+'></span>';
    else if(pid==='incanto')h+='<span class="sp" '+st.replace('style="','style="font-size:'+(10+(k%3)*5)+'px;')+'>✦</span>';
    else if(pid==='mono')h+='<span class="mg" '+st.replace('style="','style="--s:'+(22+(k%3)*10)+'px;')+'>'+abSvg(c)+'</span>';
    else if(pid==='storie')h+='<span class="fl" '+st.replace('style="','style="font-size:'+(14+(k%3)*4)+'px;')+'>❦</span>';
    else h+='<span class="sp" '+st.replace('style="','style="font-size:'+(9+(k%3)*4)+'px;')+'>✶</span>';}
  return h+'</div>';}

/* ---------- ritagli dalle tavole originali (coordinate sulla vecchia risoluzione, scalate in automatico) ---------- */
var OLDW={'img26.jpg':1280,'img27.jpg':1280,'img29.jpg':1280,'img60.jpg':1400,'img61.jpg':1536,'img73.jpg':1400,'img74.jpg':1400,'img75.jpg':1400,'img78.jpg':1400,'img79.jpg':1400,'img81.jpg':1400};
var W=[255,255,255];
var R={
 m_mood1:{src:'img26.jpg',crop:[496,3,252,341]},m_mood2:{src:'img26.jpg',crop:[765,52,443,217]},m_mood3:{src:'img26.jpg',crop:[26,221,456,258]},
 m_mood4:{src:'img26.jpg',crop:[763,292,253,425]},m_mood5:{src:'img26.jpg',crop:[494,358,253,359]},
 m_pal1:{src:'img27.jpg',crop:[1019,5,256,223]},m_pal2:{src:'img27.jpg',crop:[678,126,320,221]},m_pal3:{src:'img27.jpg',crop:[1026,252,249,368]},m_pal4:{src:'img27.jpg',crop:[716,367,286,348]},
 m_var1:{src:'img29.jpg',crop:[71,176,339,255]},m_var2:{src:'img29.jpg',crop:[426,176,339,255]},m_var3:{src:'img29.jpg',crop:[71,446,279,202]},m_var4:{src:'img29.jpg',crop:[369,446,253,202]},m_var5:{src:'img29.jpg',crop:[641,446,281,202]},
 m_fust:{src:'img28.jpg',crop:[60,60,1240,1163],key:[252,252,244]},
 s_pack1:{src:'img60.jpg',crop:[0,0,912,948]},s_pack2:{src:'img60.jpg',crop:[936,0,464,460]},s_pack3:{src:'img60.jpg',crop:[936,520,464,428]},
 s_fust:{src:'img61.jpg',crop:[80,170,1430,845],key:[252,244,236]},
 s_mecc:{src:'img62.jpg',abs:1,crop:[0,96,1536,926],key:'row'},
 s_p1:{src:'img59.jpg',abs:1,crop:[2,2,594,652]},s_p2:{src:'img59.jpg',abs:1,crop:[601,2,594,652]},s_p3:{src:'img59.jpg',abs:1,crop:[2,658,594,652]},s_p4:{src:'img59.jpg',abs:1,crop:[601,658,594,652]},
 n_face:{src:'img70.jpg',crop:[961,28,355,435]},n_refs:{src:'img70.jpg',crop:[20,495,1356,165]},
 n_cost:{src:'img73.jpg',crop:[250,90,580,610]},
 n_est:{src:'img74.jpg',crop:[36,111,388,182]},n_vis:{src:'img74.jpg',crop:[470,423,251,300]},n_mon:{src:'img74.jpg',crop:[1104,254,215,211]},
 n_icons:{src:'img75.jpg',crop:[89,200,575,486]},
 n_r1:{src:'img78.jpg',crop:[81,541,160,164]},n_r2:{src:'img78.jpg',crop:[294,541,166,164]},n_r3:{src:'img78.jpg',crop:[513,541,155,164]},n_r4:{src:'img78.jpg',crop:[722,541,165,164]},n_r5:{src:'img78.jpg',crop:[940,543,167,160]},
 n_big:{src:'img79.jpg',crop:[69,128,406,640]},n_s1:{src:'img79.jpg',crop:[1164,109,131,267]},n_s2:{src:'img79.jpg',crop:[674,435,118,282]},n_s3:{src:'img79.jpg',crop:[910,459,135,257]},n_s4:{src:'img79.jpg',crop:[1148,457,159,254]},
 n_tov:{src:'img80.jpg',crop:[74,271,652,362]},n_city:{src:'img81.jpg',crop:[80,470,1240,317]}
};
var CACHE={},LOADS={};
function loadImg(s){if(!LOADS[s])LOADS[s]=new Promise(function(ok,ko){var i=new Image();i.onload=function(){ok(i);};i.onerror=ko;i.src=s;});return LOADS[s];}
function keyOut(cx,w,h,key){var d=cx.getImageData(0,0,w,h),p=d.data,t0=14,t1=70,bg=key,row=key==='row';
  for(var i=0;i<p.length;i+=4){if(row&&i%(w*4)===0){var o=i,s0=0,s1=0,s2=0,n=0;for(var q=0;q<12;q++){var a1=o+q*4,a2=o+(w-1-q)*4;s0+=p[a1]+p[a2];s1+=p[a1+1]+p[a2+1];s2+=p[a1+2]+p[a2+2];n+=2;}bg=[s0/n,s1/n,s2/n];}
    var dr=Math.abs(p[i]-bg[0]),dg=Math.abs(p[i+1]-bg[1]),db=Math.abs(p[i+2]-bg[2]);var m=dr>dg?dr:dg;if(db>m)m=db;
    var a=(m-t0)/(t1-t0);if(a<=0){p[i+3]=0;continue;}if(a>=1)continue;
    for(var k=0;k<3;k++){var v=(p[i+k]-bg[k]*(1-a))/a;p[i+k]=v<0?0:v>255?255:v;}p[i+3]=a*255;}
  cx.putImageData(d,0,0);}
function make(id){
  if(CACHE[id])return CACHE[id];
  var r=R[id];
  CACHE[id]=loadImg(r.src).then(function(im){
    var nw=im.naturalWidth,sc=r.abs?1:nw/(OLDW[r.src]||nw);
    var c=(r.crop||[0,0,nw/sc,im.naturalHeight/sc]).map(function(v){return Math.round(v*sc);});
    c[2]=Math.min(c[2],nw-c[0]);c[3]=Math.min(c[3],im.naturalHeight-c[1]);
    var cv=document.createElement('canvas');cv.width=c[2];cv.height=c[3];var cx=cv.getContext('2d',{willReadFrequently:!!r.key});
    cx.drawImage(im,c[0],c[1],c[2],c[3],0,0,c[2],c[3]);
    if(r.key)keyOut(cx,c[2],c[3],r.key);
    return new Promise(function(ok){cv.toBlob(function(b){ok(URL.createObjectURL(b));},r.key?'image/png':'image/jpeg',.93);});
  });
  return CACHE[id];
}
function layoutMos(m){var items=[].slice.call(m.querySelectorAll(':scope>.mi'));var Wd=m.clientWidth;if(!Wd||!items.length)return;
  var g=parseFloat(getComputedStyle(m).columnGap)||12,T=Wd<700?Math.max(150,Wd*.5):Math.max(220,Math.min(380,Wd*.3));
  var ar=items.map(function(it){return parseFloat(it.style.getPropertyValue('--ar'))||1.4;});
  var n=ar.length,best=null,bc=1e18;
  for(var mask=0;mask<(1<<(n-1));mask++){var rs=[],c=[0],cost=0;for(var i=1;i<n;i++){if(mask&(1<<(i-1))){rs.push(c);c=[i];}else c.push(i);}rs.push(c);
    rs.forEach(function(r){var s3=0;r.forEach(function(i){s3+=ar[i];});var h=(Wd-(r.length-1)*g)/s3;cost+=Math.pow(Math.log(h/T),2)*(h>T?1:2.2);});
    if(cost<bc){bc=cost;best=rs;}}
  best.forEach(function(r){var s2=0;r.forEach(function(i){s2+=ar[i];});var h=(Wd-(r.length-1)*g)/s2;if(h>T*1.6)h=T*1.25;
    r.forEach(function(i){items[i].style.width=(ar[i]*h).toFixed(2)+'px';items[i].style.height=h.toFixed(2)+'px';});});}
function justify(root){root.querySelectorAll('.pj-mosaic').forEach(function(m){
  m.querySelectorAll('.mi img').forEach(function(im){im.loading='eager';function set(){if(im.naturalWidth>2&&!im.hasAttribute('data-r')){im.closest('.mi').style.setProperty('--ar',(im.naturalWidth/im.naturalHeight).toFixed(4));layoutMos(m);}}
    im.addEventListener('load',set);if(im.complete)set();});layoutMos(m);});}
window.addEventListener('resize',function(){document.querySelectorAll('.pj-mosaic').forEach(layoutMos);});
function isR(s){return s&&s.charAt(0)==='@';}
function srcAttr(s){return isR(s)?'data-r="'+s.slice(1)+'" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="':'src="'+s+'"';}
function resolve(root){root.querySelectorAll('img[data-r]').forEach(function(im){var id=im.getAttribute('data-r');make(id).then(function(u){im.src=u;im.removeAttribute('data-r');im.classList.add('ok');}).catch(function(){});});}

/* ---------- riorganizzazione dei contenuti ---------- */
var MONOC=['#00A19A','#FFE700','#8CD2EF','#AC2708','#C7588A','#DB6205'];
var OVR={
 martesana:function(b){
  if(b.img==='img26.jpg')return [{t:'mosaic',items:['@m_mood3','@m_mood1','@m_mood2','@m_mood5','@m_mood4'],it:b.it,en:b.en}];
  if(b.img==='img27.jpg')return [{t:'palette',it_h:'La palette del pack',en_h:'The pack palette',items:[
      {name:'Acqua',hex:'#739AAA',cmyk:'Pantone 2163 U · RGB 115 154 170'},{name:'Terra rossa',hex:'#D86654',cmyk:'Pantone 7579 U · RGB 216 102 84'},
      {name:'Oro',hex:'#D4B27E',cmyk:'Pantone 10118 C · RGB 212 178 126'},{name:'Cioccolato',hex:'#4A2418',cmyk:'Variante classica'}]},
    {t:'mosaic',items:['@m_pal2','@m_pal1','@m_pal4','@m_pal3'],it:'Il richiamo al rebranding Martesana 2022: acqua, terra rossa e oro.',en:'A nod to the 2022 Martesana rebrand: water blue, terracotta red and gold.'}];
  if(b.img==='img28.jpg')return [{t:'cut',src:'@m_fust',it:b.it,en:b.en}];
  if(b.img==='img29.jpg')return [{t:'gallery',items:['@m_var1','@m_var2','@m_var3','@m_var4','@m_var5'],it:b.it,en:b.en}];
 },
 mono:function(b){
  if(b.img==='img31.jpg')return [{t:'cut',src:'img31.jpg',it:b.it,en:b.en}];
  if(b.t==='duo'&&b.a==='img32.jpg')return [{t:'posneg',it:b.it,en:b.en}];
  if(b.img==='img04.jpg')return [{t:'colors',it:b.it,en:b.en}];
  if(b.t==='duo'&&b.a==='img34.jpg')return [{t:'patband',src:'pat_light.svg',bg:'#FFFFFF',it:b.it,en:b.en},{t:'patband',src:'pat_dark.svg',bg:'#231F20'}];
  if(b.t==='grid'&&b.imgs[0]==='img36.jpg')return [{t:'mosaic',items:b.imgs,it:b.it,en:b.en}];
 },
 vangogh:function(b){
  if(b.t==='grid'&&b.imgs[0]==='img55.jpg')return [{t:'mosaic',items:b.imgs,it:b.it,en:b.en}];
 },
 storie:function(b){
  if(b.img==='img59.jpg')return [{t:'pats',items:['@s_p1','@s_p2','@s_p3','@s_p4'],it:b.it,en:b.en}];
  if(b.img==='img60.jpg')return [{t:'mosaic',items:['@s_pack1','@s_pack2','@s_pack3'],it:b.it,en:b.en}];
  if(b.img==='img61.jpg')return [{t:'cut',src:'@s_fust',it:b.it,en:b.en}];
  if(b.img==='img62.jpg')return [{t:'cut',src:'@s_mecc',it:b.it,en:b.en}];
  if(b.t==='grid'&&b.imgs[0]==='img63.jpg')return [{t:'cuts',items:b.imgs,it:b.it,en:b.en}];
  if(b.t==='features')return [{t:'features',it_h:b.it_h,en_h:b.en_h,items:b.items,colored:1}];
 },
 naba:function(b){
  if(b.img==='img70.jpg')return [{t:'mosaic',items:['@n_face','img76.jpg'],it:b.it,en:b.en}];
  if(b.img==='img71.jpg')return [{t:'strip',src:'@n_refs',it:'Riferimenti visivi: pixel art, glitch, data visualization, ritratti e pattern generativi.',en:'Visual references: pixel art, glitch, data visualization, portraits and generative patterns.'}];
  if(b.img==='img72.jpg')return [{t:'palette',it_h:'Palette colore',en_h:'Colour palette',items:[
      {name:'Ciano',hex:'#5ACEEE',cmyk:'RGB 92 207 238 · CMYK 71 0 6 0'},{name:'Lime',hex:'#C5E153',cmyk:'RGB 196 225 82 · CMYK 29 0 100 0'},
      {name:'Arancio',hex:'#E58845',cmyk:'RGB 229 137 69 · CMYK 0 62 100 0'},{name:'Magenta',hex:'#D95599',cmyk:'RGB 217 85 154 · CMYK 0 81 31 0'},
      {name:'Viola',hex:'#823CB5',cmyk:'RGB 111 68 186 · CMYK 64 82 0 0'}]}];
  if(b.t==='duo'&&b.a==='img73.jpg')return [{t:'cut',src:'@n_cost',it:'La costruzione isometrica del logo: moduli a «L» che si incastrano come mattoncini, su griglia.',en:'The isometric construction of the logo: interlocking L-shaped modules, built on a grid.'},
    {t:'fb',bg:'#000000',ink:'#F3F3F8',items:[{t:'trio',items:[['@n_est','Versione estesa','Extended version'],['@n_vis','Versione visual','Visual version'],['@n_mon','Monogramma','Monogram']]}]}];
  if(b.img==='img75.jpg')return [{t:'cut',src:'@n_icons',it:b.it,en:b.en}];
  if(b.t==='duo'&&b.a==='img78.jpg')return [{t:'mosaic',items:['@n_big','@n_s1','@n_s2','@n_s3','@n_s4'],it:b.it,en:b.en},{t:'mosaic',items:['@n_r1','@n_r2','@n_r3','@n_r4','@n_r5'],it:'Le viste del modello 3D.',en:'Views of the 3D model.'}];
  if(b.t==='duo'&&b.a==='img80.jpg')return [{t:'cut',src:'@n_tov',it:'Tone of voice: «Every Pixel Counts», inclusivo, amichevole e informale.',en:'Tone of voice: “Every Pixel Counts”, inclusive, friendly and informal.'},
    {t:'full',img:'@n_city',it:'Milano + Roma: la campagna come rete diffusa sul territorio.',en:'Milan + Rome: the campaign as a network across the territory.'}];
 },
 incanto:function(b){
  if(b.img==='img12.jpg')return [{t:'slider',items:[['inc_base.webp','Pietra','Stone','#E9E1D2'],['inc_giallo.webp','Oro','Gold','#D9B35C'],['inc_verde.webp','Verde','Green','#8DBF94'],['inc_viola.webp','Viola','Violet','#C39AD0'],['inc_azzurro.webp','Azzurro','Light blue','#8CC4D8']],it:b.it,en:b.en}];
  if(b.img==='img13.jpg')return [{t:'stack',items:['inc_blu.jpg','inc_marg.webp','inc_rose.webp'],it:b.it,en:b.en}];
  if(b.img==='img14.jpg')return [{t:'stack',items:['cart_guard.webp','cart_segreto.webp'],narrow:1,it:b.it,en:b.en}];
 }
};
var PAPER={};['img46','img47','img48','img49','img50','img51','img52','img53','img54'].forEach(function(k){PAPER[k+'.jpg']=1;});

function L(it,en){return (window.LANG==='en'&&en!=null)?en:it;}
function lab(s){var p=String(s).split(' / ');return p.length>1?(window.LANG==='en'?p[1]:p[0]):s;}
function strip(h){return String(h||'').replace(/^\s*\d+\s*[·.\-–]\s*/,'');}
function capH(c){return c?'<p class="pj-cap">'+c+'</p>':'';}
function img(s,cls){return '<img '+(isR(s)?'':'loading="lazy" ')+'decoding="async" '+srcAttr(s)+(cls?' class="'+cls+'"':'')+' alt="">';}
function fig(src,c){var cls='fr'+(PAPER[src]?' paper':'');
  return '<figure class="pj-fig rv"><div class="'+cls+'">'+img(src)+'</div>'+(c?'<figcaption class="pj-cap">'+c+'</figcaption>':'')+'</figure>';}
function lum(hex){var n=parseInt(hex.slice(1),16),r=(n>>16&255)/255,g=(n>>8&255)/255,b=(n&255)/255;
  function f(c){return c<=.03928?c/12.92:Math.pow((c+.055)/1.055,2.4);}return .2126*f(r)+.7152*f(g)+.0722*f(b);}

function media(b,hero,T){
  var c=L(b.it,b.en);
  switch(b.t){
  case 'full': if(b.img===hero)return ''; return fig(b.img,c);
  case 'duo':
    if(b.a===hero)return fig(b.b,c);
    if(b.b===hero)return fig(b.a,c);
    return '<div class="pj-mosaic">'+['a','b'].map(function(k){return '<div class="mi rv">'+img(b[k])+'</div>';}).join('')+'</div>'+capH(c);
  case 'grid':
    if((b.cols||2)===1){var h1='';b.imgs.forEach(function(im){h1+=fig(im,'');});return h1+capH(c);}
    return '<div class="pj-mosaic">'+b.imgs.map(function(im){return '<div class="mi rv">'+img(im)+'</div>';}).join('')+'</div>'+capH(c);
  case 'mosaic':
    var m='<div class="pj-mosaic">';
    b.items.forEach(function(s,i){m+='<div class="mi rv" style="transition-delay:'+(i*80)+'ms">'+img(s)+'</div>';});
    return m+'</div>'+capH(c);
  case 'cut': return '<figure class="pj-cut rv">'+img(b.src)+(c?'<figcaption class="pj-cap">'+c+'</figcaption>':'')+'</figure>';
  case 'cuts':
    var k='<div class="pj-cuts">';b.items.forEach(function(s,i){k+='<div class="rv" style="transition-delay:'+(i*80)+'ms">'+img(s)+'</div>';});return k+'</div>'+capH(c);
  case 'pats':
    var pt='<div class="pj-pats">';b.items.forEach(function(s,i){pt+='<div class="rv" style="transition-delay:'+(i*80)+'ms">'+img(s)+'</div>';});return pt+'</div>'+capH(c);
  case 'stack':
    var sk='<div class="pj-stack'+(b.narrow?' narrow':'')+'">';b.items.forEach(function(s,i){sk+='<div class="rv" style="transition-delay:'+(i*80)+'ms">'+img(s)+'</div>';});return sk+'</div>'+capH(c);
  case 'gallery':
    var gl='<div class="pj-gal rv"><div class="stage">';
    b.items.forEach(function(x,i){gl+='<div class="sl'+(i?'':' on')+'">'+img(x)+'</div>';});
    gl+='<button class="gb gp" type="button" aria-label="'+L('Precedente','Previous')+'">‹</button><button class="gb gn" type="button" aria-label="'+L('Successiva','Next')+'">›</button></div><div class="thumbs">';
    b.items.forEach(function(x,i){gl+='<button type="button" class="th'+(i?'':' on')+'" data-i="'+i+'">'+img(x)+'</button>';});
    return gl+'</div></div>'+capH(c);
  case 'strip': return '<div class="pj-strip rv">'+img(b.src)+'</div>'+capH(c);
  case 'trio':
    var t='<div class="pj-trio">';b.items.forEach(function(it,i){t+='<figure class="rv" style="transition-delay:'+(i*90)+'ms"><div class="tb">'+img(it[0])+'</div><figcaption>'+L(it[1],it[2])+'</figcaption></figure>';});return t+'</div>';
  case 'fb':
    var inner='';b.items.forEach(function(x){inner+=media(x,hero,T);});
    return '<div class="pj-fbx" style="--bg:'+b.bg+';--ink:'+b.ink+';--muted:'+b.ink+'"><div class="pj-fbx-in">'+inner+'</div></div>';
  case 'posneg':
    return '<div class="pj-fbx pj-posneg"><div class="pos">'+abSvg('#111111')+'</div><div class="neg">'+abSvg('#FFFFFF')+'</div></div>'+capH(c);
  case 'colors':
    var cl='<div class="pj-colors">';MONOC.forEach(function(col,i){cl+='<div class="rv" style="transition-delay:'+(i*70)+'ms">'+abSvg(col)+'<span>'+col+'</span></div>';});return cl+'</div>'+capH(c);
  case 'patband':
    return '<div class="pj-fbx pj-patband" style="background-color:'+b.bg+';background-image:url('+b.src+')" role="img" aria-label="Pattern"></div>'+capH(c);
  case 'slider':
    var sl='<div class="pj-slider rv"><div class="stage">';
    b.items.forEach(function(it,i){sl+='<img src="'+it[0]+'" alt="" style="opacity:'+(i?0:1)+'"'+(i?'':' class="base"')+'>';});
    sl+='</div><div class="ctl"><input type="range" min="0" max="'+(b.items.length-1)+'" step="0.01" value="0" aria-label="'+L('Colore della scritta','Wordmark colour')+'"><div class="names">';
    b.items.forEach(function(it,i){sl+='<button type="button" data-i="'+i+'"><i style="background:'+it[3]+'"></i>'+L(it[1],it[2])+'</button>';});
    return sl+'</div></div></div>'+capH(c);
  case 'logoba':
    return '<div class="pj-logoba rv"><div><div class="lab">'+L(b.ol_it,b.ol_en)+'</div>'+img(b.old)+'</div><div class="arr">↓</div><div><div class="lab nw">'+L(b.nl_it,b.nl_en)+'</div>'+img(b.new)+'</div></div>';
  case 'titleba':
    return '<div class="pj-tba rv"><h3>'+L(b.it_h,b.en_h)+'</h3><div class="cols"><figure><figcaption>'+L('Prima','Before')+'</figcaption>'+img(b.old)+'</figure><figure><figcaption class="nw">'+L('Dopo','After')+'</figcaption>'+img(b.new)+'</figure></div>'+capH(c)+'</div>';
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
    b.items.forEach(function(it){var lt=lum(it.hex)<0.42;p+='<div class="sw" style="background:'+it.hex+';color:'+(lt?'#fff':'#111')+'"><div class="n">'+it.name+'</div><div class="h">'+it.hex.toUpperCase()+'</div>'+(it.cmyk?'<div class="x">'+it.cmyk+'</div>':'')+'</div>';});
    return p+'</div></div>';
  case 'features':
    var f='<div class="pj-feat rv"><h3>'+L(b.it_h,b.en_h)+'</h3><div class="pj-val">';
    b.items.forEach(function(it,i){var cc=(b.colored&&T.cards)?T.cards[i%T.cards.length]:null;
      f+='<div'+(cc?' style="background:'+cc[0]+';color:'+cc[1]+';border-color:transparent;--ic:'+cc[1]+'"':'')+'>'+((window.ICONS||{})[it.icon]||'')+'<div class="t">'+L(it.it_h,it.en_h)+'</div><div class="d">'+L(it.it,it.en)+'</div></div>';});
    return f+'</div></div>';
  }
  return '';
}
function bandStyle(B){return '--bg:'+B.bg+';--ink:'+B.ink+';--ink2:'+B.ink2+';--muted:'+B.muted+';--accent:'+B.accent+';--line:'+B.line+';--bg2:'+B.bg2+';--onacc:'+B.bg;}

var obs=null;
window.renderDetail=function(pid){
  window.CUR=pid;try{CUR=pid;}catch(e){}
  var d=window.DET[pid];if(!d)return;
  var T=THEMES[pid]||THEMES.martesana,el=document.getElementById('detail');
  var vars={'--bg':T.bg,'--bg2':T.bg2,'--ink':T.ink,'--ink2':T.ink2,'--muted':T.muted,'--accent':T.accent,'--onacc':T.onacc,'--paper':T.paper||T.bg2,'--line':T.line,'--fh':T.fh,'--fhw':T.fhw,'--fb':T.fb,'--hs':T.hs||1,'--fhls':T.fhls||'0'};
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
  /* apertura: immagine a tutto schermo con titolo e introduzione sovrapposti */
  var cats=String(L(d.cat_it,d.cat_en)).split(' · ');
  h+='<header class="pj-hero"><div class="pj-hero-bg"><img src="'+hero+'" alt="'+d.title+'"></div><div class="pj-hero-fade"></div>'+gut(pid,T,1,10)+'<div class="w pj-hero-txt"><div class="rv"><div class="pj-tags">';
  cats.forEach(function(c,i){h+='<span class="pj-tag'+(i===0?' acc':'')+'">'+c+'</span>';});
  h+='<span class="pj-tag">'+d.year+'</span></div><h1>'+d.title+'</h1></div><p class="pj-intro rv">'+L(d.intro_it,d.intro_en)+'</p></div><span class="pj-down" aria-hidden="true">↓</span></header>';
  /* scheda del progetto */
  h+='<section class="pj-open">'+gut(pid,T,2,6)+'<div class="w">';
  if(meta){h+='<div class="pj-facts">';meta.pairs.forEach(function(p,i){var fc=(!T.plain&&T.facts)?T.facts[i%T.facts.length]:null;h+='<div class="pj-fact rv'+(fc?' col':'')+'"'+(fc?' style="background:'+fc[0]+';color:'+fc[1]+';transition-delay:'+(i*70)+'ms"':' style="transition-delay:'+(i*70)+'ms"')+'><div class="k">'+lab(p[0])+'</div><div class="v">'+p[1]+'</div></div>';});h+='</div>';}
  h+='<div class="pj-palbar rv">';T.dots.forEach(function(c){h+='<span style="background:'+c+'"></span>';});h+='</div></div></section>';
  var mq=MARQ[pid]||'';h+='<div class="pj-marq" aria-hidden="true"><div class="tr"><span>'+mq+mq+mq+'</span><span>'+mq+mq+mq+'</span></div></div>';
  var num=0,hi=0;
  chapters.forEach(function(c,i){
    var mh='';c.media.forEach(function(b){mh+=media(b,hero,T);});
    if(!c.h&&!mh)return;
    var bk=c.h?(T.chap||[])[hi]:null;if(c.h)hi++;var B=bk&&T.bands[bk];
    h+='<section class="pj-ch'+(c.h?'':' nohead')+(B?' band b-'+bk:'')+'" id="pjc'+i+'"'+(B?' style="'+bandStyle(B)+'"':'')+'>'+gut(pid,T,i+3,6)+'<div class="w">';
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
  resolve(din);justify(din);wire(el);
};

function wire(el){
  document.getElementById('pjBack').onclick=function(){window.closeDetail();};
  document.getElementById('pjLang').onclick=function(){window.setLang(window.LANG==='it'?'en':'it');};
  el.querySelectorAll('.pj-nx').forEach(function(b){b.onclick=function(){window.openDetail(b.getAttribute('data-p'));};});
  el.querySelectorAll('.pj-chips a').forEach(function(a){a.onclick=function(e){e.preventDefault();var t=document.getElementById(a.getAttribute('href').slice(1));if(t)el.scrollTo({top:t.offsetTop-63,behavior:'smooth'});};});
  el.querySelectorAll('.pj-ch img').forEach(function(im){if(im.closest('.pj-slider,.pj-gal'))return;im.addEventListener('click',function(){var sec=im.closest('.pj-ch,.pj-fbx')||el;openLB(im.currentSrc||im.src,getComputedStyle(sec).getPropertyValue('--bg'));});});
  var dn=el.querySelector('.pj-down');if(dn)dn.onclick=function(){var o=el.querySelector('.pj-open');if(o)el.scrollTo({top:o.offsetTop-63,behavior:'smooth'});};
  el.querySelectorAll('.pj-slider').forEach(function(s){var r=s.querySelector('input'),ims=s.querySelectorAll('.stage img'),bs=s.querySelectorAll('.names button');
    function set(v){ims.forEach(function(im,i){im.style.opacity=i===0?1:Math.max(0,Math.min(1,v-i+1));});
      bs.forEach(function(b,i){b.classList.toggle('on',Math.round(v)===i);});}
    r.addEventListener('input',function(){set(+r.value);});
    bs.forEach(function(b){b.onclick=function(){var t=+b.getAttribute('data-i'),f=+r.value,t0=performance.now();
      (function step(n){var k=Math.min(1,(n-t0)/450),e=k<.5?2*k*k:1-Math.pow(-2*k+2,2)/2,v=f+(t-f)*e;r.value=v;set(v);if(k<1)requestAnimationFrame(step);})(t0);};});
    set(0);});
  el.querySelectorAll('.pj-gal').forEach(function(g){var sl=g.querySelectorAll('.sl'),th=g.querySelectorAll('.th'),i=0,tm=null;
    function go(n){i=(n+sl.length)%sl.length;sl.forEach(function(x,k){x.classList.toggle('on',k===i);});th.forEach(function(x,k){x.classList.toggle('on',k===i);});}
    function auto(){clearInterval(tm);tm=setInterval(function(){if(document.getElementById('detail').contains(g))go(i+1);else clearInterval(tm);},3800);}
    g.querySelector('.gp').onclick=function(){go(i-1);auto();};g.querySelector('.gn').onclick=function(){go(i+1);auto();};
    th.forEach(function(t){t.onclick=function(){go(+t.getAttribute('data-i'));auto();};});
    g.addEventListener('mouseenter',function(){clearInterval(tm);});g.addEventListener('mouseleave',auto);
    g.querySelector('.stage').addEventListener('click',function(e){if(e.target.closest('.gb'))return;var im=sl[i].querySelector('img');openLB(im.currentSrc||im.src,getComputedStyle(g.closest('.pj-ch')).getPropertyValue('--bg'));});
    if(!RM)auto();});
  if(obs)obs.disconnect();
  obs=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');obs.unobserve(e.target);}});},{root:el,threshold:.08,rootMargin:'0px 0px -6% 0px'});
  el.querySelectorAll('.rv').forEach(function(r){obs.observe(r);});
}
var RM=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
function onScroll(){
  var el=document.getElementById('detail'),pr=document.getElementById('pjProg');if(!pr)return;
  var max=el.scrollHeight-el.clientHeight;pr.style.transform='scaleX('+(max>0?el.scrollTop/max:0)+')';
  var act=null;el.querySelectorAll('.pj-ch[id]').forEach(function(s){if(s.offsetTop-140<=el.scrollTop)act=s.id;});
  el.querySelectorAll('.pj-chips a').forEach(function(a){var on=a.getAttribute('href')==='#'+act;if(on&&!a.classList.contains('on')){a.classList.add('on');var c=a.parentNode;c.scrollTo({left:a.offsetLeft-c.clientWidth/2+a.clientWidth/2,behavior:'smooth'});}else if(!on)a.classList.remove('on');});
}
var lb=document.createElement('div');lb.className='pj-lb';lb.innerHTML='<img alt="">';document.body.appendChild(lb);
function openLB(src,bg){lb.querySelector('img').src=src;lb.style.background=bg?bg.trim():'';lb.classList.add('open');}
lb.onclick=function(){lb.classList.remove('open');};
addEventListener('keydown',function(e){if(e.key==='Escape'&&lb.classList.contains('open')){e.stopImmediatePropagation();lb.classList.remove('open');}},true);
document.getElementById('detail').addEventListener('scroll',onScroll,{passive:true});
})();
