function solution(clothes) {
    var answer = 1;
    var closet = {};
    for (var i = 0; i < clothes.length; i++) {
        if (closet[clothes[i][1]]) {
            closet[clothes[i][1]].push(clothes[i][0]);
        } else {
            closet[clothes[i][1]] = [clothes[i][0]];
        }
    }

    for (var i in closet) {
        answer = answer * (closet[i].length + 1);
    }
    answer--;
    return answer;
}
