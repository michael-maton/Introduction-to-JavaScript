/*🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️ Task 1: Warm-up! 🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️*/

/*MAKE SURE TO RETURN ALL OF THE ANSWERS ON THESE TASKS, IF YOU DON'T, THE AUTOGRADER WILL NOT WORK*/

/*
When doing these tasks, we recommend using console.log to test the output of your code to make sure it works correctly.
This will usually entail console logging the answer directly or console logging the invocation (call) of the function so when it
returns a value, that value will be logged to the console.  An example of this would be:  console.log(theFunction(value1,value2))
*/

/*
Task 1a - Voting Age

Do the following:   
   1. Make a variable called votingAge and give it a value
   2. Return true if age is 18 or higher

   HINT: no function required
*/
let votingAge = 19;
if (votingAge >= 18){
  console.log('true');
}
else{
  console.log('false');
}

/*
Task 1b - Values

Do the following:   
   1. Declare two variables and assign them values
   2. Use a conditional to change the value of the 1st variable based on the value assigned to the 2nd variable
   3. Return the new value of the 1st variable

   HINT: no function required
*/

let task1bValue1 = 1;
let task1bValue2 = 2;
if (task1bValue2 > 0){
  task1bValue1 = task1bValue2;
  console.log(task1bValue1);
}


/*
Task 1c - Convert Strings to Numbers

Do the following:   
   1. Declare a string type variable with the value of "1999"
   2. Convert the string value of "1999" to a integer value of 1999
   3. Return the result

   HINT: look up the Number method
*/

let task1cString = '1999';
let numString = Number(task1cString);
console.log(numString);


/*
Task 1d - Multiply
 
Do the following:   
   1. Invoke the multiply function below and pass it two numbers
   2. Receive the numbers in the parameters: a and b
   3. Multiply a and b and return the answer
*/

function multiply(a, b){
    return a*b;
  }
console.log(multiply(3,4));


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Age in Dog years
/*
Do the following:
   1. Invoke the dogYears function below and pass an age value to it
   2. Use the received value to calculate the age in dog years (1 human year is equal to 7 dog years)
   3. Return the newly calculated age
*/

function dogYears(humanYears){
    return humanYears*7;
}
console.log(dogYears(10));


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Dog feeder - Depending on their weight and age, we need to know how many pounds of food to feed our dog each day!
/*
Use the hungryDog function and feeding requirements below to do the following:
  1. Invoke the hungryDog function below and pass it a weight value in pounds
  2. Also, pass to hungryDog an age value in years (note: if the dog is a puppy, the age will be a decimal. For example: three months = 3/12 or .25)
  3. Do the proper calculations and return the number of pounds of raw food to feed the dog/puppy in a day
  
  REMEMBER: This program should handle correctly adult AND puppy ages and weights
  
  Feeding Requirements:

  Adult Dogs 1 year and older 
     up to 5 lbs - 5% of their body weight
     6 - 10 lbs - 4% of their body weight 
     11 - 15 lbs - 3% of their body weight 
     > 15lbs - 2% of their body weight 

  Puppies less than 1 year
     2 - 4 months 10% of their body weight
     4 - 7 months 5% of their body weight 
     7 - 12 months 4% of their body weight
    
  NOTE: If done correctly, a weight of 15 lbs and age of 1 year would return 0.44999999999999996
*/  

function hungryDog(weightLBS, ageYRS){
    if (ageYRS >= 1){
      if (weightLBS <= 5){
        return weightLBS*0.05;
      }
      else if (weightLBS > 6 && weightLBS <= 10){
        return weightLBS*0.04;
      }
      else if (weightLBS > 10 && weightLBS <=15){
        return weightLBS*0.03;
      }
      else {
        return weightLBS*0.02;
      }
    }
    else if (ageYRS >= 0.1667 && ageYRS <= 0.333){
      return weightLBS*0.10;
    }
    else if (ageYRS > 0.333 && ageYRS <= 0.583){
      return weightLBS*0.05;
    }
    else {
      return weightLBS*0.04;
    }
  }

