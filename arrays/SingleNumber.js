var singleNumber = function (nums) {
    const numCount = {};

    for (const num of nums) {
        if (numCount[num] === undefined) {
            numCount[num] = 1;
        } else {
            numCount[num]++;
        }
    }

    for (const num of nums) {
        if (numCount[num] === 1) {
            return num;
        }
    }

    return -1;
};
