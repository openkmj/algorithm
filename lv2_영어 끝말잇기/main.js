function solution(n, words) {
    for (var i = 1; i < words.length; i++) {
        if (words[i - 1][words[i - 1].length - 1] !== words[i][0]) {
            return [(i % n) + 1, parseInt(i / n) + 1];
        }
        for (var j = 0; j < i - 1; j++) {
            if (words[j] === words[i]) {
                return [(i % n) + 1, parseInt(i / n) + 1];
            }
        }
    }

    return [0, 0];
}
