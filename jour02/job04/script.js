document.addEventListener('keypress',keylogger);


function keylogger(event){
    let textarea = document.getElementById("keylogger");
    textarea.value = textarea.value + event.key;
}