console.log(hungryDog(15, 1));

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Rock, Paper, Scissors - Let's play against the computer!
/*
Use the game function below to do the following:
  1. Receive a string that represents the user's choice (either "rock", "paper", or "scissors")
  2. Use Math.random to determine the computers choice (Math.random gives a random number between 0 and 1)
  3. Return whether the user won, lost, or tied based on these rules of the game described below
  
  RULES OF THE GAME: Scissors beats Paper | Paper beats Rock | Rock beats Scissors | Or there's a tie
  
  HINT: While you can complete this with only conditionals based on strings, it may help to equate choice to a number when using Math.random()
*/

let pcRand = Math.random();

if (pcRand <= 0.333){
    pcRand = 'rock';
    }
    else if (pcRand > 0.333 && pcRand <= 0.667){
      pcRand = 'paper';
    }
    else{
      pcRand = 'scissors';
    }

function game(userChoice, pcChoice){
    
    // console.log(userChoice);
    
    // console.log(pcChoice);
    if (userChoice === 'rock' && pcChoice === 'rock'){
      return "it's a tie";
    }
    else if (userChoice === 'rock' && pcChoice === 'paper') {
      return 'you lose!';
    }
    else if (userChoice === 'rock' && pcChoice === 'scissors'){
      return 'you win!';
    }
    else if (userChoice === 'paper' && pcChoice === 'rock'){
      return 'you win!';
    }
    else if(userChoice === 'paper' && pcChoice === 'paper'){
      return "it's a tie";
    }
    else if (userChoice === 'paper' && pcChoice === 'scissors'){
      return 'you lose!';
    }
    else if (userChoice === 'scissors' && pcChoice === 'rock'){
      return 'you lose!';
    }
    else if(userChoice === 'scissors' && pcChoice === 'paper'){
      return 'you win!';
    }
    else if (userChoice === 'scissors' && pcChoice === 'scissors'){
      return "it's a tie";
    }
    else{
      return "it's a tie";
    }
}

console.log(game('paper', pcRand));

// function game(userChoice) {
//   let phrase = `it's a tie`;
//   let compChoice = Math.random();
//   if (compChoice <= 0.33) {
//     compChoice = 'rock';
//   } else if (compChoice > 0.33 && compChoice <= 0.66) {
//     compChoice = 'scissors';
//   } else {
//     compChoice = 'paper';
//   }
//   if (compChoice === 'rock') {
//     if (userChoice === 'paper') {
//       phrase = 'you win!';
//     } else if (userChoice === 'scissors') {
//       phrase = 'you lose';
//     }
//   }
//   if (compChoice === 'scissors') {
//     if (userChoice === 'rock') {
//       phrase = 'you win!';
//     } else if (userChoice === 'paper') {
//       phrase = 'you lose!';
//     }
//   }
//   if (compChoice === 'paper') {
//     if (userChoice === 'rock') {
//       phrase = 'you lose!';
//     } else if (userChoice === 'scissors') {
//       phrase = 'you win!';
//     }
//   }
//   return phrase;
// }

console.log(game('paper'));
// let pcChoice = Math.random();
//     if (pcChoice <= 0.333){
//       pcChoice = 'rock';
//     }
//     else if (pcChoice > 0.333 && pcChoice <= 0.667){
//       pcChoice = 'paper';
//     }
//     else{
//       pcChoice = 'scissors';
//     }

// function game(userChoice, pcChoice){
//     if (userChoice < Math.random()){
//     return 'you win!';
//   }
//   else if (userChoice > Math.random()){
//     return 'you lose!';
//   }
//   else {
//     return "it's a tie";
//   }
// }
// console.log(game('paper', pcChoice));
    

