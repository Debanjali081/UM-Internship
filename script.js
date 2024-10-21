let hunger = 50;
let happiness = 80;
let energy = 70;

const hungerBar = document.getElementById('hunger-bar');
const happinessBar = document.getElementById('happiness-bar');
const energyBar = document.getElementById('energy-bar');

const hungerValue = document.getElementById('hunger-value');
const happinessValue = document.getElementById('happiness-value');
const energyValue = document.getElementById('energy-value');

const petImage=document.getElementById('pet-image');

// Update Progress Bars and Values
function updateBars() {
    hungerBar.value = hunger;
    happinessBar.value = happiness;
    energyBar.value = energy;

    hungerValue.textContent = hunger;
    happinessValue.textContent = happiness;
    energyValue.textContent = energy;
}

// Feeding the Pet
function feedPet() {
    if (hunger > 0) {
        hunger -= 10;
        happiness += 5;
        petImage.src = "assets/eating-pet.png"; // Change to eating pet
        setTimeout(() => petImage.src = "assets/happy-pet.png", 3000); // Change back to happy pet after 2 seconds
    }
    updateBars();
}

// Playing with the Pet
function playWithPet() {
    if (energy > 10) {
        happiness += 10;
        energy -= 10;
        petImage.src = "assets/playing-pet.png"; // Change to playing pet
        setTimeout(() => petImage.src = "assets/happy-pet.png", 3000); // Change back to happy pet after 2 seconds
    }
    updateBars();
}

// Putting the Pet to Sleep
function putPetToSleep() {
    if (energy < 100) {
        energy += 20;
        hunger += 10;
        petImage.src = "assets/sleep-pet.png"; // Change to sleep pet
        setTimeout(() => petImage.src = "assets/happy-pet.png", 3000); // Change back to happy pet after 2 seconds
    }
    updateBars();
}

