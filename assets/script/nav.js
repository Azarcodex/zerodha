document.addEventListener("DOMContentLoaded", () => {
  // const nav = document.querySelector(".nav-links");
  // const menu = document.getElementById("menu-icon");
  // menu.addEventListener("click", () => {
  //   nav.classList.toggle("active");
  // });
  const nav_div=document.querySelector(".nav_b_container")
  const menu_ic=document.getElementById("menu-icon")
  menu_ic.addEventListener("click",()=>
  {
    nav_div.classList.toggle("display");
  })
});

