// Toglogchiin eeljiig hadgalah huvisagch, 1-r toglogchiig 0, 2-r toglogchiig 1 gj temdegliy

var activePlayer = 0;

// tsugluulsan onoog hadgalah huvisagch

var scores = [0, 0];

//toglogchiin eeljindee tsugluulj bgaa onoog hadgalah huvisagch

var roundScore = 0;

//shoonii ali talaaraa buusniig hadgalah huvisagch heregetei, 1-6 gsen utgiig ene huvisagchid sanamsarguigeer uusgej ugnu

// var diceNumber = Math.floor(Math.random() * 6) + 1;

/* <div class="player-score" id="score-0">43</div> */
// document.querySelector("#score-0").textContent = dice;

// document.querySelector("#score-1").textContents = dice;

// document.querySelector("#score-1").innerHTML = '<em>yes!</em>';

// Programm ehlehed beldeh

// document.querySelector("#score-0").textContent = 0;

document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

// document.querySelector(".btn-roll").addEventListener("click", shooShid);

var diceDom = document.querySelector(".dice");

// Anonymous bichiglel
document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  document.querySelector(".dice").style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";
  //   alert("Shoog shidlee : " + diceNumber);

  // Buusan too ni 1-ees ylgaatai bol idewhtei toglogchiin eeljiin onoog nemegduulne
  if (diceNumber !== 1) {
    // 1-ees ylgaatai too buulaa. Buusan toog toglogchid nemj ugnu
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    // 1 buusan tul toglogchiin eeljiig solij ugnu

    // Ene toglogchiin eeljin deer tsugluulsan onoog 0 bolgono
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;

    // Toglogchiin eeljiig nuguu toglogch ruu shiljuulne
    // herew idewhtei toglogch ni 0 baival idevhtei toglogchiig 1 bolgo
    // Ugui bol idewhtei toglogchiig 0 bolgo
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    // Active panel-iig daraagiin toglogch ruu shiljihed panel-iig solih
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    // Shoog  tur alga bolgoh
    diceDom.style.display = "none";

    // if (activePlayer === 0) {
    //   activePlayer = 1;
    // } else {
    //   activePlayer = 0;
    // }
  }
});
