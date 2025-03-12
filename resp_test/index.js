function changeDog() {
    const dogImage = document.getElementById('dogImage');
    const dogText = document.getElementById('dogText');

    if (dogImage.src.includes('chien.jpg')) {
        dogImage.src = 'chien2.jpg'; // Remplace par une autre image de chien
        dogText.textContent = 'Le chien adore jouer dans le parc !';
    } else {
        dogImage.src = 'chien.jpg';
        dogText.textContent = 'Le chien est le meilleur ami de l\'homme.';
    }
}

function changeCat() {
    const catImage = document.getElementById('catImage');
    const catText = document.getElementById('catText');

    if (catImage.src.includes('chat.jpg')) {
        catImage.src = 'chat2.jpg'; // Remplace par une autre image de chat
        catText.textContent = 'Le chat adore se prélasser au soleil.';
    } else {
        catImage.src = 'chat.jpg';
        catText.textContent = 'Le chat est un animal indépendant et mystérieux.';
    }
}

function changeBird() {
    const birdImage = document.getElementById('birdImage');
    const birdText = document.getElementById('birdText');

    if (birdImage.src.includes('oiseau.jpg')) {
        //birdImage.src = 'oiseau2.jpg'; // Remplace par une autre image d'oiseau
        document.getElementById('birdImage').src = 'oiseau2.jpg';
        document.getElementById('birdText').textContent = 'Les oiseaux migrent vers le sud en hiver.';
    } else {
        birdImage.src = 'oiseau.jpg';
        birdText.textContent = 'Les oiseaux sont les maîtres du ciel.';
    }
}