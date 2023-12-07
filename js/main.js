// Elements 
const gameHeader = document.querySelector(".head"),
start = document.querySelector(".game-start"),
hello = document.querySelector(".hello"),
spanTries = document.querySelector(".wrong-tries"),
gameBox = document.querySelector(".game-box"),
picBlock = document.querySelectorAll(".game-block");

// settings

let defaultValue = 0;
spanTries.innerHTML = `Wrong Tries : ${defaultValue}`;

// variables
let allBlocks = Array.from(picBlock);
let orderRange = [...Array(allBlocks.length).keys()];

console.log(orderRange);
shuffle(orderRange);
console.log(orderRange)

start.addEventListener("click", () => {
    let userName = prompt("what is ur name");
    if (userName === null){
        hello.textContent = `Welcome: Guest`;
        start.parentElement.style.display = "none";
    }else{
    userName.length === 0 ? hello.textContent = `Welcome: Guest` : hello.textContent = `Welcome: ${userName}`;
    start.parentElement.style.display = "none";
    }
})

picBlock.forEach((pic, index) => {
    pic.style.order = orderRange[index];
    pic.addEventListener("click", () => {
        flipBlock(pic);
    });
});
// functions 
function flipBlock(myEl){
    myEl.classList.add("clicked");
    
    let flippedBlocks = allBlocks.filter(flippedBlock => flippedBlock.classList.contains("clicked"));

    if (flippedBlocks.length === 2){
        stopClicking()


        if(flippedBlocks[0].innerHTML === flippedBlocks[1].innerHTML){
            flippedBlocks[0].classList.remove("clicked");
            flippedBlocks[0].classList.add("correct");
            
            flippedBlocks[1].classList.remove("clicked");
            flippedBlocks[1].classList.add("correct");
        } else{
            defaultValue++
            spanTries.innerHTML = `Wrong Tries : ${defaultValue}`;
        }
    };
    setTimeout(() => {
        myEl.classList.remove("clicked");
    }, 1200);
}

function stopClicking(){
    gameBox.classList.add("stopped");
    setTimeout(() => {
        gameBox.classList.remove("stopped");
    }, 600);
}

        function shuffle(array){
            let current = array.length,
            temp, // Stash
            random;
            while (current > 0){
                random = Math.floor(Math.random() * current);
                current--; 
                temp = array[current];
                array[current] = array[random]
                array[random] = temp;
            }
            return array;
        }