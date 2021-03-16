const pages = ['home.php','lala.php','lolo.php'];
let currentPage = 0;
let keyHistory = [];
const keyCombination = ['d','g','c'];
const textColor=['text-primary','text-secondary','text-success','text-danger','text-warning','text-info','text-light','text-dark'];
let email = '';
let password = '';

document.addEventListener('DOMContentLoaded',()=>{
    initNavLink();
    initModal();
    initRebootButton();
    initPagination();
    initList();
    initProgressBar();
    initCode();
    initLastForm();
})

function initNavLink(){
    $(".navbar-brand").attr("href","https://laplateforme.io");
}

function initModal(){
    var myModal = new bootstrap.Modal(document.getElementById('myModal'))
    var myInput = document.getElementById('buttonModal');

    myInput.addEventListener('click',function(){
        myModal.show();
    })
}

function initRebootButton(){
    $('#rebootButton').click(()=>{
        $.ajax({
            url:'citation.json',
            dataType:'json'
          }).done(function(data){
            let rdNb = Math.round(Math.random()*data.length)
            let citation = data[rdNb];
            displayCitation(citation);
          })
    })
}

function initPagination(){
    for (let i = 0; i < pages.length; i++) {
        const page = pages[i];
        let pageId = '#page-' + (i+1);
        $(pageId).click(function(e){
            currentPage = i;
            ajaxPage(page);
        })
    }
    $('#page-previous').click(function(){
        if(currentPage > 0){
            currentPage--;
            ajaxPage(pages[currentPage]);
        }
    })
    $('#page-next').click(function(){
        if(currentPage < pages.length-1){
            currentPage++;
            ajaxPage(pages[currentPage]);
        }
    })

}

function ajaxPage(page){
    $.ajax({
        url: page
    }).done((content)=>{
        $('#main-content').empty();
        $(content).appendTo('#main-content')
        if(page == 'home.php')
            initRebootButton();
    })
}

function displayCitation(citation){
    $('#monde').empty()
    $(`<p>${citation}</p>`).appendTo('#monde');
}

function initList(){
    $('.list-group > a').click(function(){
        $('.list-group > a').removeClass("active");
        $('.list-group > a').removeAttr('aria-current')
        $(this).addClass("active");
        $(this).attr('aria-current',"true");
    })
}

function initProgressBar(){
    $('#progress-plus').click(function(){
        let value = $('#progress-bar').attr('aria-valuenow')
        if(value < 100){
            value = Number(value) + 5;
            $('#progress-bar').attr('aria-valuenow',value);
            $('#progress-bar').attr('style','width: ' + value + '%');
        }
    })
    $('#progress-minus').click(function(){
        let value = $('#progress-bar').attr('aria-valuenow')
        if(value > 0){
            value = Number(value) - 5;
            $('#progress-bar').attr('aria-valuenow',value);
            $('#progress-bar').attr('style','width: ' + value + '%');
        }
    })
}

function initCode(){
    $(document).keypress((e)=>{
        keyHistory.push(e.key);
        if(keyHistory.length>2){
            let combination = keyHistory.slice(keyHistory.length-3);
            let counter = 0;
            for (let i = 0; i < keyCombination.length; i++) {
                if(keyCombination[i]==combination[i].toLowerCase()){
                    counter++
                }
            }
            if(counter==3)
                showModalForm();
        }
    })
}

function showModalForm(){
    var myModal = new bootstrap.Modal(document.getElementById('modalForm'))
    let inputsValue = '<p>';
    for (let i = 1; i < 5; i++) {
        let selector = '#input-' + i;
        inputsValue += $(selector).val() + " | "
    }
    inputsValue += '</p>';
    $('#modalForm-body').empty()
    $(inputsValue).appendTo('#modalForm-body');

    myModal.show();
}

function initLastForm(){
    $('#submitForm').click(function(e){
        email = $('#email').val();
        password = $('#password').val();

        e.preventDefault();

        if(email.length>0 && password.length>0){
            changeSpinnerColor();
        }
    })
    
}

function changeSpinnerColor(){
    textColor.forEach(element => {
        $('#spinner').removeClass(element)
    });
    let rdNb = Math.round(Math.random()*textColor.length);
    $('#spinner').addClass(textColor[rdNb]);
    
}