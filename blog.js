let servicesCover = document.getElementById('servicesCover');
let servicesLink = document.getElementById('servicesLink');
let aboutLink = document.getElementById('aboutLink');
let aboutCover = document.getElementById('aboutCover');
let blogPage = document.getElementById('blogPage');
let homeCover = document.getElementById('homeCover');
let homeLink = document.getElementById('homeLink')
const root = document.querySelector(':root')


let blogPosition = 0;


$(window).on('scroll', function () {

    let scrollTop = $(this).scrollTop();
    blogPosition = scrollTop;
})

function redirectServices() {
    window.location.href = "index.html#services"
}

function redirectAbout() {
    window.location.href = "index.html#about"
}

function redirectHome() {
    window.location.href = "index.html"
}

servicesLink.addEventListener('click', () => {
    root.style.setProperty('--blogHeight', blogPosition + 58 + 'px');
    servicesCover.classList.add('servicesSwap');
    blogPage.classList.add('blogPageRight');
    setTimeout(redirectServices, 400);
})

aboutLink.addEventListener('click', () => {
    root.style.setProperty('--blogHeight', blogPosition + 58 + 'px');
    aboutCover.classList.add('servicesSwap')
    blogPage.classList.add('blogPageRight');
    setTimeout(redirectAbout, 400);
})

homeLink.addEventListener('click', () => {
    root.style.setProperty('--blogHeight', blogPosition + 58 + 'px');
    homeCover.classList.add('servicesSwap')
    blogPage.classList.add('blogPageRight');
    setTimeout(redirectHome, 400);
})



