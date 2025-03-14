"use strict";

// Récupère l'élément bouton
const button = document.getElementById("button");

// Ajoute un écouteur sur le bouton pour lancer la vérification
button.addEventListener("click", () => {
    // Récupère la valeur saisie et la convertit en minuscules
    const myInput = document.getElementById("id-mot-saisi").value.toLowerCase().trim();
    
    // Inverse la chaîne pour tester la palindromie
    const reversed = myInput.split("").reverse().join("");
    
    // Compare la chaîne d'origine avec la chaîne inversée
    const output = myInput === reversed && myInput !== "" 
        ? "Oui, c'est un palindrome !" 
        : "Non, ce n'est pas un palindrome.";
    
    // Affiche le résultat dans l'élément "resultat"
    document.getElementById("resultat").textContent = output;
});
