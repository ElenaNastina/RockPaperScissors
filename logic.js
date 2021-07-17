function move(attackMethod)
{
	document.getElementById('restart').style.display = "inline-block";
	let status = "";
	let output = document.getElementById('output');
	let defendMethod = Math.trunc(Math.random() * 3);
	if (defendMethod == 0) // rock
	{
		if (attackMethod == "rock") status = "tie";
		if (attackMethod == "paper") status = "won";
		if (attackMethod == "scissors") status = "lost";
		document.getElementById('paper').style.display = "none";
		document.getElementById('scissors').style.display = "none";
		document.getElementById('rock').onclick = ""
	}
	else if (defendMethod == 1) // paper
	{
		if (attackMethod == "rock") status = "lost";
		if (attackMethod == "paper") status = "tie";
		if (attackMethod == "scissors") status = "won";
		document.getElementById('rock').style.display = "none";
		document.getElementById('scissors').style.display = "none";
		document.getElementById('paper').onclick = ""
	}
	else // scissors
	{
		if (attackMethod == "rock") status = "won";
		if (attackMethod == "paper") status = "lost";
		if (attackMethod == "scissors") status = "tie";
		document.getElementById('rock').style.display = "none";
		document.getElementById('paper').style.display = "none";
		document.getElementById('scissors').onclick = ""
	}
	switch(status)
	{
		case "won":
			output.innerText = "Yay! You won!"
			break;
		case "tie":
			output.innerText = "Hmm, you tied!"
			break;
		case "lost":
			output.innerText = "Oh no! You lost!"
			break;
	}
}

function restart()
{
	document.getElementById('output').innerText = "Please choose a move!";
	document.getElementById('restart').style.display = "none";
	document.getElementById('rock').style.display = "inline-block";
	document.getElementById('paper').style.display = "inline-block";
	document.getElementById('scissors').style.display = "inline-block";
	document.getElementById('rock').onclick = function() { move('rock'); };
	document.getElementById('paper').onclick = function() { move('paper'); };
	document.getElementById('scissors').onclick = function() { move('scissors'); };
}