document.addEventListener('DOMContentLoaded',()=>{
    initNavLink();
    initModal();
    initRebootButton();
    initPagination();
    initList();
    initProgressBar();
})

function initNavLink(){
    $(".navbar-brand").attr("href","https://laplateforme.io");
}

function initModal(){
    var myModal = new bootstrap.Modal(document.getElementById('myModal'), {
        keyboard: false
      })
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

const pages = ['home.php','lala.php','lolo.php'];
let currentPage = 0;
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

/*
aria-valuenow="85"
style="width: 85%"
*/

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