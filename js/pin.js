function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

function generatePin() {
    document.getElementById('genarated-pin').value = getPin();
}

document.getElementById('keypad').addEventListener('click', function (event) {
    const input = event.target.innerText;
    const display = document.getElementById('display');
    if (isNaN(input)) {
        if (input == 'C') {
            display.value = '';
        }
    }
    else {
        const displayValue = display.value;
        display.value = displayValue + input;
    }
})

function verifyPin() {
    const generatedPin = document.getElementById('genarated-pin').value;
    const myPin = document.getElementById('display').value;
    if (generatedPin == myPin) {
        document.getElementById('not-match').style.display = 'none';
        document.getElementById('match').style.display = 'block';

        // console.log('matched');
    }
    else {
        document.getElementById('match').style.display = 'none';
        document.getElementById('not-match').style.display = 'block';
    }
}