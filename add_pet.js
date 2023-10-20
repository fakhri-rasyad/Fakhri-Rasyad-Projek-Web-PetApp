document.addEventListener("DOMContentLoaded", function () {
    console.log("added");
    let raceIcons = [
        { race: "cat", icon: "./images/cats/cat.png" },
        { race: "dog", icon: "./images/dogs/dog.png" },
    ];

    let raceChoiceSection = document.getElementById("race_choice");

    for (let race of raceIcons) {
        raceChoiceSection.append(appendRaceSection(race.race, race.icon));
    }
});

function appendRaceSection(petRace, petIcon) {
    let label = document.createElement("label");
    let input = document.createElement("input");
    let image = document.createElement("img");
    input.value = petRace;
    input.type = "radio";
    input.name = "race";
    // input.onclick = 

    image.src = petIcon;
    image.className = "race";
    image.alt = "petRace";
    image.height = "64";

    label.append(input, image);
    return label;
}


function appendSpeciesSection() {
    let speciesChoiceSection = document.getElementById("species_choice");
    let speciesIcon = [
        { species: "domestic", icon: "./images/cats/cat.png" },
        { species: "bobtail", icon: "./images/cats/bobtail.png" },
        { species: "british", icon: "./images/cats/british.png" },
        { species: "persian", icon: "./images/cats/persian.png" },
        { species: "scottish", icon: "./images/cats/scottish.png" },
        { species: "siamese", icon: "./images/cats/siamese.png" },
        { species: "tuxedo", icon: "./images/cats/tuxedo.png" },
    ];

    for (let species of speciesIcon) {
        let label = document.createElement("label");
        let input = document.createElement("input");
        let image = document.createElement("img");

        input.value = species.species;
        input.type = "radio";
        input.name = "species";

        image.src = species.icon;
        image.className = "species";
        image.alt = "petSpecies";
        image.height = "48";
        image.width = "48";

        label.append(input, image);

        speciesChoiceSection.appendChild(label)
    }
}
