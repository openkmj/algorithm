function solution(n) {
    var answer = 0;
    var count = 0;
    for (var i = 1; i <= n; i++) {
        for (var j = i - 1; j >= 0; j--) {
            var r = (i * (i + 1)) / 2 - (j * (j + 1)) / 2;
            count++;
            if (r === n) {
                answer++;
                break;
            } else if (r > n) break;
        }
    }
    return answer;
}
