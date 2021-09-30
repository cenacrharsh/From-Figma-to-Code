const menuBtn = document.querySelector(".menu");

const panel = document.querySelector(".filter");

const panelStyles = window.getComputedStyle(panel);

const hearts = document.querySelectorAll(".far");

// Js doesn't have access to styles applied to HTML elements through CSS files so we use getComputedStyles

menuBtn.addEventListener("click", () => {
  if (panelStyles.getPropertyValue("clip-path") === "circle(0% at 100% 0%)") {
    panel.style.clipPath = "circle(100% at 50% 50%)";
  } else {
    panel.style.clipPath = "circle(0% at 100% 0%)";
  }
});

document.addEventListener("mouseup", (event) => {
  // Nothing should happen if we click somewhere on the panel itself
  if (panel.style.getPropertyValue("clip-path") === "circle(100% at 50% 50%)") {
    if (!panel.contains(event.target)) {
      panel.style.clipPath = "circle(0% at 100% 0%)";
    }
  }
});

function changeHeart(x) {
  x.classList.toggle("fas");
  x.classList.toggle("far");
}
