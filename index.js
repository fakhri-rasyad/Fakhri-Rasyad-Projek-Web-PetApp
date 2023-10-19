document.addEventListener('DOMContentLoaded', function(event){
    localStorage.setItem('Test', JSON.stringify({"nama" : "Kucing", "ikon" : "./images/cats/bobtail.png"}))
    let petList = document.getElementById("pet_list");
    for(let i = 0; i< 5; i++){
        var petInfo = JSON.parse(localStorage.getItem('Test'))
        petList.appendChild(addPetCard(petInfo["nama"], petInfo["ikon"]))
    }
})

function addPetCard(petName, petIcon){
        const card = document.createElement('div');
        card.className = "card"

        const iconImg = document.createElement('img')
        iconImg.src = petIcon;
        iconImg.className = "icon"

        const petCardTitle = document.createElement('h5')
        petCardTitle.innerText = petName

        card.append(iconImg, petCardTitle)
        return card
}

