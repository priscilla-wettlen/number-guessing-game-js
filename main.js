      
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(0)
        max = Math.floor(10)
        return Math.floor(Math.random() * (max - min) + min);
    }
   
    let result = getRandomIntInclusive(0,10);
    let randomNum = result;
    console.log(result);

    let userInput = parseInt(prompt("Choose a numbeer between 0 and 10"));
    
    while (userInput > randomNum) {
        parseInt(prompt("Smaller! Try again."));
        randomNum++
    }
    while (userInput < randomNum) {
        parseInt(prompt("Bigger! Try again."));
        randomNum--
    }
    while (userInput === randomNum) {
        alert('Correct!');
            break;
    }
    
    // while(true) {
    
    //     if (userInput > randomNum) {
    //         parseInt(prompt("Smaller! Try again."));
    //             break;
    //     } else if (userInput < randomNum) {
    //         parseInt(prompt("Bigger! Try again."));
    //             break;
    //     } else if (userInput === randomNum) {
    //         alert("Correct!");
    //             break;
    //     }
    // }






   

