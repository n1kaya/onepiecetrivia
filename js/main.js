var trivia =[
{	question: "Which legendary pirate gave Luffy his hat?",
	answer: "shanks"
},
{
	question: "Who is Luffy's grandfather?",
	answer: "garp"
},
{
	question: "Who is considered the world's greatest swordsman?",
	answer: "hawkeye"
},
{
	question: "What is Doflamingo's alias?",
	answer: "joker"
},
{
	question: "Who battled Fire Fist Ace at Banaro Island?",
	answer: "blackbeard"
},
{
	question: "What is Luffy made of?",
	answer: "rubber"
},
{
	question: "What is Usopp's weapon of choice?",
	answer: "slingshot"
},
{
	question: "What is Bartolomeo's devil fruit ability?",
	answer: "barrier"
}
]

for(i = 0; i < trivia.length; i++) {
	var triviaQuestion = trivia[i].question
	document.getElementById( 'question' + [i] ).textContent = triviaQuestion
}

function showResults() {
	var correct = 0;
	var incorrect = 0;
	for(i = 0; i < trivia.length; i++) {	
		var answer = trivia[i].answer
		var userAnswer = document.getElementById('answer' + [i]).value 
		var questionNum = document.getElementById('question' + [i])
		if(answer == userAnswer) {
			questionNum.className = 'correct'
			correct++
		} else {
			questionNum.className = 'incorrect'
			incorrect++
		}
	}
	
	document.getElementById('correct').textContent = correct
	document.getElementById('incorrect').textContent = incorrect

	var score= correct

var pass=8

//alertify plugin 
if(score == pass){
	alertify.success("Your One Piece knowledge is impeccable!");
} else{
	alertify.error("You failed!");
}




}











