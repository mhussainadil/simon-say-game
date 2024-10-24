// function rnogen() {
//     // Generate random number between 1 and 4
//     return Math.floor(Math.random() * 4) + 1;
// }
// let boxes = document.querySelectorAll(".btn");
// let h = document.querySelector("h5");
// let arr = [];     // Array to store the generated sequence
// let userinp = []; // Array to store user's input sequence
// let level = 0;    // Track the game level
// let start = false;
// // Start the game when a key is pressed
// document.addEventListener("keypress", function() {
//     if (!start) {
//         startGame();
//         start = true;
//     }
// });
// // Handle user clicks on buttons
// document.addEventListener("click", function(event) {
//     let target = event.target;
//     if (start && target.classList.contains("btn")) {
//         let userValue = parseInt(target.innerHTML); // Get the button value
//         userinp.push(userValue); // Add user's input to the sequence
//         checkUserInput(userinp.length - 1); // Check user's input step by step
//     }
// });
// function startGame() {
//     arr = [];     // Reset the sequence
//     userinp = []; // Reset user input
//     level = 0;    // Reset the level
//     h.innerHTML = `Level ${level}`;
//     flashup();    // Start flashing up the first number
// }
// function flashup() { 
//     userinp = []; // Reset user input for the new round
//     level++;
//     h.innerHTML = `Level ${level}`;
//     let rno = rnogen();
//     arr.push(rno); // Add a new number to the sequence
//     // Flash the buttons based on the sequence
//     boxes.forEach(function(ele) {
//         if (parseInt(ele.innerHTML) === rno) {
//             flashButton(ele); // Flash the corresponding button
//         }
//     });
// }
// // Flash the button to indicate the next number in the sequence
// function flashButton(ele) {
//     ele.classList.add("flashh");
//     setTimeout(function() {
//         ele.classList.remove("flashh");
//     }, 250);
// }
// // Check the user's input after each click
// function checkUserInput(currentIndex) {
//     if (arr[currentIndex] === userinp[currentIndex]) {

//         if (userinp.length === arr.length) {
//             // User completed the sequence correctly, move to next level
//             setTimeout(flashup, 250); // Move to the next level after a short delay
//         }
//     } else {
//         // User made a mistake, reset the game
//         h.innerHTML = `Game Over! Your score: <h1 class="redd">${level - 1}</h1> <br> press any key to start game`;
//         document.body.style.backgroundColor = "red";
//         start = false; // Stop the game
//     }
// }
function rnogen(){
    return Math.floor(Math.random()*4)+1;
} 
let boxes = document.querySelectorAll(".btn");
let h = document.querySelector("h5");
let arr = [];     // Array to store the generated sequence
let rno;
let userinp = []; // Array to store user's input sequence
let level = 0;    // Track the game level
let start = false;
document.addEventListener("keypress",function(){
     if(!start){
        startgame();
        start=true;
     }
})
document.addEventListener("click",function(event){
    let target=event.target;
    if(start && (target.classList.contains("btn"))){
        userinp.push(parseInt(target.innerHTML));
        sequencetracker(userinp.length-1);
    }
    })
function startgame(){
    arr=[];
    userinp=[];
    c=0;
    h.innerHTML=`Level ${c}`;
    document.body.style.backgroundColor="white"
    flash();
}
function flash(){
    userinp=[];
    c++;
    h.innerHTML=`Level ${c}`;
rno=rnogen();
arr.push(rno);
boxes.forEach(function(ele){
    if(parseInt(ele.innerHTML)==rno){
        flashEachBox(ele);
    }
})
}
function flashEachBox(element){
    element.classList.add("flashh");
    setTimeout(function(){
element.classList.remove("flashh");
    },500)
}

function sequencetracker(preesentindex){
    if(arr[preesentindex]===userinp[preesentindex]){
        if(arr.length===userinp.length){
           flash();
        }
    }
    else{
        document.body.style.backgroundColor="red";
        h.innerHTML=`Your Score is <h1 class="score">'${c}'</h1> <br>press Any key to Restart`;
        start=false;
        
    }
}