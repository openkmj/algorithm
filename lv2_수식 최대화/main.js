function solution(expression) {
    var answer = 0;
    var reg = /\+|\-|\*/g;
    var operators = expression.match(reg);
    var numbers = expression.split(reg).map((i) => parseInt(i));

    var priority = [
        ["+", "-", "*"],
        ["-", "+", "*"],
        ["+", "*", "-"],
        ["*", "+", "-"],
        ["*", "-", "+"],
        ["-", "*", "+"],
    ];

    for (var i = 0; i < priority.length; i++) {
        var tmp = Math.abs(
            calculateFullExpression(operators, numbers, priority[i])
        );
        console.log(priority[i], tmp);
        if (tmp > answer) answer = tmp;
    }

    return answer;
}
function calculateFullExpression(operators, numbers, priority) {
    var target1 = operators.map((i) => i);
    var target2 = numbers.map((i) => i);
    var t;
    while (target1.length > 0) {
        if (target1.indexOf(priority[0]) !== -1) {
            t = target1.indexOf(priority[0]);
            target2[t] = calculate(target2[t], target2[t + 1], priority[0]);
            target2.splice(t + 1, 1);
            target1.splice(t, 1);
        } else if (target1.indexOf(priority[1]) !== -1) {
            t = target1.indexOf(priority[1]);
            target2[t] = calculate(target2[t], target2[t + 1], priority[1]);
            target2.splice(t + 1, 1);
            target1.splice(t, 1);
        } else if (target1.indexOf(priority[2]) !== -1) {
            t = target1.indexOf(priority[2]);
            target2[t] = calculate(target2[t], target2[t + 1], priority[2]);
            target2.splice(t + 1, 1);
            target1.splice(t, 1);
        }
    }
    return target2[0];
}

function calculate(num1, num2, action) {
    if (action === "+") {
        return num1 + num2;
    } else if (action === "-") {
        return num1 - num2;
    } else if (action === "*") {
        return num1 * num2;
    }
}
