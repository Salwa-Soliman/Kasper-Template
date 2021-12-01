let body = document.querySelector("body"),
    header = document.querySelector("header"),
    barIcon = document.querySelector(".fa-bars"),
    navbar = document.querySelector("header nav ul"),
    closeNavbar = document.querySelector(".fa-times"),
    portfolioBtns = document.getElementsByClassName("btn"),
    boxes = document.getElementsByClassName("box"),
    testim = document.querySelectorAll(".testim-container>div"),
    testimBullets = document.querySelectorAll(".testim-bullets span"),
    bgIndex = 0,
    currentTestim = 0;

showImages("all");
showTestimonials(currentTestim);

barIcon.onclick = function() {
    navbar.classList.toggle("flex");
};
closeNavbar.addEventListener("click", () => {
    navbar.classList.remove("flex");
});
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        header.style.backgroundColor = "var(--main-color)";
    } else {
        header.style.backgroundColor = "transparent";
    }
};

for (const btn of portfolioBtns) {
    btn.addEventListener("click", function() {
        let currentBtn = document.querySelector(".btn.active");
        currentBtn.classList.remove("active");
        this.classList.add("active");
    });
}

function changeBg(x) {
    showBg((bgIndex += x));
}

function showBg(n) {
    if (n < 0) {
        n = 2;
    }
    if (n > 2) {
        n = 0;
    }
    document.querySelector(
        ".landing"
    ).style.backgroundImage = `url(../images/bg${n}.jpg)`;
    document
        .querySelector(".landing .bullets li.active")
        .classList.remove("active");
    document.querySelectorAll(".landing .bullets li")[n].className = "active";
    bgIndex = n;
}

function showImages(word) {
    if (word === "all") {
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].style.display = "block";
        }
    } else {
        for (let i = 0; i < boxes.length; i++) {
            if (boxes[i].classList.contains(word)) {
                boxes[i].style.display = "block";
            } else {
                boxes[i].style.display = "none";
            }
        }
    }
}

// Testimonials
function showTestimonials(n) {
    testim[currentTestim].style.display = "none";
    testim[n].style.display = "block";
    testimBullets[currentTestim].classList.remove("active");
    testimBullets[n].classList.add("active");
    currentTestim = n;
}