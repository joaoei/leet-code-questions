/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let resp = [];
    let obj = {};
    
    strs.forEach((string) => {
        const sorted_string = string.split('').sort().join('');
        const array = obj[sorted_string] || [];
        
        array.push(string);
        obj[sorted_string] = array;
    });
    
    for (var key in obj) {
        resp.push(obj[key]);
    }
    
    return resp;
};