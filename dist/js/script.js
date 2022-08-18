"use strict";
const list = document.querySelectorAll(".list");

const section1 = document.querySelector("#section-1");
const header = document.querySelector(".nav");

const readMore = document.querySelector(".read__more");
const readMoreButton = document.querySelector(".read__btn");
const readBtn = document.querySelector(".btn__");

list.forEach((item) => {
  item.addEventListener("click", function () {
    list.forEach((item) => {
      item.classList.remove("active");
    });

    this.classList.add("active");
  });
});

//Sticky navigation

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) {
    header.classList.add("sticky-top");
  } else header.classList.remove("sticky-top");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0.1,
});
headerObserver.observe(section1);

//Revealing sections
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("hidden");
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("hidden");
});

readMoreButton.addEventListener("click", function () {
  if (readMore.classList.contains("active")) {
    readMore.classList.remove("active");
    readBtn.textContent = "Read More";
  } else {
    readMore.classList.add("active");
    readBtn.textContent = "Read Less";
  }

  console.log(readMoreButton.textContent);
});
