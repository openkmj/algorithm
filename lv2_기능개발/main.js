function solution(progresses, speeds) {
    var answer = [];
    while (progresses.length > 0) {
        for (var j = 0; j < progresses.length; j++) {
            if (progresses[j] < 100) {
                progresses[j] += speeds[j];
            }
        }
        var cnt = 0;
        while (progresses.length > 0) {
            if (progresses[0] >= 100) {
                progresses.shift();
                speeds.shift();
                cnt++;
            } else {
                break;
            }
        }
        if (cnt > 0) answer.push(cnt);
    }

    return answer;
}
