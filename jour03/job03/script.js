$(document).ready(()=>{
    init();
}
)

let allMoveAllowed = true;

function init(){
    $('button').click(()=>{
        $("#board").empty();
        init();
    })
    for (let i = 1; i <= 9; i++) {
        $(`<div style="height:100px;width:100px;" id="case${i}"></div>`).appendTo("#board");
    }
    let rdTable = getRandomTable(8);
    for (let i = 0; i < rdTable.length; i++) {
        $(`<img id="img${rdTable[i]}" src="img/${rdTable[i]}.png" style="height:100px;width:100px;">`).appendTo(`#case${i+1}`)
    }
    let cases = document.querySelector('#board').childNodes;
    cases.forEach(element => {
        $(element).click(function(event){
            move(this);
            if(checkVictory()){
                $('#button').show();
                if(!$('#msg').length){
                    $('<h1 id="msg" style="color:green">Vous avez gagné !!</h1>').appendTo("body");
                }
                allMoveAllowed = false;
            }
        })
    });
    $('#button').hide();
    $('#msg').hide();
    allMoveAllowed = true;
}

function checkVictory(){
    let cases = document.querySelector('#board').childNodes;
    let points = 0;
    for (let i = 0; i < cases.length; i++) {
        const element = cases[i];
        if(element.childNodes.length > 0){
            let divId = Number(element.id.replace('case',''));
            let imgId = Number(element.firstChild.id.replace('img',''));
            if(divId == imgId){
                points++;
            }
        }
        
    }
    if(points == 8){
        return true;
    } else {
        return false;
    }
}

function move(element){
    from = Number(element.id.replace('case',''));
    to = getFreeCaseId();
    if(isMoveAllowed(from,to) && allMoveAllowed){
        $(element).children().first().appendTo(`#case${to}`);
    }
}

function isMoveAllowed(from,to){
    if((to == (from + 3)) || (to == (from - 3) || (to == (from + 1)) || (to == (from - 1)))){
        return true;
    } else {
        return false;
    }
}

function getFreeCaseId(){
    let cases = document.querySelector('#board').childNodes;
    let i = 0;
    for (let i = 0; i < cases.length; i++) {
        let element = cases[i];
        if(element.childNodes.length == 0){
            return (i+1);
        }
    }
}

function getRandomTable(length){
    let randomTable = [];
    while (randomTable.length<length) {
        let rdNumber = Math.trunc(Math.random()*(length+1));
        if(!randomTable.includes(rdNumber) && rdNumber>0){
            randomTable.push(rdNumber);
        }
    }
    return randomTable;
}

