/**
 * QUIZ GAME
 * WITH ARRAYS
 * OBJECTS
 * FOR-LOOPS
 * FUNCTION CALLS
 * HIGH SCORE
 * UPDATE NEW HIGH SCORE
 */

var readlineSync = require('readline-sync');                              //package

var i;                                                     //loop counter
var tempScore = 0;                                             //score counter
var score = 0;
var userAnswer;                                     
var ua;
var questionNumber;
var userName;
var p;

function quiz(question, answer)                            //defining function quiz 
{
  userAnswer = readlineSync.question("\n\n\n" + question);        //taking user input
  ua = userAnswer.toLowerCase();                                  //converting user answer to lowercase

  if (ua === answer)
  {
    score = score + 1;                                           //incrementing score if answer is correct
  }
}

var highScore =   {                                                                   //objects
                    Name : "Perseus",
                    Score : 0   
                  }

var q1 =  {                                                                   //objects
            question : "What is the capital of West Bengal?\n\n\n",
            answer : "kolkata"   
          }

var q2 =  {                                                          
            question : "Who is the Prime Minister of India?\n\n\n",
            answer : "narendra modi"   
          }

var q3 =  {                                                          
            question : "What is the capital city of Maharashtra?\n\n\n",
            answer : "mumbai"   
          }

var q4 =  {                                                          
            question : "What is the capital city of The United States of America?\n\n\n",
            answer : "washington dc"   
          }                                           

var q5 =  {                                                          
            question : "How many Continents are there?\n\n\n",
            answer : "seven"  
          }

var q6 =  {                                                          
            question : "Is Australia a Continent?\n\n\n",
            answer : "yes"   
          }

var q7 =  {                                                          
            question : "What is the largest Country in the world?\n\n\n",
            answer : "russia"   
          }

var q8 =  {                                                          
            question : "What is the largest Continent in the world??\n\n\n",
            answer : "asia"  
          }                           

var q9 =  {                                                          
            question : "What is the largest mammal in the world?\n\n\n",
            answer : "blue whale"   
          }

var q10 = {                                                          
            question : "e=mc^2 was discovered by?\n\n\n",
            answer : "albert einstien"
          }                    

var questionList = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]; //creating an aray which includes the same name as the OBJECTS

play = "y";

while (play === "y")
{

  var userName = readlineSync.question("Welcome User, please enter your name :- \n\n"); //taking user input

  console.log("\n\n\nHello, " + userName + ". We thank you for taking part in this Quiz Game.\n\n\n");
  console.log("Wishing you all the best!!!!");

  for (i = 0; i < questionList.length; i++)           //starting loop
  {
    questionNumber = questionList[i];                        //storing array elements in questionNumber variable 
    quiz(questionNumber.question, questionNumber.answer)         //calling function "quiz" using objects as inputs
  }

  tempScore = score;
  score = 0;

  console.log("\n\n\nYour score is " + tempScore + " points.");             //printing the total score

  if(tempScore == 10)                                             //giving grades acxcording to the score obtained by the user.
  {
    console.log("\n\n\nYour Grade is A+.\n\nExcellent Job!!!\n\n");
  }
  else if (tempScore <10 && tempScore >= 8)
  {
    console.log("\n\n\nYour Grade is A.\n\nGood Job.\n\n");
  }
  else if (tempScore <8 && tempScore >= 6)
  {
    console.log("\n\n\nYour Grade is B.\n\nNot Bad.\n\n");
  }
  else if (tempScore <6 && tempScore >= 4)
  {
    console.log("\n\n\nYour Grade is C.\n\nTry a bit harder.\n\n");
  }
  else if (tempScore <4 && tempScore >= 2)
  {
    console.log("\n\n\nYour Grade is D.\n\nFocus!!!\n\n");
  }
  else
  {
    console.log("\n\n\nYour Grade is F.\n\nYou Failed.\n\n");
  }

  p = readlineSync.question("DO YOU WANT TO CONTINUE PLAYING? \n\nPRESS Y. \n\nPRESS ANYTHING ELSE TO EXIT. \n\n");

  console.log("\n\n\n")

  play = p.toLowerCase();

  if (tempScore > highScore.Score)
  {
    highScore.Name = userName;
    highScore.Score = tempScore;
  }
}

console.log("\n\n\nCONGRATULATIONS!!! " + highScore.Name + ", you have scored the highest.");
console.log("\n\n\nTHE NEW HGH SCORE IS :- " + highScore.Score);