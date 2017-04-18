/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    var matrix = [],
        tmp,
        i,
        j;
    for(i = 0; i < m; i++) {
        tmp = [];
        matrix.push(tmp);
    }
    for(i = 0; i < n; i++) {
        matrix[0][i] = 1;
    }
    for(i = 0; i < m; i++) {
        matrix[i][0] = 1;
    }
    for(i = 1; i < m; i++) {
        for(j = 1; j < n; j++) {
            matrix[i][j] = matrix[i-1][j] + matrix[i][j-1];
        }
    }
    return matrix[m-1][n-1];
};
