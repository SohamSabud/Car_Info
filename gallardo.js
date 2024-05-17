let slideIndex = 0;
showSlides(slideIndex);

function showSlides(index) {
    let i;
    let slides = document.querySelectorAll(".slides img");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[index].style.display = "block";
}

function nextSlide() {
    slideIndex++;
    let slides = document.querySelectorAll(".slides img");
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    showSlides(slideIndex);
}

function prevSlide() {
    slideIndex--;
    let slides = document.querySelectorAll(".slides img");
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlides(slideIndex);
}

document.querySelector(".prev").addEventListener("click", prevSlide);
document.querySelector(".next").addEventListener("click", nextSlide);

