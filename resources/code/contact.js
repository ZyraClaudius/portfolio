/* Platform Info Displays*/
let infos = document.getElementsByClassName('platform-info');
for(let info of infos){
    info.setAttribute('data-toggled','');
    info.setAttribute('data-fixed','')
}

function toggleFix(event){
    console.log('fixing');
    console.log(event.target.id);
    let respInfo = document.getElementById(event.target.id+'info');
    if(respInfo.getAttribute('data-fixed')){
        respInfo.setAttribute('data-fixed','')
        if(respInfo.getAttribute('data-toggled')){
            respInfo.style.display = 'none';
            respInfo.setAttribute('data-toggled','')
        }
    } else{
        if(!respInfo.getAttribute('data-toggled')){
            respInfo.setAttribute('data-toggled','true');
            respInfo.style.display = 'flex';
        } 
        respInfo.setAttribute('data-fixed','true')
    }
    
    console.log('finding the other one');
    let otherfixer = 'linkedininfo';
    if(event.target.id === 'instagram'){
        otherfixer = document.getElementById('emailinfo');
    } else if(event.target.id === 'email'){
        otherfixer = document.getElementById('instagraminfo');
    } else {
        console.log('something has gone badly wrong');
    }
    otherfixer.style.display = 'none';
    otherfixer.setAttribute('data-fixed','');
    otherfixer.setAttribute('data-toggled','');
}

function toggleDisplay(event){
    console.log(event.target);
    let target = event.target.id;
    console.log(target);
    let respInfoId = target+'info';
    console.log('respInfoId: '+respInfoId);
    let respInfo = document.getElementById(respInfoId);
    if(respInfo.getAttribute('data-toggled')){
        if(!respInfo.getAttribute('data-fixed')){
            respInfo.style.display = 'none';
        }
        respInfo.setAttribute('data-toggled','');
        respInfo.setAttribute('data-fixed','');
    } else{
        document.getElementById('instagraminfo').style.display = 'none';
        document.getElementById('emailinfo').style.display = 'none';
        respInfo.style.display = 'flex';
        respInfo.setAttribute('data-toggled','true');
    }
}
let bobbles = document.querySelectorAll('.platform img');
for(let bobble of bobbles){
    bobble.addEventListener('mouseover',toggleDisplay);
    bobble.addEventListener('mouseout', toggleDisplay);
}

document.getElementById('instagram').addEventListener('click',toggleFix);
document.getElementById('email').addEventListener('click',toggleFix);

/* Copy Email */
function copyEmail(){
    navigator.clipboard.writeText('zyraclaudius@hotmail.com');
}
document.getElementById('copy-email').addEventListener('click',copyEmail);

/* Secret Button */
let switched = false;
function switchColors() {
    console.log('Wow! You found the secret button:)');
    if(switched){
        switched = false;
        document.body.style.backgroundColor = 'white';
        for(let element of document.getElementsByTagName('*')){
            element.style.color = 'black';
        }
        document.querySelector('nav').style.backgroundColor = 'white';
        let bobbles = document.querySelectorAll('.bobble');
        for(let bobble of bobbles){
            bobble.style.borderColor = 'black';
            bobble.style.backgroundColor = 'white';
        }
        let platformInfos = document.querySelectorAll('.platform-info');
        for(let platformInfo of platformInfos){
            platformInfo.style.borderColor = 'black';
        }
        let platformInfoButton = document.querySelector('.platform-info button');
        platformInfoButton.style.color = 'white';
        platformInfoButton.style.backgroundColor = 'black';
    } else{
        switched = true;
        document.body.style.backgroundColor = 'black';
        for(let element of document.getElementsByTagName('*')){
            element.style.color = 'white';
        }
        document.querySelector('nav').style.backgroundColor = 'black';
        let bobbles = document.querySelectorAll('.bobble');
        for(let bobble of bobbles){
            bobble.style.borderColor = 'white';
            bobble.style.backgroundColor = 'white';
        }
        let platformInfos = document.querySelectorAll('.platform-info');
        for(let platformInfo of platformInfos){
            platformInfo.style.borderColor = 'white';
        }
        let platformInfoButton = document.querySelector('.platform-info button');
        platformInfoButton.style.color = 'black';
        platformInfoButton.style.backgroundColor = 'white';
    }
}

let secretButton = document.getElementById('secretbutton');
secretButton.addEventListener('click',switchColors);