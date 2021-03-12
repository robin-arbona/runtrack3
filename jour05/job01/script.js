$(document).ready(()=>{
    init();
})

function init(){
    $('#inscriptionPage').click(()=>{
        $('#menuHolder').hide();
        inscription();
    })
    $('#connexionPage').click(()=>{
        $('#menuHolder').hide()
        connexion();
    })
}

function inscription(){
    $.ajax('inscription.php').done((content)=>{
        $('#pageHolder').empty();
        $(content).appendTo('#pageHolder');
        $('#inscriptionValidation').click(()=>{
            $.ajax({
                url:'inscription.php',
                method:'POST',
                data: { 
                    nom: $("#nom").val(), 
                    prenom: $("#prenom").val(), 
                    email: $("#email").val(), 
                    password: $("#password").val() ,
                    inscription: true},
                dataType: "json"
            }).done((response)=>{
                if(response.state){
                    $('main').load("home.php", ()=> {
                        init();
                    })
                } else {
                    $('#message').remove();
                    $(`<p id="message">${response.error}</p>`).appendTo('#pageHolder');
                }
            })
        })
    })
}

function connexion(){
    $.ajax('connexion.php').done((content)=>{
        $('#pageHolder').empty();
        $(content).appendTo('#pageHolder');
        $('#connexionValidation').click(()=>{
            $.ajax({
                url:'connexion.php',
                method: "POST",
                data: { nom: $("#nom").val(), password: $("#password").val() },
                dataType: "json"
            }).done((response)=>{
                if(response.connected){
                    $('main').load("home.php", ()=> {
                        $('#disconnect').click(()=>{
                            $.ajax('disconnect.php');
                            $('main').load("home.php", () => {
                                init();
                            });
                        })
                    })
                } else {
                    $('#message').remove();
                    $(`<p id="message">${response.message}</p>`).appendTo('#pageHolder');
                }
            })
        })
    })
}