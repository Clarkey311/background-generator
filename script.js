var css = document.querySelector("h3");
var colour1 = document.getElementById("color1");
var colour2 = document.getElementById("color2");
var body = document.getElementById("gradient");

console.log(css, colour1, colour2);

colour1.addEventListener("input", colourChange);

colour2.addEventListener("input", colourChange);

function colourChange() {
    body.style.background = "linear-gradient(to right, " + colour1.value + ", " + colour2.value + ")";
    css.textContent = body.style.background + ";";
}

