//Declaring variables
let number1, number2,number3, operator;
let calculateExpr = [];
let expr = document.getElementById('expression');
let result = document.getElementById('result');

//Function to read numbers
function displayNumber(num) {

    //Remove styling and reseting values when starting a new calculation without clearing the previous one
    if (result.innerText != '') {
        result.innerText = '';
        expr.innerText = 0;
        expr.classList.remove('aftervalidation');
    }

    //Avoid the default value (0) given in the expression
    if (expr.innerText == 0) {
        expr.innerText = num;
        // calculateExpr.push(num);
    }
    else {
        expr.innerText += num;
        // calculateExpr.push(num);
    }
}

//Function to clear a calculation  -- reset the values and styling (AC Button on calculator)
function clearScreen() {
    expr.innerText = 0;
    expr.classList.remove('aftervalidation');
    result.innerText = '';
}


//Function to evaluate the expression (= Button on calculator)
function findResult() {

    //Convert the input string into array
    calculateExpr = expr.innerText.split('');

    //Getting the operator from the expression array
    operator = calculateExpr.filter(item => item === '+' || item === '-' || item === '*' || item === '/');

    //Calculation with a single operator
    if (operator.length == 1) {

        //Getting the first and second operands as 2 different numbers
        number1 = calculateExpr.splice(0, calculateExpr.indexOf(operator[0])).map(Number);
        number2 = calculateExpr.splice(calculateExpr.indexOf(operator[0]) + 1).map(Number);

        //Converting operands array to number
        const operand1 = number1.reduce((accum, digit) => (accum * 10) + digit, 0);
        const operand2 = number2.reduce((accum, digit) => (accum * 10) + digit, 0);

        //Performing operation using conditional statement
        if (operator[0] === '+') {
            result.innerText = operand1 + operand2;
        }
        else if (operator[0] === '-') {
            result.innerText = operand1 - operand2;
        }
        else if (operator[0] === '*') {
            result.innerText = operand1 * operand2;
        }
        else if (operator[0] === '/') {
            result.innerText = operand1 / operand2;
        }
    }

    //Calculation with 2 operators
    else if (operator.length == 2) {
        //Getting the first and second operands as 2 different numbers
        number1 = parseInt(expr.innerText.substring(0, calculateExpr.indexOf(operator[0])));
        number2 = parseInt(expr.innerText.substring(calculateExpr.indexOf(operator[0]) + 1, calculateExpr.indexOf(operator[1])));
        number3 = parseInt(expr.innerText.substring(calculateExpr.indexOf(operator[1]) + 1, expr.innerText.length));

        //Performing operation using conditional statement
        if (operator[0] === '+') {
            if (operator[1] === '+') {
                result.innerText = number1 + number2 + number3;
            }
            else if (operator[1] === '-') {
                result.innerText = number1 + number2 - number3;
            }
            else if (operator[1] === '*') {
                result.innerText = number1 + number2 * number3;
            }
            else if (operator[1] === '/') {
                result.innerText = number1 + number2 / number3;
            }
        }
        else if (operator[0] === '-') {
            if (operator[1] === '+') {
                result.innerText = number1 - number2 + number3;
            }
            else if (operator[1] === '-') {
                result.innerText = number1 - number2 - number3;
            }
            else if (operator[1] === '*') {
                result.innerText = number1 - number2 * number3;
            }
            else if (operator[1] === '/') {
                result.innerText = number1 - number2 / number3;
            }
        }
        else if (operator[0] === '*') {
            if (operator[1] === '+') {
                result.innerText = number1 * number2 + number3;
            }
            else if (operator[1] === '-') {
                result.innerText = number1 * number2 - number3;
            }
            else if (operator[1] === '*') {
                result.innerText = number1 * number2 * number3;
            }
            else if (operator[1] === '/') {
                result.innerText = number1 * number2 / number3;
            }
        }
        else if (operator[0] === '/') {
            if (operator[1] === '+') {
                result.innerText = number1 / number2 + number3;
            }
            else if (operator[1] === '-') {
                result.innerText = number1 / number2 - number3;
            }
            else if (operator[1] === '*') {
                result.innerText = number1 / number2 * number3;
            }
            else if (operator[1] === '/') {
                result.innerText = number1 / number2 / number3;
            }
        }
    }

    //Add styling after evaluation
    expr.classList.add('aftervalidation');
}

//Function to delete the last entry (CE Button on calculator)
function deleteKey() {
    if (expr.innerText.length == 1) {
        expr.innerText = 0;
        // calculateExpr=[];
    }
    else {
        expr.innerText = expr.innerText.slice(0, -1);
        // calculateExpr.pop();
    }
}