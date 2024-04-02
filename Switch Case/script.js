const dayNumber = 1;
let day;

switch (dayNumber) {
    case 1:
        day = "Sunday"
        break;
    case 2:
        day = "Monday"
        break;
    case 3: 
        day = "Tuesday"
        break;
    case 4:
        day = "Wednesday"
        break;
    case 5:
        day = "Thursday"
        break;
    case 6:
        day = "Friday"
        break;
    case 7:
        day = "Saturday"
        break;
    defult:
        day = "Invade Day"

}

for (let i = dayNumber; i < 7; i++ ){
console.log (day)
}