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
const start = startBtn.addEventListener('click', startGame)

//create a function to feed the pet
const hungery = document.querySelector('#feed')
function feedPet(){   
    hungery.innerHTML = tamagotchi.hunger ++
    document.body.style.backgroundImage = "url(./images/living-room.png)"
    document.querySelector('#petpic').src = './images/dog (1).png'
    document.querySelector('#petpic').classList.add('pet')
}


const feedBtn = document.querySelector('#feedbtn')
feedBtn.addEventListener('click', feedPet)

//create a function to get age up
const increaseAge = document.querySelector('#age')
function ageup(){
    increaseAge.innerHTML = tamagotchi.age ++
    // showage()
    if(tamagotchi.age <= 3){
        document.querySelector('#petpic').src = "./images/puppy.png"
    }else if(tamagotchi.age > 3 && tamagotchi.age <= 6){
       document.querySelector('#petpic').src = './images/teendog.png'
    }
    else if(tamagotchi.age > 6 && tamagotchi.age <= 10 ){
        document.querySelector('#petpic').src = './images/youngdog.png'
        // alert('your dog is older')
    }else if (tamagotchi.age > 10 && tamagotchi.age <= 15){
        document.querySelector('#petpic').src = './images/olddog.png'
    
    }
   
}
const stopage = setInterval(ageup, 5000)

// function showage(){
//     if(tamagotchi.age === 6){
//         alert('your pet is getting older')
// }else if(tamagotchi.age === 10){
//     alert('older')
// }else if(tamagotchi.age === 15){
//     alert('so old')
// }
// }
// showage()

//create a function to sleep 
const sleeping = document.querySelector('#sleep')
function sleep(){  
    sleeping.innerHTML = tamagotchi.sleepiness ++
    document.body.style.backgroundImage = "url(./images/night.png)"
    
    document.querySelector('#petpic').src = './images/dog (2).png'
    document.querySelector('#petpic').classList.remove('pet')
}
const sleepBtn = document.querySelector('#sleepbtn')
sleepBtn.addEventListener('click', sleep)

//create a function to play
const playgame = document.querySelector('#play')
function playfun(){ 
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
       alert("Your pet died because one of it's stats has hit to 0!")     
   let answer =prompt('Do you want to have a new pet?')
     if(answer === 'yes'){
      location.reload()
            
    }else {
        alert('Thank you for playing my game!')
        location.reload()
        }
  }
}


