// JavaScript code for Portfolio website

function openDetail() {
    document.getElementById("imageModal").style.display = "block";
}
function closeDetail() {
    document.getElementById("imageModal").style.display = "none";
}




const navItems = document.querySelectorAll(".nav li");
    navItems.forEach(item => {
        item.addEventListener("click", () => {
        navItems.forEach(li => li.classList.remove("active"));
        item.classList.add("active");
    });
});


