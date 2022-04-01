let rollButton = document.getElementById("roll");
let restartBtn = document.getElementById("restartBtn");
const image = document.getElementById("image");
const winner = document.getElementById("winnerText");
const loser = document.getElementById("loserText");

let diceImg = {
	1:"image/diceOne.png",
	2:"image/diceTwo.png",
	3:"image/diceThree.png",
	4:"image/diceFour.png",
	5:"image/dicefive.png",
	6:"image/diceSix.png",
}

const maxScore = 20;
let currentScore = 0;
let roll = 0;

win.style.display = "none";
lose.style.display = "none";
restartBtn.style.display = "none";
rollButton.style.display = "block";

rollButton.addEventListener("click", () => {
	
let roll = Math.floor(Math.random() *6 +1);
        image.src = diceImg[roll];
		currentScore += roll;
		Score.textContent = currentScore;

 if (currentScore >= maxScore){
		Score.textContent = `${currentScore}`;
		win.style.display = "block"
		rollButton.style.display = "none";
		restartBtn.style.display = "block";
		score = 0;

} else if (roll == 1){
		Score.textContent = `${roll}`;
		lose.style.display= "block";
		rollButton.style.display = "none";
	    restartBtn.style.display = "block";
		score = 0;
	}
});

restartBtn.addEventListener("click",() =>{
	window.location.reload()
})

