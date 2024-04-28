const root = document.querySelector(':root')

let navbar = document.getElementById('navigation')
let logo = document.getElementById('logo')
let serviceCardFrames = document.querySelectorAll('.rotatedFrame')
let personalTrainingContainer = document.getElementById('personal')


const navLinks = document.querySelectorAll('.nav-link')
const menuToggle = document.getElementById('navbarNav')
navLinks.forEach((l) => {
    l.addEventListener('click', () => { menuToggle.classList.remove('show'); })
})


$(window).scroll(function () {
    let scroll = $(window).scrollTop();
    if (scroll > 400) {
        navbar.classList.add('showNavbar');
        logo.classList.remove('d-none')

    }
    if (scroll < 400 ) {
        navbar.classList.remove('showNavbar')
        logo.classList.add('d-none')
    }
    if (scroll > 450){
        serviceCardFrames.forEach((l)=>{
            l.classList.remove('pushUp')
        })
    }
    // if (scroll > 4300) {
    //     root.style.setProperty('--aboutBackgroundOffset', '-0px')
    // }
    // if (scroll > 4350) {
    //     root.style.setProperty('--aboutBackgroundOffset', '-10px')
    // }
    // if (scroll > 4400) {
    //     root.style.setProperty('--aboutBackgroundOffset', '-20px')
    // }
    // if (scroll > 4450) {
    //     root.style.setProperty('--aboutBackgroundOffset', '-30px')
    // }
    // if (scroll > 4500) {
    //     root.style.setProperty('--aboutBackgroundOffset', '-40px')
    // }
    // if (scroll > 4550) {
    //     root.style.setProperty('--aboutBackgroundOffset', '-50px')
    // }
    // if (scroll > 4600) {
    //     root.style.setProperty('--aboutBackgroundOffset', '-60px')
    // }
    // if (scroll > 4650) {
    //     root.style.setProperty('--aboutBackgroundOffset', '-70px')
    // }
    // if (scroll > 4700) {
    //     root.style.setProperty('--aboutBackgroundOffset', '-80px')
    // }
    // if (scroll > 4750) {
    //     root.style.setProperty('--aboutBackgroundOffset', '-90px')
    // }
    // if (scroll > 4800) {
    //     root.style.setProperty('--aboutBackgroundOffset', '-100px')
    // }
    // if (scroll > 4850) {
    //     root.style.setProperty('--aboutBackgroundOffset', '-110px')
    // }
    // if (scroll > 4900) {
    //     root.style.setProperty('--aboutBackgroundOffset', '-120px')
    // }
    // if (scroll > 4950) {
    //     root.style.setProperty('--aboutBackgroundOffset', '-130px')
    // }
    // if (scroll > 5000) {
    //     root.style.setProperty('--aboutBackgroundOffset', '-140px')
    // }
    // if (scroll > 5050) {
    //     root.style.setProperty('--aboutBackgroundOffset', '-150px')
    // }
    // if (scroll > 5100) {
    //     root.style.setProperty('--aboutBackgroundOffset', '-160px')
    // }
    // if (scroll > 5150) {
    //     root.style.setProperty('--aboutBackgroundOffset', '-170px')
    // }
    // if (scroll > 5200) {
    //     root.style.setProperty('--aboutBackgroundOffset', '-180px')
    // }
})



  $(window).scroll(function() {
    let hT = $('#personal').offset().top,
        hH = $('#personal').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if(wS +650> (hT+hH-wH)){
        personal.classList.remove('slide')
    }
 });



 $( window ).on('scroll', function(){

    let scrollTop = $(this).scrollTop();
    let backgroundTop = $('#aboutBackground').offset().top;
    $( '#aboutBackground' ).css({
      transform: 'translateY('+  ( (-1 * scrollTop + backgroundTop)/2 *-1 ) +'px)',
    });

  });