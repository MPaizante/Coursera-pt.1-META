const concatStrings = require("./sum.js")

test('adds abc + def to equal abcdef', () =>{
    
    expect(concatStrings("abc","def")).toBe("abcdef");
})
