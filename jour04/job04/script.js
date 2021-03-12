$(document).ready(()=>{
    init();
})


function init(){
   $('#update').click(()=>{
       $.ajax({
           url:'users.php',
           dataType:'json'
       }).done((users,state)=>{
           console.log(state);
           $('#result').empty()
           console.log(users);
           users.forEach(user => {
                let tag = '<tr>';
                for(property in user){
                    tag += `<td>${user[property]}</td>`
                }
                tag += '</tr>';
                console.log(tag);
                $(tag).appendTo('#result');
           });
       })
   })

}