// function game(userChoice){
//   if (userChoice === 'rock'){
//     userChoice = 0.25;
//   }
//   else if (userChoice === 'paper'){
//     userChoice = 0.5;
//   }
//   else {
//     userChoice = 0.75;
//   }

//   if (userChoice < Math.random()){
//     return 'you win!';
//   }
//   else if (userChoice > Math.random()){
//     return 'you lose!';
//   }
//   else {
//     return "it's a tie";
//   }
// }
// console.log(game('paper'));
  

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Metric Converter 
//Task 5a - KM to Miles 
/*
Using the miles function below do the following:
  1. Receive a number of kilometers
  2. Convert the number of kiolmeters received to miles
  3. Return the number of miles
*/

function miles(kilometers){
    return kilometers*0.621371;
}
//Task 5b - Feet to CM
/*
Using the feet function below do the following:
  1. Receive a number of cm
  2. Convert the number of cm to feet
  3. Return number of feet
*/

function feet(centimeters){
    return centimeters/30.48;
}

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Let's Sing 99 Bottles of Soda on the Wall!
/*
Using the annoyingSong function below do the following:
  1. Receive a starting number and start to count down from the number received 
  2. At each iteration, it should return this string: 
      "(number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall"
*/
// function annoyingSong(startingNum){
//   for (let i = startingNum; i > 0; i--){
//     console.log(`${i} bottles of soda on the wall, ${i} bottles of soda, take one down pass it around ${i - 1} bottles of soda on the wall`);
//   }
// }
// annoyingSong(4);

function annoyingSong(startingNum){

        while (startingNum > 0){
          // console.log(startingNum +" bottles of soda on the wall, " +startingNum + " bottles of soda, take one down pass it around " + startingNum-1 + " bottles of soda on the wall");
          return `${startingNum} bottles of soda on the wall, ${startingNum} bottles of soda, take one down pass it around ${startingNum - 1} bottles of soda on the wall`;
          startingNum--;
          
        }
  }
  annoyingSong(4);

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 7 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Grade Calculator
/*
Using the grade function below do the following: 
  1. Receive a score out of 100 
  2. Return the corresponding letter grade following this grade scale:

   90-100 = A 
   80-89 = B 
   70-79 = C 
   60-69 =  D 
   below 60 = F
*/
  
function grade(numGrade){
    if (numGrade >= 90){
      return 'you got an A';
    }
    else if (numGrade >= 80 && numGrade < 90){
      return 'you got a B';
    }
    else if (numGrade >= 70 && numGrade < 80){
      return 'you got a C';
    }
    else if (numGrade >= 60 && numGrade < 70){
      return 'you got a D';
    }
    else {
      return 'you got an F';
    }
  }
  
  
/*💪💪💪💪💪💪💪💪💪💪 Stretch 💪💪💪💪💪💪💪💪💪💪*/

//Vowel Counter - How many vowels are there?
/*
Using the vowelCounter function below do the following:
  1. Receive a string as a parameter
  2. Count and return the number of vowels within that string.  It should handle both capitalized and uncapitalized vowels.

  HINT - you may need to study tomorrow's content on arrays 
  HINT - try looking up the .includes() method
*/


function vowelCounter(userString) {
    let count = 0;
    for (let i = 0; i < userString.length; i++){
        if (userString[i].includes('a')){
          count++;
        }
        if (userString[i].includes('e')){
          count++;
        }
        if (userString[i].includes('i')){
          count++;
        }
        if (userString[i].includes('o')){
          count++;
        }
        if (userString[i].includes('u')){
          count++;
        }
      }
    return count;
}

console.log(vowelCounter('iuoea'));

/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
function foo(){
    console.log('its working');
    return 'bar';
}
/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Don't touch the code after this line! 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
export default{
    foo,
    multiply,
    dogYears,
    hungryDog,
    game,
    miles,
    feet,
    annoyingSong,
    grade
}
