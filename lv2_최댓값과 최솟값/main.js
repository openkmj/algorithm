function solution(s) {
    var answer = "";
    var numList = s.split(" ");
    var max = parseInt(numList[0]),
        min = parseInt(numList[0]);
    for (var i = 0; i < numList.length; i++) {
        var tmp = parseInt(numList[i]);
        if (tmp > max) max = tmp;
        else if (tmp < min) min = tmp;
    }
    answer = min + " " + max;
    return answer;
}
