// Mobile menu
const btn = document.querySelector('.menu-toggle');
const menu = document.getElementById('main-menu');

btn.addEventListener('click', ()=>{
  menu.classList.toggle('open');
});

// Events
const events = [
  {title:"Community Coaching Day", date:"Feb 7", place:"Central Park"},
  {title:"Youth Tournament", date:"Mar 14", place:"Main Stadium"},
  {title:"Equipment Drive", date:"Apr 5", place:"Community Hall"}
];

const list = document.getElementById("events-list");

events.forEach(ev=>{
  const div = document.createElement("div");
  div.innerHTML = `<strong>${ev.title}</strong> - ${ev.date} (${ev.place})`;
  list.appendChild(div);
});

// Gallery slider
const slides = document.querySelectorAll(".gallery-slider img");
let currentSlide = 0;

function showSlide(n){
  slides[currentSlide].classList.remove("active");
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");
}

document.querySelector(".next").onclick = ()=>showSlide(currentSlide+1);
document.querySelector(".prev").onclick = ()=>showSlide(currentSlide-1);

// Contact form
function handleForm(e){
  e.preventDefault();
  alert("Message sent!");
  return false;
}
