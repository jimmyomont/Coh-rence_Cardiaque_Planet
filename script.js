const btn = document.getElementById("btn");
const main = document.getElementById('main');
const nav = document.getElementById('nav');
const nav2 = document.getElementById('nav2');
const planet = document.getElementById('planet')
const rythme = document.getElementById('rythme')
const svg = document.getElementById('svg')
const sound = document.getElementById('sound')
const piste = document.getElementById('piste')
const play = document.getElementById('play');
const playTest = document.getElementById('playtest');
const pause = document.getElementById('pause');
const select = document.querySelector("#compteur"); 



btn.addEventListener('click', ()=>{
    nav.classList.add('hidden');
    nav2.classList.remove('hidden');
    main.classList.add('hidden')
    play.classList.remove('hidden');
    pause.classList.remove('hidden');

})

// -----------------------rythme----------------

btn.addEventListener ('click', ()=>{ 
        let rythmeValue = rythme.value; 
    if ( main.classList.add('hidden') === main.classList.add('hidden') ){
        
    switch (rythmeValue){
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
    }}
});

//---------------------------choice----------------

btn.addEventListener ('click', ()=>{ 
    let planetValue = planet.value; 
if ( main.classList.add('hidden') === main.classList.add('hidden') ){
    
switch (planetValue){
    case "1": 
    // ajouter css src
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
}}
});

//-----------------------------sound---------------


btn.addEventListener ('click', ()=>{ 
    let audioValue = sound.value; 
if ( main.classList.add('hidden') === main.classList.add('hidden') ){
    
switch (audioValue){
    case "2":
        piste.src = "./sound/ambient-dream.mp3";
        console.log(piste);
    break;

    case "3": 
piste.src = "./sound/lunar-wind.mp3"; 
    break;

    case "4": 
    piste.src = "./sound/sounds-of-the-gloomy-city-of-the-future.mp3"; 
    break;

    case "5": 
    piste.src = "./sound/spaceship-ambience-with-effects.mp3"; 
    break;
    case "6": 
    piste.src = "./sound/stretched-sounds-with-07-neptune-the-ice-fields-voyager-audiolog.mp3"; 
    break;
}}
});
//-----------------------------extrait sound ----------------------
function playExtrait( audio_path, time_in_milisec){
    let beep = new Audio( audio_path);
    beep.loop = true;
    beep.play();
    setTimeout(() => { beep.pause(); }, time_in_milisec);
    }

playTest.addEventListener('click', ()=>{
    console.log(('plkatest'));
    let audioValue = sound.value; 
    switch (audioValue){
        case "2":
            playExtrait("./sound/ambient-dream.mp3", 6000);
        break;
        case "3":
            playExtrait("./sound/lunar-wind.mp3", 6000);
        break;
        case "4":
            playExtrait("./sound/sounds-of-the-gloomy-city-of-the-future.mp3", 6000);
        break;
        case "5":
            playExtrait("./sound/spaceship-ambience-with-effects.mp3", 6000);
        break;
        case "6":
            playExtrait("./sound/stretched-sounds-with-07-neptune-the-ice-fields-voyager-audiolog.mp3", 6000);
        break;

    }

})
// -----------------------------------------play/pause--------------------



pause.addEventListener('click', ()=>{
    // play.classList.remove('hidden');
    // pause.classList.add('hidden');
    piste.pause();
})
play.addEventListener('click', ()=>{
    // play.classList.add('hidden');
    // pause.classList.remove('hidden');
    piste.play()
    // piste.currentTime = 0 ; 
})

//------------------------------------------timer----------------------------------
let temps = 60;
const timerElement = document.getElementById('timer'); 
    function diminuerTimer() {
        setInterval(() =>{
    let minutes = parseInt(temps / 60, 10)
    let secondes = parseInt(temps % 60, 10)
    minutes = minutes < 10 ? "0" + minutes : minutes;
    secondes = secondes < 10 ? "0" + secondes : secondes;
    timerElement.textContent = minutes + ":" + secondes; 
    temps = temps <= 0 ? 0 : temps - 1;  
    },1000 ); }

//-----------------------------Select----------------------------------
let id = null; 
    btn.addEventListener('click', () => {

    let selecTime = select.value;  
    if ( main.classList.add('hidden') === main.classList.add('hidden') ){
    switch (selecTime) {
        case "1":
            temps = 60;
            diminuerTimer(selecTime );
            break;
        case "2":
            temps = 120;
            diminuerTimer(selecTime );
            break;
        case "3":
            temps = 180;
            diminuerTimer(selecTime );
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
    }}
})
