(function(){
var m=document.getElementById('menu'),n=document.getElementById('nav'),h=document.getElementById('top'),b=document.getElementById('bar');
m.addEventListener('click',function(){var o=n.classList.toggle('o');m.setAttribute('aria-expanded',o)});
n.addEventListener('click',function(){n.classList.remove('o');m.setAttribute('aria-expanded',false)});
addEventListener('scroll',function(){h.classList.toggle('s',scrollY>10);var d=document.documentElement;b.style.width=(scrollY/(d.scrollHeight-innerHeight)*100)+'%'},{passive:true});
var els=document.querySelectorAll('.rv');
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.15});els.forEach(function(e){io.observe(e)})}else{els.forEach(function(e){e.classList.add('in')})}
})();
(function(){var lb=document.createElement('div');lb.id='lb';lb.innerHTML='<img alt="">';document.body.appendChild(lb);
document.querySelectorAll('.gal img').forEach(function(i){i.parentNode.addEventListener('click',function(){lb.firstChild.src=i.src;lb.firstChild.alt=i.alt;lb.classList.add('o')})});
lb.addEventListener('click',function(){lb.classList.remove('o')});addEventListener('keydown',function(e){if(e.key==='Escape')lb.classList.remove('o')});})();
document.querySelectorAll('.grid,.gal,.why').forEach(function(g){Array.prototype.forEach.call(g.children,function(c,i){c.style.transitionDelay=(i*130)+'ms'})});
(function(){var hr=document.querySelector('.hero');if(!hr||matchMedia('(prefers-reduced-motion:reduce)').matches)return;
for(var i=0;i<9;i++){var s=document.createElement('span');s.className='leaf';s.setAttribute('aria-hidden','true');s.textContent=i%3?'🌿':'🍃';s.style.cssText='right:'+(Math.random()*92)+'%;font-size:'+(1+Math.random()*1.2)+'rem;animation-duration:'+(11+Math.random()*10)+'s;animation-delay:'+(-Math.random()*14)+'s';hr.appendChild(s)}})();
