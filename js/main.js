
// menu toggle

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".ul-header");
const whenClicked = document.querySelectorAll(".whenClicked");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});

whenClicked.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("show");
    });
});


/* showing body after 1s */

// setTimeout(() => {
//     document.body.style.display = "block";
//     let count = 0;
//     let text = document.getElementById("loadText");
//     let interval = setInterval(() => {
//         count++;
//         text.innerText = "..... Loading " + count + "% .....";
//         if (count == 100) {
//             clearInterval(interval);
//             setTimeout(() => {
//                 document.getElementById("loader").style.display = "none";
//                 let main = document.getElementById("mainContent");
//                 main.style.display = "block";
//                 setTimeout(() => {
//                     main.classList.add("show");
//                 }, 500);
//             }, 1500)
//         }
//     }, 50);
// }, 1000);

// move between light and dark mode //

let light = document.getElementById("to-light");
let dark = document.getElementById("to-dark");

light.addEventListener(
    "click",
    function () {
        light.style.display = "none";
        dark.style.display = "block";
        document.documentElement.style.setProperty("--primaryColor", "skyblue");
        document.documentElement.style.setProperty("--BtnHover", "#277c9d");
        document.documentElement.style.setProperty("--a-active-hover", "#1c74c198");
        document.documentElement.style.setProperty("--a-hover", "#00000098");
        document.documentElement.style.setProperty("--mouseGlow", "skyblue");
        document.documentElement.style.setProperty("--scroll-Bar", "skyblue");
        document.documentElement.style.setProperty("--radial-gradient-Color", "skyblue");
        document.documentElement.style.setProperty("--radial-gradient-Color2", "#0080ca");
        document.documentElement.style.setProperty("--whiteBlack", "black");
        document.documentElement.style.setProperty("--blackWhite", "white");
        document.documentElement.style.setProperty("--from00000080Toffffff80", "#ffffff80");
        document.documentElement.style.setProperty("--fromffffff80To00000080", "#00000080");
        document.documentElement.style.setProperty("--from050520ToSkyblue", "skyblue");
        document.documentElement.style.setProperty("--fromSkyblueTo050520", "#050520");
        document.documentElement.style.setProperty("--fromCyanTo000020", "#000020");
        document.documentElement.style.setProperty("--from000035To9fdcff", "#6ecaff")
    }
);
dark.addEventListener(
    "click",
    function () {
        dark.style.display = "none";
        light.style.display = "block";
        document.documentElement.style.setProperty("--primaryColor", "darkblue");
        document.documentElement.style.setProperty("--BtnHover", "blue");
        document.documentElement.style.setProperty("--a-active-hover", "#1670be98");
        document.documentElement.style.setProperty("--a-hover", "#0058a598");
        document.documentElement.style.setProperty("--mouseGlow", "blue");
        document.documentElement.style.setProperty("--scroll-Bar", "blue");
        document.documentElement.style.setProperty("--radial-gradient-Color", "#00005a");
        document.documentElement.style.setProperty("--radial-gradient-Color2", "black");
        document.documentElement.style.setProperty("--whiteBlack", "white");
        document.documentElement.style.setProperty("--blackWhite", "black");
        document.documentElement.style.setProperty("--from00000080Toffffff80", "#00000080");
        document.documentElement.style.setProperty("--fromffffff80To00000080", "#ffffff80");
        document.documentElement.style.setProperty("--from050520ToSkyblue", "#050520");
        document.documentElement.style.setProperty("--fromSkyblueTo050520", "skyblue");
        document.documentElement.style.setProperty("--fromCyanTo000020", "cyan");
        document.documentElement.style.setProperty("--from000035To9fdcff", "#000035")
    }
)




// JavaScript code for Portfolio website

function openDetail() {
    document.getElementById("imageModal").style.display = "block";
}
function closeDetail() {
    document.getElementById("imageModal").style.display = "none";
}

const navItems = document.querySelectorAll(".ul-header a");
navItems.forEach((item) => {
    item.addEventListener("click", () => {
        navItems.forEach((li) => li.classList.remove("active"));
        item.classList.add("active");
    });
});
