const info = document.getElementById("info");
const btn = document.getElementById("btn");
const prod = document.getElementById("prod");


btn.addEventListener("click", () => {
  if (info.style.display === "none") {
    info.style.display = "block";
  } else {
    info.style.display = "none";
  }
});

prod.addEventListener("click", () => {
  if (info.style.display === "none")
  {window.location.href = "products.html";}
  else
  {window.location.href = "index.html";}
});
