/* ========================
   DONNÉES OPÉRATEURS
======================== */
const MTN_PREFIXES = [
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

const MOOV_PREFIXES = [
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

const CELTIS_PREFIXES = [
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

/* ========================
   ÉLÉMENTS DU DOM
======================== */
const input = document.getElementById("num");
const affichage = document.getElementById("resultat");
const logo = document.getElementById("logo_reseau");
const erreur = document.getElementById("number");
const burger = document.querySelector(".burger");
const navUl = document.querySelector("nav ul");
const navLinks = document.querySelectorAll("nav ul li a");

/* ========================
   UTILITAIRE — FERMER LE MENU
======================== */
function fermerMenu() {
  navUl.classList.remove("nav-active");
  burger.classList.remove("toggle-effect");
}

/* ========================
   BURGER MENU
======================== */
burger.addEventListener("click", (e) => {
  e.stopPropagation();
  navUl.classList.toggle("nav-active");
  burger.classList.toggle("toggle-effect");
});

// Fermer au clic sur un lien du menu
navLinks.forEach((lien) => {
  lien.addEventListener("click", fermerMenu);
});

// Fermer au clic en dehors du menu
document.addEventListener("click", (e) => {
  const menuOuvert = navUl.classList.contains("nav-active");
  const clicDansNav = navUl.contains(e.target);
  const clicSurBurger = burger.contains(e.target);

  if (menuOuvert && !clicDansNav && !clicSurBurger) {
    fermerMenu();
  }
});

// Fermer au focus sur l'input
input.addEventListener("focus", fermerMenu);

/* ========================
   SCROLL — HEADER
======================== */
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    document.querySelector("header").classList.add("header-scrolled");
  } else {
    document.querySelector("header").classList.remove("header-scrolled");
  }
});

/* ========================
   DÉTECTION OPÉRATEUR
======================== */
function checkOperator() {
  const contact = input.value;
  const regexgsm = /^[0-9]{0,8}$/;

  if (!regexgsm.test(contact)) {
    erreur.style.display = "block";
    return;
  }

  erreur.style.display = "none";

  if (contact.length < 2) {
    affichage.textContent = "";
    affichage.style.color = "";
    logo.src = "";
    logo.style.display = "none";
    return;
  }

  const prefixe = contact.slice(0, 2);

  if (MTN_PREFIXES.includes(prefixe)) {
    affichage.textContent = "MTN BÉNIN";
    affichage.style.color = "#ffcc00";
    logo.src = "images/mtn_logo.png";
    logo.style.display = "block";
  } else if (MOOV_PREFIXES.includes(prefixe)) {
    affichage.textContent = "MOOV AFRICA BÉNIN";
    affichage.style.color = "#005bab";
    logo.src = "images/Moov_Africa_logo.png";
    logo.style.display = "block";
  } else if (CELTIS_PREFIXES.includes(prefixe)) {
    affichage.textContent = "CELTIIS BÉNIN";
    affichage.style.color = "#2e7d32";
    logo.src = "images/celtislogo.jpg";
    logo.style.display = "block";
  } else {
    affichage.textContent = "Préfixe non reconnu";
    affichage.style.color = "#e53935";
    logo.src = "";
    logo.style.display = "none";
  }
}

input.addEventListener("input", checkOperator);
