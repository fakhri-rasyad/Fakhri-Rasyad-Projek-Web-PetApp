document.addEventListener("DOMContentLoaded", function (event) {
    let petList = JSON.parse(localStorage.getItem("pet"));
    let petListElement = document.getElementById("pet_list");

    if (petList == null) {
        petListElement.append(noPetInList());
    } else {
        for (let pet of petList) {
            petListElement.appendChild(addPetCard(pet));
        }
    }
});

function noPetInList() {
    const header = document.createElement("h1");
    header.innerText = "Tambahkan Hewan Anda Dengan Menekan Tombol Tambah Di Kanan Bawah";

    return header;
}

function addPetCard(pet) {
    const card = document.createElement("div");
    const link = document.createElement('a');

    link.href = './petInfo.html'
    card.className = "card";

    const iconImg = document.createElement("img");
    iconImg.src = pet.icon;
    iconImg.className = "icon";

    const petCardTitle = document.createElement("h5");
    petCardTitle.innerText = pet.name;

    link.addEventListener('click', function (){
        localStorage.setItem('chosen pet', JSON.stringify(pet))
        console.log(JSON.parse(localStorage.getItem('chosen pet')))
    })

    card.append(iconImg, petCardTitle);
    link.appendChild(card)
    return link;
}
