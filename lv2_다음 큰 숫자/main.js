function solution(n) {
    var answer = 0;
    var m = n + 1;
    var n1 = getBinOne(n);
    while (true) {
        if (getBinOne(m) === n1) {
            return m;
        }
        m++;
    }
    return answer;
}
function getBinOne(n) {
    var result = 0;
    var cur = n;
    while (parseInt(cur) > 0) {
        if (cur % 2 === 1) {
            result++;
        }
        cur = parseInt(cur / 2);
    }

    return result;
}
