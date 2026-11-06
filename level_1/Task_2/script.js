document.addEventListener('DOMContentLoaded', function () {

    var colorButton = document.getElementById('color-button');
    var colorLabel = document.getElementById('color-label');

    var colors = [
        '#e74c3c',
        '#e67e22',
        '#f1c40f',
        '#2ecc71',
        '#1abc9c',
        '#3498db',
        '#9b59b6',
        '#e84393',
        '#00cec9',
        '#6c5ce7',
        '#fd79a8',
        '#00b894'
    ];

    colorButton.addEventListener('click', function () {
        var randomIndex = Math.floor(Math.random() * colors.length);
        var newColor = colors[randomIndex];

        colorButton.style.backgroundColor = newColor;
        colorButton.style.boxShadow = '0 4px 16px ' + newColor + '4D';
        colorLabel.textContent = 'Current color: ' + newColor;
    });

    var greetingButton = document.getElementById('greeting-button');
    var greetingDisplay = document.getElementById('greeting-display');
    var greetingIcon = document.getElementById('greeting-icon');
    var greetingText = document.getElementById('greeting-text');
    var greetingTime = document.getElementById('greeting-time');

    greetingButton.addEventListener('click', function () {
        var now = new Date();
        var hour = now.getHours();
        var minutes = now.getMinutes();

        var ampm = hour >= 12 ? 'PM' : 'AM';
        var displayHour = hour % 12;
        if (displayHour === 0) displayHour = 12;
        var displayMinutes = minutes < 10 ? '0' + minutes : minutes;
        var timeString = displayHour + ':' + displayMinutes + ' ' + ampm;

        var greeting = '';
        var icon = '';

        if (hour >= 5 && hour < 12) {
            greeting = 'Good Morning!';
            icon = '🌅';
        } else if (hour >= 12 && hour < 17) {
            greeting = 'Good Afternoon!';
            icon = '☀️';
        } else if (hour >= 17 && hour < 21) {
            greeting = 'Good Evening!';
            icon = '🌇';
        } else {
            greeting = 'Good Night!';
            icon = '🌙';
        }

        alert(greeting + '\nThe current time is ' + timeString);

        greetingIcon.textContent = icon;
        greetingText.textContent = greeting;
        greetingTime.textContent = 'Current time: ' + timeString;
        greetingDisplay.classList.remove('hidden');
    });

    var num1Input = document.getElementById('num1');
    var num2Input = document.getElementById('num2');
    var calcButton = document.getElementById('calc-button');
    var calcResult = document.getElementById('calc-result');
    var resultValue = document.getElementById('result-value');

    calcButton.addEventListener('click', function () {
        var num1 = num1Input.value;
        var num2 = num2Input.value;

        if (num1 === '' || num2 === '') {
            alert('Please enter both numbers before calculating.');
            return;
        }

        var number1 = parseFloat(num1);
        var number2 = parseFloat(num2);
        var sum = number1 + number2;

        if (sum % 1 !== 0) {
            sum = parseFloat(sum.toFixed(2));
        }

        resultValue.textContent = sum;
        calcResult.classList.remove('hidden');
    });

    num1Input.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            calcButton.click();
        }
    });

    num2Input.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            calcButton.click();
        }
    });

});
