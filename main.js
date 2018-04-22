function getTime() {
    var teraz = new Date();
    var wynik = "Your Last Visit:" + teraz.getHours() + ":" + teraz.getMinutes() +":" + teraz.getSeconds() + "seconds";
    return wynik;
}

function infiniteLoop(callback) {
    setInterval(callback, 1000);}

alert("Current Time: " + getTime());
console.log("Data!")
var header =document.querySelector("h1 span");

header.innerText=getTime();