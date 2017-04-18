/**
Given a non-empty array of integers, return the k most frequent elements.
For example,
Given [1,1,1,2,2,3] and k = 2, return [1,2].
Note:
You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 *
 *  Build a array of list to be buckets with length 1 to sort.
 */

var topKFrequent = function(nums, k) {
    var count = {},    //nums = [2,2,5,6,5,5]
        freqs = [],
        result = [];
    nums.forEach((num) => { //count = {2:2, 5:3, 6:1}
        if(count[num] === undefined) {
          count[num] = 1;
        } else {
          count[num]++;
        }
    });
    Object.keys(count).forEach((num) => { // freqs = [1:[6],2:[2],3:[5]]
        var freq = count[num];
        num = parseInt(num);
        if(freqs[freq] === undefined) {
          freqs[freq] = [num];
        } else {
          freqs[freq].push(num);
        }
    });
    var idx = 0,
        i;
    for(i = freqs.length; i >= 0; i--) {
        if(freqs[i] != undefined) {
            var len = freqs[i].length,
                j;
            for(j = 0; j < len; j++) {
                if(idx === k) {
                    break;
                }
                result.push(freqs[i][j]);
                idx++;
            }
            if(idx === k) {
                break;
            }
        }
    }
    return result;
};
