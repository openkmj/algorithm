function solution(brown, yellow) {
    var answer = [];

    for (var i = 1; i < (brown - 4) / 2; i++) {
        if (i * ((brown - 4) / 2 - i) == yellow)
            return [(brown - 4) / 2 - i + 2, i + 2];
    }

    return answer;
}
