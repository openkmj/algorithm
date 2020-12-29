function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    var bridge = Array.from({ length: bridge_length - 1 }, () => 0);
    var curWeight;

    bridge.push(truck_weights[0]);
    curWeight = truck_weights.shift();
    answer++;

    while (curWeight !== 0 || truck_weights.length !== 0) {
        curWeight = curWeight - bridge.shift();
        if (curWeight + truck_weights[0] <= weight) {
            curWeight = curWeight + truck_weights[0];
            bridge.push(truck_weights.shift());
        } else {
            bridge.push(0);
        }
        answer++;
    }

    return answer;
}
