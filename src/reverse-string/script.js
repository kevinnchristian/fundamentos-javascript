// Reverse a string
function reverseAString(str) {
  let textAccumulator = "";
  let string = str.split("");
  string.reverse();

  for (let x in string) {
    textAccumulator += string[x];
    console.log(textAccumulator);
  }
}

reverseAString("Hello Gama Academy!");
