let mtn = ["97", "62"];
let moov = ["95", "64","94"];
let celtis = ["47", "93","40"];

const x = document.getElementById("num");

function f() {
    const affichage=document.getElementById("resultat");

  const erreur = document.getElementById("number");
  const contact = document.getElementById("num").value;
  const regexgsm = /^[0-9]{0,8}$/;
  if (!regexgsm.test(contact)) {
    erreur.style.display = "block";
    return;
  }
  if (contact.length >= 2) { 
    erreur.style.display = "none";
    const prefixe = contact.slice(0,2);
    console.log(prefixe);
    if (mtn.includes(prefixe)) {
        affichage.textContent="MTN BENIN";
     
    } else if (moov.includes(prefixe)) {
      affichage.textContent="MOOV BENIN";
    } else if (celtis.includes(prefixe)) { 
         affichage.textContent="CELTIS BENIN";
    } else {
    affichage.textContent="inconnu";
    }
  }

}
x.addEventListener("input", f);
