document.addEventListener("DOMContentLoaded", function (event) {
    let petList = JSON.parse(localStorage.getItem("pet"));
    let petListElement = document.getElementById("pet_list");

    if (petList == null) {
        petListElement.append(noPetInList());
    } else {
        for (let pet of petList) {
            petListElement.appendChild(addPetCard(pet.name, pet.icon));
        }
    }
});

function noPetInList() {
    const header = document.createElement("h1");
    header.innerText = "Tambahkan Hewan Anda Dengan Menekan Tombol Tambah Di Kanan Bawah";

    return header;
}

function addPetCard(petName, petIcon) {
    const card = document.createElement("div");
    card.className = "card";

    const iconImg = document.createElement("img");
    iconImg.src = petIcon;
    iconImg.className = "icon";

    const petCardTitle = document.createElement("h5");
    petCardTitle.innerText = petName;

    card.append(iconImg, petCardTitle);
    return card;
}
