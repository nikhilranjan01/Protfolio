let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}
 

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scroll;
        let offset = sec.offsetTop - 150;
        let hight = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + hight) {
            navLinks.forEach.apply(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');

            });
        };

    });


    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scroll > 100);

menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');
};



// ===================hkjfdskjhfkjhfkjk=============================


ScrollReveal({ 
    distance: '80px',
    duration:2000,
    delay:200,
});

ScrollReveal().reveal('.home-contect,heading', {origin:'top'});
ScrollReveal().reveal('.home-img,.services-container,.protfolio-box, .contact form', {origin:'buttom'});
ScrollReveal().reveal('.home-contact h1, .about-img', {origin:'left'});
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

const typed = new Typed('.multiple-text', {
    strings:['Frontend Developer','Web Designer','Programmer'],
    typeSpeed:40,
    backSpeed:40,
    backDelay:100,
    loop:true,
})