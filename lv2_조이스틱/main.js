function solution(name) {
    var answer = 0;
    for (var i = 0; i < name.length; i++) {
        var tmp = name.charCodeAt(i) - 65;
        if (tmp !== 0) {
            answer += 13 - Math.abs(tmp - 13);
        }
    }

    if (name.indexOf("A") === -1) return answer + name.length - 1;

    var x = 0;
    var min = 9999999;
    for (var i = 0; i < name.length - 1; i++) {
        if (name[i] !== "A") {
            x = i;
        } else if (name[i] === "A" && name[i + 1] !== "A") {
            var k =
                name.length - 1 > 2 * x + name.length - (i + 1)
                    ? 2 * x + name.length - (i + 1)
                    : name.length - 1;
            if (k < min) min = k;
        }
    }
    if (min === 9999999) answer += x;
    else answer += min;

    return answer;
}
