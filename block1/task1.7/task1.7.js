let username = prompt('Whats Your Name?');
let randomnumber = Math.floor(Math.random() * 100);

alert('Hello ' + username + '! Please guess the number between 1 and 100');

let guess = prompt('Whats your first guess?');

while (guess != randomnumber){
    if(guess < randomnumber){
        alert('Guess higher!');
    } else {
        alert('Guess lower!');
    }
    guess = prompt('Guess again');
}

alert('Correct! The Number was ' + randomnumber);