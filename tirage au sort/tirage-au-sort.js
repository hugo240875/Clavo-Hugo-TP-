"use strict"

const mangas = ["Naruto", "One Piece", "DBZ", "Bleach", "HxH", "JJK", "Spy x Family", "Sakamoto Days", "JJBA", "HnK", "Boruto"];

// Fonction pour effectuer le tirage
function tirage() {
    const index = Math.floor(Math.random() * mangas.length);
    document.getElementById('affichage').innerText = `Manga Choisi : ${mangas[index]}`;
}

// Ajout de l'événement au bouton
document.getElementById('tirageBtn').addEventListener('click', tirage);