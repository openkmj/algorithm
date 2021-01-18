function solution(n) {
    var answer = 0;
    var fibo = [0, 1];
    for (var i = 2; i < n + 1; i++) {
        fibo.push((fibo[i - 2] + fibo[i - 1]) % 1234567);
    }
    answer = fibo[n];
    return answer;
}
