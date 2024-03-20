var guessInput = document.getElementById("guess");

var hint ="दुख दर्द पीड़ा";
document.getElementById("check").addEventListener("click", function checkelement() {
    var guess =guessInput ; 
    console.log(guess);

    
        if (guess === random) {
            document.getElementById("answer").innerHTML = "Yes! You guessed it right.";
        } else {
            document.getElementById("answer").innerHTML = "Ohh no! Try again.";
        }
        random =Math.floor(Math.random() * 100) + 1;
        console.log(random);
    } 
});
