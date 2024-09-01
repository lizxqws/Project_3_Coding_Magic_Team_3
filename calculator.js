let operation = null;

function setOperation(op) {
    operation = op;
}

function calculate() {
    const firstNumber = parseFloat(document.getElementById('firstNumber').value);
    const secondNumber = parseFloat(document.getElementById('secondNumber').value);
    let result;

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        result = 'Помилка: Введiть обидва числа';
    } else {
        switch (operation) {
            case '+':
                result = firstNumber + secondNumber;
                break;
            case '-':
                result = firstNumber - secondNumber;
                break;
            case '*':
                result = firstNumber * secondNumber;
                break;
            case '/':
                if (secondNumber !== 0) {
                    result = firstNumber / secondNumber;
                } else {
                    result = 'Критична помилка: не дiлiть на 0';
                }
                break;
            default:
                result = 'Помилка: Виберiть операцiю';
        }
    }

    document.getElementById('result').value = result;
}