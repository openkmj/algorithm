function solution(n) {
    var answer = "";
    var x = n;
    var y = x % 3;
    if (y === 0) {
        y = 4;
        x = parseInt(x / 3) - 1;
    } else {
        x = parseInt(x / 3);
    }
    while (x !== 0) {
        answer = y + answer;
        y = x % 3;
        if (y === 0) {
            y = 4;
            x = parseInt(x / 3) - 1;
        } else {
            x = parseInt(x / 3);
        }
    }
    answer = y + answer;
    return answer;
}
