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

setTimeout(count,1000)

gsap.from('.logo',{
    opacity:0,
    y: '-20px',
    delay:1.5,
    duration:0.5
})
gsap.from('.card-1',{
    y: '-50rem',
    x:'-20rem',
    rotate:'-30deg',
    duration:1,
    delay:1
})
gsap.from('.card-2',{
    y: '-50rem',
    x:'20rem',
    rotate:'-20deg',
    duration:1,
    delay: 1.5
})
gsap.from('.card-3',{
    y: '-50rem',
    x:'-20rem',
    rotate:'-80deg',
    duration:1,
    delay: 1.5
})

gsap.to('.loading-page',{
    y: '-100vh',
    delay:3,
    duration:0.5,
})