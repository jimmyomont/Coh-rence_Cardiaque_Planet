console.log('test');

const btn = document.getElementById("btn");
const main = document.getElementById('main');
const nav = document.getElementById('nav');
const planet = document.getElementById('planet')
const rythme = document.getElementById('rythme')
const svg = document.getElementById('svg')
const sound = document.getElementById('sound')
const piste = document.getElementById('piste')
const play = document.getElementById('play');
const pause = document.getElementById('pause');
btn.addEventListener('click', ()=>{
    nav.classList.add('hidden')
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
    svg.src = "/svg/mars.png"; 
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
    case "1":
        piste.src = "./sound/ambient-dream.mp3";  
    break;

    case "2": 
piste.src = "./sound/lunar-wind.mp3"; 

    break;

    case "3": 
    piste.src = "./sound/sounds-of-the-gloomy-city-of-the-future.mp3"; 
    break;

    case "4": 
    piste.src = "./sound/spaceship-ambience-with-effects.mp3"; 
    break;
    case "5": 
    piste.src = "./sound/stretched-sounds-with-07-neptune-the-ice-fields-voyager-audiolog.mp3"; 
    break;
}}
});

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