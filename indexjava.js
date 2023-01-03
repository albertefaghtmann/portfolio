window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");
  startAnimation();
}

function startAnimation() {
  console.log("startAnimation");

  document.querySelector("portfolio").classList.add("portfolio flyv");
}
