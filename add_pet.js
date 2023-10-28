let petInputName = "";
let petInputAge = 0;
let petInputRace = "";
let petInputSpecies = null;
let petInputGender = "";

document.addEventListener("DOMContentLoaded", function () {
  let raceIcons = [
    { race: "cat", icon: "./images/cats/cat.png" },
    { race: "dog", icon: "./images/dogs/dog.png" },
  ];

  let genderIcons = [
    { gender: "male", icon: "./images/kelamin/male.png" },
    { gender: "female", icon: "./images/kelamin/female.png" },
  ];

  let nameInput = document.getElementById("name_input");
  nameInput.addEventListener("input", () => {
    petInputName = nameInput.value;
  });

  let ageInput = document.getElementById("age_input");
  ageInput.addEventListener("input", () => {
    petInputAge = ageInput.value;
    console.log(petInputAge);
  });

  let addButton = document.getElementById("enter");
  addButton.addEventListener("click", addPetToPetList);

  let raceChoiceSection = document.getElementById("race_choice");
  let genderChoiceSection = document.getElementById("gender_choice");

  for (let race of raceIcons) {
    raceChoiceSection.append(appendRaceSection(race.race, race.icon));
  }

  for (let gender of genderIcons) {
    genderChoiceSection.append(appendGenderSection(gender.gender, gender.icon));
  }
});

function addPetToPetList() {
  if (petInputName.length == 0) {
    alert("Nama Peliharaan Tidak Boleh Kosong");
    return null;
  } else if (petInputAge.length == 0) {
    alert("Umur Peliharaan Tidak Boleh Kosong");
    return null;
  } else if (petInputRace.length == 0) {
    alert("Ras Peliharaan Tidak Boleh Kosong");
    return null;
  } else if (petInputSpecies == null) {
    alert("Spesies Peliharaan Tidak Boleh Kosong");
    return null;
  } else if (petInputGender.length == 0) {
    alert("Kelamin Peliharaan Tidak Boleh Kosong");
    return null;
  }
  let inputName = {
    name: petInputName,
    age: petInputAge,
    ...petInputSpecies,
    gender: petInputGender,
    fed: false,
    bath: false,
  };
  let petList = JSON.parse(localStorage.getItem("pet"));
  if (petList != null) {
    localStorage.setItem("pet", JSON.stringify([...petList, inputName]));
  } else {
    localStorage.setItem("pet", JSON.stringify([inputName]));
  }

  alert("Hewan peliharaan anda telah ditambahkan");
}

function appendRaceSection(petRace, petIcon) {
  let label = document.createElement("label");
  let input = document.createElement("input");
  let image = document.createElement("img");
  input.value = petRace;
  input.type = "radio";
  input.name = "race";
  input.onclick = function () {
    appendSpeciesSection(petRace);
    petInputRace = petRace;
  };

  image.src = petIcon;
  image.className = "race";
  image.alt = "petRace";

  label.append(input, image);
  return label;
}

function appendGenderSection(petGender, petIcon) {
  let label = document.createElement("label");
  let input = document.createElement("input");
  let image = document.createElement("img");
  input.value = petGender;
  input.type = "radio";
  input.name = "Gender";
  input.onclick = function () {
    petInputGender = petGender;
  };

  image.src = petIcon;
  image.className = "gender";
  image.alt = "petGender";

  label.append(input, image);
  return label;
}

function appendSpeciesSection(race) {
  let speciesChoiceSection = document.getElementById("species_choice");
  var child = speciesChoiceSection.lastElementChild;
  while (child) {
    speciesChoiceSection.removeChild(child);
    child = speciesChoiceSection.lastElementChild;
  }
  let speciesIcon = [
    { race: "cat", species: "domestic", icon: "./images/cats/cat.png" },
    { race: "cat", species: "bobtail", icon: "./images/cats/bobtail.png" },
    { race: "cat", species: "british", icon: "./images/cats/british.png" },
    { race: "cat", species: "persian", icon: "./images/cats/persian.png" },
    { race: "cat", species: "scottish", icon: "./images/cats/scottish.png" },
    { race: "cat", species: "siamese", icon: "./images/cats/siamese.png" },
    { race: "cat", species: "tuxedo", icon: "./images/cats/tuxedo.png" },
    { race: "dog", species: "domestic", icon: "./images/dogs/dog.png" },
    { race: "dog", species: "beagle", icon: "./images/dogs/beagle.png" },
    {
      race: "dog",
      species: "german shepherd",
      icon: "./images/dogs/german-shepherd.png",
    },
    {
      race: "dog",
      species: "golden retriever",
      icon: "./images/dogs/golden-retriever.png",
    },
    { race: "dog", species: "bulldog", icon: "./images/dogs/happy.png" },
    {
      race: "dog",
      species: "labrador retriever",
      icon: "./images/dogs/labrador-retriever.png",
    },
    { race: "dog", species: "shih tzu", icon: "./images/dogs/shih-tzu.png" },
  ];

  for (let species of speciesIcon) {
    if (species.race == race) {
      let label = document.createElement("label");
      let input = document.createElement("input");
      let image = document.createElement("img");
      let title = document.createElement("p");

      input.value = species.species;
      input.type = "radio";
      input.name = "species";
      input.onclick = function () {
        petInputSpecies = species;
      };

      image.src = species.icon;
      image.className = "species";
      image.alt = "petSpecies";

      title.innerText = species.species;

      label.append(input, image, title);

      speciesChoiceSection.appendChild(label);
    }
  }
}
