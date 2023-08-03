const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function firstpageanim(){
    var t1= gsap.timeline();

    t1.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1,
        ease: Expo.easeInOut
    })

    .to(".boundingelem", {
        y: '0',
        duration: 1.2,
        ease: Expo.easeInOut,
        stagger: .2
    })

    .from("#herofooter", {
        y: '-10',
        opacity: 0,
        duration: 1,
        delay: -.5,
        ease: Expo.easeInOut
    })
    
}


function circleMousefollower() {
    window.addEventListener("mousemove",function(dets){
        this.document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    })
};

circleMousefollower();
firstpageanim();