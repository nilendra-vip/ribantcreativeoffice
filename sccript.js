
function locomotive(){
    const scroller = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    })
    gsap.registerPlugin(ScrollTrigger)
    scroller.on('scroll', ScrollTrigger.update)
    
    ScrollTrigger.scrollerProxy('#main', {
            scrollTop(value) {
                return arguments.length ?
                scroller.scrollTo(value, 0, 0) :
                scroller.scroll.instance.scroll.y
            },
            getBoundingClientRect() {
                return {
                    left: 0, top: 0, 
                    width: window.innerWidth,
                    height: window.innerHeight
                }
            }
        }
    )
    ScrollTrigger.addEventListener('refresh', () => scroller.update())
    ScrollTrigger.refresh()
}
locomotive();


function photoFrame() {
    const canvas = document.querySelector("canvas");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    })

    function files(index) {
        var data = `https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0000
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0001
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0002
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0003
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0004
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0005
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0006
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0007
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0008
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0009
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0010
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0011
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0012
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0013
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0014
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0015
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0016
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0017
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0018
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0019
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0020
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0021
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0022
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0023
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0024
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0025
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0026
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0027
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0028
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0029
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0030
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0031
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0032
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0033
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0034
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0035
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0036
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0037
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0038
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0039
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0040
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0041
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0042
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0043
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0044
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0045
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0046
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0047
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0048
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0049
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0050
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0051
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0052
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0053
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0054
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0055
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0056
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0057
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0058
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0059
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0060
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0061
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0062
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0063
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0064
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0065
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0066
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0067
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0068
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0069
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0070
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0071
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0072
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0073
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0074
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0075
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0076
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0077
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0078
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0079
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0080
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0081
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0082
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0083
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0084
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0085
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0086
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0087
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0088
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0089
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0090
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0091
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0092
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0093
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0094
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0095
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0096
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0097
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0098
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0099
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0100
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0101
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0102
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0103
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0104
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0105
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0106
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0107
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0108
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0109
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0110
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0111
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0112
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0113
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0114
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0115
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0116
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0117
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0118
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0119
        https://res.cloudinary.com/rco/image/upload/w_1920,q_40,f_auto/stills/home_hero/hero-still__0120
        `;
        return data.split("\n")[index];
    }

    const frameCount = 120;

    const images = [];
    const imageSeq = {
        frame: 0
    };

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        images.push(img);
    }

    gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
            trigger: "#p2",
            scroller:"#main",
            start: "bottom bottom",
            // scroller:"#main",
            scrub: 0.5
        },
        onUpdate: render
    });

    images[0].onload = render;

    function render() {
        scaleImage(images[imageSeq.frame], context)
    }

    function scaleImage(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.max(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height,
            centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
    }


    gsap.to("#p2 canvas", {
        scrollTrigger: {
            // scroller:"#main",
            trigger: "#p2",
            scroller:"#main",
            start: "bottom 90%",
            scrub: 0.8,
            // markers:true,
            // pin:true
        },
        scale: 1.1,
    })
    
    ScrollTrigger.create({
        // scroller:"#main",
        pin: true,
        trigger: "#p2",
        scroller:"#main",
        start: "bottom 100%",
        // markers:true
    })


}
photoFrame();


gsap.to('#p1 .circle',{
    scrollTrigger:{
        trigger:"#p1 .circle",
        scroller:"#main",
        start:"0% 10%",
        scrub:true,
        // markers:true
    },
    y:300,
    scale:5,
})
gsap.to('.p1-overlay-middle h1,.p1-overlay-bottom p',{
    scrollTrigger:{
        trigger:".p1-overlay-middle h1,.p1-overlay-bottom p",
        scroller:"#main",
        start:"top 10%",
        end:"bottom -20%",
        scrub:true,
        // markers:true
    },
    opacity:0,
    scale:0.6,
    stagger:.5
})
gsap.to('.p3-container h1',{
    scrollTrigger:{
        trigger:".p3-container h1",
        scroller:"#main",
        start:"top 10%",
        end:"bottom -70%",
        scrub:true,
        // markers:true
    },
    opacity:0,
    scale:0.6,
    stagger:.5
})
gsap.to('#p4 video',{
    scrollTrigger:{
        trigger:"#p4 video",
        scroller:"#main",
        start:"top 20%",
        end:"bottom 40%",
        scrub:true,
        // markers:true
    },
    scale:0.6,
})

gsap.to('.p5-heading .text #t1',{
    scrollTrigger:{
        trigger:".p5-heading .text #t1",
        scroller:"#main",
        start:"top -20%",
        end:"bottom -80%",
        scrub:true,
        // markers:true
    },
    
    y:-200,
})
gsap.to('.p5-heading .text #t2',{
    scrollTrigger:{
        trigger:".p5-heading .text #t2",
        scroller:"#main",
        start:"top -25%",
        end:"bottom -100%",
        scrub:true,
        // markers:true
    },
    
    y:-400,
    delay:2,
})
gsap.to('.p5-heading .text #t3',{
    scrollTrigger:{
        trigger:".p5-heading .text #t3",
        scroller:"#main",
        start:"top -25%",
        end:"bottom -100%",
        scrub:true,
        // markers:true
    },
    y:-400,
})

ScrollTrigger.create({
    pin: true,
    trigger: ".p5-heading .text",
    scroller:"#main",
    start: "top 20%",
    end:"bottom -200%",
    // markers:true
})



gsap.to('#p8 h1',{
    scrollTrigger:{
        trigger:"#p8 h1",
        scroller:"#main",
        start:"top 80%",
        end:"bottom 50%",
        scrub:true,
        // markers:true
    },
    opacity:1
})

document.querySelectorAll('.animate').forEach(function(elem){
    elem.addEventListener('mouseover', function(){
        var time= gsap.timeline();
        time.to(elem,{
            y:-20,
            duration:.3
        })
        time.to(elem,{
            y:20,
            duration:.0001
        })
        time.to(elem,{
            y:0,
            duration:.3
        })
    })
})






function slideCircle(){
    document.querySelectorAll(".p8-photo .box")
        .forEach(function(slide){
            slide.addEventListener("mousemove", function(dets){
                var dim = slide.getBoundingClientRect();
                this.children[1].style.clipPath = `circle(10% at ${dets.clientX-dim.left}px ${dets.clientY-dim.top}px)`;
            });

            slide.addEventListener("mouseleave", function(dets){
                var dim = slide.getBoundingClientRect();
                this.children[1].style.clipPath = `circle(0% at ${dets.clientX-dim.left}px ${dets.clientY-dim.top}px)`;
            });
        })
}
slideCircle();
   



// Loader
function loader(){
    document.addEventListener("readystatechange",function(){
        if(document.readyState==="complete"){
            // document.querySelector("#loader").style.backgroundColor= "transparent";
            document.querySelector(".loader").style.height=0;
            // document.querySelector("#loader .loader").style.scale=0;
        }
    })
}
loader();
