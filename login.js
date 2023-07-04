function acessar(){
    let loginEmail = document.getElementById('loginEmail').value;
    let LoginSenha = document.getElementById('loginSenha').value;

    if(!loginEmail || !LoginSenha){
        alert("Campos de preenchimento obrigatório. Favor preencher!");
    } else{
        window.location.href = "aula2.html";
        console.log(window.location.href);
    }
}

var dadosLista = [];
function salvarUser(){
    let nomeUser = document.getElementById("nomeUser").value;
    if(nomeUser){
        dadosLista.push(nomeUser);
        console.log(dadosLista);
    }
}
