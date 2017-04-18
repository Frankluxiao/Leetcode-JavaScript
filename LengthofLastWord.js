/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var arr = s.split(' '),
        len = arr.length,
        i;

    for(i = len-1; i >= 0; i--) {
        if(arr[i] !== '' && arr[i] !== ' ') {
            return arr[i].length;
        }
    }
    return 0;
};
