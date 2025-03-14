// index.js

// Changer la couleur de fond aléatoire sur clic
document.querySelector('#changeColorBtn').addEventListener('click', () => {
    document.body.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
});

// Fonction pour faire défiler la page jusqu'en haut
document.querySelector('#scrollTopBtn').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
