let redGameScore = 0;
let blueGameScore = 0;
let redSetScore = 0;
let blueSetScore = 0;
//let totalScore = redGameScore + blueGameScore;
let totalScore;
let serviceTurn = true;
const redAddBtn = document.getElementById("redPlus");
const blueAddBtn = document.getElementById("bluePlus");
const redMinusBtn = document.getElementById("redMinus");
const blueMinusBtn = document.getElementById("blueMinus");

function addRedPoint() {
    ++redGameScore;
    serviceOrder();
    document.getElementById("redMatchScore").innerHTML = redGameScore;

}

function addBluePoint() {
    ++blueGameScore;
    serviceOrder();
    document.getElementById("blueMatchScore").innerHTML = blueGameScore;

}

function minusRedPoint() {

    --redGameScore;
    serviceOrder();
    document.getElementById("redMatchScore").innerHTML = redGameScore;

}

function minusBluePoint() {

    --blueGameScore;
    serviceOrder();
    document.getElementById("blueMatchScore").innerHTML = blueGameScore;

}

/*
function serviceOrder() {
    totalScore = redGameScore + blueGameScore;

    if ((redGameScore >= 10 && blueGameScore >= 10) || totalScore % 2 == 0)

        serviceTurn = !serviceTurn;
    console.log(serviceTurn);

    //if serviceTurn true, then yellow else white,
    //if serviceTurn true, then white, else yellow
    document.getElementById("redMatchScore").style.color = serviceTurn ? "yellow" : "white";
    document.getElementById("blueMatchScore").style.color = serviceTurn ? "white" : "yellow";
}*/


function serviceOrder() {
    totalScore = redGameScore + blueGameScore;

    if (redGameScore <= 10 || blueGameScore <= 10) {
        if (totalScore % 4 >= 2) {
            serviceTurn = true;
            //document.getElementById("blueMatchScore").style.color = "white";
            document.getElementById("blueSetScore").classList.add("hidden");
            document.getElementById("redSetScore").classList.remove("hidden");
        } else {
            serviceTurn = false;
            document.getElementById("redSetScore").classList.add("hidden");
            document.getElementById("blueSetScore").classList.remove("hidden");
        }
    }
    if (redGameScore >= 10 && blueGameScore >= 10) {
        if (totalScore % 2 == 0) {
            serviceTurn = true;

            document.getElementById("blueSetScore").style.color = "white";
            document.getElementById("redMatchScore").style.color = "yellow";
        } else {
            document.getElementById("redMatchScore").style.color = "white";
            document.getElementById("blueMatchScore").style.color = "yellow";
        }
    }

}




redAddBtn.addEventListener("click", addRedPoint);
blueAddBtn.addEventListener("click", addBluePoint);
redMinusBtn.addEventListener("click", minusRedPoint);
blueMinusBtn.addEventListener("click", minusBluePoint);