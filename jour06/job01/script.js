
function chooseStyle(){
    if (window.matchMedia("(min-width: 1680px) and (max-width: 1920px)").matches) {
        stylesheet = document.querySelector('#style').setAttribute("href","style2.css");    
    } else if (window.matchMedia("(min-width: 1280px) and (max-width: 1680px)").matches) {
        stylesheet = document.querySelector('#style').setAttribute("href","style3.css");    
    } else if (window.matchMedia("(max-width: 1280px)").matches) {
        stylesheet = document.querySelector('#style').setAttribute("href","style4.css");    
    } else if (window.matchMedia("(min-width: 1920px)").matches) {
        stylesheet = document.querySelector('#style').setAttribute("href","style1.css");    
    }
}

chooseStyle();

window.addEventListener('resize',chooseStyle);
