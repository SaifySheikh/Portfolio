const leftSide = document.querySelector(".left-side");
const rightSide = document.querySelector(".right-side");

leftSide.addEventListener("mouseenter", () => {
  rightSide.style.overflowY = "hidden";
  leftSide.style.overflowY = "auto";
});

leftSide.addEventListener("mouseleave", () => {
  leftSide.style.overflowY = "hidden";
});

rightSide.addEventListener("mouseenter", () => {
  leftSide.style.overflowY = "hidden";
  rightSide.style.overflowY = "auto";
});

rightSide.addEventListener("mouseleave", () => {
  rightSide.style.overflowY = "hidden";
});

document.addEventListener("DOMContentLoaded", function () {
  document.body.style.overflowX = "hidden";
});


function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate"); 
      observer.unobserve(entry.target);
    }
  });
}


function resetAnimation() {
  blocksToAnimate.forEach((block) => {
    block.classList.remove("animate");
  });
}

let lastScrollTop = 0;
window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    resetAnimation();
  } else {
    resetAnimation(); 
  }
  lastScrollTop = scrollTop;
});

const blocksToAnimate = document.querySelectorAll(".textcontent");

  
  function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      } else {
        entry.target.classList.remove("animate");
      }
    });
  }

  const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    threshold: 0.05, 
  });

  blocksToAnimate.forEach((block) => {
    observer.observe(block);
  });
