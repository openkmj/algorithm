function solution(n, times) {
    times.sort((a, b) => a - b);

    var l = times[0];
    var r = times[0] * n;

    while (l < r) {
        var m = Math.floor((l + r) / 2);
        var tmp = 0;
        for (var i = 0; i < times.length; i++) {
            tmp = tmp + Math.floor(m / times[i]);
        }
        if (tmp < n) l = m + 1;
        else r = m;
    }
    return r;
}
