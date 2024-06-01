const steps = ["one", "two", "three"];
function listTemplate(step) {
    return `<li>${step}</li>`; //the html string made from step
}

const stepsHtml = steps.map(listTemplate); // use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join(); // set the innerHTML

const grades = ['A', 'B', 'A']
function convertGrades(grade) {
    let points = 0;
    if (grade === "A") {
        points = 4;
    } else if (grade === "B") {
        points = 3;
    } return points;
}

const gpaPoints = grades.map(convertGrades);
const pointsTotal = gpaPoints.reduce(function (total, item) {
    return total + item;
});

const fruits = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortFruits = fruits.filter(function (word) {
    return word.length < 6;
});

const myArray = [12, 34, 21, 54];
const luckyNum = 21;
let luckyIndex = myArray.indexOf(luckyNum);