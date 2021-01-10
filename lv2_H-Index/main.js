function solution(citations) {
    var answer = 0;
    var m, n;
    for (var i = 0; i <= citations.length; i++) {
        m = 0; //h번 이상 인용된 논문 수 >= h
        n = 0; //h번 미만 인용된 논문 수 < h
        for (var j = 0; j < citations.length; j++) {
            if (citations[j] >= i) m++;
            if (citations[j] < i) n++;
        }
        if (m >= i && n <= i && i >= answer) answer = i;
    }

    return answer;
}
