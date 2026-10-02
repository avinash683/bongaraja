'use strict';
const works = [
 {file:'hero', sold:true, name:'A world within',medium:'Oil paintings',description:'An ape, draped fabric and an imagined landscape. A surreal scene from Bonga Raja’s painting portfolio.'},
 {file:'ink-horse',name:'In full stride',medium:'Ink illustrations',description:'A mounted warrior, rendered in intricate black linework.'},
 {file:'portrait',name:'In the light',medium:'Oil paintings',description:'A portrait built from warm light, deep shadows and a direct gaze.'},
 {file:'blue-ape',name:'Electric blue',medium:'Ink illustrations',description:'A close study of expression and texture, drawn in blue ink.'},
 {file:'pixel-mask',name:'Pixel spirit',medium:'Pixel art',description:'A graphic character assembled from bold colour and deliberate pixels.'},
 {file:'archer',name:'Held in motion',medium:'Oil paintings',description:'A crouching figure, a bow and a dense world of foliage.'},
 {file:'ink-face',name:'Every line a story',medium:'Ink illustrations',description:'A face observed through layered marks and vivid blue linework.'},
 {file:'digital-ape',name:'After dark',medium:'Digital illustrations',description:'A playful ape character surrounded by ornamental symbols.'},
 {file:'red-figure',sold:true,name:'Red presence',medium:'Oil paintings',description:'A figure in a vivid red field, with strong contrasts of colour and form.'},
 {file:'pixel-ape',name:'Wild pixels',medium:'Pixel art',description:'A roaring ape, reimagined through the geometry of pixel art.'},
{"file": "cat-samurai", "name": "A quiet companion", "medium": "Ink illustrations", "description": "From Bonga Raja’s ink illustrations portfolio."},
{"file": "cigar-portrait", "name": "Smoke and shadow", "medium": "Ink illustrations", "description": "From Bonga Raja’s ink illustrations portfolio."},
{"file": "traveller-cats", "name": "Travelling company", "medium": "Ink illustrations", "description": "From Bonga Raja’s ink illustrations portfolio."},
{"file": "flying-warrior", "name": "Above the clouds", "medium": "Ink illustrations", "description": "From Bonga Raja’s ink illustrations portfolio."},
{"file": "surreal-traveller", "name": "Strange company", "medium": "Ink illustrations", "description": "From Bonga Raja’s ink illustrations portfolio."},
{"file": "horse-study", "name": "Strength in lines", "medium": "Ink illustrations", "description": "From Bonga Raja’s ink illustrations portfolio."},
{"file": "masked-warriors", "name": "Behind the armour", "medium": "Ink illustrations", "description": "From Bonga Raja’s ink illustrations portfolio."},
{"file": "many-armed", "name": "Many hands", "medium": "Ink illustrations", "description": "From Bonga Raja’s ink illustrations portfolio."},
{"file": "wave-samurai", "name": "Waves and steel", "medium": "Ink illustrations", "description": "From Bonga Raja’s ink illustrations portfolio."},
{"file": "tree-warrior", "name": "Under the branches", "medium": "Ink illustrations", "description": "From Bonga Raja’s ink illustrations portfolio."},
{"file": "armoured-figure", "name": "Standing guard", "medium": "Ink illustrations", "description": "From Bonga Raja’s ink illustrations portfolio."},
{"file": "pixel-cowboy", "name": "Under the brim", "medium": "Pixel art", "description": "From Bonga Raja’s pixel art portfolio."},
{"file": "pixel-buddha", "name": "A moment of stillness", "medium": "Pixel art", "description": "From Bonga Raja’s pixel art portfolio."},
{"file": "pixel-skull", "name": "Bright burn", "medium": "Pixel art", "description": "From Bonga Raja’s pixel art portfolio."},
{"file": "pixel-bob", "name": "Violet gaze", "medium": "Pixel art", "description": "From Bonga Raja’s pixel art portfolio."},
{"file": "pixel-red", "name": "Crimson gaze", "medium": "Pixel art", "description": "From Bonga Raja’s pixel art portfolio."},
{"file": "pixel-grin", "name": "A little attitude", "medium": "Pixel art", "description": "From Bonga Raja’s pixel art portfolio."},
{"file": "pixel-musician", "name": "Sharp character", "medium": "Pixel art", "description": "From Bonga Raja’s pixel art portfolio."},
{"file": "pixel-beard", "name": "A face in pixels", "medium": "Pixel art", "description": "From Bonga Raja’s pixel art portfolio."},
{"file": "pixel-bat", "name": "Night watch", "medium": "Pixel art", "description": "From Bonga Raja’s pixel art portfolio."},
{"file": "pixel-shades", "name": "Behind the shades", "medium": "Pixel art", "description": "From Bonga Raja’s pixel art portfolio."},
{"file": "elder-portrait", "name": "Time in a face", "medium": "Oil paintings", "description": "From Bonga Raja’s oil paintings portfolio."},
{"file": "portrait-longhair", "name": "A passing thought", "medium": "Portraiture", "description": "From Bonga Raja’s portraiture portfolio."},
{"file": "portrait-profile", "name": "In thought", "medium": "Portraiture", "description": "From Bonga Raja’s portraiture portfolio."},
{"file": "portrait-tiedhair", "name": "A quiet gaze", "medium": "Portraiture", "description": "From Bonga Raja’s portraiture portfolio."},
{"file": "portrait-side", "name": "Looking away", "medium": "Portraiture", "description": "From Bonga Raja’s portraiture portfolio."},
{"file": "portrait-fan", "name": "Behind the fan", "medium": "Portraiture", "description": "From Bonga Raja’s portraiture portfolio."},
{"file": "portrait-bindi", "name": "Eyes that speak", "medium": "Portraiture", "description": "From Bonga Raja’s portraiture portfolio."},
{"file": "blue-cap", "name": "Blue reflections", "medium": "Ink illustrations", "description": "From Bonga Raja’s ink illustrations portfolio."},
{"file": "blue-primate", "name": "A familiar face", "medium": "Ink illustrations", "description": "From Bonga Raja’s ink illustrations portfolio."},
{"file": "digital-mask", "name": "Behind the red mask", "medium": "Digital illustrations", "description": "From Bonga Raja’s digital illustrations portfolio."},
{"file": "digital-demon", "name": "Red spirit", "medium": "Digital illustrations", "description": "From Bonga Raja’s digital illustrations portfolio."},
{"file": "digital-mind", "name": "An open mind", "medium": "Digital illustrations", "description": "From Bonga Raja’s digital illustrations portfolio."},
{"file": "sunflower-ape", "name": "In full bloom", "medium": "Digital illustrations", "description": "From Bonga Raja’s digital illustrations portfolio."},
{"file": "octopus", "name": "Eight directions", "medium": "Digital illustrations", "description": "From Bonga Raja’s digital illustrations portfolio."},
{"file": "landscape", "name": "Between earth and sky", "medium": "Oil paintings", "description": "An imagined landscape beneath an expansive, colourful sky."}
];
const artworkSizes={"red-figure": [766, 811], "portrait-fan": [595, 745], "hero": [550, 771], "wave-samurai": [838, 958], "digital-demon": [536, 759], "portrait-longhair": [452, 806], "surreal-traveller": [649, 975], "pixel-ape": [512, 768], "pixel-skull": [614, 921], "horse-study": [820, 609], "tree-warrior": [899, 1080], "pixel-red": [611, 921], "many-armed": [803, 1073], "cigar-portrait": [556, 686], "portrait": [627, 766], "pixel-cowboy": [576, 771], "pixel-buddha": [516, 771], "blue-cap": [800, 1008], "landscape": [1920, 879], "digital-mask": [623, 799], "digital-ape": [684, 967], "ink-horse": [1807, 977], "pixel-shades": [625, 862], "portrait-bindi": [548, 745], "masked-warriors": [1079, 1080], "portrait-profile": [534, 806], "portrait-tiedhair": [452, 806], "blue-ape": [957, 1080], "sunflower-ape": [761, 972], "traveller-cats": [550, 776], "pixel-mask": [680, 864], "octopus": [806, 938], "cat-samurai": [541, 733], "elder-portrait": [607, 770], "pixel-musician": [609, 923], "archer": [845, 602], "pixel-beard": [583, 917], "blue-primate": [831, 1010], "portrait-side": [604, 745], "pixel-bat": [576, 862], "pixel-bob": [613, 921], "flying-warrior": [844, 1080], "digital-mind": [572, 809], "ink-face": [854, 1080], "pixel-grin": [677, 920], "armoured-figure": [789, 1080]};
const collection=document.querySelector('#collection');
collection.innerHTML=`<section class="painting-story" aria-label="Painting showcase"><div class="painting-stage"><div class="painting-caption"><span class="eyebrow">A DIFFERENT WAY OF SEEING</span><h2>Reality, with the<br><em>edges left open.</em></h2></div><img src="assets/landscape.webp" alt="A dreamlike oil painting of an animal under a vivid sunset" width="1920" height="879" loading="lazy"><span class="painting-medium">FROM THE OIL PAINTING COLLECTION</span></div></section><section class="gallery" aria-labelledby="gallery-title"><div class="gallery-heading"><div><span class="eyebrow">02 / THE COLLECTION</span><h2 id="gallery-title">Follow your <em>curiosity.</em></h2></div><span class="gallery-count">${works.length} WORKS</span></div><div class="filters" role="group" aria-label="Filter artworks">${['All work','Oil paintings','Ink illustrations','Pixel art','Digital illustrations','Portraiture'].map((label,i)=>`<button aria-pressed="${i===0}" data-filter="${label}">${label}</button>`).join('')}</div><p class="sr-only" id="result-count" role="status"></p><div class="art-grid">${works.map((w,i)=>`<button class="art-card" data-work="${i}" data-medium="${w.medium}" aria-label="View ${w.name}${w.sold ? ", sold" : ""}"><div class="art-image"><img src="assets/${w.file}.webp" alt="${w.description}" width="${artworkSizes[w.file][0]}" height="${artworkSizes[w.file][1]}" loading="lazy">${w.sold ? '<span class="sold-badge">Sold</span>' : ''}<span class="view-label">View artwork +</span></div><div class="art-meta"><span>${w.name}</span><small>${w.medium}</small></div></button>`).join('')}</div><p class="gallery-note">Explore the artist’s portfolio across five mediums. Descriptive labels are used to help you explore.</p></section>`;
document.querySelector('#studio').innerHTML=`<div class="studio-top"><span class="eyebrow">03 / CLAY BOWL ART STUDIO</span><span class="studio-stamp">CLAY BOWL<br>ART STUDIO</span></div><h2>Out of your head.<br>Into your <em>hands.</em></h2><div class="studio-bottom"><p>A little time. A little clay.<br>Pottery sessions with Bonga Raja.<br>A space to slow down and make something.</p><div><p class="studio-note">For session dates and availability,<br>get in touch with the studio.</p><button class="text-button" id="session-details">Explore pottery sessions <span>+</span></button></div></div><div class="clay-type" aria-hidden="true">MAKE. FEEL. REPEAT.</div>`;
document.querySelector('#collect').innerHTML=`<span class="eyebrow">04 / TAKE A PIECE OF THE WORLD HOME</span><div class="collect-layout"><h2>Art you<br><em>live with.</em></h2><div><p>For the wall you look at every day.<br>For the feeling you can’t quite explain.</p><p class="collect-small">Explore Bonga Raja’s work.<br>Ask about prices and availability.</p><a class="pill-link" href="#gallery-title">Find your piece <span>+</span></a></div></div>`;
const dialog=document.createElement('dialog');dialog.id='detail';dialog.setAttribute('aria-labelledby','detail-title');document.body.append(dialog);
let selected=0;
function showWork(i){selected=i;const w=works[i];dialog.innerHTML=`<button class="close" aria-label="Close artwork">×</button><div class="detail-layout"><div class="detail-image"><img src="assets/${w.file}.webp" alt="${w.description}"></div><div class="detail-copy"><span class="eyebrow">BONGA RAJA / ${String(i+1).padStart(2,'0')}</span><h2 id="detail-title">${w.name}</h2><p class="detail-medium">${w.medium}</p><p>${w.description}</p>${w.sold ? '<div class="availability sold-notice"><span>ORIGINAL SOLD</span><p>This original has found a home. Explore the collection for other works.</p></div>' : `<div class="availability"><span>COLLECT THIS WORK</span><p>Enquire directly for price and availability.</p><a class="contact-link" href="mailto:tridiveshmishra@gmail.com?subject=${encodeURIComponent('Artwork enquiry — '+w.name)}&amp;body=${encodeURIComponent('Hello Bonga Raja, I am interested in the artwork described as “'+w.name+'” in your online collection ('+w.medium+'). Could you share its price, dimensions and availability?')}">Enquire by email</a><a class="contact-link secondary" href="https://wa.me/918310371519?text=${encodeURIComponent('Hello Bonga Raja, I would like to enquire about “'+w.name+'” ('+w.medium+') in your online collection. Could you share its price and availability?')}" target="_blank" rel="noopener noreferrer">Ask on WhatsApp</a></div>`}<div class="detail-nav"><button id="previous" aria-label="Previous artwork">Previous</button><span>${i+1} / ${works.length}</span><button id="next" aria-label="Next artwork">Next</button></div></div></div>`;wireClose();dialog.querySelector('#previous').onclick=()=>showWork((selected+works.length-1)%works.length);dialog.querySelector('#next').onclick=()=>showWork((selected+1)%works.length);if(!dialog.open)dialog.showModal();document.body.classList.add('modal-open');}
function wireClose(){dialog.querySelector('.close').onclick=()=>dialog.close();}
dialog.addEventListener('close',()=>document.body.classList.remove('modal-open'));
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
dialog.addEventListener('keydown',e=>{if(!dialog.querySelector('.detail-nav'))return;if(e.key==='ArrowRight'){e.preventDefault();showWork((selected+1)%works.length)}if(e.key==='ArrowLeft'){e.preventDefault();showWork((selected+works.length-1)%works.length)}});
document.querySelectorAll('[data-work]').forEach(card=>card.onclick=()=>showWork(Number(card.dataset.work)));
document.querySelectorAll('[data-filter]').forEach(button=>button.onclick=()=>{document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));let count=0;document.querySelectorAll('.art-card').forEach(card=>{card.hidden=button.dataset.filter!=='All work'&&card.dataset.medium!==button.dataset.filter;if(!card.hidden)count++});document.querySelector('#result-count').textContent=`${count} artworks shown`;requestFrame();});
document.querySelector('#session-details').onclick=()=>{dialog.innerHTML=`<button class="close" aria-label="Close session details">×</button><div class="session-dialog"><span class="eyebrow">CLAY BOWL ART STUDIO</span><h2 id="detail-title">Make time<br>for <em>clay.</em></h2><p>Join Bonga Raja for a pottery session at Clay Bowl Art Studio.</p><div class="availability"><span>SESSION INFORMATION</span><p>Contact the studio for upcoming dates, location, fees and available places.</p><a class="contact-link" href="https://wa.me/918310371519?text=Hello%20Bonga%20Raja%2C%20I%20would%20love%20to%20join%20a%20pottery%20session%20at%20Clay%20Bowl%20Art%20Studio.%20Could%20you%20share%20the%20dates%2C%20location%20and%20fees%3F" target="_blank" rel="noopener noreferrer">Enquire on WhatsApp</a><a class="contact-link secondary" href="mailto:tridiveshmishra@gmail.com?subject=Pottery%20session%20enquiry">Send an email</a><small>Session bookings are confirmed directly by the studio.</small></div></div>`;wireClose();dialog.showModal();document.body.classList.add('modal-open')};
// Motion follows the operating system preference; there is no visitor-facing switch.
const reduce=matchMedia('(prefers-reduced-motion: reduce)');
let motion=!reduce.matches;
const hero=document.querySelector('.hero'),heroArt=document.querySelector('.hero-art'),story=document.querySelector('.painting-story'),stage=document.querySelector('.painting-stage');
const heroStage=document.createElement('div');heroStage.className='hero-stage';while(hero.firstChild)heroStage.append(hero.firstChild);hero.append(heroStage);
const atmosphere=document.createElement('canvas');atmosphere.className='atmosphere';atmosphere.setAttribute('aria-hidden','true');document.body.prepend(atmosphere);
const intro=document.querySelector('.intro');
const heroTitle=hero.querySelector('h1'),heroBottom=hero.querySelector('.hero-bottom'),paintImage=stage.querySelector('img'),paintCaption=stage.querySelector('.painting-caption');
const cards=[...document.querySelectorAll('.art-card')],reveals=[...document.querySelectorAll('.intro h2,.intro p,.gallery-heading,.studio h2,.studio-bottom,.collect-layout')];
const stamp=document.querySelector('.studio-stamp'),clay=document.querySelector('.clay-type'),studio=document.querySelector('.studio');
const progress=document.createElement('div');progress.className='scroll-progress';progress.setAttribute('aria-hidden','true');document.body.append(progress);
const clamp=n=>Math.max(0,Math.min(1,n)),smooth=n=>{const t=clamp(n);return t*t*(3-2*t)};
const shifts=new WeakMap(),viewportTop=el=>el.getBoundingClientRect().top-(shifts.get(el)||0);
let frame=0,heroVisible=true,lastY=scrollY,velocity=0,scrollPosition=scrollY,lastTime=0,pointer={x:0,y:0},current={x:0,y:0},drawAtmosphere=null;
function requestFrame(){if(!frame&&!document.hidden)frame=requestAnimationFrame(render)}
function initAtmosphere(){
 const gl=atmosphere.getContext('webgl',{alpha:false,antialias:false,powerPreference:'low-power'});if(!gl)return;
 const vertex='attribute vec2 p;varying vec2 uv;void main(){uv=p*.5+.5;gl_Position=vec4(p,0.,1.);}';
 const fragment=`precision mediump float;
 varying vec2 uv;uniform vec2 resolution;uniform float time;uniform float scroll;uniform float speed;uniform vec2 mouse;
 mat2 turn(float a){float c=cos(a),s=sin(a);return mat2(c,-s,s,c);}
 float field(vec3 p){
 p.xy=turn(.4+scroll*1.8+time*.09)*p.xy;
 p.xz=turn(.45+sin(time*.13)*.15+scroll*.8)*p.xz;
 p.xy=turn(p.z*.55+sin(p.y*.7+time*.25)*.35)*p.xy;
 float angle=atan(p.y,p.x);
 float splash=.12+.20*smoothstep(.1,1.5,scroll);
 float radius=1.58+splash*sin(5.*angle+time*.22+scroll*2.)+.10*sin(9.*angle-scroll);
 p.z+=.14*sin(angle*4.+scroll*2.);
 return length(vec2(length(p.xy)-radius,p.z))-(.32+.09*sin(angle*3.+time*.3));
 }
 void main(){
 vec2 q=(uv-.5)*vec2(resolution.x/resolution.y,1.);
 q+=mouse*.035;
 vec3 ro=vec3(.0,.0,4.65-min(scroll,2.5)*.22);
 vec3 rd=normalize(vec3(q*2.35,-2.4));
 float d=0.;float h=0.;vec3 p;
 for(int i=0;i<64;i++){p=ro+rd*d;h=field(p);if(h<.006||d>9.)break;d+=h*.4;}
 vec3 col=vec3(.035,.026,.022)+vec3(.023,.016,.011)*(1.-length(q));
 if(d<9.&&h<.015){
 vec2 e=vec2(.009,0.);vec3 n=normalize(vec3(field(p+e.xyy)-field(p-e.xyy),field(p+e.yxy)-field(p-e.yxy),field(p+e.yyx)-field(p-e.yyx)));
 vec3 light=normalize(vec3(-.4,.8,1.));
 float diffuse=max(0.,dot(n,light));float rim=pow(1.-max(0.,dot(n,-rd)),2.);
 float bands=.5+.5*sin(p.y*2.+p.x*1.5+scroll*5.+time*.15);
 vec3 pigment=mix(vec3(.24,.105,.055),vec3(.65,.34,.18),bands);
 float spec=pow(max(0.,dot(reflect(-light,n),-rd)),12.);
 float grain=sin(p.x*125.)*sin(p.y*143.)*sin(p.z*113.);
 col=pigment*(.26+diffuse*.85)+rim*pigment*.18+spec*vec3(.24,.16,.10);
 col+=grain*.009;
 col*=.88+clamp(abs(speed)*.02,0.,.16);
 }
 col*=1.-.3*length(uv-.5);gl_FragColor=vec4(col,1.);
 }`;
 const shader=(kind,source)=>{const sh=gl.createShader(kind);gl.shaderSource(sh,source);gl.compileShader(sh);if(!gl.getShaderParameter(sh,gl.COMPILE_STATUS))throw new Error(gl.getShaderInfoLog(sh));return sh};
 const program=gl.createProgram();gl.attachShader(program,shader(gl.VERTEX_SHADER,vertex));gl.attachShader(program,shader(gl.FRAGMENT_SHADER,fragment));gl.linkProgram(program);if(!gl.getProgramParameter(program,gl.LINK_STATUS))throw new Error('Background shader link failed');gl.useProgram(program);
 gl.bindBuffer(gl.ARRAY_BUFFER,gl.createBuffer());gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),gl.STATIC_DRAW);const p=gl.getAttribLocation(program,'p');gl.enableVertexAttribArray(p);gl.vertexAttribPointer(p,2,gl.FLOAT,false,0,0);
 const uniforms=Object.fromEntries(['resolution','time','scroll','speed','mouse'].map(name=>[name,gl.getUniformLocation(program,name)]));let lastDraw=0;
 drawAtmosphere=(now,scene)=>{if(now-lastDraw<33&&motion)return;lastDraw=now;const ratio=Math.min(devicePixelRatio,innerWidth<700?.8:1);const w=Math.round(atmosphere.clientWidth*ratio),h=Math.round(atmosphere.clientHeight*ratio);if(atmosphere.width!==w||atmosphere.height!==h){atmosphere.width=w;atmosphere.height=h;gl.viewport(0,0,w,h)}gl.uniform2f(uniforms.resolution,w,h);gl.uniform1f(uniforms.time,motion?now/1000:0);gl.uniform1f(uniforms.scroll,motion?Math.min(scene,3):0);gl.uniform1f(uniforms.speed,motion?velocity:0);gl.uniform2f(uniforms.mouse,motion?current.x:0,motion?current.y:0);gl.drawArrays(gl.TRIANGLES,0,6);atmosphere.dataset.ready='true'};
 atmosphere.addEventListener('webglcontextlost',e=>{e.preventDefault();drawAtmosphere=null;atmosphere.style.opacity='0'});
}
try{initAtmosphere()}catch(error){console.warn('Using static background:',error.message);atmosphere.style.opacity='0'}
function render(now){
 frame=0;const dt=Math.min(50,now-(lastTime||now-16));lastTime=now;
 const ease=1-Math.exp(-dt/100);current.x+=(pointer.x-current.x)*ease;current.y+=(pointer.y-current.y)*ease;
 const delta=scrollY-lastY;lastY=scrollY;velocity+=(delta-velocity)*.15;scrollPosition+=(scrollY-scrollPosition)*ease;
 const vh=innerHeight,mobile=innerWidth<=700;
 const hp=clamp(scrollPosition/Math.max(1,hero.offsetHeight-vh)),hpArt=smooth((hp-.12)/.7);
 const openingFade=1-smooth((scrollPosition-(intro.offsetTop-vh*.55))/(intro.offsetHeight+vh*.45));
 heroVisible=openingFade>0;
 const sp=clamp(-story.getBoundingClientRect().top/Math.max(1,story.offsetHeight-vh));
 progress.style.transform=`scaleX(${scrollY/Math.max(1,document.documentElement.scrollHeight-vh)})`;
 if(motion){
  heroArt.style.transform=`translate3d(${-hpArt*innerWidth*(mobile?.18:.31)+current.x*8}px,${-hpArt*20+current.y*6}px,${hpArt*80}px) rotateY(${-hpArt*8}deg) rotateZ(${2*(1-hpArt)}deg) scale(${1+hpArt*.06})`;
  heroTitle.style.transform=`translate3d(0,${-hp*140}px,${hp*150}px) scale(${1+hp*.16})`;heroTitle.style.opacity=String(1-smooth(hp/.48));
  heroBottom.style.opacity=String(1-smooth(hp/.3));
  atmosphere.style.opacity=String(openingFade);
  heroArt.style.opacity=String(1-smooth((scrollPosition-(hero.offsetHeight-vh*.8))/(vh*.8)));
  paintImage.style.transform=`translateY(${-sp*8}px) scale(${.88+.12*smooth(sp)})`;
  paintCaption.style.transform=`translate3d(0,${-sp*14}px,0)`;paintCaption.style.opacity=String(1-sp*.35);
  cards.forEach((card,i)=>{if(card.hidden)return;const top=viewportTop(card);if(top< -card.offsetHeight-160||top>vh+160)return;const p=smooth((vh-top)/(vh*.65));const y=(1-p)*(90+(i%3)*24);shifts.set(card,y);card.style.transform=`perspective(1000px) translate3d(0,${y}px,0) rotateX(${(1-p)*9}deg)`;card.style.opacity=String(.15+.85*p)});
  reveals.forEach(el=>{const p=smooth((vh-viewportTop(el))/(vh*(el.closest('.intro')?.32:.72)));const y=(1-p)*75;shifts.set(el,y);el.style.transform=`translate3d(0,${y}px,0)`;el.style.opacity=String(.1+.9*p)});
  const studioProgress=clamp((vh-studio.getBoundingClientRect().top)/(vh+studio.offsetHeight));stamp.style.transform=`rotate(${-25+studioProgress*60}deg)`;clay.style.transform=`translate3d(${(studioProgress-.5)*-250}px,0,0)`;
 }else{
  [heroArt,heroTitle,paintImage,paintCaption,...cards,...reveals,stamp,clay].forEach(el=>{el.style.transform="none";el.style.opacity="1";shifts.set(el,0)});heroBottom.style.opacity="1";atmosphere.style.opacity=String(openingFade);
 }
 if(drawAtmosphere&&heroVisible)drawAtmosphere(now,scrollPosition/vh);
 if(motion&&!document.hidden&&(heroVisible||Math.abs(scrollPosition-scrollY)>.5||Math.abs(velocity)>.1))requestFrame();
}
hero.addEventListener('pointermove',e=>{pointer={x:e.clientX/innerWidth-.5,y:e.clientY/innerHeight-.5};requestFrame()});hero.addEventListener('pointerleave',()=>{pointer={x:0,y:0}});
function syncMotion(){document.body.classList.toggle('motion-off',!motion);requestFrame()}
reduce.addEventListener('change',e=>{motion=!e.matches;syncMotion()});syncMotion();

addEventListener('scroll',requestFrame,{passive:true});addEventListener('resize',requestFrame);addEventListener('load',requestFrame);document.fonts.ready.then(requestFrame);
document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(frame);frame=0}else{lastTime=performance.now();requestFrame()}});
