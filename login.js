//bloco de verificação de preenchimento de campos

function verifica(){
    let user = document.getElementById('loginEmail').value;
    let senha = document.getElementById('loginSenha').value;

    if(!user || !senha){
        aler("Campos de preenchimento obrigatório. Favor preencher!");
    }
    else{
        alert("Campos preenchidos com sucesso!");
    }
}