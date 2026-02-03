const info = document.getElementById("info");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  if (info.style.display === "none") {
    info.style.display = "block";
  } else {
    info.style.display = "none";
  }
});

