const {default: TestRunner} = require("jest-runner")
const timesTwo = require('./timesTwo.js');


// Write the first test

test('returns the number times 2', ()=>{
    expect(timesTwo(10)).toBe(20);
}
)
//npm rum test timesTwo