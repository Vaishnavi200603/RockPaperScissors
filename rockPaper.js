<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rock And Paper</title>
</head>
<body>
    <p>Rock Paper Scissors</p>

    <button onclick="
        playGame('Rock');
    ">Rock
    </button>

    <button onclick="
        playGame('Paper');
    ">Paper</button>
        
    <button onclick="
        playGame('Scissors');
    ">Scissors</button>

    <button onclick="
        score.wins = 0;
        score.losses = 0;
        score.ties = 0;
        localStorage.removeItem('score');
    "> Reset Button
    </button>

    <!-- javaScript work here
        When we click a button
        1. Computer randomly selects a move
        2. Compare the moves to get the result
        3. Update the score
        4. Display the result and score in pop-up
    -->
    <script>
        
        let score = JSON.parse(localStorage.getItem('score')) || {
                wins: 0,
                losses: 0,
                ties: 0
            };

        /*if(!score){     //"!score" is equal to "score === null"
            score = {
                wins: 0,
                losses: 0,
                ties: 0
            };
        }*/
        
            function playGame(playerMove){
            const computerMOve = pickComputerName();

            //2
            let result2 = '';
            if(playerMove === 'Scissors'){
                if(computerMove === 'Scissors'){
                    result = 'Tie';
                }
                else if(computerMove === 'Rock'){
                    result = 'You Lose';
                }
                else{
                    result = 'You Win';
                }
            }
            else if(playerMove === 'Paper'){
                if(computerMove === 'Paper'){
                    result = 'Tie';
                }
                else if(computerMove === 'Scissors'){
                    result = 'You Lose';
                }
                else{
                    result = 'You Win';
                }
            }
            else{
                if(computerMove === 'Rock'){
                    result = 'Tie';
                }
                else if(computerMove === 'Paper'){
                    result = 'You Lose';
                }
                else{
                    result = 'You Win';
                }
            }

            //3
            if(result === 'You Win'){
                score.wins += 1;
            }
            else if(result === 'You Lose'){
                score.losses +=1;
            }
            else{
                score.ties +=1;
            }

            localStorage.setItem('score',JSON.stringify(score));

            //4
            alert(`You Picked ${playerMove}. Computer Picked ${computerMove}. ${result} \n wins: ${score.wins}. losses: ${score.losses}. ties: ${score.ties}`);


        }

        let computerMove = '';  //variable to need to declare outside the function - it's a global variable
        function pickComputerName(){

        const randomNumber = Math.random(); //Math.random generate random number between zero and one
        // in zero to one we divide
        // 0 - 1/3 = Rock
        // 1/3 - 2/3 = Paper
        // 2/3 - 1 = Scissors
    
        //1
        
        if(randomNumber>=0 && randomNumber<1/3){
            computerMove = 'Rock';
        }
        else if(randomNumber>=1/3 && randomNumber<2/3){
            computerMove = 'Paper';
        }
        else{
            computerMove = 'Scissors';
        } 
        return computerMove;
    }  
    </script>
</body>
</html>
