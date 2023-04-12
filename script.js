const number = document.querySelector('h1 span');

let i = 1;
function count (){

    setInterval(function(){

        if(i <= 100){
            number.innerText = i;
            i++;
        }
    
    },10)
}

setTimeout(count,500)

gsap.from('.logo',{
    opacity:0,
    y: '-20px',
    delay:1.5,
    duration:0.5
})
gsap.to('.card-1',{
    y: '0rem',
    x:'0rem',
    rotate:'0deg',
    duration:1,
    delay:1
})
gsap.to('.card-2',{
    y: '0rem',
    x:'0rem',
    rotate:'-20deg',
    duration:1,
    delay: 1.5
})
gsap.to('.card-3',{
    y: '0rem',
    x:'0rem',
    rotate:'-40deg',
    duration:1,
    delay: 1.5
})

gsap.to('.loading-page',{
    y: '-100vh',
    delay:3,
    duration:0.5,
})



const tl = gsap.timeline({delay:3.5})

tl.to('.main .heading h1',{
    y: 0,
    duration:1,
    
    ease:Power2.easeInOut,
}, 's')
.to('.card-4',{
    y: 0,
    x:0,
    duration:1,
    rotate:0,
    ease:Power2.easeInOut,
},'s')
.to('.card-5',{
    y: 0,
    x:0,
    duration:1,
    rotate:'-20deg',
    ease:Power2.easeInOut,
},'s')
.to('.card-6',{
    y: 0,
    duration:1,
    rotate:'-40deg',
    ease:Power2.easeInOut,
},'s')

