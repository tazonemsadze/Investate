"use strict";

/// ------------------------- Nav menu
const menuBtn = document.querySelector(".nav__menu--btn");
const menu = document.querySelector(".nav__menu--container");
const navOverlay = document.querySelector(".header__overlay");
const menuLinks = document.querySelectorAll(".nav__menu--link");

const toggleMenu = function () {
  menu.classList.toggle("menu__active");
  navOverlay.classList.toggle("open");
  const isOpened = menuBtn.getAttribute("aria-expanded");
  if (isOpened === "false") {
    menuBtn.setAttribute("aria-expanded", "true");
  } else {
    menuBtn.setAttribute("aria-expanded", "false");
  }
};

menuBtn.addEventListener("click", toggleMenu);
navOverlay.addEventListener("click", toggleMenu);
menuLinks.forEach((link, i) => link.addEventListener("click", toggleMenu));

/// ------------------------- Steps Slider
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".slider__btn--left");
const nextBtn = document.querySelector(".slider__btn--right");

const maxSlide = slides.length;
let curSlide = 0;

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
goToSlide(0);

const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
};

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

document.addEventListener("keydown", function (e) {
  e.key === "ArrowLeft" && prevSlide();
  e.key === "ArrowRight" && nextSlide();
});

/// ------------------------- Projects Carousel

const projects = document.querySelectorAll(".project__slide");

projects.forEach(function (project, i) {
  projects[i].insertAdjacentHTML(
    "beforeend",
    `
    <div class="project__overlay">
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="24" viewBox="0 0 40 24" fill="none">
        <path
            d="M20 0C12.3576 0 5.42702 4.20865 0.312979 11.0446C-0.104326 11.6047 -0.104326 12.3871 0.312979 12.9472C5.42702 19.7914 12.3576 24 20 24C27.6424 24 34.573 19.7914 39.687 12.9554C40.1043 12.3953 40.1043 11.6129 39.687 11.0528C34.573 4.20865 27.6424 0 20 0ZM20.5482 20.4502C15.4751 20.7714 11.2857 16.5628 11.6048 11.4482C11.8666 7.2313 15.2624 3.81332 19.4518 3.54976C24.5249 3.22855 28.7143 7.4372 28.3952 12.5518C28.1252 16.7605 24.7295 20.1784 20.5482 20.4502ZM20.2946 16.5463C17.5616 16.7193 15.3033 14.4544 15.4833 11.7035C15.6224 9.43034 17.4553 7.59369 19.7136 7.44544C22.4466 7.27248 24.7049 9.53741 24.5249 12.2883C24.3776 14.5697 22.5447 16.4063 20.2946 16.5463Z"
            fill="white" />
    </svg>
</div>
      `
  );
});

const splideList = document.querySelector(".splide__list");

let projectSlide = document.createElement("div");
projectSlide.classList.add("project__slide", "splide__slide");

projectSlide.insertAdjacentHTML(
  "beforeend",
  `
  <div class="project__overlay">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="25" viewBox="0 0 40 25" fill="none">
            <path
                d="M20 0.5C12.3576 0.5 5.42702 4.70865 0.312979 11.5446C-0.104326 12.1047 -0.104326 12.8871 0.312979 13.4472C5.42702 20.2914 12.3576 24.5 20 24.5C27.6424 24.5 34.573 20.2914 39.687 13.4554C40.1043 12.8953 40.1043 12.1129 39.687 11.5528C34.573 4.70865 27.6424 0.5 20 0.5ZM20.5482 20.9502C15.4751 21.2714 11.2857 17.0628 11.6048 11.9482C11.8666 7.7313 15.2624 4.31332 19.4518 4.04976C24.5249 3.72855 28.7143 7.9372 28.3952 13.0518C28.1252 17.2605 24.7295 20.6784 20.5482 20.9502ZM20.2946 17.0463C17.5616 17.2193 15.3033 14.9544 15.4833 12.2035C15.6224 9.93034 17.4553 8.09369 19.7136 7.94544C22.4466 7.77248 24.7049 10.0374 24.5249 12.7883C24.3776 15.0697 22.5447 16.9063 20.2946 17.0463Z"
                fill="white" />
        </svg>
    </div>
  
  <div class="project__slide--heading">
<h3>
    open for funding
</h3>

<p>
    7 days left
</p>
</div>

<div class="project__slide--img">
<img class="slide__img" src="Images/building1.png" alt="">
</div>

<div class="project__slide--info">
<div class="slide__info--top">
    <h3 class="company--name">
        domus development
    </h3>
    <div class="project__address">
        <img src="Images/maps-and-flags-1.png" alt="">
        <p class="">
            paliashvili st. 114, tbilisi, gerogia
        </p>
    </div>
</div>

<div class="slide__info--bottom">
    <div class="info__bottom--left">
        <h4 class="project__price--title">
            market price
        </h4>

        <p class="project__price">
            $2500 per sq.m
        </p>
    </div>

    <div class="info__bottom--right">
        <h4 class="project__price--title">
            investate price
        </h4>

        <p class="project__price accent">
            $700 per sq.m
        </p>
    </div>

    
</div>

</div>`
);

splideList.appendChild(projectSlide);
splideList.appendChild(projectSlide.cloneNode(true));
splideList.appendChild(projectSlide.cloneNode(true));

const image = document.querySelectorAll(".slide__img");
image[0].classList.add("img-1");

image.forEach(function (im, i) {
  image[i].src = `Images/building${i + 1}.png`;
});

let splide = new Splide(".splide", {
  arrows: true,
  type: "loop",
  perMove: 1,
  perPage: 1,
  gap: "1rem",
  pagination: false,
  flickPower: "500",
  waitForTransition: true,
  autoplay: true,
  interval: 5000,
  pauseOnHover: true,
  pauseOnFocus: true,

  mediaQuery: "min",
  breakpoints: {
    690: {
      perPage: 2,
      gap: "3rem",
    },
    1100: {
      autoplay: false,
      arrows: false,
      destroy: true,
    },
  },
});
splide.mount();

/// ------------------------- FAQ section

const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  question.insertAdjacentHTML(
    "beforeend",
    `
      <svg class="question__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
    `
  );
});

const listItems = document.querySelectorAll(".list__item");

listItems.forEach((item) => {
  item.insertAdjacentHTML(
    "beforeend",
    `
  <div class="answer">
  <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae asperiores est ratione porro blanditiis
      expedita iste delectus quas sequi ea iusto voluptatum, eaque fuga fugit accusamus numquam quia error
      repellat?
  </p>
</div>`
  );
});

listItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});
