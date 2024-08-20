let score = JSON.parse(localStorage.getItem
    ('score')) || {
            wins: 0,
            loses:0,
            ties:0
        };
        /*
    if(score === null){
        score = {
            wins: 0,
            loses:0,
            ties:0
        };
    }
        */
    
        document.querySelector('.js-result')
        .innerHTML = `${result}`;
        document.querySelector('.js-move')
        .innerHTML = `You ${playerMove} - Computer ${computerMove}`;
    
    
        updateScoreElement();


    function playGame(playerMove){
        const computerMove = pickcomputermove();
    let result = '';
    if(playerMove === 'scissors'){
        if(computerMove === 'rock'){
        result = 'you lose';
    }
    else if(computerMove === 'paper'){
        result = 'you win';
    }
    else if(computerMove === 'scissors'){
        result = 'tie';
    }
    }
    else if(playerMove === 'paper' ){
        if(computerMove === 'rock'){
        result = 'you win';
    }
    else if(computerMove === 'paper'){
        result = 'tie';
    }
    else if(computerMove === 'scissors'){
        result = 'you lose';
    }
    }
    else if(playerMove === 'rock'){
     if(computerMove === 'rock'){
        result = 'tie';
    }
    else if(computerMove === 'paper'){
        result = 'you lose';
    }
    else if(computerMove === 'scissors'){
        result = 'you win';
    }
    }

    if(result === 'you win'){
        score.wins += 1;
    } else if(result === 'you lose'){
        score.loses += 1;
    } else if(result === 'tie'){
        score.ties += 1;}

    localStorage.setItem('score', JSON.stringify(score));  
    updateScoreElement();

    document.querySelector('.js-result')
        .innerHTML = ` ${result}`;
        document.querySelector('.js-move')
        .innerHTML = `You
    <img src="${playerMove}-emoji.png" class="move-icon">
    <img src="${computerMove}-emoji.png" class="move-icon"> Computer`;
    

    }
    function updateScoreElement(){
        document.querySelector('.js-score')
        .innerHTML = `wins: ${score.wins}, loses:
        ${score.loses}, ties: ${score.ties}`;

    }

    function pickcomputermove() {
            const randomNumber = Math.random();
            let computerMove = ''
        if(randomNumber >= 0 && randomNumber < (1/3))
        {
            computerMove = 'rock';
        }
        else if(randomNumber >= 1/3 && randomNumber < 2/3)
        {
            computerMove = 'paper';
        }
        else if(randomNumber <= 1 && randomNumber >= 2/3)
        {   computerMove = 'scissors';
        }
        return computerMove;
        }