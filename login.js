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
        criaLista();
        document.getElementById("nomeUser").value = '';
    }
}

function criaLista(){
    let tabela = document.getElementById("tabela").innerHTML = " <tr><th>Nome Usuário</th><th>Ações</th></tr>";

for(let i=0; i <= (dadosLista.length-1); i++){
    tabela += "<tr><td>" + dadosLista[i] + "</td><td><button class=' btn btn-success' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button><button class='btn btn-danger' onclick='excluir(this.parentNode.parentNode)'>Excluir</button></td></tr>";
        document.getElementById('tabela').innerHTML = tabela;
    }
}
function editar(i){
    document.getElementById("nomeUser").value = dadosLista[(i - 1)];
    dadosLista.splice(dadosLista[(i-1), 1]);
}

function excluir(i){
    dadosLista.splice((i-1), 1);
    document.getElementById("tabela").deleteRow(i);
}
