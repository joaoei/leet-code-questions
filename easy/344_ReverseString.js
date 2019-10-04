/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let aux = '';
    let mid = Math.floor(s.length/2);
    
    for (i = 0; i < mid; i++) {
        aux = s[i];
        s[i] = s[s.length - i - 1];
        s[s.length - i - 1] = aux;
    }
};
