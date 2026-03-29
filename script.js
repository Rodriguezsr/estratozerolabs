// SCROLL REVEAL
function reveal() {
  const elements=document.querySelectorAll(".reveal");
  elements.forEach(el=>{
    const top=el.getBoundingClientRect().top;
    const height=window.innerHeight;
    if(top<height-100){el.classList.add("active");}
  });
}
window.addEventListener("scroll",reveal);

// PARTICLES JS
particlesJS('particles-js', {
  "particles": {
    "number": {"value":80,"density":{"enable":true,"value_area":800}},
    "color":{"value":"#00ffff"},
    "shape":{"type":"circle"},
    "opacity":{"value":0.5},
    "size":{"value":3,"random":true},
    "line_linked":{"enable":true,"distance":150,"color":"#00ffff","opacity":0.4,"width":1},
    "move":{"enable":true,"speed":3,"direction":"none","random":false,"straight":false,"bounce":false}
  },
  "interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":true,"mode":"push"}}}
});