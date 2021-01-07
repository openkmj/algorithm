function solution(n) {
    var answer = [];
    var count = 1;
    var tmp = [];
    for (var i = 1; i < n + 1; i++) {
        var tmp2 = [];
        for (var j = 0; j < i; j++) {
            tmp2.push(0);
        }
        tmp.push(tmp2);
    }
    var cur = {
        x: 0,
        y: 0,
    };
    for (var i = 0; i < n; i++) {
        if (i % 3 === 0) {
            while (cur.y + 1 < n && tmp[cur.y + 1][cur.x] == 0) {
                tmp[cur.y][cur.x] = count;
                count++;
                cur.y++;
            }
        } else if (i % 3 === 1) {
            while (cur.x + 1 < n && tmp[cur.y][cur.x + 1] == 0) {
                tmp[cur.y][cur.x] = count;
                cur.x++;
                count++;
            }
        } else {
            while (tmp[cur.y - 1][cur.x - 1] == 0) {
                tmp[cur.y][cur.x] = count;
                cur.y--;
                cur.x--;
                count++;
            }
        }
    }
    tmp[cur.y][cur.x] = count;
    for (var i = 0; i < tmp.length; i++) {
        for (var j = 0; j < tmp[i].length; j++) {
            answer.push(tmp[i][j]);
        }
    }

    return answer;
}
