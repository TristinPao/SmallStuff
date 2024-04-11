var index = 0;
var occupations = ["[Gamer]", "[Student]", "[Athlete]", "[Weeb]", "[Content Creator]", "[Programmer]"];
const gitHub = document.getElementsByClassName('gitHubButton')

function updateOccupation() {
    document.getElementById("ocuID").innerHTML = occupations[index];
    index = (index + 1) % occupations.length;
}

function gitHubButton1() {
    window.open("https://github.com/TristinPao/SmallStuff/tree/main/2D%20Game%20Demo");
}

function gitHubButton2() {
    window.open("https://github.com/TristinPao/SmallStuff/tree/main/Python%20Testing");
}

function gitHubButton3() {
    window.open("https://github.com/TristinPao/SmallStuff/tree/main/Dog%20API%20Test");
}

setInterval(updateOccupation, 1500);