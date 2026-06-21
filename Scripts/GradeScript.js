var scoreLabel = document.getElementById("scoreInput")
var submit = document.getElementById("submitButton")
var gradeLabel = document.getElementById("assignedGrade")
var flavorText = document.getElementById("flavorText")
const AdmiringYou = document.getElementById("admiringYou").volume = 0.1


function scoreCalculate(){
    var score = scoreLabel.value
    switch(true){
        case(score>=100):
                gradeLabel.textContent = "O"
                flavorText.textContent = "OMEGA!"
            break
        case(score>=95):
                gradeLabel.textContent = "S"
                flavorText.textContent = "SACRED STUNNING STYLE!"
            break
        case(score>=80):
                gradeLabel.textContent = "A"
                flavorText.textContent = "AMAZING!"
            break
        case(score>=70):
                gradeLabel.textContent = "B"
                flavorText.textContent = "BOLD!"
            break
        case(score>=60):
                gradeLabel.textContent = "C"
                flavorText.textContent = "COOL!"
            break
        case(score>=50):
                gradeLabel.textContent = "D"
                flavorText.textContent = "DULL!"
            break
        case(score>=20):
                gradeLabel.textContent = "F"
                flavorText.textContent = "FLOP!"
            break
        case(score<20):
                gradeLabel.textContent = "M"
                flavorText.textContent = "YOU HAVE MEGUMI!!!"
            break
    }
}
submit.onclick = scoreCalculate

var heightCm = 160
var weightKg = 100
var heightM = (heightCm/100)**2
var BMI = weightKg/heightM

console.log(BMI)
if(BMI>30){
    console.log("You obese as shit")
}

var students = [
    {name: "Sian",score:88},
    {name: "Sigma",score:100},
    {name: "Monster",score:0},
    {name: "Devil",score:66},
    {name: "Kotton",score:84},
]

for(i=0;students.length > i;i++){
    if (students[i].score >= 50){
        console.log(students[i].name + " passes.")
    }
    else if (students[i].score < 50){
        console.log(students[i].name + " does not pass.")
    }
}

for(i=0;students.length > i;i++){
    if (students[i].score >= 50){
        console.log(students[i].name + " passes.")
    }
    else if (students[i].score < 50){
        console.log(students[i].name + " does not pass.")
    }
}

var moduloYuji = 0
for(i=0;100 > i;i++){
    if(i % 2 === 0){
        moduloYuji = moduloYuji + i
        console.log(i + " is the sigma")
    }
}
console.log(moduloYuji + " is epic.")