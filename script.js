
let nbreBonneReponse = 0;
let nbreCoupJoue = 0;

function tirageNombre(min, max) {
 // cette fonction tire un nombre au hasard entre min et max
 let nombre = Math.floor(Math.random() * (max-min+1)) + min;
 return nombre
 }
 function ecrireNombre(ID, valeur) {
 // document.querySelector(ID).value = valeur
  document.getElementById(ID).value = valeur // autre possibilité
 }

 function lireNombre(ID) {
  return Number(document.getElementById(ID).value);
 }

 // tester l'écriture des nombres. Utilisez "nombreA" si vous préférez la syntaxte getElementById()
 ecrireNombre("nombreA", tirageNombre(1,50));
 ecrireNombre("nombreB", tirageNombre(1,50));

 function repondre() {
    nbreCoupJoue ++;
    // cette fonction lit les champs et vérifie la bonne ou mauvaise réponse
    let resultatJuste = lireNombre("nombreA") + lireNombre("nombreB");
    let resultatUser = lireNombre("reponse")
    // test d'égalité et modification de la couleur du champ réponse
    if (resultatUser == resultatJuste) {
      nbreBonneReponse ++;
    //document.getElementById("reponse").style.backgroundColor = "#77FF00";
    //document.getElementById("reponse").className ="form-control bg-success";
    document.getElementById("resultat").className ="text-success";
    document.getElementById("resultat").textContent ="Bonne réponse !";
    //Alternative : 
    //document.getElementById("resultat").innerHTML ="Bonne réponse !";
    document.getElementById("progress-bar").style = "width: " + Math.round((nbreBonneReponse/nbreCoupJoue)*100) + "%";
    document.getElementById("progress-bar").textContent = Math.round((nbreBonneReponse/nbreCoupJoue)*100) + "%";
    } else {
    //document.getElementById("reponse").className +="form-control bg-danger";
    document.getElementById("resultat").className ="text-danger";
    document.getElementById("resultat").textContent ="Mauvaise réponse !";
    console.log("width: " + Math.round((nbreBonneReponse/nbreCoupJoue)*100) + "%");
    document.getElementById("progress-bar").style = "width: " + Math.round((nbreBonneReponse/nbreCoupJoue)*100) + "%";
    document.getElementById("progress-bar").textContent = Math.round((nbreBonneReponse/nbreCoupJoue)*100) + "%";
    }
 }