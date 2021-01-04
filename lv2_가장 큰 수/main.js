function solution(numbers) {
    var answer = "";
    numbers.sort(function (a, b) {
        return compareString(a.toString(), b.toString());
    });
    for (var k = 0; k < numbers.length; k++) {
        if (answer === "0" && numbers[k] === 0) {
        } else {
            answer = answer + numbers[k].toString();
        }
    }
    return answer;
}

function compareString(a, b) {
    var iteration = a.length > b.length ? b.length : a.length;
    for (var i = 0; i < iteration; i++) {
        if (a[i] > b[i]) return -1;
        else if (a[i] < b[i]) return 1;
    }
    if (a.length != b.length) {
        if (parseInt(a + b) > parseInt(b + a)) return -1;
        else if (parseInt(b + a) > parseInt(a + b)) return 1;
        else return 0;
    } else return 0;
}
