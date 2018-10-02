//xml-kode

function hentXMLSpel(tag1, tag2, id) {
    var Connect = new XMLHttpRequest();
    
    Connect.open("GET", "favorittspel.xml", false);
    Connect.send(null);

    var docX = Connect.responseXML;
    var namn = docX.getElementsByTagName(tag1);
    var timar = docX.getElementsByTagName(tag2);

    //Dersom namn eller timar ikkje har like mange element i XML-fila,
    //vil ikkje tabellen bli skreve ut pga index out of bounds. Må bli fiksa...

    var tilHTML = "<table><tr><th>Spel</th><th>Timar</th></tr>";

    for (i = 0; i < namn.length; i++) {
        tilHTML += "<tr><td>";
        tilHTML += namn[i].textContent;
        tilHTML += "</td><td>";
        tilHTML += timar[i].textContent;
        tilHTML += "</td></tr>";
    }
    tilHTML += "</table>"
    document.getElementById(id).innerHTML += tilHTML;
}
    
//darkmode og funtime
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
        endreBilde("fartmedbart.jpg", 'bildeJS');
    } else {
        buttonTxt = "Fun times";
        document.body.style.backgroundColor = 'rgb(101, 195, 253)';
        document.body.style.fontFamily = 'Verdana, Geneva, sans-serif';
        document.getElementById(id).innerHTML = buttonTxt;
        endreBilde("Gruppe2.jpg", 'bildeJS');
    }
    hidden_d = !hidden_d;
    if (hidden_d) {
        document.getElementById(id2).style.visibility = 'hidden';
    } else {
        document.getElementById(id2).style.visibility = 'visible';
    }
}

function endreBilde(a, id) {
    document.getElementById(id).src = a;
}