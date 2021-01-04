function solution(numbers, target) {
    var answer = 0;
    var arrIdx = 0;
    var arr = [target];
    var lastChildLength = 1;
    for (var i = 0; i < numbers.length - 1; i++) {
        for (var k = 0; k < lastChildLength; k++) {
            var tmp = arr[arrIdx];
            arr.push(tmp + numbers[i]);
            arr.push(tmp - numbers[i]);
            arrIdx++;
        }
        lastChildLength *= 2;
    }
    for (var k = 0; k < lastChildLength; k++) {
        var tmp = arr[arrIdx];
        if (tmp + numbers[numbers.length - 1] === 0) answer++;
        if (tmp - numbers[numbers.length - 1] === 0) answer++;
        arrIdx++;
    }

    return answer;
}
