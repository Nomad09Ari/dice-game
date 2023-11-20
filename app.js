// Togloomiin buh gazart ashiglagdah global huvisagchid zarlah
// Togloom duussan esehiig hadgalah tuluviin huvisagch
var isNewgame;
// Toglogchiin eeljiig hadgalah huvisagch, 1-r toglogchiig 0, 2-r toglogchiig 1 gj temdegliy
var activePlayer = 0;

// tsugluulsan onoog hadgalah huvisagch
var scores = [0, 0];

//toglogchiin eeljindee tsugluulj bgaa onoog hadgalah huvisagch
var roundScore = 0;

// Shoonii buh zurgiig uzuuleh elementiig DOM-oos haij olood end hadgaliy
var diceDom = document.querySelector(".dice");

// Togloomiig ehluulne.
initGame();

// Togloomiig shineer ehlehed beltgeh
function initGame() {
  // Togloom ehellee gedegt tuluv
  isNewgame = true;
  // Toglogchiin eeljiig hadgalah huvisagch, 1-r toglogchiig 0, 2-r toglogchiig 1 gj temdegliy
  activePlayer = 0;

  // tsugluulsan onoog hadgalah huvisagch
  scores = [0, 0];

  //toglogchiin eeljindee tsugluulj bgaa onoog hadgalah huvisagch
  roundScore = 0;

  // Programm ehlehed beldeh
  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;

  // Toglogchdiin neriig butsaaj gargah
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");

  diceDom.style.display = "none";
}

//shoonii ali talaaraa buusniig hadgalah huvisagch heregetei, 1-6 gsen utgiig ene huvisagchid sanamsarguigeer uusgej ugnu

// var diceNumber = Math.floor(Math.random() * 6) + 1;

/* <div class="player-score" id="score-0">43</div> */
// document.querySelector("#score-0").textContent = dice;

// document.querySelector("#score-1").textContents = dice;

// document.querySelector("#score-1").innerHTML = '<em>yes!</em>';

// document.querySelector(".btn-roll").addEventListener("click", shooShid);

// Shoog shideh event Listener Anonymous bichiglel
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isNewgame) {
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    document.querySelector(".dice").style.display = "block";
    diceDom.src = "dice-" + diceNumber + ".png";
    //   alert("Shoog shidlee : " + diceNumber);

    // Buusan too ni 1-ees ylgaatai bol idewhtei toglogchiin eeljiin onoog nemegduulne
    if (diceNumber !== 1) {
      // 1-ees ylgaatai too buulaa. Buusan toog toglogchid nemj ugnu
      roundScore = roundScore + diceNumber;
      document.getElementById("current-" + activePlayer).textContent =
        roundScore;
    } else {
      // 1 buusan tul toglogchiin eeljiig solij ugnu
      switchToNextPlayer();
    }
  } else {
    alert("togloom duussan baina.");
  }
});

// Hold tovchnii event Listener
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isNewgame) {
    scores[activePlayer] = scores[activePlayer] + roundScore;

    // Delgets deer onoog ni uurchilnu
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];

    // Ug toglogch hojson esehiig shalgah (onoo ni 100-s ih eseh)
    if (scores[activePlayer] >= 100) {
      // Togloomiig duussan tuluvt oruulna
      isNewgame = false;
      // Winner gsen textiig nerniih ni orond gargana
      document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else {
      // toglogchiin eeljiig solino
      switchToNextPlayer();
    }
  }
});

// Ene function ni togloh eeljiig daragiin toglogch ruu shiljuulne
function switchToNextPlayer() {
  // Eeljiin onoog ni 0 bolgono
  // Toglogchiin eeljiig solino
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;

  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  // Active panel-iig daraagiin toglogch ruu shiljihed panel-iig solih
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  // Shoog  tur alga bolgoh
  diceDom.style.display = "none";
}

// New game start add event listener
document.querySelector(".btn-new").addEventListener("click", initGame);
