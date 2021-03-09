window.addEventListener('load',init);
function init(){
    let button = document.getElementById("button");
    button.addEventListener('click',citation);

    function citation(){
        let citation = document.getElementById("citation");
        console.log(citation);
    }
}