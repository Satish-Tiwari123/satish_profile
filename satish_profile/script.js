// Smooth Navbar Shadow on Scroll

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.style.boxShadow = "0 5px 20px rgba(212,175,55,0.25)";

    } else {

        navbar.style.boxShadow = "none";

    }

});


// Reveal Sections on Scroll

const sections = document.querySelectorAll(
".about-section, .skills-section, .internships-section, .projects-section, .certifications-section, .contact-section"
);

window.addEventListener("scroll", reveal);

function reveal(){

    sections.forEach(sec => {

        const top = sec.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if(top < windowHeight - 100){

            sec.style.opacity = "1";
            sec.style.transform = "translateY(0)";

        }

    });

}


// Initial Styles

sections.forEach(sec => {

    sec.style.opacity = "0";
    sec.style.transform = "translateY(60px)";
    sec.style.transition = "all 1s ease";

});


// Typing Effect

const roles = [
    "Software Developer",
    "Python Developer",
    "Web Developer",
    "AI Enthusiast"
];

let roleIndex = 0;

const roleText = document.querySelector(".hero-left h2");

setInterval(() => {

    roleText.textContent = roles[roleIndex];

    roleIndex++;

    if(roleIndex >= roles.length){
        roleIndex = 0;
    }

}, 2500);


// Gold Glow Effect

const cards = document.querySelectorAll(
".skill-card, .project-card, .internship-card, .certificate-card, .contact-card"
);

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow =
        "0 0 35px rgba(212,175,55,0.5)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow =
        "0 0 0 rgba(212,175,55,0)";

    });

});