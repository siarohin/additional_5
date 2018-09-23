
module.exports = function check(str, bracketsConfig) {

    var arr = [],
    	result;

    arr.push(str.charAt(0));
    // console.log(arr);

    for (var i = 1; i < str.length; i++) {        
        result = true;
        for (var symbol of bracketsConfig) {
            if (arr[arr.length-1] === symbol[0] && str.charAt(i) === symbol[1]) {
                arr.pop();
                result = false; break;
            }
        }

        if (result == true) {
        	arr.push(str.charAt(i));
        }

    }

    return arr.length === 0;
}