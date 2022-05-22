let inputs = document.getElementsByClassName("input-form");
for(let input of inputs){
    input.addEventListener("blur",function(){
        if(input.value.trim() != ""){
            input.classList.add("has-val");
        }
        else{
            input.classList.remove("has-val");
        }
    })


// Loading para quando a tela demorar para carregar
}
function loading(){
    document.getElementsByClassName("box-load")[0].style.display="none"
}

// Verificacao

function validar(){
    var nome =document.getElementById("nome").value;
    var email=document.getElementById("email").value;
    var senha=document.getElementById("password").value;
    var senharepete=document.getElementById("passwordRepeat").value;

    if(nome==""){
        document.getElementById("erro-nome").innerHTML="Ops! Informe o nome";
    }
    else{
        document.getElementById("erro-nome").innerHTML="";
    }
    
    if(email==""){
        document.getElementById("erro-email").innerHTML="Ops! Informe o seu e-mail";
    }
}


function alertsenha(){
    document.getElementById("alertsenha").innerHTML="Uma nova senha foi gerada, verifique seu e-mail!";
}