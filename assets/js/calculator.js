function displayNumber(num) {
    let expr = document.getElementById('expression');
    if (document.getElementById('result').innerText != '') {
        document.getElementById('result').innerText = '';
        expr.innerText = 0;
        expr.classList.remove('aftervalidation');
    }
    if (expr.innerText == 0) {
        expr.innerText = num;
    }
    else {
        expr.innerText += num;
    }
}
function clearScreen() {
    let expr = document.getElementById('expression');
    expr.innerText = 0;
    expr.classList.remove('aftervalidation');
    document.getElementById('result').innerText = '';
}
function findResult() {
    let expr = document.getElementById('expression');
    if (Number.isInteger(eval(expr.innerText))) {
        document.getElementById('result').innerText = eval(expr.innerText)
    }
    else {
        document.getElementById('result').innerText = eval(expr.innerText).toFixed(12);
    }
    expr.classList.add('aftervalidation');
}
function deleteKey() {
    let expr = document.getElementById('expression');
    if (expr.innerText.length == 1) {
        expr.innerText = 0;
    }
    else {
        expr.innerText = expr.innerText.slice(0, -1);
    }

}