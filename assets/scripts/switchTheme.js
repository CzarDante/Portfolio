var toggle = document.getElementById("theme-toggle");
var circle_toggle = document.getElementById("circle-toggle");


var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (storedTheme)
    document.documentElement.setAttribute('data-theme', storedTheme)


toggle.onclick = function() {
    var currentTheme = document.documentElement.getAttribute("data-theme");
    var targetTheme = "light";
    circle_toggle.style.transform="translateX(0px)";

    if (currentTheme === "light") {
        targetTheme = "dark";
        circle_toggle.style.transform="translateX(38px)";
    }

    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);
};
