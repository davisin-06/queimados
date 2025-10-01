const secretoBtn = document.getElementById('secret_btn');
const btnMusica = document.getElementById('icone_musica');
const musicaSecreta = new Audio('som/musica_secreta.mp3');

let musicaTocando = false;

musicaSecreta.loop = true;
musicaSecreta.autoplay = true;

btnMusica.addEventListener('click', () => {
    if (musicaTocando == true) {
        musicaSecreta.pause();
        musicaTocando = false;
    } else {
        musicaSecreta.play();
        musicaTocando = true;
    }

});