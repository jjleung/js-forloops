/* 1) Ticket Generator
Write a for-loop that will iterate through 20 numbers (starting at 1 and ending at 20) and console.log the following message:
"Now serving 1."
"Now serving 2."
"Now serving 3."
.
.
.
"Now serving 20."
*/
console.log("** * * Problem 1 * * **");

for (var i = 1; i <= 20; i++){

	console.log("Now serving " + i);
}

console.log("----------------------------------------------------------");

/* 2) Pop Charts
Write a for-loop that will iterate through the topFive array below and console.log the following message:
This week's chart buster is: 'Closer.'
This week's chart buster is: 'Starboy.'
This week's chart buster is: 'I Feel It Coming.'
This week's chart buster is: 'Let Me Love You.'
This week's chart buster is: '24K Magic.'
*/

var topFive = ["Closer", "Starboy", "I Feel It Coming", "Let Me Love You", "24K Magic"];

console.log("** * * Problem 2 * * **");

for (var i = 0; i < topFive.length; i++){

	console.log("This week's chart buster is: " + topFive[i]);
}

console.log("----------------------------------------------------------");

/* 3) Dead Presidents
Declare a variable named `presidents` and assign it to an array containing the following Presidents: Washington, Adams, Jefferson, Madison and Monroe.
 
Write a for-loop that will iterate through this array and within the for-loop console.log the following:
The value at 0 is Washington.
The value at 1 is Adams.
The value at 2 is "Jefferson.
The value at 3 is "Madison.
The value at 4 is Monroe.

Next, console.log the length of the array.

3-A) Create a function named leaders which will take in a parameter: `person`.
   @param Datatype: String `person`
 
This function will iterate through the person parameter and console.log the following message for each item in the array:

"President person was a great leader."
*/
console.log("** * * Problem 3 * * **");

var presidents = ["Washington", "Adams", "Jefferson", "Madison", "Monroe"];
console.log("presidents.length: " + presidents.length);

function leaders(person){

	for (i = 0; i< person.length; i++){

		console.log("President " + person[i] + "was a great leader.");
	}
}

leaders(presidents);

console.log("----------------------------------------------------------");

/* 4) Line Number
Declare a variable named `stringOfNumbers` and assign its value to an empty string. 

Write a for-loop that concatenates a Number value into that string on each iteration, starting at `10` and continuing up to and including `20`. Console.log your result. It should read "1011121314151617181920"*/

console.log("** * * Problem 4 * * **");

var stringOfNumbers = "";

for (i = 10; i <= 20; i++){
	stringOfNumbers += i;
}

console.log("stringOfNumbers: " + stringOfNumbers);

console.log("----------------------------------------------------------");

/* 5) Even Stevens
Declare a variable named `evenNumArr` and assign its value to an empty array. 

Write a for-loop that will push even numbers to the `evenNumArr` array. We want to push 50 even even numbers starting from 0.
Console.log your results.
*/

console.log("** * * Problem 5 * * **");

var evenNumArr = [];

for (i = 0; evenNumArr.length < 50; i+=2){

	evenNumArr.push(i);
}

console.log("evenNumArr: " + evenNumArr);
console.log("evenNumArr.length: " + evenNumArr.length);

console.log("----------------------------------------------------------");

/* 6) Up the Odds
Declare a variable named `oddSum` and assign it to the Number value 0.

Write a for-loop that will sum up odd numbers to the `oddSum` variable. We want to add 50 odd numbers starting from 1.
Console.log your results.
*/

console.log("** * * Problem 6 * * **");

var oddSum = 0;
var oddIter = 0;

for (i = 1; oddIter < 50; i+=2){

	oddSum += i;
	oddIter++;
}

console.log("oddSum: " + oddSum);
console.log("numbers added: " + oddIter);

console.log("----------------------------------------------------------");  

/* 7) Oops There It is
Declare a variable named `oopsArray` and assign its to the following array: `[ 'turn' , , 'down' , , 'for' , , 'what' ]`.
Note that every odd index value in `oopsArray` is currently `undefined`. Using a for-loop, add the string `'nope'` to every odd index. Console.log your result. It should look like this:

[ 'turn' , 'nope' , 'down' , 'nope' , 'for' , 'nope' , 'what' ]
*/

console.log("** * * Problem 7 * * **");

var oopsArray = ["turn", ,"down", ,"for", ,"what"];

for (i = 0; i < oopsArray.length; i++){

	if (oopsArray[i] == undefined){

		oopsArray[i] = "nope";
	}
}
console.log("oopsArray: " + oopsArray);

console.log("----------------------------------------------------------");

/* 8) Is It There Oops
Using a for-loop, iterate through the Array stored at `oopsArray` backwards. Console.log your result. It should look like this:

what
nope
for
nope
down
nope
turn
*/

console.log("** * * Problem 8 * * **");

for (i = oopsArray.length -1; i >= 0; i--){

	console.log(oopsArray[i]);
}

console.log("----------------------------------------------------------");

