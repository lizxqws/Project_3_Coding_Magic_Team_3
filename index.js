const targetNumberNumberGuess = Math.floor(Math.random() * 10) + 1;
function checkNumberNumberGuess() {
    const userNumberNumberGuess = parseInt(document.getElementById('number-inputNumberGuess').value);
	console.log(userNumberNumberGuess);
    const resultMessageNumberGuess = document.getElementById('result-messageNumberGuess');
	if(isNaN(userNumberNumberGuess)){
		alert('Введiть число!!!!')
		resultMessageNumberGuess.textContent = '';
		return;
		}
    if (userNumberNumberGuess === targetNumberNumberGuess) {
        resultMessageNumberGuess.textContent = `Вітаю, ви вгадали число! (${targetNumberNumberGuess})`;
		resultMessageNumberGuess.classList.add('ResultMGood');
        } 
	else {
        resultMessageNumberGuess.textContent = `Ви програли, комп’ютер загадав (${targetNumberNumberGuess})`;
		resultMessageNumberGuess.classList.add('ResultMBad');
    }
}