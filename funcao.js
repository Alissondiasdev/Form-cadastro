
function acao(){
   var nome = document.getElementById('nome').value
   var email = document.getElementById('email').value
   var telefone = document.getElementById('telefone').value
   var sexo = document.querySelector("input[name='genero']:checked")
   var cidade = document.getElementById('cidade').value
   var estado = document.getElementById('estado').value
   var endereco = document.getElementById('endereco').value
   
   

   if(nome=="" || email=="" || telefone=="" || sexo=="" || cidade=="" || estado=="" || endereco==""){

    

     const dv = document.getElementById("dv")
     dv.style.display=("flex")

}
     
     
   else {
    var nome = document.getElementById('nome').value=""
   var email = document.getElementById('email').value=""
   var telefone = document.getElementById('telefone').value=""
   var sexo = document.querySelector("input[name='genero']:checked")
   var cidade = document.getElementById('cidade').value=""
   var estado = document.getElementById('estado').value=""
   var endereco = document.getElementById('endereco').value=""

    
     const enviar = document.getElementById("enviar")
     dv.style.display=("none")
     enviar.style.display=("flex")

   }
     
     

   }

   
    
   
   
   
   

    

