$(document).ready(()=>{
    init();
})

let results = [];

function init(){
    defineType();
    $('#filtrer').click(function(event){
        results = [];
        let id = $('#id').val();
        let nom = $('#nom').val();
        let type = $('#type').val();
        $.ajax({
            url:"pokemon.json",
            dataType:"json"
        }).done(function(pokemons){
            pokemons.forEach(pokemon => {
                if(id!=''){
                    if(pokemon.id == id){
                        results.push(pokemon);
                    }
                } else if((nom != '')) {
                    for(const pokename in pokemon.name){
                        if(pokemon.name[pokename]==nom){
                            results.push(pokemon);
                        }
                    }
                } else if((type!='')){
                    pokemon.type.forEach(poktype => {
                        if(poktype == type){
                            results.push(pokemon);
                        }
                    })
                }
            })
            $('#result').empty();
            results.forEach(pokemon=>{
                console.log(pokemon);
                $html = htmlRow(pokemon);
                $($html).appendTo("#result");
            })
        })
        

    })
}

function htmlRow(object,oldkey = ''){

    let html = '';
    html += '<tr>';
    if(oldkey != ''){
        html += `<td>${oldkey} --> </td>`
    }
    for(const key in object){
        if(typeof object[key] == "object"){
            html += htmlRow(object[key],key);
        } else {
        html += '<td>';
        html += `${key} : ${object[key]}`; 
        html += '</td>';
        }
    }
    html += '</tr>';

    return html
}

function defineType(){
    let type = [];
    let uniqueType = [];

    $.ajax({
        url:"pokemon.json",
        dataType:"json"
    }).done(function(json){
        for (let i = 0; i < json.length; i++) {
            const pokemon = json[i];
            pokemon.type.forEach(element => {
                type.push(element);
            });
        }
        uniqueType.push('');
        uniqueType.push(... [... new Set(type)].sort());
        uniqueType.forEach(function(element){
            $(`<option>${element}</option>`).appendTo('#type')
        })
    })    
}