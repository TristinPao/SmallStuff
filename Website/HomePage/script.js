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

    titleWelcome.style.color = '#FFA732'
    titleToMy.style.color = '#FFA732'
    titleWebsite.style.color = '#FFA732'
}

let titleEffect2 = () => {
    titleWelcome.style.color = '#ffdf51'
    titleToMy.style.color = '#ffdf51'
    titleWebsite.style.color = '#ffdf51'
    }

setInterval(titleEffect, 1000)
setInterval(titleEffect2, 2000)
document.getElementById("hideMenu").addEventListener("click", buttonVisability);