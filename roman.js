
convertToRoman = () => {

  const legend = [
    [1000, "M"], 
    [900, "CM"], 
    [500, "D"], 
    [400, "CD"], 
    [100, "C"], 
    [90, "XC"], 
    [50, "L"], 
    [40, "XL"], 
    [10, "X"], 
    [9, "IX"], 
    [5, "V"], 
    [4, "IV"], 
    [1, "I"],
  ];

  // grab user input and assign it to a variable so we can use it
  let num = document.getElementById("numInput").value;

  //check for valid user input (all (positive?) numbers divided by 1 will return a remainder of 0)
  if(num % 1 !== 0 || num < 0 ) { 
    document.getElementById("output").innerHTML = "The number must be a positive integer.";
    return;
  } else if(num === "") {
    document.getElementById("output").innerHTML = "Looks like you need to type something.";
    return;
  }

  // 'accumulator' variable will eventually be the output, so assign it an empty string first
  let accumulator = ""; 

  for (let i = 0; i < legend.length; i++) {
    while (legend[i][0] <= num) {
      accumulator += legend[i][1];
      num -= legend[i][0];
    }
  }

  // The final answer "accumulator" will be displayed in the paragraph with id 'output'
  document.getElementById("output").innerHTML = document.getElementById("numInput").value + " = " + accumulator;

};

giveRandomQuote = () => {

  const randomQuotes = [
    "\"Courage is knowing what not to fear.\"",
    "\"Necessity is the mother of invention.\"",
    "\"There is no way to happiness. Happiness is the way.\"",
    "\"Educating the mind without educating the heart is no education at all.\"",
    "\"A comfort zone is a beautiful place, but nothing ever grows there.\"",
    "\"Painting is silent poetry, and poetry is painting that speaks.\"",
    "\"Always keep your eyes open. Keep watching. Because whatever you see can inspire you.\"",
  ]
  
  let randomQuote = randomQuotes[Math.floor(Math.random() * randomQuotes.length)];
  document.getElementById("quoteOutput").innerHTML = randomQuote;

}


/*
ROMAN NUMERALS RULE:
  - Cannot have same symbol 4 times in a row. These exceptions are covered in the 'arabics' and 'romans' arras, therefore the math below doesn't have to be in the function.
  4(IV): 5(V) - 1(I)
  9(IX): 10(X) - 1(I)
  40(XL): 50(L) - 10(X)
  90(XC): 100(C) - 10(X)
  400(CD): 500(D) - 100(C)
  900(CM): 1000(M) - 100(C)
*/

/*
A visualization of the loops in the function above:

Imagine the number = 102.
  -The loop finds the highest value in the legend array that is less than 102
  -It will first assign "C (100)" to accumulator
  -Substracts (100) from num and back to beginning of loop
  -Now num = 2. The loop will find the 1 in the array and add "I" to accumulator
  -Now num = 1. The loop will once again run and add I to accumulator.
  -accumulator will now equal CII, num will be 0, and loop ends. 
*/










