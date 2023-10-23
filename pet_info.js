document.addEventListener('DOMContentLoaded', function () {
    let petInfo = JSON.parse(localStorage.getItem('chosen pet'))
    let petList = JSON.parse(localStorage.getItem("pet"))

    let petIconSection = document.getElementById("image_container")
    let petIcon = document.createElement('img')
    petIcon.src = petInfo.icon
    petIconSection.appendChild(petIcon)

    let name = document.getElementById("name")
    let petName = document.createElement('p')
    petName.innerText = petInfo.name
    name.appendChild(petName)

    let race = document.getElementById("race")
    let petRace = document.createElement('p')
    petRace.innerText = petInfo.race
    race.appendChild(petRace)

    let species = document.getElementById("species")
    let petSpecies = document.createElement('p')
    petSpecies.innerText = petInfo.species
    species.appendChild(petSpecies)

    let gender = document.getElementById("gender")
    let petGender = document.createElement('p')
    petGender.innerText = petInfo.gender
    gender.appendChild(petGender)

    let hasBeenFed = document.getElementById('fed')
    let hasBeenBath = document.getElementById('bath')
    console.log(petInfo.bath)
    hasBeenFed.checked = petInfo.fed
    hasBeenBath.checked = petInfo.bath

    hasBeenFed.addEventListener('click', function(){
        let newPetList = petList.filter(element => element.name != petInfo.name && element.race != petInfo.race)
        petInfo.fed = hasBeenFed.checked
        localStorage.setItem('pet', JSON.stringify([...newPetList, petInfo]))
        localStorage.setItem('chosen_pet', JSON.stringify(petInfo))

    })
    hasBeenBath.addEventListener('click', function(){
        let newPetList = petList.filter(element => element.name != petInfo.name && element.race != petInfo.race)
        petInfo.bath = hasBeenBath.checked
        console.log(petInfo)
        localStorage.setItem('chosen_pet', JSON.stringify(petInfo))
        localStorage.setItem('pet', JSON.stringify([...newPetList, petInfo]))
    })
})