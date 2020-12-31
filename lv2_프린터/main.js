function solution(priorities, location) {
    var answer = 0;
    while (true) {
        if (isMax(priorities[0], priorities)) {
            answer++;
            if (location === 0) {
                return answer;
            } else {
                priorities.shift();
                location--;
            }
        } else {
            priorities.push(priorities.shift());
            if (location === 0) location = priorities.length - 1;
            else location--;
        }
    }
}

function isMax(item, arr) {
    for (var i = 0; i < arr.length; i++) if (item < arr[i]) return false;
    return true;
}
