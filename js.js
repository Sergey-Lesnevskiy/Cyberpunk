let slides = [
  "./assets/img/header_car.jpg",
  "./assets/img/header_bike.jpg",
  "./assets/img/header_person.jpg",
];


let layout_width = 100;

let step = 0;
let offset = 0;

function draw(first=offset) {
  let div = document.createElement("div");
  div.classList.add("slide");
  div.style.left = first * layout_width + "%";
  document.querySelector(".header").prepend(div);
  let img = document.createElement("img");
  img.src = slides[step];
  img.classList.add("slide__img");
  document.querySelector(".slide").appendChild(img);
  if (step + 1 == slides.length) {
    step = 0;
  } else {
    step++;
  }
  offset = 1;
}

function left() {
  document.onclick = null;
  let current_slides = document.querySelectorAll(".slide");
  let current_offset = 0;
  for (let i = current_slides.length - 1; i >= 0; i--) {
    current_slides[i].style.left = current_offset * layout_width - layout_width + "%";
    current_offset++;
  }
  setTimeout(() => {
    current_slides[1].remove();
    draw();
  }, 1000);
}

draw(1);
document.querySelector(".header").onclick = left;

// setInterval(() => {
//   left();
// }, 5000);
