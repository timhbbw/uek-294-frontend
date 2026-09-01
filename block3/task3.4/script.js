function selectRandomCountry() {
    const destinations = document.querySelectorAll("#destinations li");
    const selected = Math.floor(Math.random() * destinations.length);
    const country = destinations[selected];
    destinations.forEach((destination) => destination.classList.remove("selected"));
    country.classList.add("selected");
    country.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
}

document.getElementById("choose").addEventListener("click", selectRandomCountry);  