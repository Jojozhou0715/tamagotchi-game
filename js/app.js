// alert('Welcome to my Tamagotchi Game!')
//create a game class
class game{
    constructor(name){
        this.name = name,
        this.hunger = 10,
        this.sleepiness = 10,
        this.boredom = 10,
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
function startGame(e){
    e.preventDefault()
    tamagotchi.hunger = 10
    tamagotchi.sleepiness = 10
    tamagotchi.boredom = 10  
    tamagotchi.age = 0
    alert('Welcome to my Tamagotchi Game!')
    let tamagotchiName = prompt("What is your pet's name?")
    document.querySelector("#name").innerHTML = tamagotchiName
    if(tamagotchiName === null || tamagotchiName === ''){
        tamagotchiName = "Enter your pet's name"
        document.querySelector("#name").innerHTML = tamagotchiName
        endgame()
    }
}
const startBtn = document.querySelector('#startbtn')
const start = startBtn.addEventListener('click', startGame)

//create a function to feed the pet
const hungery = document.querySelector('#feed')
function feedPet(e){   
    e.preventDefault()
    hungery.innerHTML = tamagotchi.hunger ++
    document.body.style.backgroundImage = "url(./images/living-room.png)"
    document.querySelector('#petpic').src = './images/dog (1).png'
    document.querySelector('#petpic').classList.add('pet')
    // document.querySelector('#petpic').classList.remove('pet') 
}
const feedBtn = document.querySelector('#feedbtn')
feedBtn.addEventListener('click', feedPet)

//create a function to get age up
const increaseAge = document.querySelector('#age')
function ageup(){
    increaseAge.innerHTML = tamagotchi.age ++
    showage()
    if(tamagotchi.age <= 4){
        document.querySelector('#petpic').src = "./images/puppy.png"
    }else if(tamagotchi.age >= 5 && tamagotchi.age <= 10){
       document.querySelector('#petpic').src = './images/teendog.png'
    }
    else if(tamagotchi.age >= 11 ){
        document.querySelector('#petpic').src = './images/youngdog.png'
   
    } 
}
const stopage = setInterval(ageup, 5000)

//a function to alert ages
function showage(){
    if(tamagotchi.age === 6){
        alert('Your pet has a new form at age 4!')
}else if(tamagotchi.age === 11){
    alert('Your pet has another new form at age 10!')
}else if(tamagotchi.age === 15){
    alert('Your pet is getting old, take good care of your pet!')
}
}
showage()

//create a function to sleep 
const sleeping = document.querySelector('#sleep')
function sleep(e){  
    e.preventDefault()
    sleeping.innerHTML = tamagotchi.sleepiness ++
    document.body.style.backgroundImage = "url(./images/night.png)"
    document.querySelector('#petpic').src = './images/dog (2).png'
    document.querySelector('#petpic').classList.remove('pet')
}
const sleepBtn = document.querySelector('#sleepbtn')
sleepBtn.addEventListener('click', sleep)

//create a function to play
const playgame = document.querySelector('#play')
function playfun(e){ 
    e.preventDefault()
    playgame.innerHTML = tamagotchi.boredom ++
    document.body.style.backgroundImage = "url(./images/living-room.png)"
    document.querySelector('#petpic').src = './images/dog-park.png'
    document.querySelector('#petpic').classList.add('pet')
}
const playBtn = document.querySelector('#playbtn')
playBtn.addEventListener('click', playfun)

//decrease hunger function
// const hungery = document.querySelector('#feed')
const hungerInterval = setInterval(decreasehunger, 3000);
function decreasehunger(){
     if(tamagotchi.hunger >= 0){
        hungery.innerHTML = tamagotchi.hunger --
    }else if(tamagotchi.hunger <= 0){   
        clearInterval(hungerInterval) 
        endgame()   
}}

const sleepInterval = setInterval(decreasesleep, 3000);
const sleepy = document.querySelector('#sleep')

function decreasesleep(){
     if(tamagotchi.sleepiness >= 0){
        sleepy.innerHTML = tamagotchi.sleepiness --
    }else if(tamagotchi.sleepiness <= 0){
        clearInterval(hungerInterval)        
        endgame()
    }
}

const playInterval = setInterval(decreaseplay, 3000);
const playtime = document.querySelector('#play')

function decreaseplay(){ 
     if(tamagotchi.boredom >= 0){
        playtime.innerHTML = tamagotchi.boredom --
    }else if(tamagotchi.boredom <= 0) {
        clearInterval(playInterval)  
        endgame()
    }
}

//create a end game function
function endgame(){
  if(tamagotchi.hunger <= 0 && tamagotchi.sleepiness <= 0 && tamagotchi.boredom <= 0){
    tamagotchi.hunger = 0
    tamagotchi.sleepiness = 0
    tamagotchi.boredom = 0  
    hungery.innerHTML = tamagotchi.hunger
    sleeping.innerHTML = tamagotchi.sleepiness
    playgame.innerHTML = tamagotchi.boredom
    
    clearInterval(stopage)
       alert("Your pet died because two of it's stats has hit to 0!")     
   let answer =prompt('Do you want to have a new pet?')
     if(answer === 'yes'){
      location.reload()
            
    }else {
        alert('Thank you for playing my game!')
        location.reload()
        }
  }
}


