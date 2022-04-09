let userScore=0;
let systemScore=0;
const userScore_span=document.getElementById("user-score");
const systemScore_span=document.getElementById("system-score");
const scoreBoard_div=document.querySelector(".score-board");
const result_p=document.querySelector(".result>p");
const rock_div=document.getElementById("rock");
const paper_div=document.getElementById("paper");
const scissors_div=document.getElementById("scissors");

function getSystemChoice(){
	const choices=['rock','paper','scissors'];
	const randomNumber=Math.floor(Math.random()*3);
	return choices[randomNumber];

}

function convertToWord(string){
	if (string==="rock") return "Rock";
	if (string==="paper") return "Paper";
	return "Scissors";

}

// setTimeout(function(){console.log("hello");},3000);

function win(user,system){
	const smallUserWord="user".fontsize(4).sub();
	const smallCompWord="comp".fontsize(4).sub();
	const userChoice_div=document.getElementById(user);
	// console.log("win");
	userScore++;
	// console.log(userScore);
	userScore_span.innerHTML=userScore;
	systemScore_span.innerHTML=systemScore;
	// console.log(user);
	// console.log(system);
	result_p.innerHTML=`${convertToWord(user)}${smallUserWord} beats ${convertToWord(system)}${smallCompWord}😎. You win!!!!👏🏽`;
	userChoice_div.classList.add('green-glow');
	// setTimeout(function(){userChoice_div.classList.remove('green-glow');},500);
	setTimeout(()=>userChoice_div.classList.remove('green-glow'),500) //es6 format for one liners inside function
}

function lose(user,system){
	const smallUserWord="user".fontsize(4).sub();
	const smallCompWord="comp".fontsize(4).sub();
	const userChoice_div=document.getElementById(user);
	// console.log("lose");
	systemScore++;
	// console.log(systemScore);
	userScore_span.innerHTML=userScore;
	systemScore_span.innerHTML=systemScore;
	// console.log(user);
	// console.log(system);
	result_p.innerHTML=`${convertToWord(user)}${smallUserWord} loses to ${convertToWord(system)}${smallCompWord}😱. You lost!!!!👎🏽`;
	userChoice_div.classList.add('red-glow');
	// setTimeout(function(){userChoice_div.classList.remove('red-glow');},500);
	setTimeout(()=>userChoice_div.classList.remove('red-glow'),500) //es6 format for one liners inside function
}


function draw(user,system){
	const smallUserWord="user".fontsize(4).sub();
	const smallCompWord="comp".fontsize(4).sub();
	const userChoice_div=document.getElementById(user);
	// console.log("draw");
	// console.log(systemScore);
	// userScore_span.innerHTML=userScore;
	// systemScore_span.innerHTML=systemScore;
	// console.log(user);
	// console.log(system);
	result_p.innerHTML=`${convertToWord(user)}${smallCompWord} equals ${convertToWord(system)}${smallUserWord}💃🏽. It's a draw!!!!🖖🏽`;
	userChoice_div.classList.add('grey-glow');
	// setTimeout(function(){userChoice_div.classList.remove('grey-glow');},500);
	setTimeout(()=>userChoice_div.classList.remove('grey-glow'),500) //es6 format for one liners inside function
}

function game(userChoice){
	// console.log("I don't know   "+userChoice);
	const systemChoice=getSystemChoice();
	// console.log("system choice=> "+systemChoice);
	// console.log("user choice=> "+userChoice);
	// const name="sound";
	// if (name==="sound"){
	// 	console.log("sound");
	// }
	// else if(name==="arya"){
	// 	console.log("arya");
	// }
	// switch(name){
	// 	case "sound":
	// 		console.log("sound");
	// 		break;

	// 	case "arya":
	// 		console.log("arya");
	// 		break;
	// }
	switch(userChoice+systemChoice){
		case "rockscissors":
		case "paperrock":
		case "scissorspaper":
			// console.log("User wins");
			win(userChoice,systemChoice);
			break;
		case "rockpaper":
		case "paperscissors":
		case "scissorsrock":
			// console.log("User loses");
			lose(userChoice,systemChoice);
			break;
		case "rockrock":
		case "paperpaper":
		case "scissorsscissors":
			// console.log("It's a draw");
			draw(userChoice,systemChoice);
			break;
	}


}


function main(){
	// rock_div.addEventListener('click',function(){
	// 	game("rock");
	// 	console.log("hey you clicked on rock");
	// })
	rock_div.addEventListener('click',()=>game("rock")); //ES6 format for one liners inside function
		
	

	// paper_div.addEventListener('click',function(){
	// 	game("paper");
	// 	console.log("hey you clicked on paper");
	// })
	paper_div.addEventListener('click',()=>game("paper")); //ES6 format for one liners inside function
		
	

	// scissors_div.addEventListener('click',function(){
	// 	game("scissors");
	// 	console.log("hey you clicked on scissors");
	// 	})
	scissors_div.addEventListener('click',()=>game("scissors")); //ES6 format for one liners inside function
		
	

}

main();