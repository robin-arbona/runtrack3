document.addEventListener('DOMContentLoaded',()=>{
    let nav = document.querySelector('nav');
    let menu = document.querySelector('button');
    let ul = document.querySelector('nav ul');
    let lis = document.querySelectorAll('nav li');

    menu.addEventListener('click',()=>{
        if(ul.style.display == 'none'){
            ul.style.display = 'block';
        } else {
            ul.style.display = 'none';
        }
    })


    function chooseStyle(){
        if (window.matchMedia("(min-width: 768px)").matches) {
            menu.style.display = 'none';
            ul.style.display = 'flex';
            ul.style.justifyContent = 'space-evenly';
        } else if (window.matchMedia("(max-width: 767px)").matches) {
            ul.style.display = 'none';
            menu.style.display = 'block'; 
        } 
    }
    
    chooseStyle();
    
    window.addEventListener('resize',chooseStyle);
})

