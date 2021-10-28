const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for( const element of toggle){
    element.addEventListener('click',function(){
        nav.classList.toggle('show')
    })
}

const links = document.querySelectorAll('nav ul li a');
for(const link of links){
    link.addEventListener('click',function(){
        nav.classList.remove('show')
    })
}

// Header Scroll 
function changeHeaderWhenScroll(){
    const header =document.querySelector("#header");
    const navHeight = header.offsetHeight;

    if(window.scrollY >= navHeight){
        // scroll maior que a altura do header
        header.classList.add('scroll')
    }else{
        //  scroll menor que a altura do header
        header.classList.remove('scroll')
    }
}



const swiper = new Swiper('.swiper', {
    slidesPerView:1,
    pagination:{
        el:'.swiper-pagination'
    },
    breakpoints:{
        767: {slidesPerView:2,
        setWrapperSize: true,},
        1200: {slidesPerView:2,
            setWrapperSize: true,}
    },
    mousewheel:true,
    keyboard:true,
  });

  // Scroll review mostrar elementos quando rolar a página 

const scrollReveal = ScrollReveal({
    origin:'top',
    distance:'30px',
    duration:700,
    reset:true
})

scrollReveal.reveal(
    `#home .text, #home .image,
    #about .image,#about .text,
    #services header,#services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .container.grid,
    #footer .logo,.brand , footer .social
    `,{interval:100})


// Botão voltar para o topo
function backToTop(){
    const backTop =document.querySelector('.back-to-top')

    window.addEventListener('scroll',function(){
        if(window.scrollY>= 1000){
            backTop.classList.add('show')
        }else{
            backTop.classList.remove('show')
        }
    })
}


window.addEventListener('scroll',function(){
    changeHeaderWhenScroll()
    backToTop()
})
