
let banco = []; //Inicializando array das tasks vazio.
let contador = 0;

const escopoBody = document.getElementById("box");


// Sim na question.
function carregar() {
    //Carregando todo o banco de dados que está no localStorage.
    banco = carregarBanco();
    if (banco.length > 0) {
        for (let i = 0; i < banco.length; i++) {
            carregarTasksAnteriores(banco[i]);//Mandando cada posição da lista pra função.
        }
    }
    divStyle();
}

//Não na question
function apagarBanco() {
    localStorage.removeItem('tasks'); //Apagando todo o localStorage.
    carregarBanco();
    divStyle();
}

function divStyle() {
    let divQuestion = document.getElementById("question");
    let divAddTask = document.getElementById("newTask");
    let header = document.getElementsByTagName("header")[0];
    let footer = document.getElementsByTagName("footer")[0];
    mostrarDiv(header);
    mostrarDiv(divAddTask);
    mostrarDiv(footer);
    esconderDiv(divQuestion);
}
//Adicionar nova Task.
function adicionar() {
    //Pegando a segunda div da section.
    let controleDiv = document.getElementById("allTasks");

    let divTask = document.createElement("div");//Criando div.
    let p = document.createElement("p");//Criando parágrafo.
    p.innerText = `${document.getElementById("text").value}`; //Adicionando texto ao parágrafo.
    let [check, close] = icones();//Recebo as variáveis por desestruturação. (Desescturing Assignment)

    //Adicionando id's
    divTask.id = "tasks"; p.id = "taskText";

    //Construindo a árvore.
    filhos(divTask, check, p, close);//divTask->ParentNode. check, p e close -> childNode.
    filhosDiv(controleDiv, divTask);//controleDiv->ParentNode. divTask -> childNode.
    mostrarDiv(divTask);//A função altera a propriedade display.

    //Adicionando no localStorage e salvando no array.
    banco.push(`${document.getElementById("text").value}`);
    salvarBanco(p.innerText);
}

//Carrega as tasks anteriores ao clicar em Sim.
function carregarTasksAnteriores(element) {
    if (element.length != null || element.length != []) {
        //Pegando a segunda div da section.
        let controleDiv = document.getElementById("allTasks");

        let divTask = document.createElement("div");//Criando div.
        let p = document.createElement("p");//Criando parágrafo.
        p.innerText = `${element}`; //Adicionando texto ao parágrafo.
        let [check, close] = icones();//Recebo as variáveis por desestruturação. (Desescturing Assignment)

        //Adicionando id's
        divTask.id = "tasks"; p.id = "taskText";

        //Construindo a árvore.
        filhos(divTask, check, p, close);//divTask->ParentNode. check, p e close -> childNode.
        filhosDiv(controleDiv, divTask);//controleDiv->ParentNode. divTask -> childNode.
        mostrarDiv(divTask);//A função altera a propriedade display.   
    }
}

//Função excluir task.
function excluir() {
    let divToRemove = this.parentNode;
    let p = divToRemove.querySelector("p").innerText;
    const novoArray = banco.filter((pos) => !(pos == `${p}`));
    banco = novoArray;
    // Alterando o LocalStorage
    salvarBanco();
    // Removendo a div do DOM
    divToRemove.remove();
}

//Função retorna um array com o ícone check(i=0) e close(i=1).
function icones() {
    let check = document.createElement("img");
    let close = document.createElement("img");
    check.src = "/imagens/check.png"; check.id = "icones"; check.onclick = function () {
        checked(this);
    };
    close.src = "/imagens/close.png"; close.id = "icones"; close.onclick = excluir;
    return [check, close];
}


//Função que marca tarefa como concluída.
function checked(element) {
    let textElement = element.nextElementSibling; // Acessando o próximo irmão, que é o parágrafo com a classe "taskText"
    textElement.style.textDecoration = 'line-through';
    element.onclick = function () {
        notChecked(this); // Passando a referência do elemento clicado para a função notChecked
    };
}

//Função que desmarca a tarefa.
function notChecked(element) {
    let textElement = element.nextElementSibling; // Acessando o próximo irmão, que é o parágrafo com a classe "taskText"
    textElement.style.textDecoration = 'none';
    element.onclick = function () {
        checked(this); // Passando a referência do elemento clicado para a função checked
    };
}

// ---------------------- FUNÇÕES ÁRVORES E STYLE -----------------------------
function filhos(div, elemento1, elemento2, elemento3) {
    div.appendChild(elemento1);
    div.appendChild(elemento2);
    div.appendChild(elemento3);
}

function filhosDiv(parentNode, element) {
    parentNode.appendChild(element);
}

//A função altera a propriedade display.
function mostrarDiv(element) {
    element.style.display = 'flex';
}

function esconderDiv(element) {
    element.style.display = 'none';
}

// ------------------------ FUNÇÕES BANCO DE DADOS ---------------------------
//Função que salva meu banco de Dados no localStorage e no Array(banco).
function salvarBanco() {
    localStorage.tasks = JSON.stringify(banco);//Adicionando o banco(Dados) convertido em JSON.
}

//Função que carrega tudo o que está no meu localStorage pro meu Array(Banco) em JSON.
function carregarBanco() {
    let lista = localStorage.getItem('tasks'); //Pegando a lista com os valores.
    return JSON.parse(lista);//Retorna o valor da lista em objeto JSON.  
}
