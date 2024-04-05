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

function titleEffect() {

    setTimeout(() => {
    titleWelcome.style.color = 'black'
    }, 1000)
    setTimeout(() => {
    titleToMy.style.color = 'black'
    }, 1000)
    setTimeout(() => {
    titleWebsite.style.color = 'black'
    }, 1000)
    setTimeout(() => {
    titleWelcome.style.color = '#B99470'
    }, 2000)
    setTimeout(() => {
    titleToMy.style.color = '#B99470'
    }, 2000)
    setTimeout(() => {
    titleWebsite.style.color = '#B99470'
    }, 2000)

    
}

setInterval(titleEffect, 1000)
document.getElementById("hideMenu").addEventListener("click", buttonVisability);