const myButton = document.getElementById('hideMenu')
const titleWelcome = document.getElementById('titleWelcome')
const titleToMy = document.getElementById('titleToMy')
const titleWebsite = document.getElementById('titleWebsite')
var titleEffectCon = true;

function buttonVisability() {
    const menuButton = document.getElementById("navList");
    if (menuButton.style.visibility === 'visible') {
    menuButton.style.visibility = 'hidden'
} else {
    menuButton.style.visibility = 'visible'
}
}
document.getElementById("hideMenu").addEventListener("click", buttonVisability);