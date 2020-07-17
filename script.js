const aceClub = "images/aceClub.png",
twoClub = "images/twoClub.png",
threeClub = "images/threeClub.png",
fourClub = "images/fourClub.png",
fiveClub = "images/fiveCLub.png",
sixClub = "images/sixClub.png",
sevenClub = "images/sevenClub.png",
eightClub = "images/eightCLub.png",
nineClub = "images/nineClub.png",
tenClub = "images/tenClub.png",
jackClub = "images/jackClub.png",
queenClub = "images/queenClub.png",
kingClub = "images/kingClub.png",
aceDiamond = "images/aceDiamond.png",
twoDiamond = "images/twoDiamond.png",
threeDiamond = "images/threeDiamond.png",
fourDiamond = "images/fourDiamond.png",
fiveDiamond = "images/fiveDiamond.png",
sixDiamond = "images/sixDiamond.png",
sevenDiamond = "images/sevenDiamond.png",
eightDiamond = "images/eightDiamond.png",
nineDiamond = "images/nineDiamond.png",
tenDiamond = "images/tenDiamond.png",
jackDiamond = "images/jackDiamond.png",
queenDiamond = "images/queenDiamond.png",
kingDiamond = "images/kingDiamond.png",
aceHeart = "images/aceHeart.png",
twoHeart = "images/twoHeart.png",
threeHeart = "images/threeHeart.png",
fourHeart = "images/fourHeart.png",
fiveHeart = "images/fiveHeart.png",
sixHeart = "images/sixHeart.png",
sevenHeart = "images/sevenHeart.png",
eightHeart = "images/eightHeart.png",
nineHeart = "images/nineHeart.png",
tenHeart = "images/tenHeart.png",
jackHeart = "images/jackHeart.png",
queenHeart = "images/queenHeart.png",
kingHeart = "images/kingHeart.png",
aceSpade = "images/aceSpade.png",
twoSpade = "images/twoSpade.png",
threeSpade = "images/threeSpade.png",
fourSpade = "images/fourSpade.png",
fiveSpade = "images/fiveSpade.png",
sixSpade = "images/sixSpade.png",
sevenSpade = "images/sevenSpade.png",
eightSpade = "images/eightSpade.png",
nineSpade = "images/nineSpade.png",
tenSpade = "images/tenSpade.png",
jackSpade = "images/jackSpade.png",
queenSpade = "images/queenSpade.png",
kingSpade = "images/kingSpade.png",
cardLinks = [aceClub,twoClub,threeClub,
  fourClub,fiveClub,sixClub,sevenClub,eightClub,
  nineClub,tenClub,jackClub,queenClub,kingClub,
  aceDiamond,twoDiamond,threeDiamond,fourDiamond,
  fiveDiamond,sixDiamond,sevenDiamond,eightDiamond,
  nineDiamond,tenDiamond,jackDiamond,queenDiamond,
  kingDiamond,aceHeart,twoHeart,threeHeart,fourHeart,
  fiveHeart,sixHeart,sevenHeart,eightHeart,nineHeart,
  tenHeart,jackHeart,queenHeart,kingHeart,aceSpade,
  twoSpade,threeSpade,fourSpade,fiveSpade,sixSpade,
  sevenSpade,eightSpade,nineSpade,tenSpade,jackSpade,
  queenSpade,kingSpade];

var money = 100;
var dpulledCards = [];
var pPulledCards = [];
var dScore = 0;
var pScore = 0;
var bet = 0;
var aceUsed = [];
var extra = 0;
var extraD = 0;

function cardPull(i) {
  let max = 51;
  var random = 0;
  function pull() {
     random = Math.floor(Math.random() * (max)) + 1; 
  if (dPulledCards.includes(random) || pPulledCards.includes(random)) {
    pull();
  }
}
  pull();
  if (i == "d") {
  dPulledCards.push(random);
  } else {
    pPulledCards.push(random);
  }
  return random;
}

function cardPoints() {
  if (currentCard == 0 || currentCard == 13 || currentCard == 26 || currentCard == 39) {
    return 11
  }
  else if (currentCard == 1 || currentCard == 14 || currentCard == 27 || currentCard == 40) {
    return 2
  }
   else if (currentCard == 2 || currentCard == 15 || currentCard == 28 || currentCard == 41) {
    return 3
  }
   else if (currentCard == 3 || currentCard == 16 || currentCard == 29 || currentCard == 42) {
    return 4
  }
   else if (currentCard == 4 || currentCard == 17 || currentCard == 30 || currentCard == 43) {
    return 5
  }
   else if (currentCard == 5 || currentCard == 18 || currentCard == 31 || currentCard == 44) {
    return 6
  }
   else if (currentCard == 6 || currentCard == 19 || currentCard == 32 || currentCard == 45) {
    return 7
  }
   else if (currentCard == 7 || currentCard == 20 || currentCard == 33 || currentCard == 46) {
    return 8
  }
   else if (currentCard == 8 || currentCard == 21 || currentCard == 34 || currentCard == 47) {
    return 9
  }
  
   else {
    return 10
  }
  
};

