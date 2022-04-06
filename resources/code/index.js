/*Setting offset*/
function offset(){
    console.log("Setting offset");
    let navHeight = window.getComputedStyle(document.querySelector('nav')).getPropertyValue('height');
    let banner = document.getElementById('banner');
    let main = document.querySelector('main');
    let footer = document.querySelector('footer');
    banner.style.top = navHeight;
    main.style.top = navHeight + 10;
    footer.style.top = navHeight;
}

setTimeout(offset,100);

/* Sizing overlays*/
function resizeOverlays(){
    let overlays = document.getElementsByClassName('overlay');
    for(let overlay of overlays){
        let container = overlay.parentElement;
        let image = container.getElementsByTagName('img')[0];
        let imageStyles = window.getComputedStyle(image);
        overlay.style.height = imageStyles.getPropertyValue('height');
        overlay.style.width = imageStyles.getPropertyValue('width');
    }
}

function timeOverlays(){
    let overlays = document.getElementsByClassName('overlay');
    for(let overlay of overlays){
        overlay.style.height = '0';
        overlay.style.width = '0';
    }
    const timeout = setTimeout(resizeOverlays,1);
}

resizeOverlays()
window.addEventListener('resize',timeOverlays);

/* Random site */
let sites = ["https://zyraclaudius.github.io/theTeapot"];
let randomSite = document.getElementById('randomsite');
function linkRandomSite(event){
    console.log('getting random site');
    let index = Math.floor(Math.random()*sites.length);
    event.target.href = sites[index];
}
randomSite.addEventListener('mouseover',linkRandomSite);

/* Secret button */
let switched = false;
function switchColors() {
    console.log('Wow! You found the secret button!');
    if(switched){
        switched = false;
        document.body.style.backgroundColor = 'white';
        for(let element of document.getElementsByTagName('*')){
            element.style.color = 'black';
        }
        document.querySelector('nav').style.backgroundColor = 'white';
        let overlays = document.querySelectorAll('.overlay');
        for(let overlay of overlays){
            overlay.style.backgroundColor = 'rgba(0,0,0,0.75)';
            overlay.querySelector('p').style.color = 'white';
        }
        let overlay = document.getElementById('overlay');
        overlay.style.backgroundColor = 'rgba(0,0,0,0.75)';
        document.querySelector('h1').style.color = 'white';
        let randomSite = document.getElementById('randomsite');
        randomSite.style.backgroundColor = 'black';
        randomSite.style.color = 'white';
    } else{
        switched = true;
        document.body.style.backgroundColor = 'black';
        for(let element of document.getElementsByTagName('*')){
            element.style.color = 'white';
        }
        document.querySelector('nav').style.backgroundColor = 'black';
        let overlays = document.querySelectorAll('.overlay');
        for(let overlay of overlays){
            overlay.style.backgroundColor = 'rgba(255,255,255,0.75)';
            overlay.querySelector('p').style.color = 'black';
        }
        let overlay = document.getElementById('overlay');
        overlay.style.backgroundColor = 'rgba(255,255,255,0.75)';
        document.querySelector('h1').style.color = 'black';
        let randomSite = document.getElementById('randomsite');
        randomSite.style.backgroundColor = 'white';
        randomSite.style.color = 'black';
    }
}

let secretButton = document.getElementById('secretbutton');
secretButton.addEventListener('click',switchColors);