function solution(arr1, arr2) {
    var answer = [];
    for (var i = 0; i < arr1.length; i++) {
        var tmp = [];
        for (var j = 0; j < arr2[0].length; j++) {
            var x = 0;
            for (var k = 0; k < arr1[1].length; k++) {
                x += arr1[i][k] * arr2[k][j];
            }
            tmp.push(x);
        }
        answer.push(tmp);
    }

    return answer;
}
