//IMPLEMETAR O LOCAL STORAGE.

//Lista para armazenar os textos das tarefas.
let banco = [];


function adicionar(element) {
    let section = document.getElementById("caixa");
    let divTask = document.createElement("div");
    divTask.id = "tasks"; section.appendChild(divTask);
    let textTask = document.getElementById("text").value; //Pegando o que foi digitado no textarea.
    let p = document.createElement("p");
    p.innerText = `${textTask}`; p.id = "taskText"; localStorage.setItem("task", textTask);

    let check = document.createElement("img"); check.id = "icones"; check.src = "/imagens/check.png"; check.onclick = function () {
        checked(this); // Passando a referência do elemento clicado para a função checked
    };

    let close = document.createElement("img"); close.src = "/imagens/close.png"; close.id = "icones"; close.onclick = closeTask;
    divTask.appendChild(check); divTask.appendChild(p); divTask.appendChild(close);
    banco.push(textTask);//Armazenando na lista
    localStorage.tasks = JSON.stringify(banco); //Na chave "tasks" adiciona a lista.
    divTask.style.display = 'flex';
}
function checked(element) {
    let textElement = element.nextElementSibling; // Acessando o próximo irmão, que é o parágrafo com a classe "taskText"
    textElement.style.textDecoration = 'line-through';
    element.onclick = function () {
        notChecked(this); // Passando a referência do elemento clicado para a função notChecked
    };
}

function notChecked(element) {
    let textElement = element.nextElementSibling; // Acessando o próximo irmão, que é o parágrafo com a classe "taskText"
    textElement.style.textDecoration = 'none';
    element.onclick = function () {
        checked(this); // Passando a referência do elemento clicado para a função checked
    };
}

function closeTask() {
    let divToRemove = this.parentNode;
    // Removendo a div do DOM
    divToRemove.remove();
}

function carregar(){
    if (localStorage.tasks) {
        banco = JSON.parse(localStorage.getItem('tasks'));
        console.log("Passei daqui.");
    }
    for (let i in banco) {
        adicionar(banco[i].tasks);
    }
}
