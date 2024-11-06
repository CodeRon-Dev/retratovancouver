// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}  

// Nav Animation
let sectionsHref = document.querySelectorAll('href');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sectionsHref.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {   
            //active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active section for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to use animation that repeats on scroll use this
        else {
            sec.classList.remove('show-animate');
        }
    });

    //sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// section animation
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    function checkSections() {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;

        sections.forEach(sec => {
            const top = sec.offsetTop;
            const height = sec.offsetHeight;

            if (scrollTop + windowHeight > top + height * 0.75 && scrollTop < top + height) {
                sec.querySelectorAll('.portrait-content, .portrait-picgrid1 img, .portrait-picgrid2 img, .wedding-content, .wedding-grid1 img, .wedding-grid2 img, .motherhood-content, .motherhood-img1 img, .birthday-img img, .birthday-content, .birthday18-content, .debut-grid1 img, .debut-grid2 img, .model-card img, .carousell-container, .gray-content, .band-container img, .band-content, .contact-info, form').forEach(el => {
                    el.classList.add('animate');
                });
            } 
            // else {
            //     sec.querySelectorAll('.portrait-content, .portrait-picgrid1 img, .portrait-picgrid2 img, .wedding-content, .wedding-grid1 img, .wedding-grid2 img, .motherhood-content, .motherhood-img1 img, .birthday-img img, .birthday-content, .birthday18-content, .debut-grid1 img, .debut-grid2 img, .model-card img, .carousell-container, .gray-content, .band-container img, .band-content, .contact-info, form').forEach(el => {
            //         el.classList.remove('animate');
            //     });
            // }
        });
    }

    // Debounce function to limit the rate of function calls
    function debounce(func, wait) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }

    // Attach the debounced checkSections function to the scroll event
    window.addEventListener('scroll', debounce(checkSections, 10));
    checkSections('section');
});