/* 9) Siesta Time
Declare a variable named `napSchedule` and assign its value to the following array: `[false, false, true, false, true, true]`

Next, write a function named `nap`. This function takes in a single parameter: `schedule`

   @param Datatype: Array `schedule`

Inside of this function write a for-loop that will iterate through the `napSchedule` array and console.log the message: `ZzZzZzZz` if the schedule is `true`, otherwise the it will console.log the message: `Gotta get coding!` if the schedule is `false`.
*/

console.log("** * * Problem 9 * * **");

var napSchedule = [false, false, true, false, true, true];

function nap(schedule){

	for (var i = 0; i < schedule.length; i++){

		if(schedule[i] == true){

			console.log("ZzZzZzZz");
		} else{

			console.log("Gotta get coding!");
		}
	}
}

nap(napSchedule);

console.log("----------------------------------------------------------");

/* 10) Copy Pasta
Declare a variable named `valuesArray` and assign its value to be an array: `[99, 66, 829, 1941, 8, 76]`. 
Declare another variable named `copyValuesArray` and assing its value to an empty array.

Write a function named `copyArray` which takes two arguments: `originArray` and `destinationArray`. 

   @param Datatype: Array `originArray`
   @param Datatype: Array `destinationArray`

Inside of this function write a for-loop that will iterate through the contents of the `originArray` and pushes each element of that array into `destinationArray`. Console.log your result.
*/

console.log("** * * Problem 10 * * **");

var valuesArray = [99, 66, 829, 1941, 8, 76];
var copyValuesArray = [];

function copyArray(originArray, destinationArray){

	for (var i = 0; i < originArray.length; i++){

		destinationArray.push(originArray[i]);
	}

	return destinationArray;
}

console.log("copyArray(valuesArray, copyValuesArray): " + copyArray(valuesArray, copyValuesArray));

console.log("----------------------------------------------------------");

/*Final Boss*/

/* 11) Go Long
Declare a variable named `topQuote` and assign it to a String value of your favorite one line quote.
Write a function that will iterate through the string value and return the longest word in that quote. Console.log your result.
*/
console.log("***** FINAL BOSS *****");
console.log("** * * Problem 11 * * **");

var topQuote = "The ability to destroy a planet is insignificant next to the power of the Force.";

function longest(quote){

	var tempWord = "";
	var longestWord = "";
	var wordStart = 0;
	var wordEnd = 0;

	for (var i = 0; i <= quote.length; i++){

		if (quote.charAt(i) == " " || quote.charAt(i) == "."){

			wordEnd = i;
			tempWord = quote.slice(wordStart, wordEnd);
			// console.log(tempWord);

			if (tempWord.length > longestWord.length){

				longestWord = tempWord;

			}

			wordStart = wordEnd+1;

		}

	}

	return longestWord;
}

console.log("topQuote: " + topQuote);
console.log("longest(topQuote): " + longest(topQuote));

console.log("----------------------------------------------------------");

/* 12) Puppet Master
Declare a variable named `miscStorage` set it's value to be: `[ [], 'Carrots', 9, 'Beets', {}, {name: "Todd B."}, 'Mush' ]`
Write a function named `generateArrayOfStrings` which takes a single argument `storage`. This function will return a new Array with only `String` values inside of it.

   @param Datatype: Array `storage`
   @return Datatype: Array

*/

console.log("** * * Problem 12 * * **");

var miscStorage = [ [], 'Carrots', 9, 'Beets', {}, {name: "Todd B."}, 'Mush'];

function generateArrayofStrings(storage){

	var outArr = [];

	for (var i = 0; i < storage.length; i++){

		if (typeof storage[i] == "string"){

			outArr.push(storage[i]);
		}
	}

	return outArr;
}

console.log("generateArrayofStrings(miscStorage): " + generateArrayofStrings(miscStorage));

console.log("----------------------------------------------------------");

/* 13) All Grown Up 
Write a function that will capitalize the first letter in each word in the phrase below. The function will console.log the message: "I've Lived A Life That's Full. I've Traveled Each And Every Highway. But More, Much More Than This. I Did It My Way."  
*/

var myWay = "i've lived a life that's full, i've traveled each and every highway. but more, much more than this. i did it my way.";

console.log("** * * Problem 13 * * **");

function grownUp(str){

	for (var i = 0; i < str.length; i++){

		if(i === 0){

			str = str.charAt(i).toUpperCase() + str.slice(1);
		}

		else if (str.charAt(i-1) === " "){

			// console.log(str.charAt(i));
			str = str.slice(0,i) + str.charAt(i).toUpperCase() + str.slice(i+1);
		}
	}

	return str;
}

console.log("grownUp(myWay): " + grownUp(myWay));

console.log("----------------------------------------------------------");

/* 14) Back to School
Declare a variable named `currentCohort` and set it's value to be this [array found here](https://gist.github.com/sgnl/e40879b2249e06ca7811).
Write a function named `graduateAndSetNewClass`, which takes a single argument called `cohort`.

   @param Datatype: Array `cohort`

The function will iterate through the `cohort` argument and check each student's `enrolled` property.
If the `enrolled` property is set to `true` then change that student's `graduated` property to `true`. Otherwise, if `enrolled` is set to `false` then change `enrolled` to `true` leaving `graduated` alone and unchanged.
Console.log your result.
*/

console.log("** * * Problem 14 * * **");

console.log("----------------------------------------------------------");
