
module.exports = function check(str, bracketsConfig) {

    arr = [];

    arr.push(str.charAt(0));

    for (let i = 1; i < str.length; i++) {        
        result = true;

        for (let symbol of bracketsConfig) {
            conditionFirst = arr[arr.length-1] === symbol[0];
            conditionSecond = str.charAt(i) === symbol[1];

            if (conditionFirst && conditionSecond) {
                arr.pop();
                result = false;
            }
        }

        result ? arr.push(str.charAt(i)) : '';
        
    }

    return arr.length === 0;
}