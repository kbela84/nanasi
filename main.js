const root = document.querySelector(':root')

let navbar = document.getElementById('navigation')
let logo = document.getElementById('logo')
let serviceCardFrames = document.querySelectorAll('.rotatedFrame')
let personalTrainingContainer = document.getElementById('personal')
let blogNavLink = document.getElementById('blogNavLink')


const navLinks = document.querySelectorAll('.nav-link')
const menuToggle = document.getElementById('navbarNav')
navLinks.forEach((l) => {
    l.addEventListener('click', () => { menuToggle.classList.remove('show'); })
})


let yPosition = 0;


$(window).scroll(function () {
    let scroll = $(window).scrollTop();
    if (scroll > 400) {
        navbar.classList.add('showNavbar');
        logo.classList.remove('d-none')

    }
    if (scroll < 400) {
        navbar.classList.remove('showNavbar')
        logo.classList.add('d-none')
    }
    if (scroll > 450){
        serviceCardFrames.forEach((l)=>{
            l.classList.remove('pushUp')
        })
    }
})



  $(window).scroll(function() {
    let hT = $('#personal').offset().top,
        hH = $('#personal').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if(wS +500> (hT+hH-wH)){
        personal.classList.remove('slide')
    }
 });



 $( window ).on('scroll', function(){    

    let scrollTop = $(this).scrollTop();
    yPosition = scrollTop;
    let backgroundTop = $('#aboutBackground').offset().top;
    $( '#aboutBackground' ).css({
      transform: 'translateY('+  ( (-1 * scrollTop + backgroundTop)/1.2 *-1 ) +'px)',
      
    });

  });


  let blogLink = document.querySelector('.blogLinkText');
  let mainPage = document.getElementById('main')
  let blogCover = document.getElementById('blogCover')

  function redirect () {
    window.location.href="blog.html"
  }

  blogLink.addEventListener('click', () => {
    navbar.classList.remove('showNavbar')
    mainPage.classList.add('blogSwap');
    blogCover.classList.add('blogCoverSwap');
    root.style.setProperty('--currentHeight', yPosition + 'px')
    setTimeout(redirect, 500)
})


blogNavLink.addEventListener('click', () => {
    navbar.classList.add('showNavbar')
    mainPage.classList.add('blogSwap');
    blogCover.classList.add('blogCoverSwap');
    root.style.setProperty('--currentHeight', yPosition + 'px')
    setTimeout(redirect, 500)   
})
