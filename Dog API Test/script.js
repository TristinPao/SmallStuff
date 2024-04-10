const dogImageDiv = document.getElementById("dogImage")
const imgRefresh = document.getElementById("refresh")


const getNewDog = () => {
fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
        dogImageDiv.innerHTML = `<img src = '${json.message}'/ height=300, width=300>` 
    })
}

imgRefresh.onclick = () =>  getNewDog()
// console.log("Clicked: Got new dog")
