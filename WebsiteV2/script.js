var index = 0;
var occupations = ["[Gamer]", "[Student]", "[Athlete]", "[Weeb]", "[Content Creator]", "[Programmer]"];
const gitHub = document.getElementsByClassName('gitHubButton')

function updateOccupation() {
    document.getElementById("ocuID").innerHTML = occupations[index];
    index = (index + 1) % occupations.length;
}

function gitHubButton1() {
    window.location.href = "https://github.com/";
}

setInterval(updateOccupation, 1500);
