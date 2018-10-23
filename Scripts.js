var hidden_d = false;
var hidden_f = false;
var buttonTxt;


function hentXMLSpel(tag1, tag2, id) {
    //tag1 er for første taggen
    //tag2 er for den andre taggen
    //treng eigentleg ikkje desse
    //id der der ein skal setje tabellen inn
    var Connect = new XMLHttpRequest();
    
    Connect.open("GET", "favorittspel.xml", false);
    Connect.send(null);

    var docX = Connect.responseXML;
    var namn = docX.getElementsByTagName(tag1);
    var timar = docX.getElementsByTagName(tag2);

    //Dersom namn eller timar ikkje har like mange element i XML-fila,
    //vil ikkje tabellen bli skreve ut pga index out of bounds. Burde bli fiksa...

    var tilHTML = "<h4>Nokon favorittspel:</h4><table><tr><th>Spel</th><th>Timar</th></tr>";

    for (i = 0; i < namn.length; i++) {
        tilHTML += "<tr><td>";
        tilHTML += namn[i].textContent;
        tilHTML += "</td><td>";
        tilHTML += timar[i].textContent;
        tilHTML += "</td></tr>";
    }
    tilHTML += "</table>"
    document.getElementById(id).innerHTML = tilHTML;
}
    
//darkmode og funtime

function darkMode(id, id2) {
    //id er sjølve knappen ein trykker på
    //id2 er den andre knappen (fun times)
    buttonTxt = document.getElementById(id).innerHTML;
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
    //id er sjølve knappen ein trykker på
    //id2 er den andre knappen (darkmode)
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

var nyttBilde = false;

function funFramside(bildeNy, bildeOrig, id, id2, id3) {
    //lager denne for å enkelt få endre bilde og tekst på framsida
    //bildeny er det bilde som skal endrast når ein trykker på funtimes knappen
    //bildeorig er det originale bildet
    funTimes(id, id2);
    if (!nyttBilde) {
        endreBilde(bildeNy, id3);
        nyttBilde = true;
    } else {
        endreBilde(bildeOrig, id3);
        nyttBilde = false;
    }
}

function endreBilde(a, id) {
    document.getElementById(id).src = a;
}

/*
function endreTekstComic() {
    document.body.style.backgroundColor = 'pink';
    document.body.style.fontFamily = 'Comic Sans MS, cursive, sans-serif';
    document.body.getElementsByClassName('header').style.fontFamily = 'Comic Sans MS, cursive, sans-serif';
}

function endreTekstVerdana() {
    document.body.style.backgroundColor = 'rgb(101, 195, 253)';
    document.body.style.fontFamily = 'Verdana, Geneva, sans-serif';
    document.body.getElementsByClassName('header').style.fontFamily = 'Verdana, Geneva, sans-serif';
}
*/