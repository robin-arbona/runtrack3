let par = '<p>le $ est un bon élément monétaire. Le # de twitter est une bonne I D. Il faudra faire le point avec la classe pour cacher cet élément.</p>';
$(document).ready(()=>{
    $('#button').click(function(){
        $(par).appendTo("#citation")
    })
    $('#button-hide').click(function(){
        $('#citation').empty()
    })
}
)