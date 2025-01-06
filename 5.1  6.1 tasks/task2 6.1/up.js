const ss = document.getElementById("ss");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    ss.style.display = "block";
  } else {
    ss.style.display = "none";
  }
});

ss.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});