function play(btn) {
  const playerChoice = Number(btn.querySelector('span').textContent);
  const computerChoice = Math.floor(Math.random() * 3) + 1;

  let result = "";
  let res = false;

  if (playerChoice === computerChoice) {
    result = "It's a Draw!";
  } else if (
    (playerChoice === 1 && computerChoice === 3) ||
    (playerChoice === 2 && computerChoice === 1) ||
    (playerChoice === 3 && computerChoice === 2)
  ) {
    result = "You Win!";
    res = true;
  } else {
    result = "You Lose!";
  }

  const choiceMap = {1: "Rock", 2: "Paper", 3: "Scissors"};
  const finalMessage = `You chose ${choiceMap[playerChoice]}, Computer chose ${choiceMap[computerChoice]}. ${result}`;

  document.getElementById("result").textContent = finalMessage
  if(res){
      alert("You won the Match");
    }  
  }
    