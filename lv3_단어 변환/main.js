function solution(begin, target, words) {
    var answer = 0;
    if (!words.includes(target)) return 0;
    var tmp = [];
    var next = getNext(begin, words);
    for (var i = 0; i < next.length; i++) {
        var k = next[i];
        if (k == target) return 1;
        tmp.push([k, 1]);
    }
    while (tmp.length > 0) {
        var curIdx = tmp.length - 1;
        var [current, count] = tmp[tmp.length - 1];
        next = getNext(current, words);
        for (var i = 0; i < next.length; i++) {
            var k = next[i];
            if (k == target) return count + 1;
            if (tmp.find((i) => i[0] == k) == undefined) {
                tmp.push([k, count + 1]);
            }
        }
        tmp.splice(curIdx, 1);
    }

    return answer;
}

function getDiff(a, b) {
    var count = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] == b[i]) count++;
    }
    return count;
}

function getNext(start, words) {
    var tmp = [];
    for (var i = 0; i < words.length; i++) {
        if (getDiff(start, words[i]) == start.length - 1) tmp.push(words[i]);
    }
    return tmp;
}
console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"]));
