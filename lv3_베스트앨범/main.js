function solution(genres, plays) {
    var answer = [];
    var dict = {};

    for (var i = 0; i < genres.length; i++) {
        if (dict[genres[i]] == undefined) {
            dict[genres[i]] = {
                total: plays[i],
                playList: [[i, plays[i]]],
            };
        } else {
            dict[genres[i]].total += plays[i];
            dict[genres[i]].playList.push([i, plays[i]]);
        }
    }
    for (var i in dict) {
        dict[i].playList.sort((a, b) => {
            if (b[1] === a[1]) return a[0] - b[0];
            else return b[1] - a[1];
        });
    }
    while (Object.keys(dict).length > 0) {
        var tmp = getMaxGenre(dict);
        if (dict[tmp].playList.length > 1) {
            answer.push(dict[tmp].playList[0][0]);
            answer.push(dict[tmp].playList[1][0]);
        } else {
            answer.push(dict[tmp].playList[0][0]);
        }
        delete dict[tmp];
    }
    return answer;
}
function getMaxGenre(dict) {
    return Object.keys(dict).reduce((a, b) => {
        return dict[a].total > dict[b].total ? a : b;
    });
}
