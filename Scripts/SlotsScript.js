var loanButton = document.getElementById("requestLoan")
var rollButton = document.getElementById("rollSlots")
var moneyRemoveButton = document.getElementById("removeMoney")
var raiseBetButton = document.getElementById("raiseBet")
var lowerBetButton = document.getElementById("lowerBet")

var slots = document.getElementsByClassName("slotsContainer").item(0)
var moneyCounter = document.getElementById("moneyCounter")
var loanCounter = document.getElementById("currentLoan")
var betCounter = document.getElementById("currentBet")

var bet = Number(100)
var loan = Number(0)
var money = Number(1000)
var alreadyWon = false

const AdmiringYou = document.getElementById("admiringYou").volume = 0.1
const JackpotHit = new Audio("../Audio/Extras/JackpotHit.mp3")
const JackpotHitALT = new Audio("../Audio/Extras/JackpotHitALT.mp3")
const SlotsRoll = new Audio("../Audio/Extras/SlotsRolling.mp3")
SlotsRoll.volume = 0.3

var slotsArray = []
var slotsAllowedValues = [0,1,2,3,4,5,6,7,8,9]
for(i=0; slots.children.length>i; i++){
    slotsArray[i] = slots.children.item(i)
}

function updateCounts(){
    //AdmiringYou.play()
    alreadyWon = false
    if(money<0){
        money = 0
    }
    if(loan<0){
        loan = 0
    }
    if(bet<100){
        bet = 100
    }
    moneyCounter.textContent = String("Money : " + money)
    loanCounter.textContent = String("Current Loan : " + loan)
    betCounter.textContent = String("Current Bet : " + bet)
}

function spinSlots(){
    if(money>=bet){
        SlotsRoll.currentTime = 0
        SlotsRoll.play()
        money -= bet
        function checkJackPot(value){
            if(value == totalValueArray.at(0) && value == totalValueArray.at(1) && value == totalValueArray.at(2)){
                return true
            }
            else{
                return false
            }
        }
        function checkWin(element, index, array){
            var allowedNums = Array.from(array)
            allowedNums.splice(index,1)
            if(allowedNums.includes(element) && alreadyWon == false){

                alreadyWon = true
                money += 3*bet
                return true
            }
            else{
                return false
                }
           
            }
             var totalValueArray = []
            for (var i=0; slotsArray.length>i;i++){
                var slotValue = Math.floor(Math.random() * slotsAllowedValues.length)
                totalValueArray.push(slotValue)
                setAnimation(slotValue,i)
            }

            function setAnimation(value,index){
                var currentSlot = slotsArray[index]
                var label1 = currentSlot.children[0]
                var label2 = currentSlot.children[1]
                label1.classList.remove(...label1.classList)
                label2.classList.remove(...label2.classList)
                switch(true){
                    case 0 == value:
                        label1.classList.add("landOn0")
                        label2.classList.add("landOn0")
                        break
                    case 1 == value:
                        label1.classList.add("landOn1")
                        label2.classList.add("landOn1")
                        break
                    case 2 == value:
                        label1.classList.add("landOn2")
                        label2.classList.add("landOn2")
                        break
                    case 3 == value:
                        label1.classList.add("landOn3")
                        label2.classList.add("landOn3")
                        break
                    case 4 == value:
                        label1.classList.add("landOn4")
                        label2.classList.add("landOn4")
                        break
                    case 5 == value:
                        label1.classList.add("landOn5")
                        label2.classList.add("landOn5")
                        break
                    case 6 == value:
                        label1.classList.add("landOn6")
                        label2.classList.add("landOn6")
                        break
                    case 7 == value:
                        label1.classList.add("landOn7")
                        label2.classList.add("landOn7")
                        break
                    case 8 == value:
                        label1.classList.add("landOn8")
                        label2.classList.add("landOn8")
                        break
                    case 9 == value:
                        label1.classList.add("landOn9")
                        label2.classList.add("landOn9")
                        break
                }
            }
            if(totalValueArray.every(checkJackPot)){
                JackpotHitALT.play()
                money += 77 * bet
            }
            else {totalValueArray.forEach(checkWin)}
        }
    updateCounts()
    betChange()
}

function requestLoan(){
    money += 500
    loan += 800
    updateCounts()
}
function liquifyAssets(){
    var loanPay = loan -= money
    if(loanPay<0){
        loan = 0
        money = Math.abs(loanPay)
    }
    else{
        money = 0
    }
    updateCounts()
}
function betChange(type){
    if(type=="raise" && money > bet){
        bet += 100
    }
    else if(type=="lower"){
        bet -= 100
    }
    if(money<bet){
        bet = money
    }
    updateCounts()
}

rollButton.onclick = spinSlots
loanButton.onclick = requestLoan
moneyRemoveButton.onclick = liquifyAssets
raiseBetButton.onclick = () => betChange("raise")
lowerBetButton.onclick = () => betChange("lower")

console.log(slotsArray)
updateCounts()