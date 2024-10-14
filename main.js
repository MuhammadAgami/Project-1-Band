// Click the toolpar
let toolpar = document.querySelector(".tool-par");
let tag = document.querySelector(".tool-par .tag");
tag.onclick = function () {
  toolpar.classList.toggle("tool-par-click");
};

// Change main slider
curousel();

let headSlider = document.querySelector(".main .content-text h3");
let pargrapSlider = document.querySelector(".main .content-text p");
let sliderImages = ["imges/chicago.jpg", "imges/la.jpg", "imges/ny.jpg"];
let names = ["Chicago", "Los Angeles", "New York"];
let pargraPhNames = [
  "Thank you, Chicago - A night we won't forget.",
  "We had the best time playing at Venice Beach!",
  "The atmosphere in New York is lorem ipsum.",
];
let imgeChangeSlider = document.images[0];
let index = 0;

function curousel() {
  setInterval(function () {
    index++;
    if (index > 2) {
      index = -1;
    } else {
      imgeChangeSlider.src = sliderImages[index];
      headSlider.innerHTML = names[index];
      pargrapSlider.innerHTML = pargraPhNames[index];
    }
  }, 4000);
}

// Form functions
let forms = document.querySelector("section");

function clicks() {
  forms.style.top = "150%";
  forms.style.display = "block";
}

function closes() {
  forms.style.display = "none";
}
