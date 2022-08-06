const removeFromArray = function(arr, val) {
    let i = arr.indexOf(val);
    arr.splice(i, 1);
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
