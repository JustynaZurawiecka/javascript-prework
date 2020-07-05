function getMoveName(argMoveId) {
    if(argMoveId == 1){
        return 'kamień'
    } else if(argMoveId == 2) {
        return 'papier';  
    } else if(argMoveId == 3) {
        return 'nożyce';
    }
    return 'nieznany ruch';
}

let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = getMoveName(randomNumber);
let playerMove = getMoveName(prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.'));

function displayResult(argComputerMove, argPlayerMove){
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  
    if((argComputerMove == 'kamień' && argPlayerMove == 'papier') || (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') || (argComputerMove == 'papier' && argPlayerMove == 'nożyce') ){
    printMessage('Ty wygrywasz!');
    } else if((argComputerMove == 'kamień' && argPlayerMove == 'kamień') || (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') || (argComputerMove == 'papier' && argPlayerMove == 'papier') ){
    printMessage('Remis');
	} else if(argPlayerMove != 'kamień' || argPlayerMove != 'nożyce' || argPlayerMove != 'papier') {
    printMessage('Niedozwolone!');
	} else {
    printMessage('Tym razem przegrywasz :(');
	}
  }

printMessage(displayResult(computerMove,playerMove));
