window.addEventListener('load',init);
function init(){
    let button = document.getElementById("button");
    button.addEventListener('click',addone);
}

function addone(){
    let compteur = document.getElementById("compteur").innerHTML;
    compteur++;
    document.getElementById("compteur").innerHTML = compteur;
}