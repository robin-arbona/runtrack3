$(document).ready(()=>{
    init();
}
)

function init(){
    $("#button").click(function(){
        $.ajax({
            url:"expression.txt",
            dataType: "text"
        })
        .done(function(content){
            paragraph = `<p>${content}</p>`;
            $(paragraph).appendTo('body');
        })
    })
}
