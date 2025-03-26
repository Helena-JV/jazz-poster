//INSTRUMENTOS =====================================================================
//Trompeta
const trompeta = document.querySelector('.trompeta');
const pistones = document.querySelectorAll('.piston');

//Piano
const piano = document.querySelector('.piano');
const teclas = document.querySelectorAll('.tecla');

//Platillos
const platillos = document.querySelector('.platillos-container');

//Saxo
const saxofon = document.querySelector('.saxofon');

//Tambor
const tambor = document.querySelector('.tambor');

//Trombón
const trombon = document.querySelector('.trombon');

//SONIDOS =====================================================================
//Trompeta
const trumpetSound = new Audio('./assets/sound/trumpet.wav');
trumpetSound.loop = true;

//Piano
const pianoSound = new Audio('./assets/sound/piano-110bpm.wav');
pianoSound.loop = true;

//Platillos
const drumsAccentsSound = new Audio('./assets/sound/drums-accents_95bpm.wav');
drumsAccentsSound.loop = true;

//Saxo
const saxSound = new Audio('./assets/sound/sax-_124bpm.wav');
saxSound.loop = true;

//Tambor
const drumsSound = new Audio('./assets/sound/drums_148bpm.wav');
drumsSound.loop = true;

//Trombón
const trombonfSound = new Audio('./assets/sound/trombon-118bpm.wav');
trombonfSound.loop = true;


//TOGGLE ================================================================
//Trompeta
function toggleTrumpet() {
    pistones.forEach(piston => {
        piston.classList.toggle('pistonAnim');  
    });  
    if (trumpetSound.paused) {
        trumpetSound.play();
    } else {
        trumpetSound.pause();
    }
}

//Piano
function togglePiano() {
    teclas.forEach(tecla => {
        tecla.classList.toggle('teclaAnim');  
    });  
    if (pianoSound.paused) {
        pianoSound.play();
    } else {
        pianoSound.pause();
    }
}

//Platillos
function toggleDrumsAccents() {
    platillos.classList.toggle('platilloAnim');  
    if (drumsAccentsSound.paused) {
        drumsAccentsSound.play();
    } else {
        drumsAccentsSound.pause();
    }
}

//Saxo
function toggleSax() {
    saxofon.classList.toggle('saxofonAnim');
    if (saxSound.paused) {
        saxSound.play();
    } else {
        saxSound.pause();
    }
}

//Tambor
    function toggleDrums() {
        tambor.classList.toggle('baquetaAnim');
        if (drumsSound.paused) {
            drumsSound.play();
        } else {
            drumsSound.pause();
        }
    }

//Trombón
    function toggleTrombon() {
        trombon.classList.toggle('trombonAnim');
        if (trombonfSound.paused) {
            trombonfSound.play();
        } else {
            trombonfSound.pause();
        }
    }

