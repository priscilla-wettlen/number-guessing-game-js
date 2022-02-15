      
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(0)
        max = Math.floor(10)
        return Math.floor(Math.random() * (max - min) + min);
    }
    let result = getRandomIntInclusive(0,10);
    let randomNum = result;
    let userInput = parseInt(prompt("Enter a numbeer between 0 and 10"));

    // prompt("Enter a number between 0 and 10"); {
    while (true) {
        if (userInput > randomNum) {
            parseInt(prompt("Less! Try again"))
            break
        } else if (userInput < randomNum) {
            parseInt(prompt("More! Try again"))
            break
        } else if (userInput === randomNum) {
            alert('Correct!')
            break
        }
        
    }

    // do {
    //     alert('Less!')
    //     parseInt(prompt("Enter a numbeer between 0 and 10"))
    // } while ;
    // do {
    //     alert('More!')
    //     parseInt(prompt("Enter a numbeer between 0 and 10"))
    // } while (userInput < randomNum);
    // do {
    //     alert('Correct!')
    // } while (userInput === randomNum);



   

