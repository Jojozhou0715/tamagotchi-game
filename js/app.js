// alert('Welcome to my Tamagotchi Game!')
//create a game class
class game{
    constructor(name){
        this.name = name,
        this.hunger = 10,
        this.sleepness = 0,
        this.bordom = 0,
        this.age = 0
    }
    age(){
        return this.age
    }
    //age up method
    ageUp(){
        this.age ++
    }
}
const tamagotchi = new game()

//create a function to click the start button
function startGame(){
    let tamagotchiName = prompt("What is your pet's name?")
    document.querySelector('#name').innerHTML = tamagotchiName
}
const startBtn = document.querySelector('.startbtn')
startBtn.addEventListener('click', startGame)


