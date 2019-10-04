/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let seq = [];
    
    for (let i = 0; i < n; i++) {
        let val = "";
        val = ((i+1) % 3 == 0) ? val+"Fizz" : val;
        val = ((i+1) % 5 == 0) ? val+"Buzz" : val;
        val = (val === "") ? val+(i+1) : val;
        
        seq.push(val);
    }
    
    return seq;
};
