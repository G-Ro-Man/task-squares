const cls = ["red", "green", "blue", "purple"];

function changeColor(el) {
  if (el.parentElement && el.parentElement.classList.contains("entry")) {
    changeColor(el.parentElement);
  }
  const idx = cls.indexOf(el.classList[1]);
  el.classList.remove(cls[idx]);
  el.classList.add(cls[idx + 1] || cls[0]);
}

document.querySelector(".entry").addEventListener("click", (e) => {
  changeColor(e.target);
});
