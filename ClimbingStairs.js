/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var arr = [],
        i = 3;
    arr[0] = 0;
    arr[1] = 1;
    arr[2] = 2;

    while(i <= n) {
        arr.push(arr[i-1]+arr[i-2]);
        i++;
    }
    return arr[n];
};


/*
0 1 2 3 4 5
0 1 2 3 5 8
*/
