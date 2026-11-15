(function(){
  var fine=window.matchMedia('(hover:hover) and (pointer:fine)').matches;
  var calm=window.matchMedia('(prefers-reduced-motion:reduce)').matches;
  if(!fine||calm)return;
  var d=document,root=d.documentElement;
  var ring=d.createElement('div');ring.className='c-ring';
  ring.innerHTML='<svg viewBox="36 12 16 16" aria-hidden="true"><polygon points="44.0,11.0 46.0,18.0 53.0,20.0 46.0,22.0 44.0,29.0 42.0,22.0 35.0,20.0 42.0,18.0" fill="#8a6a4a"/></svg>';
  var dot=d.createElement('div');dot.className='c-dot';
  d.body.appendChild(ring);d.body.appendChild(dot);root.classList.add('c-on');
  var mx=-100,my=-100,rx=-100,ry=-100;
  d.addEventListener('mousemove',function(e){mx=e.clientX;my=e.clientY;dot.style.transform='translate('+mx+'px,'+my+'px)';root.classList.remove('c-out')});
  d.addEventListener('mouseout',function(e){if(!e.relatedTarget)root.classList.add('c-out')});
  d.addEventListener('mouseover',function(e){root.classList.toggle('c-hot',!!e.target.closest('a,button,.band,[role=button]'))});
  d.addEventListener('mousedown',function(){root.classList.add('c-down')});
  d.addEventListener('mouseup',function(){root.classList.remove('c-down')});
  (function loop(){rx+=(mx-rx)*.18;ry+=(my-ry)*.18;ring.style.transform='translate('+rx+'px,'+ry+'px)';requestAnimationFrame(loop)})();
})();
