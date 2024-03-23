function clearScreen() {
    document.getElementById('result').value = "";
}


let operators = ['+', '-', '*', '/'];

function display(value) {
    const resultInput = document.getElementById("result");
    const currentValue = resultInput.value;

    if (value === '') {
        // If value is empty, allow only numbers
        if (!isNaN(parseInt(currentValue.charAt(currentValue.length - 1)))) {
            resultInput.value += value;
        }
        return;
    } else if (operators.includes(value)) {
        // The charAt() method returns the character at the specified index within the string
        if (currentValue !== '' && operators.includes(currentValue.charAt(currentValue.length - 1))) {
            // If the last entered character is an operator, replace it
            resultInput.value = currentValue.slice(0, -1) + value;
        } else {
            resultInput.value += value;
        }
        return;
    }
    resultInput.value += value;
}


function calculateResult() {
    const x = document.getElementById('result').value;
    const y = eval(x)
    document.getElementById('result').value = y;

}