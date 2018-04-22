function getTime() {
    var teraz = new Date();
    var wynik = "Youre Last Visit:" + teraz.getHours() + ":" + teraz.getMinutes();


    return wynik;

}

function infiniteLoop(callback) {
    setInterval(callback, 1000);}

alert("Current Time: " + getTime());
console.log("Data!")
var header =document.querySelector("h1 span");

header.innerText=getTime();