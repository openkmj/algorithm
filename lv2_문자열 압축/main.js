function solution(s) {
    var answer = 1000;
    for (var i = 1; i < s.length / 2 + 1; i++) {
        var tmp = getShortenStr(s, i).length;
        if (answer > tmp) answer = tmp;
    }

    return answer;
}

function getShortenStr(str, num) {
    if (str.length < num) return str;
    var x = shorten(str, num);
    if (x > 1)
        return x + str.slice(0, num) + getShortenStr(str.slice(num * x), num);
    else return str.slice(0, num) + getShortenStr(str.slice(num), num);
}

function shorten(str, num) {
    if (str.length < num * 2) return 1;
    if (str.slice(0, num) === str.slice(num, num * 2))
        return shorten(str.slice(num), num) + 1;
    else return 1;
}
