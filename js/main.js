"use strict";

const images = [
  "images/tokyo.jpg",
  "images/ginza.jpg",
  "images/ueno.jpg",
  "images/shinjyuku.png",
  "images/nihonbashi.jpg",
  "images/marunouchi.jpg",
  "images/shibuya.jpg"
];

let currentIndex = 0;

const mainImage = document.getElementById("main");
mainImage.src = images[currentIndex];

images.forEach((image, index) => {
  const img = document.createElement("img");
  img.src = image;

  const li = document.createElement("li");
  if (index === currentIndex) {
    li.classList.add("current");
  }
  li.addEventListener("click", () => {
    mainImage.src = image;
  });

  li.appendChild(img);
  document.querySelector(".thumbnails").appendChild(li);
});
