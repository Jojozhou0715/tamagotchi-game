// alert('Welcome to my Tamagotchi Game!')
//create a game class
class game{
    constructor(name){
        this.name = name,
        this.hunger = 10,
        this.sleepness = 10,
        this.bordom = 10,
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
    alert('Welcome to my Tamagotchi Game!')
    let tamagotchiName = prompt("What is your pet's name?")
    document.querySelector("#name").innerHTML = tamagotchiName
    if(tamagotchiName === null || tamagotchiName === ''){
        tamagotchiName = "Enter your pet's name"
        document.querySelector("#name").innerHTML = tamagotchiName
    }
}
const startBtn = document.querySelector('#startbtn')
startBtn.addEventListener('click', startGame)

//create a function to feed the pet
function feedPet(){ 
    const hunger = document.querySelector('#feed')
    hunger.innerHTML = tamagotchi.hunger ++
    // tamagotchi.hunger = tamagotchi.hunger ++
//    if(tamagotchi.hunger > 10 || tamagotchi.sleepness > 10 || tamagotchi.bordom > 10){
//         //  tamagotchi.hunger ++
//          hunger.innerHTML = tamagotchi.hunger++
//    }
}

const feedBtn = document.querySelector('#feedbtn')
feedBtn.addEventListener('click', feedPet)

//create a function to get age up

function ageup(){
    const increaseAge = document.querySelector('#age')
    increaseAge.innerHTML = tamagotchi.age ++
    if(tamagotchi.age <= 3){
        document.querySelector('#petpic').src = "./images/puppy.png"
    }else if(tamagotchi.age > 3 && tamagotchi.age <= 6){
       document.querySelector('#petpic').src = './images/teendog.png'
    }else if(tamagotchi.age > 6 && tamagotchi.age <= 10 ){
        document.querySelector('#petpic').src = './images/youngdog.png'
    }else if (tamagotchi.age > 10 && tamagotchi.age <= 15){
        document.querySelector('#petpic').src = './images/olddog.png'
    }
    tamagotchi.age = tamagotchi.age ++
    // if(tamagotchi.hunger <= 10 || tamagotchi.sleepness <= 10 || tamagotchi.bordom <= 10){
    //     clearInterval(ageInterval)
    // }else{
    //     increaseAge.innerHTML = tamagotchi.age++

    // }
}
setInterval(ageup, 5000)

//create a function to sleep
function sleep(){
    const sleepy = document.querySelector('#sleep')
    sleepy.innerHTML = tamagotchi.sleepness ++
}
const sleepBtn = document.querySelector('#sleepbtn')
sleepBtn.addEventListener('click', sleep)

//create a function to play
function playfun(){
    const playgame = document.querySelector('#play')
    playgame.innerHTML = tamagotchi.bordom ++
}
const playBtn = document.querySelector('#playbtn')
playBtn.addEventListener('click', playfun)

//decrease hunger function
const hungerInterval = setInterval(decreasehunger, 3000);
function decreasehunger(){
    const hunger = document.querySelector('#feed')
     if(tamagotchi.hunger >= 0){
        hunger.innerHTML = tamagotchi.hunger --
    }else if(tamagotchi.hunger === 0){
        alert('die')
        clearInterval(hungerInterval)    
    }
}

const sleepInterval = setInterval(decreasesleep, 3000);
function decreasesleep(){
    const sleep = document.querySelector('#sleep')
     if(tamagotchi.sleepness >= 0){
        sleep.innerHTML = tamagotchi.sleepness --
    }else if(tamagotchi.sleepness === 0){
        alert('die')
        clearInterval(hungerInterval)    
    }
}

const playInterval = setInterval(decreaseplay, 3000);
function decreaseplay(){
    const playtime = document.querySelector('#play')
     if(tamagotchi.bordom >= 0){
        playtime.innerHTML = tamagotchi.bordom --
    }else if(tamagotchi.bordom === 0){
        
        clearInterval(playInterval)    
    }else{
        alert('die')
    }
}

