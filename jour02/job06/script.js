window.addEventListener('load',init);
/* Code Konami: haut, haut, bas, bas, gauche, droite, gauche, droite, B, A */
function init(){
    document.addEventListener('keydown',listenforkonami)
}

let konami=[
    'arrowup',
    'arrowup',
    'arrowdown',
    'arrowdown',
    'arrowleft',
    'arrowright',
    'arrowleft',
    'arrowright',
    'b',
    'a'
]

let history = [];

function plateformeStyle(){
    let bodyElement = document.getElementsByTagName('body')[0];
    bodyElement.style.backgroundColor = 'lightblue';
    let h1 = document.createElement('h1');
    h1.innerHTML = "La Plateforme_";
    h1.style.color = "gold";
    bodyElement.appendChild(h1);
}

function listenforkonami(event){
    key = event.key.toLowerCase();
    history.push(key)
    if(konami[konami.length-1]==key && (history.length >= konami.length)){
        let code = history.slice(history.length-konami.length,history.length);
        let counter = 0;
        konami.forEach(element => {
            if(element == code[counter]){
                counter++
            }
        });
        if(counter == 10){
            plateformeStyle();
        }
    }
}
