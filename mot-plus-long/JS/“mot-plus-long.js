"use strict";

document.addEventListener("DOMContentLoaded", () => { 
    // Récupère le texte du paragraphe "citation", enlève la ponctuation et divise en mots
    let str = document.getElementById("citation").textContent;
    str = str.replace(/[^a-zA-ZÀ-ÿ\s]/g, ""); // Supprime la ponctuation
    let mots = str.split(" "); // Sépare les mots par les espaces

    // Trouve la longueur du mot le plus long
    let maxLongueur = Math.max(...mots.map(mot => mot.length));

    // Récupère tous les mots qui ont cette longueur maximale
    let motsPlusLongs = mots.filter(mot => mot.length === maxLongueur);

    // Affiche le ou les mots les plus longs dans le paragraphe "motPlusLong"
    document.getElementById("motPlusLong").textContent = 
        "Les mots les plus longs sont " + motsPlusLongs.join(" et ") + " (" + maxLongueur + " lettres).";

});
