/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let list = {};
    
    for(let i = 0; i < nums.length; i++) {
        if ( typeof list[`${nums[i]}`] === "undefined" ) {
            list[`${nums[i]}`] = nums[i]; 
        } else {
            delete list[`${nums[i]}`]
        }
    }
    
    return list[Object.keys(list)[0]];
};
