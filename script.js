function changeText() {
    let textsArray = ["Football", "Cricket", "Hockey", "Badminton","Volleyball"]
    let number = getRandomNumberBetween (0,textsArray.length-1)
    console.log("index:", number);
    document.getElementById("heading").innerHTML = textsArray[number];
}

function getRandomNumberBetween(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}