function letterFinder(word, match) {
  var condition1 = typeof word == "string" && word.length >= 2;
  var condition2 = typeof match == "string" && match.length == 1;
  if (condition1 && condition2 == true) {
    for (var i = 0; i < word.length; i++) {
      if (word[i] == match) {
        console.log("Found the", match, "at", i);
      } else {
        console.log("---No match found at", i);
      }
    }
  } else {
    console.log("Please pass correct arguments to the function.");
  }
}
letterFinder([], []);
letterFinder("cat", "c");

var result = null;
console.log(result);

try {
  console.log("Hello");
} catch (err) {
  console.log("Goodbye");
}

var bicycle = {
  wheels: 2,
  start: function () {},
  stop: function () {},
};
console.log(bicycle);

try {
  throw new Error();
  console.log("Hello");
} catch (err) {
  console.log("Goodbye");
}


function add(a, b) {
    console.log(a + b)
  }

add(3, "4");

try {
    Number(5).toPrecision(300)
    } catch(e) {
    console.log("There was an error")
    }