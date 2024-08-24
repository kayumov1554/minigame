const Game = document.querySelector(".top");
const Score = document.querySelector(".score");

const arms = [
  {
    name: "rock",
    img: "img/rock.jpg",
  },
  {
    name: "papper",
    img: "img/papper.jpg",
  },
  {
    name: "scissor",
    img: "img/scrissor.jpg",
  },
];

let playerScore = 0;
let computerScore = 0;

function rock() {
  let ChangedPlayer = "rock";
  Game.innerHTML = "";
  let computer = Math.floor(Math.random() * arms.length);
  if (ChangedPlayer == arms[computer].name) {
    playerScore++;
    computerScore++;
  } else if (arms[computer].name == "papper") {
    computerScore++;
  } else {
    playerScore++;
  }
  Game.innerHTML = `
            <div class="player">
              <img src="img/rock.jpg" alt="" />
            </div>
            <div class="computer">
              <img src="${arms[computer].img}" alt="" />
            </div>
  `;
  Score.innerHTML = `
            <p>Player: ${playerScore}</p>
            <p>Computer: ${computerScore}</p>
            <button type="button" onclick="reset()">Reset</button>
            `;
}

function papper() {
  let ChangedPlayer = "papper";
  Game.innerHTML = "";
  let computer = Math.floor(Math.random() * arms.length);
  if (ChangedPlayer == arms[computer].name) {
    playerScore++;
    computerScore++;
  } else if (arms[computer].name == "scissor") {
    computerScore++;
  } else {
    playerScore++;
  }
  Game.innerHTML = `
            <div class="player">
              <img src="img/papper.jpg" alt="" />
            </div>
            <div class="computer">
              <img src="${arms[computer].img}" alt="" />
            </div>
  `;
  Score.innerHTML = `
            <p>Player: ${playerScore}</p>   
            <p>Computer: ${computerScore}</p>
            <button type="button" onclick="reset()">Reset</button>
            `;
}

function scissor() {
  let ChangedPlayer = "scissor";
  Game.innerHTML = "";
  let computer = Math.floor(Math.random() * arms.length);
  if (ChangedPlayer == arms[computer].name) {
    playerScore++;
    computerScore++;
  } else if (arms[computer].name == "rock") {
    computerScore++;
  } else {
    playerScore++;
  }
  Game.innerHTML = `
            <div class="player">
              <img src="img/scrissor.jpg" alt="" />
            </div>
            <div class="computer">
              <img src="${arms[computer].img}" alt="" />
            </div>  `;
  Score.innerHTML = `
            <p>Player: ${playerScore}</p>
            <p>Computer: ${computerScore}</p>
            <button type="button" onclick="reset()">Reset</button>
            `;
}

function reset() {
  playerScore = 0;
  computerScore = 0;
  Score.innerHTML = `
            <p>Player: ${playerScore}</p>
            <p>Computer: ${computerScore}</p>
            <button type="button" onclick="reset()">Reset</button>
            `;
}
