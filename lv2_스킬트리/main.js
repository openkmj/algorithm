function solution(skill, skill_trees) {
    var answer = 0;
    var arr; // 스킬트리에 포함된 스킬의 인덱스를 저장하는 배열
    var flag;
    const MAX = 27;

    for (var i = 0; i < skill_trees.length; i++) {
        flag = true;
        arr = [];
        for (var j = 0; j < skill.length; j++) {
            var k = skill_trees[i].indexOf(skill[j]);
            if (k == -1) arr.push(MAX);
            // 선행스킬이 없는 경우 해당 스킬의 인덱스에 맥스값을 줌
            else {
                if (arr.length > 0 && arr[arr.length - 1] > k) {
                    // 선행 스킬의 인덱스와 비교
                    flag = false;
                    break;
                } else arr.push(k);
            }
        }
        if (flag) answer++;
    }

    return answer;
}
