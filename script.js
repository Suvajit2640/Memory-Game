let arr = [];
let z = 0;
let randomnumber;
let compare = [];
let boxes = document.querySelectorAll(".box");
let timer=60;
let count = 0;
let matchedcount = 0;
let container = document.querySelector(".container")
var m;
timer = 30;
callreset=()=>{
    reset=document.querySelector(".resetgame")
    reset.addEventListener("click",()=>{
        window.location.reload();
        
    })
}
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Generate an array containing two instances of numbers from 1 to 6
let numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];

// Shuffle the array
shuffle(numbers);

// Function to get the next number from the shuffled array
function getNextNumber() {
    if (numbers.length === 0) {
        return null; // All numbers have been used
    }
    return numbers.pop(); // Remove and return the last element of the array
}
for (let i = 0; i < 12; i++) {

    arr[i] = (getNextNumber()); // Output will be a random number from 1 to 6
}

console.log('array is', arr);

boxes.forEach(box => {

    box.addEventListener("click", (e) => {
        console.log(e.target);
        e.target.style.background = `url(images/${arr[e.target.id]}.jpg) center center/cover`
        console.log('box clicked');

        count = count + 1;
        if (count < 3) {
            if (count == 1) {
                firstcard = e.target;
                firstcard.disabled = true;
            }
            else if (count == 2) {
                secondcard = e.target;

                if (firstcard.style.background == secondcard.style.background) {
                    console.log('first card', firstcard);
                    console.log('2nd card', secondcard);
                    firstcard.style.border = "5px solid red"
                    secondcard.style.border = "5px solid red"
                    firstcard.style.transform="scale(1)"
                    secondcard.style.transform="scale(1)"


                    firstcard.disabled = true;
                    secondcard.disabled = true;
                    matchedcount++;


                }
                else {
                    setTimeout(() => {

                        firstcard.style.background = "#fdb34bea";
                        secondcard.style.background = "#fdb34bea";
                        firstcard.disabled = false;
                        boxes.forEach(box => {
                            box.disabled = false;
                        })



                    }, 1000);

                    boxes.forEach(box => {
                        box.disabled = true;
                    })


                }
                count = 0;
                if (matchedcount == 6) {
                    count = 1000;
                    boxes.forEach(box => {
                        box.disabled = true;
                    })
                    setTimeout(() => {
                        container.innerHTML = ` 
                        <div class="newpage">
                        <h1>Game Over</h1>
                        
                        <p> <span>Congratulations !! </span>You have completed this game </p>
                        
                        <button class="resetgame">Reset Game</button>
                        </div>`
                    callreset();
                    }, 1700);
                    

                }


            }

        }
        console.log(count);



        z++;
    })

});

