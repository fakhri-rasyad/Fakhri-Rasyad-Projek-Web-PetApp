document.addEventListener('DOMContentLoaded', function () {
    let petInfo = JSON.parse(localStorage.getItem('chosen pet'))
    let petList = JSON.parse(localStorage.getItem("pet"))

    createPetIcon(petInfo)

    createNameSection(petInfo)

    createAgeSection(petInfo)

    createRaceSection(petInfo)

    createSpeciesSection(petInfo)

    createGenderSection(petInfo)

    createHasBeenFedSection(petInfo, petList)

    createHasBeenBathSection(petInfo, petList)

})

function createPetIcon(petInfo){
    let petIconSection = document.getElementById("image_container")
    let petIcon = document.createElement('img')
    petIcon.src = petInfo.icon
    petIconSection.appendChild(petIcon)
}

function createNameSection(petInfo){
    let name = document.getElementById("name")
    let petName = document.createElement('p')
    petName.innerText = petInfo.name
    name.appendChild(petName)
}

function createAgeSection(petInfo){
    let age = document.getElementById('age')
    let petAge = document.createElement('p')
    petAge.innerText = `${petInfo.age} days old`
    age.appendChild(petAge)
}

function createRaceSection(petInfo){
    let race = document.getElementById("race")
    let petRace = document.createElement('p')
    petRace.innerText = petInfo.race
    race.appendChild(petRace)
}

function createSpeciesSection(petInfo){
    let species = document.getElementById("species")
    let petSpecies = document.createElement('p')
    petSpecies.innerText = petInfo.species
    species.appendChild(petSpecies)
}

function createGenderSection(petInfo){
    let gender = document.getElementById("gender")
    let petGender = document.createElement('p')
    petGender.innerText = petInfo.gender
    gender.appendChild(petGender)
}

function createHasBeenFedSection(petInfo, petList){
    let hasBeenFed = document.getElementById('fed')
    hasBeenFed.checked = petInfo.fed
    hasBeenFed.addEventListener('click', function(){
        let newPetInfoIndex = petList.findIndex((element) => element.name == petInfo.name && element.species == petInfo.species)
        petInfo.fed = hasBeenFed.checked
        petList[newPetInfoIndex] = petInfo
        localStorage.setItem('chosen pet', JSON.stringify(petInfo))
        localStorage.setItem('pet', JSON.stringify(petList))
        console.log(petInfo)
        console.log(petList)
        
    })
}

function createHasBeenBathSection(petInfo, petList){
    let hasBeenBath = document.getElementById('bath')
    hasBeenBath.checked = petInfo.bath

    hasBeenBath.addEventListener('click', function(){
        let newPetInfoIndex = petList.findIndex((element) => element.name == petInfo.name && element.species == petInfo.species)
        petInfo.bath = hasBeenBath.checked
        petList[newPetInfoIndex] = petInfo
        localStorage.setItem('chosen pet', JSON.stringify(petInfo))
        localStorage.setItem('pet', JSON.stringify(petList))
        console.log(petInfo)
        console.log(petList)
    })
}