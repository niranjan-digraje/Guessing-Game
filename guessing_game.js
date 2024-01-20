const max = prompt("enter the max number : ");

const random = Math.floor(Math.random()*max);

let guess = prompt("guess the number : ");

while(true){
    if(guess == "quit"){
        console.log("user quit");
        break;
    }

    if(guess == random){
        console.log("congrates!!you guess the number...");
        break;
    }
    else if(guess < random){
        guess = prompt("your guess is wrong, please guess again (hint:enter larger number): ");
    }else if(guess > random){
        guess = prompt("your guess is wrong, please guess again (hint:enter smaller number): ");
    }
}