var threeItems = [1,2,3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function

function last(arr){
	alert(arr[arr.length - 1]);
};

last(threeItems);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Loop through evenArray removing all values that aren't even 
var evenArray = [1,2,3,6,22,98,45,23,22,12];

for(var i in evenArray){
	if(evenArray[i] % 2 !== 0){
		evenArray.splice(i,1);
	};
};

console.log(evenArray);

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//below you're given a function that will return a random number between 0 and 30 and an array full or numbers 'randomArray'. Your job is to write a function that will get a random number, then loop through the array to see if that random number is in the array. If it is, alert true, if it's not, alert false
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

var num = getRandomArbitrary();

function searchArray(randomNum){
	for(var i in randomArray){
		if(randomArray[i] === randomNum){
			alert("TRUE");
			return;
		};
	};
	alert("FALSE");
};

console.log(num);
searchArray(num);

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1,2,3,4,5];
var second;

second = first.slice();
second.push(6, 7);

alert(first) //[1,2,3,4,5];
alert(second) //[1,2,3,4,5,6,7];



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
var sentence = "Dev Mountain is the best"

function longest(str){
	var words = str.split(" ");
	var longestWord = words[0];
	for(var i in words){
		if(words[i].length > longestWord.length){
			longestWord = words[i];
		};
	};
	return longestWord;
};

console.log(longest(sentence));


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called capitalize that takes in the myPoem variable and capitalizes every word 
var myPoem = 'What is a jQuery but a misunderstood object?'
//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?

function capitalize(str){
	var words = str.split(" ");
	
	for(var i in words){
		var letter = words[i].charAt(0);
		words[i] = letter.toUpperCase() + words[i].slice(1);
	}
	return words.join(" ");
}

console.log(capitalize(myPoem));

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.
function vowelCounter(str){
	str = str.toUpperCase();
	var counter = 0;
	for(var i = 0; i < str.length; i++){
		if(str.charAt(i) == "A" || str.charAt(i) == "E" || str.charAt(i) == "I" || str.charAt(i) == "O" || str.charAt(i) == "U"){
			counter++;
		}
	}
	return counter;
}
console.log("There are " + vowelCounter(theOdyssey) + " vowels.");