const sumAll = function(first, second) {
    sum = 0;
    if (second <= first) {
        let temp = 0;
        temp = first;
        first = second;
        second = temp;
    }
    for (let i = first; i <= second; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
