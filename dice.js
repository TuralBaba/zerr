var zirt = [1, 2, 3, 4, 5, 6];
var firstNum = Math.floor(Math.random()*zirt.length+1);
var pirt = [1, 2, 3, 4, 5, 6];
var secondNum = Math.floor(Math.random()*pirt.length+1);

    
if (firstNum===1) {
    var bir = document.getElementById("bir").src = "./1.jpeg";
} else if (firstNum===2) {
    var bir = document.getElementById("bir").src = "./2.jpeg";
} else if (firstNum===3) {
    var bir = document.getElementById("bir").src = "./3.jpeg"; 
} else if (firstNum===4) {
    var bir = document.getElementById("bir").src = "./4.jpeg";
} else if (firstNum===5) {
    var bir = document.getElementById("bir").src = "./5.jpeg"; 
} else if (firstNum===5) {
    var bir = document.getElementById("bir").src = "./5.jpeg"; 
} else if (firstNum===6) {
    var bir = document.getElementById("bir").src = "./6.jpeg"; 
}

if (secondNum===1) {
    var bir = document.getElementById("iki").src = "./1.jpeg";
} else if (secondNum===2) {
    var bir = document.getElementById("iki").src = "./2.jpeg";
} else if (secondNum===3) {
    var bir = document.getElementById("iki").src = "./3.jpeg"; 
} else if (secondNum===4) {
    var bir = document.getElementById("iki").src = "./4.jpeg";
} else if (secondNum===5) {
    var bir = document.getElementById("iki").src = "./5.jpeg"; 
} else if (secondNum===5) {
    var bir = document.getElementById("iki").src = "./5.jpeg"; 
} else if (secondNum===6) {
    var bir = document.getElementById("iki").src = "./6.jpeg"; 
}

if (firstNum>secondNum) {
var h1 = document.getElementById("h1").innerHTML = "Birinci oyuncu qalib geldi!!!";
} else if (firstNum===secondNum) {
    var h1 = document.getElementById("h1").innerHTML = "Hec-hece!!! Yeniden at!";
} else {
    var h1 = document.getElementById("h1").innerHTML = "Ikinci oyuncu qalib geldi!!!";
}
