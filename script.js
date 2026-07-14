const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const menuIcon = document.querySelector("#menu-icon");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    menuIcon.classList.toggle("fa-bars");
    menuIcon.classList.toggle("fa-xmark");
});

// Close menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
    });
});
// ===============================
// Active Navigation on Scroll
// ===============================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});
AOS.init({
    duration: 1000,
    once: true,
});
// ===============================
// Typing Animation
// ===============================

const words = [
    "Frontend Web Developer",
    "HTML & CSS Enthusiast",
    "JavaScript Learner",
    "Future Full Stack Developer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingText = document.getElementById("typing-text");

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!isDeleting){

        typingText.textContent = currentWord.substring(0,charIndex++);
    }

    else{

        typingText.textContent = currentWord.substring(0,charIndex--);
    }

    let speed = 120;

    if(isDeleting){
        speed = 60;
    }

    if(!isDeleting && charIndex === currentWord.length + 1){

        isDeleting = true;

        speed = 1500;

    }

    if(isDeleting && charIndex === 0){

        isDeleting = false;

        wordIndex++;

        if(wordIndex === words.length){

            wordIndex = 0;

        }

    }

    setTimeout(typeEffect,speed);

}

typeEffect();
emailjs.init({
    publicKey: "dXDHVI7axmqFhXKJK",
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    emailjs.sendForm(
        "service_hi88r6v",
        "template_frchc4k",
        this
    )
    .then(() => {

        alert("✅ Message sent successfully!");

        form.reset();

    })
    .catch((error) => {

        alert("❌ Failed to send message. Please try again.");

        console.log(error);

    });

});