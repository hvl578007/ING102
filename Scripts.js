var hidden_d = false;
var hidden_f = false;
var buttonTxt;

function darkMode(id, id2) {
    buttonTxt = document.getElementById(id).innerHTML;
    hidden = false;
    if (buttonTxt == "Darkmode") {
        buttonTxt = "Normal";
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        document.getElementById(id).innerHTML = buttonTxt;
    } else {
        buttonTxt = "Darkmode";
        document.body.style.backgroundColor = 'rgb(101, 195, 253)';
        document.body.style.color = 'black';
        document.getElementById(id).innerHTML = buttonTxt;
    }
    hidden_f = !hidden_f;
    if (hidden_f) {
        document.getElementById(id2).style.visibility = 'hidden';
    } else {
        document.getElementById(id2).style.visibility = 'visible';
    }
}
function funTimes(id, id2) {
    buttonTxt = document.getElementById(id).innerHTML;
    if (buttonTxt == "Fun times") {
        buttonTxt = "Normal";
        document.body.style.backgroundColor = 'pink';
        document.body.style.fontFamily = 'Comic Sans MS, cursive, sans-serif';
        document.getElementById(id).innerHTML = buttonTxt;
    } else {
        buttonTxt = "Fun times";
        document.body.style.backgroundColor = 'rgb(101, 195, 253)';
        document.body.style.fontFamily = 'Verdana, Geneva, sans-serif';
        document.getElementById(id).innerHTML = buttonTxt;
    }
    hidden_d = !hidden_d;
    if (hidden_d) {
        document.getElementById(id2).style.visibility = 'hidden';
    } else {
        document.getElementById(id2).style.visibility = 'visible';
    }
}