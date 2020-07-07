function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function renderResult(playerPoints, computerPoints) {
    document.querySelector("#result span").innerHTML = playerPoints + '-' + computerPoints;
}
