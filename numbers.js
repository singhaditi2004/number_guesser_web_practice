var guessInput = document.getElementById("guess");
var guess = parseInt(guessInput.value, 10);

var random = Math.floor(Math.random() * 100) + 1;
console.log(random);

const check = document.getElementById("check").addEventListener("click", function checkelement() {
    var guess = parseInt(guessInput.value, 10); 
    console.log(guess);

    if (!isNaN(guess)) {
        if (guess === random) {
            document.getElementById("answer").innerHTML = "Yes! You guessed it right.";
        } else {
            document.getElementById("answer").innerHTML = "Ohh no! Try again.";
        }
        random =Math.floor(Math.random() * 100) + 1;
        console.log(random);
    } else {
        
        document.getElementById("answer").innerHTML = "Please enter a valid number.";
    }
});