function game() {
  currentCard = cardPull("p")
  document.getElementById("pRight").src=cardLinks[currentCard];
  pScore += cardPoints()
  currentCard = cardPull("p")
  document.getElementById("pLeft").src=cardLinks[currentCard];
  pScore += cardPoints()
  document.getElementById("pCount").innerHTML = pScore.toString();
  currentCard = cardPull("d")
  document.getElementById("dRight").src=cardLinks[currentCard];
  dScore += cardPoints();
  document.getElementById("dCount").innerHTML = dScore.toString(); 
}

function hitFunction() {
  currentCard = cardPull("p");
  pScore += cardPoints();
    if (pScore > 21 && pPulledCards.includes(0) && aceUsed.includes(0) == false) {
           pScore -= 10
           aceUsed.push(0)
         }
   if (pScore > 21 && pPulledCards.includes(13) && aceUsed.includes(13) == false) {
           pScore -= 10
           aceUsed.push(13)
         }
   if (pScore > 21 && pPulledCards.includes(26) && aceUsed.includes(26) == false) {
           pScore -= 10
           aceUsed.push(26)
         }
   if (pScore > 21 && pPulledCards.includes(39) && aceUsed.includes(39) == false) {
           pScore -= 10
           aceUsed.push(39)
         }
  document.getElementById("pCount").innerHTML = pScore.toString();
  if (extra == 0) {
  document.getElementById("pExtra1").src=cardLinks[currentCard]
    document.getElementById("pExtra1").style.width = "80px"
}
else if (extra == 1) {
  document.getElementById("pExtra2").src=cardLinks[currentCard] 
  document.getElementById("pExtra2").style.width = "80px"
}
  else if (extra == 2) {
  document.getElementById("pExtra3").src=cardLinks[currentCard]               
    document.getElementById("pExtra3").style.width = "80px"
}
  else {
    document.getElementById("pExtra4").src=cardLinks[currentCard] 
    document.getElementById("pExtra4").style.width = "80px"
  }
extra++
  if (pScore > 21) {
    endGame()
  }  
}

function betButton() {
  bet = document.getElementById("betIn").value;
  bet = parseInt(bet)
  if (bet > money || bet < 1 || Number.isInteger(bet) == false) {
    alert("Invalid Bet")
  } else {
  document.getElementById("hit").disabled = false
  document.getElementById("stand").disabled = false
  document.getElementById("betIn").disabled = true
  document.getElementById("betBut").disabled = true
  document.getElementById("pExtra1").src=""
  document.getElementById("pExtra1").style.width = "0px"
  document.getElementById("pExtra2").src=""
  document.getElementById("pExtra2").style.width = "0px"
  document.getElementById("pExtra3").src=""
  document.getElementById("pExtra3").style.width = "0px"
  document.getElementById("pExtra4").src=""
  document.getElementById("pExtra4").style.width = "0px"
  document.getElementById("result").style.color = "transparent"
  document.getElementById("dExtra1").src=""
  document.getElementById("dExtra1").style.width = "0px"
  document.getElementById("dExtra2").src=""
  document.getElementById("dExtra2").style.width = "0px"
  document.getElementById("dExtra3").src=""
  document.getElementById("dExtra3").style.width = "0px"
  document.getElementById("dExtra4").src=""
  document.getElementById("dExtra4").style.width = "0px"
  document.getElementById("dLeft").src="images/cardBack.png"
  aceUsed = []
  pScore = 0
  dScore = 0
  extra = 0
  extraD = 0
  dPulledCards = []
  pPulledCards = []
  game()
  }
}

