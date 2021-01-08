function solution(numbers) {
    var answer = 0;
    numbers = numbers.split("");
    var subNumbers = [];
    for (var i = 1; i < numbers.length + 1; i++) {
        var arr = getNumber(numbers, i);
        subNumbers = subNumbers.concat(arr);
    }
    subNumbers = subNumbers.filter(
        (item, idx) => subNumbers.indexOf(item) === idx
    );

    for (var j = 0; j < subNumbers.length; j++) {
        if (isPrimeNumber(subNumbers[j])) {
            answer++;
        }
    }
    return answer;
}

function isPrimeNumber(number) {
    if (number === 0 || number === 1) return false;
    for (var i = 2; i < number / 2 + 1; i++) {
        if (number % i === 0) return false;
    }
    return true;
}

function getNumber(numbers, count) {
    var arr = selectNumber(numbers, count).map((item) =>
        parseInt(item.join(""))
    );
    return arr.filter((item, idx) => arr.indexOf(item) === idx);
}

function selectNumber(arr, count) {
    if (count === 1) {
        return arr.map((item) => [item]);
    }
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        result = result.concat(
            selectNumber(
                arr.slice(0, i).concat(arr.slice(i + 1)),
                count - 1
            ).map((item) => {
                item.unshift(arr[i]);
                return item;
            })
        );
    }
    return result;
}
