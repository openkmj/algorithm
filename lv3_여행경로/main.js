function solution(tickets) {
    var possiblePath = [];
    possiblePath = visitAll(
        visit({
            visited: ["ICN"],
            unUsedTickets: tickets,
        })
    );
    var answerIdx = 0;
    for (var i = 1; i < possiblePath.length; i++) {
        for (var j = 0; j < possiblePath[i].visited.length; j++) {
            if (
                possiblePath[answerIdx].visited[j] > possiblePath[i].visited[j]
            ) {
                answerIdx = i;
                break;
            } else if (
                possiblePath[answerIdx].visited[j] < possiblePath[i].visited[j]
            ) {
                break;
            }
        }
    }
    return possiblePath[answerIdx].visited;
}
function visitAll(arr) {
    var tmp = [];
    var final = [];
    for (var i = 0; i < arr.length; i++) {
        var k = visit(arr[i]);
        for (var j = 0; j < k.length; j++) {
            if (k[j].unUsedTickets.length > 0) {
                tmp.push(k[j]);
            } else {
                final.push(k[j]);
            }
        }
    }
    if (tmp.length > 0) {
        return final.concat(visitAll(tmp));
    }
    return final;
}
function visit({ visited, unUsedTickets }) {
    var result = [];
    for (var i = 0; i < unUsedTickets.length; i++) {
        if (visited[visited.length - 1] === unUsedTickets[i][0]) {
            var x = unUsedTickets
                .slice(0, i)
                .concat(unUsedTickets.slice(i + 1));
            result.push({
                visited: visited.concat(unUsedTickets[i][1]),
                unUsedTickets: x,
            });
        }
    }
    return result;
}