function standFunction() {
   currentCard = cardPull("d")
  document.getElementById("dLeft").src=cardLinks[currentCard];
   dScore += cardPoints();
  document.getElementById("dCount").innerHTML = dScore.toString();
  function add() {
    if (dScore < 17) {
         currentCard = cardPull("d");
         dScore += cardPoints();
         if (dScore > 21 && dPulledCards.includes(0) && aceUsed.includes(0) == false) {
           dScore -= 10
           aceUsed.push(0)
         }
        if (dScore > 21 && dPulledCards.includes(13) && aceUsed.includes(13) == false) {
           dScore -= 10
           aceUsed.push(13)
         }
        if (dScore > 21 && dPulledCards.includes(26) && aceUsed.includes(26) == false) {
           dScore -= 10
           aceUsed.push(26)
         }
        if (dScore > 21 && dPulledCards.includes(39) && aceUsed.includes(39) == false) {
           dScore -= 10
           aceUsed.push(39)
         }
         document.getElementById("dCount").innerHTML=dScore.toString();
         if (extraD == 0) {
           document.getElementById("dExtra1").src=cardLinks[currentCard]
           document.getElementById("dExtra1").style.width = "80px"
        }
        else if (extraD == 1) {
           document.getElementById("dExtra2").src=cardLinks[currentCard] 
          document.getElementById("dExtra2").style.width = "80px"
        }
        else if (extraD == 2) {
          document.getElementById("dExtra3").src=cardLinks[currentCard]               
          document.getElementById("dExtra3").style.width = "80px"
        }
        else {
           document.getElementById("dExtra4").src=cardLinks[currentCard] 
          document.getElementById("dExtra4").style.width = "80px"
        }
        extraD++
        add()
      }
  }
  add()
  endGame()
}

function againButton() {
  money = 100
  aceUsed = []
  pScore = 0
  dScore = 0
  extra = 0
  extraD = 0
  dPulledCards = []
  pPulledCards = []
  document.getElementById("pActions").style.opacity = 1
  document.getElementById("dLeft").src= "images/cardBack.png";
  document.getElementById("dRight").src= "images/cardBack.png";
  document.getElementById("pRight").src= "images/cardBack.png";
  document.getElementById("pLeft").src= "images/cardBack.png";
  document.getElementById("pCount").innerHTML = "0"
  document.getElementById("dCount").innerHTML = "0"
  document.getElementById("betIn").value = ""
  document.getElementById("betBut").disabled = false
  document.getElementById("betIn").disabled = false
  document.getElementById("money").innerHTML = "$100"
  document.getElementById("again").style.display = "none"
  document.getElementById("pExtra1").src=""
  document.getElementById("pExtra1").style.width = "0px"
  document.getElementById("pExtra2").src=""
  document.getElementById("pExtra2").style.width = "0px"
  document.getElementById("pExtra3").src=""
  document.getElementById("pExtra3").style.width = "0px"
  document.getElementById("pExtra4").src=""
  document.getElementById("pExtra4").style.width = "0px"
  document.getElementById("result").style.color = "transparent"
  document.getElementById("dExtra1").src=""
  document.getElementById("dExtra1").style.width = "0px"
  document.getElementById("dExtra2").src=""
  document.getElementById("dExtra2").style.width = "0px"
  document.getElementById("dExtra3").src=""
  document.getElementById("dExtra3").style.width = "0px"
  document.getElementById("dExtra4").src=""
  document.getElementById("dExtra4").style.width = "0px"
}

function endGame() {
  if (pScore > 21 && dScore > 21) {
    document.getElementById("result").innerHTML = "Push"
  } 
  if (pScore == dScore) {
    document.getElementById("result").innerHTML = "Push"
  }
  else if (pScore > 21) {
    document.getElementById("result").innerHTML = "Bust";
    money -= bet;
    document.getElementById("money").innerHTML = "$" + money.toString();
  }
  else if (dScore > 21) {
    document.getElementById("result").innerHTML = "Dealer Busted"
    money += +bet
    document.getElementById("money").innerHTML = "$" + money.toString()
  }
  else if (pScore < dScore) {
    document.getElementById("result").innerHTML = "Dealer Wins"
    money -= bet
    document.getElementById("money").innerHTML = "$" + money.toString()
  }
  else if (pScore > dScore) {
    document.getElementById("result").innerHTML = "You Win!"
    money += +bet
    document.getElementById("money").innerHTML = "$" + money.toString()
  }
    document.getElementById("betBut").disabled = false
  document.getElementById("betIn").disabled = false
  document.getElementById("hit").disabled = true
  document.getElementById("stand").disabled = true
  if (money < 1) {
    document.getElementById("result").innerHTML = "Bankrupt"
    document.getElementById("betBut").disabled = true
    document.getElementById("betIn").disabled = true
    document.getElementById("again").style.display = "block"
    document.getElementById("pActions").style.opacity = 0
  }
  document.getElementById("result").style.color = "black"
}