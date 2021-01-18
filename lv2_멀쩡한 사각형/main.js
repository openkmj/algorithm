function solution(w, h) {
    var answer = 0;

    var p = [0, 0];
    var x, y;
    while (true) {
        x = p[0] + 1;
        y = (x * h) / w;

        var tmp = Math.ceil(y) - Math.floor(p[1]);
        answer += tmp;

        if (y === Math.ceil(y)) {
            answer = answer * (w / x);
            break;
        }

        p = [x, y];

        if (x === w) break;
    }

    return w * h - answer;
}
