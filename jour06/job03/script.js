document.addEventListener('DOMContentLoaded',()=>{
    function chooseStyle(){
        if (window.matchMedia("(min-width: 1600px)").matches) {
            document.querySelectorAll(".square-div").forEach((element)=>{
                element.style.width = (window.innerWidth)/4 -10 + 'px';
            }) 
        } else if (window.matchMedia("(min-width: 768px) and (max-width: 1599px)").matches) {
            document.querySelectorAll(".square-div").forEach((element)=>{
                element.style.width = (window.innerWidth)/2 -10 + 'px';
            }) 
        } else if (window.matchMedia("(max-width: 767px)").matches) {
            document.querySelectorAll(".square-div").forEach((element)=>{
                element.style.width = window.innerWidth - 10 + 'px';
            })
        } 
    }
    
    chooseStyle();
    
    window.addEventListener('resize',chooseStyle);
})

