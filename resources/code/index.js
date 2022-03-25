let sites = ["https://zyraclaudius.github.io/theTeapot"];
let randomSite = document.getElementById('randomsite');
function linkRandomSite(event){
    let index = Math.floor(Math.random()*sites.length);
    event.target.href = sites[index];
}
randomSite.addEventListener('mouseover',linkRandomSite);