document.addEventListener('DOMContentLoaded',()=>{
    function chooseStyle(){
        console.log('resize');
        if (window.matchMedia("(min-width: 1680px) and (max-width: 1920px)").matches) {
            document.body.style.backgroundColor = '#FFCA4B';
        } else if (window.matchMedia("(min-width: 1280px) and (max-width: 1680px)").matches) {
            document.body.style.backgroundColor = '#275FA0';
        } else if (window.matchMedia("(max-width: 1280px)").matches) {
            document.body.style.backgroundColor = '#FFFFFF';
        } else if (window.matchMedia("(min-width: 1920px)").matches) {
            document.body.style.backgroundColor = '#88C1D0';
        }
    }
    
    chooseStyle();
    
    window.addEventListener('resize',chooseStyle);
})

