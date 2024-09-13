// Take the value of score , hit and timer 
var score = 0;
var hitrn = 0;
var timer = 60;

// Create a function to make the Bubbles
function makebubble() {
    // Create a variabl to store the bubbles
    var clutter = "";
    // Run a for loop to create varios bubbles 
    for (var i = 1; i <= 108; i++) {
        // Get the randome number in bubbles
        var rn = Math.floor(Math.random() * 10)
        // Randumly put the values of bubbles
        clutter += `<div class="bubble">${rn}</div>`;
    }
    // Print the values in bubbles
    document.querySelector("#p-btm").innerHTML = clutter;
}

// Create a function for gat net Hit value
function getNewHit() {
    // Get the randome number
    hitrn = Math.floor(Math.random() * 10);
    // After gat the value of hit store the value and print the hit value
    document.querySelector("#hitval").textContent = hitrn;
}

// Create a function set timer for 60 minuts
function runtimer() {
    // Create a setInterval funtion for set time 
    var timerint = setInterval(function () {
        if (timer > 0) {
            // Decrease the value of time
            timer--;
            // Print the time
            document.querySelector("#timerval").textContent = timer;
        }
        else {
            clearInterval(timerint);
            // Show the Game over text after the time out
            document.querySelector("#p-btm").innerHTML = `<h1>Game Over </h1>`;
        }
    }, 1000);
}

// Create a function to increate the Score
function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

// Create a function and loop , When user play the game and when time is out and when click the bubbles then refresh and change the values of Hit and Bubbles.
document.querySelector("#p-btm").addEventListener("click", function (details) {
    var clickednum = Number(details.target.textContent);
    if (clickednum === hitrn) {
        increaseScore();
        makebubble();
        getNewHit();
    }
})
// Call the all functions
increaseScore();
runtimer();
getNewHit();
makebubble();