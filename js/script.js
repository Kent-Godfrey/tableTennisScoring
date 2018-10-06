let redGameScore = 0;
let blueGameScore = 0;
let redSetScore = 0;
let blueSetScore = 0;
let totalScore;
let serviceTurn = false;
const redAddBtn = document.getElementById("redPlus");
const blueAddBtn = document.getElementById("bluePlus");
const redMinusBtn = document.getElementById("redMinus");
const blueMinusBtn = document.getElementById("blueMinus");

window.onload = function() {
    if (serviceTurn == true) {
        document.getElementById("blueSetScore").classList.add("hidden");
        document.getElementById("redSetScore").classList.remove("hidden");
    } else {
        document.getElementById("redSetScore").classList.add("hidden");
        document.getElementById("blueSetScore").classList.remove("hidden");
    }
}

function addRedPoint() {
    ++redGameScore;
    winCondition()
    serviceOrder();
    document.getElementById("redMatchScore").innerHTML = redGameScore;
}

function addBluePoint() {
    ++blueGameScore;
    winCondition()
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

function serviceOrder() {
    totalScore = redGameScore + blueGameScore;
    totalSetScore = redSetScore + blueSetScore;

    if (totalSetScore % 2 == 0) {
        if (redGameScore <= 10 || blueGameScore <= 10) {
            if (totalScore % 4 >= 2) {
                serviceTurn = false;
                console.log(serviceTurn);
                document.getElementById("blueSetScore").classList.add("hidden");
                document.getElementById("redSetScore").classList.remove("hidden");
            } else {
                serviceTurn = true;
                console.log(serviceTurn);
                document.getElementById("redSetScore").classList.add("hidden");
                document.getElementById("blueSetScore").classList.remove("hidden");
            }
        }
        if (redGameScore >= 10 && blueGameScore >= 10) {
            if (totalScore % 2 == 0) {
                serviceTurn = false;
                document.getElementById("blueSetScore").classList.add("hidden");
                document.getElementById("redSetScore").classList.remove("hidden");
            } else {
                serviceTurn = true;
                document.getElementById("redSetScore").classList.add("hidden");
                document.getElementById("blueSetScore").classList.remove("hidden");
            }
        }
    } else {
        if (redGameScore <= 10 || blueGameScore <= 10) {
            if (totalScore % 4 >= 2) {
                serviceTurn = false;
                console.log(serviceTurn);
                document.getElementById("redSetScore").classList.add("hidden");
                document.getElementById("blueSetScore").classList.remove("hidden");
            } else {
                serviceTurn = true;
                console.log(serviceTurn);
                document.getElementById("blueSetScore").classList.add("hidden");
                document.getElementById("redSetScore").classList.remove("hidden");
            }
        }
        if (redGameScore >= 10 && blueGameScore >= 10) {
            if (totalScore % 2 == 0) {
                serviceTurn = false;
                document.getElementById("redSetScore").classList.add("hidden");
                document.getElementById("blueSetScore").classList.remove("hidden");
            } else {
                serviceTurn = true;
                document.getElementById("blueSetScore").classList.add("hidden");
                document.getElementById("redSetScore").classList.remove("hidden");
            }
        }

    }
}

function winCondition() {
    if (redGameScore >= 10 && blueGameScore >= 10) {
        if (redGameScore - blueGameScore >= 2) {
            console.log('game to red');
            resetScore();
        } else if (blueGameScore - redGameScore >= 2) {
            console.log('game to blue');
            resetScore();
        }
    } else {
        if (redGameScore == 11 && blueGameScore < 10) {
            console.log('game to red');
            resetScore();
        } else if (blueGameScore == 11 && redGameScore < 10) {
            console.log('game to blue');
            resetScore();
        }
    }
}

function resetScore() {
    if (redGameScore > blueGameScore) {
        ++redSetScore;
        document.getElementById("redSetScore").innerHTML = redSetScore;
    } else {
        ++blueSetScore;
        document.getElementById("blueSetScore").innerHTML = blueSetScore;
    }
    blueGameScore = 0;
    redGameScore = 0;
    document.getElementById("blueMatchScore").innerHTML = blueGameScore;
    document.getElementById("redMatchScore").innerHTML = redGameScore;
}

redAddBtn.addEventListener("click", addRedPoint);
blueAddBtn.addEventListener("click", addBluePoint);
redMinusBtn.addEventListener("click", minusRedPoint);
blueMinusBtn.addEventListener("click", minusBluePoint);