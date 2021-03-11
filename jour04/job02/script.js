$(document).ready(()=>{
    init();
}
)

function init(){
    $("#button").click(function(){
        $.ajax({
            url:"json.txt",
            dataType: "text"
        })
        .done(function(content){
            paragraph = '<p>'+ jsonValueKey(content,'city') + '</p>';
            $(paragraph).appendTo('body');
        })
    })
}

function jsonValueKey(txt,key){
    let json = JSON.parse(txt);
    return json[key];
}