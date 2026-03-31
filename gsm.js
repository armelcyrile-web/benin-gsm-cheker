let mtn = [
  "42",
  "46",
  "50",
  "51",
  "52",
  "53",
  "54",
  "56",
  "57",
  "59",
  "61",
  "62",
  "66",
  "67",
  "69",
  "90",
  "91",
  "96",
  "97",
];
let moov = [
  "45",
  "55",
  "58",
  "60",
  "63",
  "64",
  "65",
  "68",
  "94",
  "95",
  "98",
  "99",
];
let celtis = [
  "20",
  "21",
  "22",
  "23",
  "24",
  "28",
  "29",
  "40",
  "41",
  "43",
  "44",
  "47",
  "48",
  "49",
  "92",
  "93",
];

const gsm_check = document.getElementById("num");

function cheker() {
  const affichage = document.getElementById("resultat");
  const logo = document.getElementById("logo_reseau");

  const erreur = document.getElementById("number");
  const contact = document.getElementById("num").value;
  const regexgsm = /^[0-9]{0,8}$/;
  if (!regexgsm.test(contact)) {
    erreur.style.display = "block";
    return;
  }
  if (contact.length >= 2) {
    erreur.style.display = "none";
    const prefixe = contact.slice(0, 2);
    console.log(prefixe);
    if (mtn.includes(prefixe)) {
      affichage.textContent = " MTN BENIN";
      logo.src = "images/mtn_logo.png";
      logo.style.display = "block";
    } else if (moov.includes(prefixe)) {
      affichage.textContent = "MOOV BENIN";
      logo.src = "images/Moov_Africa_logo.png";
      logo.style.display = "block";
    } else if (celtis.includes(prefixe)) {
      affichage.textContent = "CELTIS BENIN";
      logo.src = "images/celtislogo.jpg";
      logo.style.display = "block";
    } else {
      affichage.textContent = "inconnu";
    }
  } else {
    affichage.textContent = " ";
    erreur.style.display = "none";
    logo.src = "";
    logo.style.display = "none";
  }
}
gsm_check.addEventListener("input", cheker);
