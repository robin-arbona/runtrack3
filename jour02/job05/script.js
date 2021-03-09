window.addEventListener('load',init);
function init(){
    document.addEventListener('scroll',scrollcustom)
}


function scrollcustom(){
    let footer = document.getElementsByTagName('footer')[0];
    footer.style.backgroundColor= 'hsl('+ window.scrollY/window.scrollMaxY*360+', 100%, 50%)';
}