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
    } else if((argComputerMove == argPlayerMove) ){
    printMessage('Remis');
	} else if(argPlayerMove == 'nieznany ruch') {
    printMessage('Niedozwolone!');
	} else {
    printMessage('Tym razem przegrywasz :(');
	}
  }

printMessage(displayResult(computerMove,playerMove));
