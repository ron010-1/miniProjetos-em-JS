
//Inicializando objeto Cliente.
let clienteData = {
    clientes: []
};

clienteData = carregarBanco();

document.addEventListener("DOMContentLoaded", function (event) {
    carregarDashboard();
  });


// ------------ FUNÇÕES ABRIR E FECHAR MODAL --------------------
function abrirCadastro() {
    let abrirModal = document.getElementById("modal");
    abrirModal.showModal();
}

function fecharCadastro() {
    let fecharModal = document.getElementById("modal");
    fecharModal.close();

}

// ------------- FUNÇÕES DADOS ------------------------
function validarDados() {
    let [nome, email, numero, cidade] = pegarElementos();

    if (nome.length == 0) {
        window.alert("Verifique o campo Nome!");
        return false;
    } if (email.length == 0) {
        window.alert("Verifique o campo Email!");
        return false;
    } if (numero.length == 0) {
        window.alert("Verifique o campo Número!");
        return false;
    } if (cidade.length == 0) {
        window.alert("Verifique o campo Cidade!");
        return false;
    }
    return true;
}

function salvarCliente() {
    if (validarDados()) {

        //Salvando no meu objeto cliente
        let novoCliente = {
            nome: (document.getElementById("nome").value).toUpperCase(),
            email: document.getElementById("email").value,
            numero: document.getElementById("numero").value,
            cidade: document.getElementById("cidade").value
        };

        clienteData.clientes.push(novoCliente);
        salvarBanco(clienteData);

        adicionarDashboard();
    }
}

function cadastrarCliente() {
    abrirCadastro();
}

function pegarElementos() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let numero = document.getElementById("numero").value;
    let cidade = document.getElementById("cidade").value;

    return [nome, email, numero, cidade];
}

function editarCadastro(element){
    //Pegando o modal
    let modalEditar = document.getElementById("editar");
    modalEditar.showModal();

    //Pegando os elementos
    let pNome = element.querySelector("#nomeCliente").innerText;
    let pEmail = element.querySelector("#emailCliente").innerText;
    let pNumero = element.querySelector("#numeroCliente").innerText;
    let pCidade = element.querySelector("#cidadeCliente").innerText;

    //Pegando os input
    let iptNome = document.getElementById("nomeEditar");
    let iptEmail = document.getElementById("emailEditar");
    let iptNumero = document.getElementById("numeroEditar");
    let iptCidade = document.getElementById("cidadeEditar");

    iptNome.value = pNome;
    iptEmail.value = pEmail;
    iptNumero.value = pNumero;
    iptCidade.value = pCidade;

    let textoEditar = document.getElementById("textoEditar");
    textoEditar.innerText = `Editando ${pNome}`;
}

function alterarCliente(){
    let [nome, email, numero, cidade] = pegarElementos();
    adicionarDashboard(nome, email, numero, cidade);
    excluirCadastro(this.parentNode);
    salvarBanco();
}

function excluirCadastro(element) {
    let divToRemove = element;
    let nomeCliente = divToRemove.querySelector("#nomeCliente").innerText;

    clienteData.clientes = clienteData.clientes.filter(cliente => cliente.nome !== nomeCliente);
    
    // Atualizando o LocalStorage
    salvarBanco();
    // Removendo a div do DOM
    divToRemove.remove();
}

// ------------------- FUNÇÕES ADICIONAR ELEMENTOS -----------------

function adicionarDashboard(nome, email, numero, cidade) {
    if (nome == undefined || email == undefined || numero == undefined || cidade == undefined) {
        let elementos = pegarElementos();
        nome = elementos[0];
        email = elementos[1];
        numero = elementos[2];
        cidade = elementos[3];
    }
    let divCaixa = document.getElementById("caixa");
    let div = document.createElement("div");
    div.id = "divClientes"

    let pNome = document.createElement("p");
    pNome.innerHTML = `${nome}`; pNome.id = "nomeCliente";
    let pEmail = document.createElement("p");
    pEmail.innerHTML = `${email}`; pEmail.id = "emailCliente";
    let pNumero = document.createElement("p");
    pNumero.innerHTML = `${numero}`; pNumero.id = "numeroCliente";
    let pCidade = document.createElement("p");
    pCidade.innerHTML = `${cidade}`; pCidade.id = "cidadeCliente";

    filhosDiv(pNome, pEmail, pNumero, pCidade, div);
    divCaixa.appendChild(div);

    fecharCadastro();
}

function carregarDashboard() {
    for (let cliente in clienteData.clientes) {
        let dadosCliente = clienteData.clientes[cliente];
        funcionariosCadastrados(dadosCliente)
    }
}

function funcionariosCadastrados(dados) {
    let [nome, email, numero, cidade] = [dados.nome, dados.email, dados.numero, dados.cidade];
    adicionarDashboard(nome, email, numero, cidade);
}

function botoes(){
    let editar = document.createElement("button");
    editar.id = 'botaoEditar'; editar.textContent = "Editar"; editar.onclick = function () {
        editarCadastro(this.parentNode);
    };

    let excluir = document.createElement("button");
    excluir.id = 'botaoExcluir'; excluir.textContent = "Excluir"; excluir.onclick = function () {
        excluirCadastro(this.parentNode);
    };

    return [editar, excluir];
}

function filhosDiv(nome, email, numero, cidade, div) {
    div.appendChild(nome);
    div.appendChild(email);
    div.appendChild(numero);
    div.appendChild(cidade);
    let [editar, excluir] = botoes();
    div.appendChild(editar);
    div.appendChild(excluir);
}





//--------------- FUNÇÕES LOCALSTORAGE ----------------

function salvarBanco() {
    localStorage.setItem('clienteData', JSON.stringify(clienteData));
}

function carregarBanco() {
    let banco = localStorage.getItem('clienteData')
    return JSON.parse(banco);
}