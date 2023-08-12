const btn = document.getElementById("btn");
const main = document.getElementById('main');
const nav = document.getElementById('nav');
const nav2 = document.getElementById('nav2');
const planet = document.getElementById('planet')
const rythme = document.getElementById('rythme')
const svg = document.getElementById('svg')
const svgView = document.getElementById('svgView')
const sound = document.getElementById('sound')
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const select = document.querySelector("#compteur");
const timerElement = document.getElementById('timer');
const timerContent = document.getElementById('timerContent');
const btnClose = document.querySelector('.btnClose');
const etoile = document.getElementById('etoile');
const btnGuide = document.querySelector('.btnGuide');
const guide = document.getElementById('guide');
const tuto = document.getElementById('guidePush');
const header = document.getElementById('header');
const mainContent = document.getElementById('mainContent');
const body = document.getElementById("body");
//--------------------hidden page ---------------------------
btn.addEventListener('click', () => {
    nav.classList.add('hidden');
    nav2.classList.remove('hidden');
    main.classList.add('hidden')
    play.classList.remove('hidden');
    pause.classList.remove('hidden');
    etoile.classList.add('hidden');
    svgView.classList.add('hidden');

})

// -----------------------rythme----------------

btn.addEventListener('click', () => {
    let rythmeValue = rythme.value;
    if (main.classList.add('hidden') === main.classList.add('hidden')) {

        switch (rythmeValue) {
            case "1":
                svg.classList.add('rythme64');
                break;

            case "2":
                svg.classList.add('rythme55');
                break;

            case "3":
                svg.classList.add('rythme46');
                break;

            case "4":
                svg.classList.add('rythme37');
                break;

            default:
                window.alert('veuillez choisir un rythme');
                location.reload();
                break;
        }
    }
});

//---------------------------choice----------------

btn.addEventListener('click', () => {
    let planetValue = planet.value;
    if (main.classList.add('hidden') === main.classList.add('hidden')) {
        svg.classList.remove('svgHidden')
        svg.classList.remove('float')
        switch (planetValue) {
            case "1":
                svg.src = "/svg/sun.png";
                svg.classList.remove('hidden')
                break;

            case "2":
                svg.src = "/svg/moon.png";
                svg.classList.remove('hidden')
                break;

            case "3":
                svg.src = "/svg/terre.png";
                svg.classList.remove('hidden')
                break;

            case "4":
                svg.src = "/svg/Jupiter.png";
                svg.classList.remove('hidden')
                break;
            case "5":
                svg.src = "/svg/Mars.png";
                svg.classList.remove('hidden')
                break;
            case "6":
                svg.src = "/svg/venus.png";
                svg.classList.remove('hidden')
                break;

            default:
                window.alert('veuillez choisir un theme');
                location.reload();
                break;
        }
    }
});

// -----------------------------------------play/pause--------------------

pause.addEventListener('click', () => {
    createAudio.pause();
})

play.addEventListener('click', () => {
    createAudio.play()
})

//------------------------------------------timer----------------------------------

let temps = 60;

function diminuerTimer() {
    setInterval(timer, 1000 );
}
const timer =  ()=> {
        let minutes = parseInt(temps / 60, 10)
        let secondes = parseInt(temps % 60, 10)
        minutes = minutes < 10 ? "0" + minutes : minutes;
        secondes = secondes < 10 ? "0" + secondes : secondes;
        timerElement.textContent = minutes + ":" + secondes;
        temps = temps <= 0 ? 0 : temps - 1;
        if ( minutes === '00' && secondes ==='00'){
            svg.classList.add('hidden')
            document.getElementById('end').classList.remove('hidden')
        }
}


// -----------------------------Select----------------------------------

// let id = null;

btn.addEventListener('click', () => {
    let selecTime = select.value;
    if (main.classList.add('hidden') === main.classList.add('hidden')) {
        switch (selecTime) {
            case "1":
                temps = 60;
                diminuerTimer(selecTime);
                break;
            case "2":
                temps = 120;
                diminuerTimer(selecTime);
                break;
            case "3":
                temps = 180;
                diminuerTimer(selecTime);
                break;
            case "4":
                temps = 240;
                diminuerTimer(selecTime);
                break;
            case "5":
                temps = 300;
                diminuerTimer(selecTime);
                break;
            default:
                window.alert('veuillez choisir une durée');
                location.reload();
                break;
        }
    }
})
//------------------------btn close-------------------------------------

btnClose.addEventListener('click', () => {
    location.reload();
})

//-----------------------select affichage-----------------

planet.addEventListener('click', () => {
    let planetValue = planet.value;
        switch (planetValue) {
            case "1":
                // ajouter css src
                svgView.src = "/svg/sun.png";
                svgView.classList.remove('hidden')
                break;

            case "2":
                svgView.src = "/svg/moon.png";
                svgView.classList.remove('hidden')
                break;

            case "3":
                svgView.src = "/svg/terre.png";
                svgView.classList.remove('hidden')
                break;

            case "4":
                svgView.src = "/svg/Jupiter.png";
                svgView.classList.remove('hidden')
                break;
            case "5":
                svgView.src = "/svg/Mars.png";
                svgView.classList.remove('hidden')
                break;
            case "6":
                svgView.src = "/svg/venus.png";
                svgView.classList.remove('hidden')
                break;
            default:
                svgView.classList.add('hidden')
                    break;
        }
    }
);

//-----------------------------------audio play-------------------------

let createAudio = document.createElement('audio' )
createAudio.volume='0.05'

createAudio.classList.add('audio')
const classAudio = document.querySelector(".audio")

sound.addEventListener('change', () => {
let audioValue = sound.value;
        switch (audioValue) {
            case "1":
                createAudio.pause()
                break;
            case "2":
                createAudio.src = "./sound/ambient-dream.mp3"
                createAudio.play()
                break;
            case "3":
                createAudio.src = "./sound/lunar-wind.mp3"
                createAudio.play()
                break;
            case "4":
                createAudio.src = "./sound/sounds-of-the-gloomy-city-of-the-future.mp3"
                createAudio.play()
                break;
            case "5":
                createAudio.src = "./sound/spaceship-ambience-with-effects.mp3"
                createAudio.play()
                break;
            case "6":
                createAudio.src = "./sound/stretched-sounds-with-07-neptune-the-ice-fields-voyager-audiolog.mp3"
                createAudio.play()
                break;
        }
});


//------------------------------Tutoriel-------------------


tuto.addEventListener('click',() => {
    header.classList.add('hidden');
    mainContent.classList.add('hidden');
    body.classList.add('hidden');
    body.classList.remove('overflowHidden')
    guide.classList.remove('hidden');
})
btnGuide.addEventListener('click', () => {
    location.replace(location.href);
})