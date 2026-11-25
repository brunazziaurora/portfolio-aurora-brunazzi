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
    bands:{carta:DARKTXT('#F4EDDD','#071D33','#8A6A22'),oro:DARKTXT('#C9AB64','#071D33'),petrolio:LIGHTTXT('#587884','#F8F3E6'),blu:LIGHTTXT('#1E466C','#F4EDDD')},
    chap:[null,'carta','blu',null,'petrolio']},
  storie:{bg:'#F2EADD',bg2:'#E8DCC9',ink:'#3A2A1E',ink2:'#5A4636',muted:'#8B6F4E',accent:'#B9504F',onacc:'#FFF8EE',line:'rgba(58,42,30,.14)',
    fh:"'EB Garamond',Georgia,serif",fhw:600,fb:"'Inter',system-ui,sans-serif",hs:1.06,hero:'img06.jpg',
    dots:['#CBB89D','#8B6F4E','#D9777A','#A7C4D9'],deco:['#D9777A','#A7C4D9','#CBB89D'],plain:1,
    cards:[['#D9777A','#2B1D14'],['#A7C4D9','#2B1D14'],['#8B6F4E','#FFF8EE'],['#CBB89D','#2B1D14'],['#3A2A1E','#F2EADD']],
    bands:{rosa:DARKTXT('#D9777A','#2B1D14'),celeste:DARKTXT('#A7C4D9','#2B1D14'),marrone:LIGHTTXT('#8B6F4E','#FFF8EE'),white:DARKTXT('#FFFFFF','#3A2A1E','#B9504F')},
    chap:[null,'rosa',null,'white',null,'celeste',null,'white',null,'white',null]},
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
var NICONS=[["camera",13,9,"#da5896","M2 0h1v1h-1zM5 0h4v1h-4zM10 0h1v1h-1zM1 1h4v1h-4zM9 1h3v1h-3zM0 2h1v1h-1zM12 2h1v1h-1zM0 3h1v1h-1zM3 3h1v1h-1zM6 3h2v1h-2zM12 3h1v1h-1zM0 4h1v1h-1zM2 4h1v1h-1zM5 4h1v1h-1zM8 4h1v1h-1zM12 4h1v1h-1zM0 5h1v1h-1zM5 5h1v1h-1zM8 5h1v1h-1zM12 5h1v1h-1zM0 6h1v1h-1zM6 6h2v1h-2zM12 6h1v1h-1zM0 7h1v1h-1zM12 7h1v1h-1zM1 8h11v1h-11z"],["invader",28,25,"#e58845","M6 0h2v1h-2zM20 0h2v1h-2zM5 1h1v1h-1zM8 1h1v1h-1zM19 1h1v1h-1zM22 1h1v1h-1zM5 2h1v1h-1zM8 2h1v1h-1zM19 2h1v1h-1zM22 2h1v1h-1zM6 3h2v1h-2zM20 3h2v1h-2zM7 4h2v1h-2zM19 4h2v1h-2zM6 5h1v1h-1zM9 5h1v1h-1zM18 5h1v1h-1zM21 5h1v1h-1zM6 6h1v1h-1zM9 6h1v1h-1zM18 6h1v1h-1zM21 6h1v1h-1zM6 7h1v1h-1zM10 7h8v1h-8zM21 7h1v1h-1zM5 8h1v1h-1zM22 8h1v1h-1zM5 9h1v1h-1zM22 9h1v1h-1zM4 10h1v1h-1zM9 10h1v1h-1zM18 10h1v1h-1zM23 10h1v1h-1zM3 11h1v1h-1zM9 11h1v1h-1zM18 11h1v1h-1zM24 11h1v1h-1zM3 12h1v1h-1zM9 12h1v1h-1zM18 12h1v1h-1zM24 12h1v1h-1zM1 13h2v1h-2zM9 13h1v1h-1zM18 13h1v1h-1zM25 13h2v1h-2zM0 14h1v1h-1zM27 14h1v1h-1zM0 15h1v1h-1zM4 15h1v1h-1zM23 15h1v1h-1zM27 15h1v1h-1zM0 16h1v1h-1zM3 16h1v1h-1zM5 16h1v1h-1zM22 16h1v1h-1zM24 16h1v1h-1zM27 16h1v1h-1zM0 17h1v1h-1zM3 17h1v1h-1zM5 17h1v1h-1zM22 17h1v1h-1zM24 17h1v1h-1zM27 17h1v1h-1zM0 18h1v1h-1zM3 18h1v1h-1zM5 18h1v1h-1zM9 18h10v1h-10zM22 18h1v1h-1zM24 18h1v1h-1zM27 18h1v1h-1zM0 19h1v1h-1zM3 19h1v1h-1zM5 19h1v1h-1zM8 19h1v1h-1zM19 19h1v1h-1zM22 19h1v1h-1zM24 19h1v1h-1zM27 19h1v1h-1zM0 20h1v1h-1zM3 20h1v1h-1zM5 20h1v1h-1zM8 20h1v1h-1zM19 20h1v1h-1zM22 20h1v1h-1zM24 20h1v1h-1zM27 20h1v1h-1zM1 21h2v1h-2zM6 21h6v1h-6zM16 21h6v1h-6zM25 21h2v1h-2zM8 22h1v1h-1zM12 22h1v1h-1zM15 22h1v1h-1zM19 22h1v1h-1zM8 23h1v1h-1zM12 23h1v1h-1zM15 23h1v1h-1zM19 23h1v1h-1zM9 24h3v1h-3zM16 24h3v1h-3z"],["cursor",64,62,"#e58845","M29 0h5v1h-5zM29 1h5v1h-5zM29 2h5v1h-5zM29 3h5v1h-5zM15 4h4v1h-4zM29 4h5v1h-5zM44 4h5v1h-5zM15 5h4v1h-4zM29 5h5v1h-5zM44 5h5v1h-5zM15 6h4v1h-4zM29 6h5v1h-5zM44 6h5v1h-5zM15 7h4v1h-4zM29 7h5v1h-5zM44 7h5v1h-5zM18 8h5v1h-5zM29 8h5v1h-5zM41 8h4v1h-4zM19 9h4v1h-4zM29 9h5v1h-5zM41 9h4v1h-4zM19 10h4v1h-4zM29 10h5v1h-5zM41 10h4v1h-4zM19 11h4v1h-4zM29 11h5v1h-5zM41 11h4v1h-4zM21 12h6v1h-6zM29 12h5v1h-5zM37 12h5v1h-5zM22 13h5v1h-5zM37 13h5v1h-5zM22 14h5v1h-5zM37 14h5v1h-5zM22 15h5v1h-5zM37 15h5v1h-5zM57 15h2v1h-2zM4 16h4v1h-4zM56 16h5v1h-5zM4 17h4v1h-4zM56 17h5v1h-5zM4 18h4v1h-4zM56 18h5v1h-5zM0 19h8v1h-8zM10 19h13v1h-13zM28 19h6v1h-6zM41 19h12v1h-12zM57 19h6v1h-6zM0 20h4v1h-4zM10 20h13v1h-13zM28 20h6v1h-6zM41 20h12v1h-12zM60 20h4v1h-4zM0 21h4v1h-4zM10 21h13v1h-13zM28 21h6v1h-6zM41 21h12v1h-12zM60 21h4v1h-4zM0 22h4v1h-4zM10 22h13v1h-13zM28 22h6v1h-6zM41 22h12v1h-12zM60 22h4v1h-4zM3 23h5v1h-5zM10 23h13v1h-13zM24 23h12v1h-12zM41 23h12v1h-12zM56 23h8v1h-8zM4 24h4v1h-4zM24 24h4v1h-4zM31 24h5v1h-5zM56 24h5v1h-5zM4 25h4v1h-4zM24 25h4v1h-4zM31 25h5v1h-5zM56 25h5v1h-5zM4 26h4v1h-4zM24 26h4v1h-4zM31 26h5v1h-5zM56 26h5v1h-5zM20 27h5v1h-5zM31 27h5v1h-5zM37 27h5v1h-5zM20 28h5v1h-5zM31 28h5v1h-5zM37 28h5v1h-5zM20 29h5v1h-5zM31 29h5v1h-5zM37 29h5v1h-5zM20 30h5v1h-5zM31 30h5v1h-5zM37 30h5v1h-5zM17 31h5v1h-5zM31 31h5v1h-5zM40 31h5v1h-5zM17 32h5v1h-5zM31 32h5v1h-5zM41 32h4v1h-4zM17 33h5v1h-5zM31 33h5v1h-5zM41 33h4v1h-4zM14 34h7v1h-7zM31 34h5v1h-5zM41 34h4v1h-4zM13 35h4v1h-4zM31 35h5v1h-5zM44 35h5v1h-5zM13 36h4v1h-4zM31 36h5v1h-5zM44 36h5v1h-5zM13 37h4v1h-4zM31 37h5v1h-5zM44 37h5v1h-5zM9 38h8v1h-8zM31 38h5v1h-5zM44 38h5v1h-5zM9 39h5v1h-5zM31 39h5v1h-5zM9 40h5v1h-5zM31 40h5v1h-5zM9 41h5v1h-5zM31 41h5v1h-5zM5 42h5v1h-5zM31 42h5v1h-5zM5 43h5v1h-5zM31 43h5v1h-5zM5 44h5v1h-5zM31 44h5v1h-5zM5 45h5v1h-5zM18 45h6v1h-6zM31 45h5v1h-5zM5 46h20v1h-20zM31 46h5v1h-5zM5 47h20v1h-20zM31 47h5v1h-5zM5 48h20v1h-20zM31 48h5v1h-5zM5 49h23v1h-23zM31 49h5v1h-5zM16 50h13v1h-13zM31 50h5v1h-5zM16 51h13v1h-13zM31 51h5v1h-5zM16 52h13v1h-13zM31 52h5v1h-5zM15 53h21v1h-21zM12 54h9v1h-9zM27 54h9v1h-9zM12 55h9v1h-9zM27 55h9v1h-9zM12 56h9v1h-9zM27 56h9v1h-9zM12 57h9v1h-9zM28 57h8v1h-8zM12 58h6v1h-6zM31 58h5v1h-5zM12 59h5v1h-5zM31 59h5v1h-5zM12 60h5v1h-5zM31 60h5v1h-5zM12 61h5v1h-5zM32 61h3v1h-3z"],["hand",61,68,"#c5e153","M29 0h4v1h-4zM29 1h4v1h-4zM29 2h4v1h-4zM29 3h4v1h-4zM15 4h4v1h-4zM29 4h4v1h-4zM43 4h4v1h-4zM15 5h4v1h-4zM29 5h4v1h-4zM43 5h4v1h-4zM15 6h4v1h-4zM29 6h4v1h-4zM43 6h4v1h-4zM15 7h7v1h-7zM29 7h4v1h-4zM39 7h8v1h-8zM18 8h4v1h-4zM29 8h4v1h-4zM39 8h5v1h-5zM18 9h4v1h-4zM29 9h4v1h-4zM39 9h5v1h-5zM18 10h4v1h-4zM29 10h4v1h-4zM39 10h5v1h-5zM21 11h5v1h-5zM36 11h4v1h-4zM21 12h5v1h-5zM36 12h4v1h-4zM21 13h5v1h-5zM36 13h4v1h-4zM4 14h4v1h-4zM21 14h5v1h-5zM36 14h4v1h-4zM53 14h4v1h-4zM4 15h4v1h-4zM28 15h5v1h-5zM53 15h4v1h-4zM4 16h4v1h-4zM28 16h5v1h-5zM53 16h4v1h-4zM3 17h5v1h-5zM28 17h5v1h-5zM53 17h5v1h-5zM0 18h8v1h-8zM11 18h11v1h-11zM25 18h11v1h-11zM39 18h12v1h-12zM54 18h7v1h-7zM0 19h4v1h-4zM11 19h11v1h-11zM25 19h4v1h-4zM32 19h4v1h-4zM39 19h12v1h-12zM57 19h4v1h-4zM0 20h4v1h-4zM11 20h11v1h-11zM25 20h4v1h-4zM32 20h4v1h-4zM39 20h12v1h-12zM57 20h4v1h-4zM0 21h8v1h-8zM11 21h11v1h-11zM25 21h4v1h-4zM32 21h4v1h-4zM39 21h12v1h-12zM53 21h8v1h-8zM4 22h4v1h-4zM25 22h4v1h-4zM32 22h4v1h-4zM53 22h5v1h-5zM4 23h4v1h-4zM25 23h4v1h-4zM32 23h4v1h-4zM53 23h4v1h-4zM4 24h4v1h-4zM25 24h4v1h-4zM32 24h4v1h-4zM53 24h4v1h-4zM4 25h4v1h-4zM25 25h4v1h-4zM32 25h4v1h-4zM53 25h4v1h-4zM25 26h4v1h-4zM32 26h4v1h-4zM25 27h4v1h-4zM32 27h4v1h-4zM25 28h4v1h-4zM32 28h4v1h-4zM25 29h4v1h-4zM32 29h4v1h-4zM25 30h4v1h-4zM32 30h4v1h-4zM25 31h4v1h-4zM32 31h4v1h-4zM25 32h4v1h-4zM32 32h22v1h-22zM25 33h4v1h-4zM32 33h22v1h-22zM25 34h4v1h-4zM32 34h22v1h-22zM25 35h4v1h-4zM32 35h22v1h-22zM25 36h4v1h-4zM32 36h4v1h-4zM39 36h4v1h-4zM46 36h4v1h-4zM53 36h4v1h-4zM25 37h4v1h-4zM32 37h4v1h-4zM39 37h4v1h-4zM46 37h4v1h-4zM53 37h4v1h-4zM25 38h4v1h-4zM32 38h4v1h-4zM39 38h4v1h-4zM46 38h4v1h-4zM53 38h4v1h-4zM7 39h12v1h-12zM25 39h4v1h-4zM32 39h4v1h-4zM39 39h4v1h-4zM46 39h4v1h-4zM53 39h4v1h-4zM7 40h12v1h-12zM25 40h4v1h-4zM32 40h4v1h-4zM39 40h4v1h-4zM46 40h4v1h-4zM53 40h4v1h-4zM7 41h12v1h-12zM25 41h4v1h-4zM32 41h4v1h-4zM39 41h4v1h-4zM46 41h4v1h-4zM53 41h4v1h-4zM7 42h15v1h-15zM25 42h4v1h-4zM32 42h4v1h-4zM39 42h4v1h-4zM46 42h4v1h-4zM53 42h4v1h-4zM7 43h5v1h-5zM18 43h4v1h-4zM25 43h4v1h-4zM53 43h4v1h-4zM7 44h5v1h-5zM18 44h4v1h-4zM25 44h4v1h-4zM53 44h4v1h-4zM7 45h5v1h-5zM18 45h4v1h-4zM25 45h4v1h-4zM53 45h4v1h-4zM8 46h7v1h-7zM18 46h11v1h-11zM53 46h4v1h-4zM11 47h4v1h-4zM21 47h8v1h-8zM53 47h4v1h-4zM11 48h4v1h-4zM21 48h8v1h-8zM53 48h4v1h-4zM11 49h4v1h-4zM21 49h8v1h-8zM53 49h4v1h-4zM11 50h4v1h-4zM53 50h4v1h-4zM11 51h4v1h-4zM53 51h4v1h-4zM11 52h4v1h-4zM53 52h4v1h-4zM11 53h11v1h-11zM53 53h4v1h-4zM14 54h8v1h-8zM53 54h4v1h-4zM14 55h8v1h-8zM53 55h4v1h-4zM14 56h8v1h-8zM53 56h4v1h-4zM18 57h4v1h-4zM53 57h4v1h-4zM18 58h4v1h-4zM53 58h4v1h-4zM18 59h4v1h-4zM53 59h4v1h-4zM21 60h4v1h-4zM53 60h4v1h-4zM21 61h4v1h-4zM53 61h4v1h-4zM21 62h5v1h-5zM53 62h4v1h-4zM21 63h33v1h-33zM25 64h29v1h-29zM25 65h29v1h-29zM25 66h29v1h-29zM25 67h29v1h-29z"],["mushroom",15,15,"#6e44ba","M5 0h5v1h-5zM3 1h2v1h-2zM6 1h6v1h-6zM2 2h2v1h-2zM7 2h4v1h-4zM12 2h1v1h-1zM1 3h4v1h-4zM6 3h4v1h-4zM13 3h1v1h-1zM1 4h2v1h-2zM4 4h4v1h-4zM9 4h2v1h-2zM12 4h2v1h-2zM0 5h2v1h-2zM5 5h2v1h-2zM10 5h5v1h-5zM0 6h3v1h-3zM4 6h4v1h-4zM9 6h4v1h-4zM14 6h1v1h-1zM0 7h12v1h-12zM14 7h1v1h-1zM0 8h13v1h-13zM14 8h1v1h-1zM0 9h1v1h-1zM2 9h2v1h-2zM11 9h4v1h-4zM1 10h2v1h-2zM5 10h2v1h-2zM8 10h2v1h-2zM12 10h2v1h-2zM2 11h1v1h-1zM6 11h1v1h-1zM9 11h1v1h-1zM12 11h1v1h-1zM2 12h1v1h-1zM12 12h1v1h-1zM3 13h1v1h-1zM11 13h1v1h-1zM4 14h7v1h-7z"],["star",16,17,"#6e44ba","M7 0h2v1h-2zM6 1h1v1h-1zM9 1h1v1h-1zM6 2h1v1h-1zM9 2h1v1h-1zM5 3h1v1h-1zM10 3h1v1h-1zM5 4h1v1h-1zM10 4h1v1h-1zM0 5h5v1h-5zM11 5h5v1h-5zM0 6h1v1h-1zM7 6h1v1h-1zM15 6h1v1h-1zM1 7h1v1h-1zM6 7h1v1h-1zM14 7h1v1h-1zM2 8h1v1h-1zM6 8h1v1h-1zM13 8h1v1h-1zM3 9h1v1h-1zM12 9h1v1h-1zM3 10h1v1h-1zM12 10h1v1h-1zM2 11h1v1h-1zM13 11h1v1h-1zM2 12h1v1h-1zM13 12h1v1h-1zM2 13h1v1h-1zM7 13h2v1h-2zM13 13h1v1h-1zM1 14h1v1h-1zM5 14h2v1h-2zM9 14h2v1h-2zM14 14h1v1h-1zM1 15h1v1h-1zM4 15h1v1h-1zM11 15h1v1h-1zM14 15h1v1h-1zM2 16h2v1h-2zM12 16h2v1h-2z"],["lightning",64,77,"#d95599","M9 0h24v1h-24zM9 1h24v1h-24zM9 2h24v1h-24zM6 3h3v1h-3zM33 3h3v1h-3zM6 4h3v1h-3zM33 4h3v1h-3zM6 5h3v1h-3zM33 5h3v1h-3zM6 6h3v1h-3zM33 6h3v1h-3zM6 7h3v1h-3zM33 7h3v1h-3zM6 8h3v1h-3zM33 8h3v1h-3zM6 9h3v1h-3zM30 9h3v1h-3zM6 10h3v1h-3zM30 10h3v1h-3zM6 11h3v1h-3zM30 11h3v1h-3zM3 12h3v1h-3zM30 12h3v1h-3zM3 13h3v1h-3zM30 13h3v1h-3zM3 14h3v1h-3zM30 14h3v1h-3zM3 15h3v1h-3zM27 15h3v1h-3zM3 16h3v1h-3zM27 16h3v1h-3zM3 17h3v1h-3zM27 17h3v1h-3zM3 18h3v1h-3zM27 18h3v1h-3zM3 19h3v1h-3zM27 19h3v1h-3zM3 20h3v1h-3zM27 20h3v1h-3zM0 21h3v1h-3zM24 21h3v1h-3zM0 22h3v1h-3zM24 22h3v1h-3zM0 23h3v1h-3zM24 23h3v1h-3zM0 24h3v1h-3zM27 24h18v1h-18zM0 25h3v1h-3zM27 25h18v1h-18zM0 26h3v1h-3zM27 26h18v1h-18zM0 27h3v1h-3zM45 27h3v1h-3zM0 28h3v1h-3zM45 28h3v1h-3zM0 29h3v1h-3zM45 29h3v1h-3zM3 30h18v1h-18zM45 30h3v1h-3zM3 31h18v1h-18zM45 31h3v1h-3zM3 32h18v1h-18zM45 32h3v1h-3zM18 33h3v1h-3zM42 33h3v1h-3zM18 34h3v1h-3zM42 34h3v1h-3zM18 35h3v1h-3zM42 35h3v1h-3zM18 36h3v1h-3zM39 36h3v1h-3zM18 37h3v1h-3zM39 37h3v1h-3zM18 38h3v1h-3zM39 38h2v1h-2zM18 39h3v1h-3zM36 39h3v1h-3zM18 40h3v1h-3zM36 40h3v1h-3zM18 41h3v1h-3zM36 41h2v1h-2zM15 42h3v1h-3zM33 42h3v1h-3zM15 43h3v1h-3zM33 43h3v1h-3zM15 44h3v1h-3zM33 44h3v1h-3zM15 45h3v1h-3zM30 45h3v1h-3zM15 46h3v1h-3zM30 46h3v1h-3zM52 46h2v1h-2zM55 46h1v1h-1zM15 47h3v1h-3zM30 47h3v1h-3zM47 47h1v1h-1zM50 47h4v1h-4zM55 47h2v1h-2zM15 48h3v1h-3zM27 48h3v1h-3zM41 48h1v1h-1zM45 48h3v1h-3zM49 48h3v1h-3zM55 48h3v1h-3zM15 49h3v1h-3zM27 49h3v1h-3zM40 49h3v1h-3zM44 49h3v1h-3zM49 49h1v1h-1zM56 49h2v1h-2zM15 50h3v1h-3zM27 50h2v1h-2zM38 50h4v1h-4zM44 50h1v1h-1zM57 50h2v1h-2zM12 51h3v1h-3zM24 51h3v1h-3zM37 51h3v1h-3zM57 51h3v1h-3zM12 52h3v1h-3zM24 52h3v1h-3zM38 52h1v1h-1zM58 52h2v1h-2zM12 53h3v1h-3zM24 53h3v1h-3zM37 53h2v1h-2zM59 53h2v1h-2zM12 54h3v1h-3zM21 54h3v1h-3zM37 54h2v1h-2zM59 54h2v1h-2zM12 55h3v1h-3zM21 55h3v1h-3zM38 55h2v1h-2zM60 55h2v1h-2zM12 56h3v1h-3zM21 56h3v1h-3zM38 56h2v1h-2zM60 56h3v1h-3zM12 57h3v1h-3zM18 57h3v1h-3zM39 57h2v1h-2zM61 57h2v1h-2zM12 58h3v1h-3zM18 58h3v1h-3zM40 58h2v1h-2zM62 58h2v1h-2zM13 59h2v1h-2zM18 59h2v1h-2zM40 59h2v1h-2zM62 59h1v1h-1zM15 60h3v1h-3zM41 60h2v1h-2zM61 60h2v1h-2zM15 61h3v1h-3zM41 61h3v1h-3zM49 61h1v1h-1zM52 61h3v1h-3zM56 61h7v1h-7zM15 62h3v1h-3zM40 62h4v1h-4zM49 62h5v1h-5zM55 62h3v1h-3zM60 62h1v1h-1zM35 63h1v1h-1zM39 63h3v1h-3zM52 63h1v1h-1zM34 64h7v1h-7zM48 64h2v1h-2zM29 65h2v1h-2zM32 65h4v1h-4zM37 65h2v1h-2zM48 65h3v1h-3zM27 66h7v1h-7zM49 66h2v1h-2zM26 67h3v1h-3zM32 67h1v1h-1zM50 67h2v1h-2zM26 68h1v1h-1zM50 68h2v1h-2zM26 69h1v1h-1zM51 69h2v1h-2zM25 70h2v1h-2zM28 70h1v1h-1zM51 70h3v1h-3zM28 71h4v1h-4zM33 71h2v1h-2zM52 71h2v1h-2zM33 72h4v1h-4zM38 72h2v1h-2zM53 72h2v1h-2zM36 73h1v1h-1zM38 73h4v1h-4zM44 73h1v1h-1zM53 73h1v1h-1zM41 74h1v1h-1zM43 74h2v1h-2zM46 74h1v1h-1zM53 74h1v1h-1zM44 75h1v1h-1zM46 75h4v1h-4zM51 75h4v1h-4zM49 76h1v1h-1zM51 76h2v1h-2z"],["gameboy",54,73,"#5aceee","M5 0h49v1h-49zM5 1h49v1h-49zM5 2h49v1h-49zM5 3h49v1h-49zM5 4h49v1h-49zM0 5h5v1h-5zM49 5h5v1h-5zM0 6h5v1h-5zM49 6h5v1h-5zM0 7h5v1h-5zM49 7h5v1h-5zM0 8h5v1h-5zM49 8h5v1h-5zM0 9h5v1h-5zM49 9h5v1h-5zM0 10h5v1h-5zM49 10h5v1h-5zM0 11h5v1h-5zM11 11h32v1h-32zM49 11h5v1h-5zM0 12h5v1h-5zM11 12h32v1h-32zM49 12h5v1h-5zM0 13h5v1h-5zM11 13h32v1h-32zM49 13h5v1h-5zM0 14h5v1h-5zM11 14h3v1h-3zM40 14h3v1h-3zM49 14h5v1h-5zM0 15h5v1h-5zM11 15h3v1h-3zM40 15h3v1h-3zM49 15h5v1h-5zM0 16h5v1h-5zM11 16h3v1h-3zM40 16h3v1h-3zM49 16h5v1h-5zM0 17h5v1h-5zM11 17h3v1h-3zM40 17h3v1h-3zM49 17h5v1h-5zM0 18h5v1h-5zM11 18h3v1h-3zM40 18h3v1h-3zM49 18h5v1h-5zM0 19h5v1h-5zM11 19h3v1h-3zM40 19h3v1h-3zM49 19h5v1h-5zM0 20h5v1h-5zM11 20h3v1h-3zM40 20h3v1h-3zM49 20h5v1h-5zM0 21h5v1h-5zM11 21h3v1h-3zM40 21h3v1h-3zM49 21h5v1h-5zM0 22h5v1h-5zM11 22h3v1h-3zM40 22h3v1h-3zM49 22h5v1h-5zM0 23h5v1h-5zM11 23h3v1h-3zM40 23h3v1h-3zM49 23h5v1h-5zM0 24h5v1h-5zM11 24h3v1h-3zM40 24h3v1h-3zM49 24h5v1h-5zM0 25h5v1h-5zM11 25h3v1h-3zM40 25h3v1h-3zM49 25h5v1h-5zM0 26h5v1h-5zM11 26h3v1h-3zM40 26h3v1h-3zM49 26h5v1h-5zM0 27h5v1h-5zM11 27h3v1h-3zM40 27h3v1h-3zM49 27h5v1h-5zM0 28h5v1h-5zM11 28h3v1h-3zM40 28h3v1h-3zM49 28h5v1h-5zM0 29h5v1h-5zM11 29h3v1h-3zM40 29h3v1h-3zM49 29h5v1h-5zM0 30h5v1h-5zM11 30h3v1h-3zM40 30h3v1h-3zM49 30h5v1h-5zM0 31h5v1h-5zM11 31h32v1h-32zM49 31h5v1h-5zM0 32h5v1h-5zM11 32h32v1h-32zM49 32h5v1h-5zM0 33h5v1h-5zM11 33h32v1h-32zM49 33h5v1h-5zM0 34h5v1h-5zM49 34h5v1h-5zM0 35h5v1h-5zM49 35h5v1h-5zM0 36h5v1h-5zM49 36h5v1h-5zM0 37h5v1h-5zM49 37h5v1h-5zM0 38h5v1h-5zM49 38h5v1h-5zM0 39h5v1h-5zM49 39h5v1h-5zM0 40h5v1h-5zM49 40h5v1h-5zM0 41h5v1h-5zM49 41h5v1h-5zM0 42h5v1h-5zM49 42h5v1h-5zM0 43h5v1h-5zM49 43h5v1h-5zM0 44h5v1h-5zM15 44h5v1h-5zM34 44h6v1h-6zM49 44h5v1h-5zM0 45h5v1h-5zM15 45h5v1h-5zM34 45h6v1h-6zM49 45h5v1h-5zM0 46h5v1h-5zM15 46h5v1h-5zM34 46h6v1h-6zM49 46h5v1h-5zM0 47h5v1h-5zM15 47h5v1h-5zM34 47h6v1h-6zM49 47h5v1h-5zM0 48h5v1h-5zM15 48h6v1h-6zM34 48h6v1h-6zM49 48h5v1h-5zM0 49h5v1h-5zM10 49h5v1h-5zM20 49h5v1h-5zM49 49h5v1h-5zM0 50h5v1h-5zM10 50h5v1h-5zM20 50h5v1h-5zM49 50h5v1h-5zM0 51h5v1h-5zM10 51h5v1h-5zM20 51h5v1h-5zM49 51h5v1h-5zM0 52h5v1h-5zM10 52h5v1h-5zM20 52h5v1h-5zM49 52h5v1h-5zM0 53h5v1h-5zM10 53h5v1h-5zM19 53h6v1h-6zM49 53h5v1h-5zM0 54h5v1h-5zM15 54h5v1h-5zM34 54h6v1h-6zM49 54h5v1h-5zM0 55h5v1h-5zM15 55h5v1h-5zM34 55h6v1h-6zM49 55h5v1h-5zM0 56h5v1h-5zM15 56h5v1h-5zM34 56h6v1h-6zM49 56h5v1h-5zM0 57h5v1h-5zM15 57h5v1h-5zM34 57h6v1h-6zM49 57h5v1h-5zM0 58h5v1h-5zM15 58h5v1h-5zM34 58h5v1h-5zM49 58h5v1h-5zM0 59h5v1h-5zM49 59h5v1h-5zM0 60h5v1h-5zM49 60h5v1h-5zM0 61h5v1h-5zM49 61h5v1h-5zM0 62h5v1h-5zM49 62h5v1h-5zM0 63h5v1h-5zM49 63h5v1h-5zM0 64h5v1h-5zM43 64h6v1h-6zM0 65h5v1h-5zM43 65h6v1h-6zM0 66h5v1h-5zM43 66h6v1h-6zM0 67h5v1h-5zM43 67h6v1h-6zM0 68h44v1h-44zM0 69h44v1h-44zM0 70h44v1h-44zM0 71h44v1h-44zM0 72h44v1h-44z"],["gamepad",19,12,"#c5e153","M9 0h1v1h-1zM9 1h1v1h-1zM2 2h15v1h-15zM1 3h1v1h-1zM17 3h1v1h-1zM0 4h1v1h-1zM18 4h1v1h-1zM0 5h1v1h-1zM4 5h1v1h-1zM14 5h1v1h-1zM18 5h1v1h-1zM0 6h1v1h-1zM3 6h3v1h-3zM13 6h1v1h-1zM15 6h1v1h-1zM18 6h1v1h-1zM0 7h1v1h-1zM4 7h1v1h-1zM14 7h1v1h-1zM18 7h1v1h-1zM0 8h1v1h-1zM8 8h3v1h-3zM18 8h1v1h-1zM0 9h1v1h-1zM18 9h1v1h-1zM1 10h1v1h-1zM7 10h5v1h-5zM17 10h1v1h-1zM2 11h5v1h-5zM12 11h5v1h-5z"]];
var CURH='';
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
  if(b.img==='img77.jpg')return [{t:'cats',items:[['cat_killing.webp','Killing brief','#E58845',['#E58845','#D95599','#5ACEEE','#823CB5']],['cat_good.webp','For good','#C5E153',['#C5E153','#5ACEEE','#E58845','#FFFFFF']],['cat_social.webp','Social media mention','#D95599',['#D95599','#E58845','#5ACEEE','#823CB5']],['cat_grand.webp','Grandprix','#5ACEEE',['#5ACEEE','#C5E153','#E58845','#FFFFFF']]],it:b.it,en:b.en}];
  if(b.img==='img75.jpg')return [{t:'icons',it:b.it,en:b.en}];
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
  case 'cats':
    var ct='<div class="pj-cats">';b.items.forEach(function(x,i){var kf=x[3].map(function(c,k){return c;}).join(',');ct+='<div class="ct rv" data-cols="'+kf+'" style="background:'+x[2]+';transition-delay:'+(i*80)+'ms"><img src="'+x[0]+'" alt="'+x[1]+'" loading="lazy"></div>';});
    return ct+'</div>'+capH(c);
  case 'icons':
    var ic='<div class="pj-icons">';NICONS.forEach(function(x,i){ic+='<button type="button" class="pi rv" style="--c:'+x[3]+';--d:'+(i*0.18).toFixed(2)+'s;transition-delay:'+(i*60)+'ms" aria-label="'+x[0]+'"><svg viewBox="-1 -1 '+(x[1]+2)+' '+(x[2]+2)+'" shape-rendering="crispEdges"><path d="'+x[4]+'"/></svg></button>';});
    return ic+'</div>'+capH(c);
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
    var ph=L(b.it_h,b.en_h);var p='<div class="pj-palx rv">'+(ph&&ph!==CURH?'<h3>'+ph+'</h3>':'')+'<div class="sws">';
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
    CURH=strip(c.h||'');var mh='';c.media.forEach(function(b){mh+=media(b,hero,T);});
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
  el.querySelectorAll('.pj-cats .ct').forEach(function(t){var cs=t.getAttribute('data-cols').split(','),k=0,tm=null;
    t.addEventListener('mouseenter',function(){clearInterval(tm);tm=setInterval(function(){k=(k+1)%cs.length;t.style.background=cs[k];},330);});
    t.addEventListener('mouseleave',function(){clearInterval(tm);k=0;t.style.background=cs[0];});});
  var nh=el.querySelector('.t-naba .pj-hero');
  if(nh&&!RM){var lastT=0,cols=THEMES.naba.dots;nh.addEventListener('mousemove',function(e){var now=performance.now();if(now-lastT<28)return;lastT=now;
    var r=nh.getBoundingClientRect(),G=18,x=Math.floor((e.clientX-r.left)/G)*G,y=Math.floor((e.clientY-r.top)/G)*G;
    for(var k=0;k<2;k++){var p=document.createElement('i');p.className='pj-trail';var dx=(Math.floor(Math.random()*3)-1)*G,dy=(Math.floor(Math.random()*3)-1)*G;
      p.style.cssText='left:'+(x+dx)+'px;top:'+(y+dy)+'px;background:'+cols[Math.floor(Math.random()*cols.length)];nh.appendChild(p);setTimeout(function(q){return function(){q.remove();};}(p),900);}});}
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
