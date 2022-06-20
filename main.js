const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    getDirection: true,
    lerp: 0.02,
    smartphone: true,
});

scroll.on('scroll', (instance) => {
    document.documentElement.setAttribute('data-direction', instance.direction)
});

const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
}) 

document.getElementsByTagName('button')[0].textContent='Turn on the light';
function colorChange(){
   var element = document.getElementsByTagName('body')[0];   
   element.classList.toggle("dark-mode");
   
   var button = document.getElementsByTagName('button')[0];
   if(button.textContent == 'Turn on the light')button.textContent='Turn off the light';
   else button.textContent='Turn on the light';
}

