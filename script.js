
const nav_header = document.querySelector(".header");

function toggleNavbar() {
    nav_header.classList.toggle("active");
}
document.getElementById("btn").addEventListener("click", toggleNavbar);

console.log(nav_header);