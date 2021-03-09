window.addEventListener('load',init);
function init(){
    let button = document.getElementById("button");
    button.addEventListener('click',showhide);
    
}

let citationstate = 'hide';

function showhide(){
    if(citationstate == "hide"){
        addcitation();
        citationstate = "show";
    } else {
        delcitation();
        citationstate = "hide";
    }
}

function addcitation(){
    let body = document.getElementsByTagName("body")[0];
    let article = document.createElement("article");
    article.innerHTML = "L'important n'est pas la chute, mais l'atterrissage.";
    body.appendChild(article);
}

function delcitation(){
    let article = document.getElementsByTagName("article")[0];
    article.remove();
}