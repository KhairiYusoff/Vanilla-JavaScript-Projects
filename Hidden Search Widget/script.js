const btn = document.querySelector(".btn");
const searchBar = document.querySelector(".search");
const input = document.querySelector(".input");

btn.addEventListener("click" , () => {
    searchBar.classList.toggle("active");
    input.focus();
})
