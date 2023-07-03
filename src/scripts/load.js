const Planet = document.querySelectorAll(".planet")
Planet.forEach(planet => {
const img = planet.querySelector("img")
    function loaded() {
        planet.classList.add("loaded")
    }

    if (img.complete) {
        loaded();
    }

    else {
        img.addEventListener("load" ,loaded)
    }
})