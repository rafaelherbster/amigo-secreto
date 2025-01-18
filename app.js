//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];

function adicionarAmigo() {
    let amigo = document.querySelector('input').value;
    if (amigo == "") {//verifica se o campo estava vazio.
        alert("Porfavor insira um nome.");
    } else {
        listaAmigos.push(amigo);//adiciona o novo amigo na lista.
        console.log(listaAmigos);
        limparCampo();
        mostrarAmigos();
    }
  
}

function limparCampo() {
    amigo = document.querySelector('input');//seleciona o campo de texto e limpa.
    amigo.value = "";
    
}

function mostrarAmigos() {
    let userLista = document.getElementById("listaAmigos");//seleciona o elemento do HTML pelo ID.
    userLista.innerHTML = "";// esvazia o valor anterior para que não ocorra duplicação de valores.
    listaAmigos.forEach(amigo =>{//para cada "amigo" na lista "listaAmigos" faça o seguinte:
        let elemento = document.createElement("li");//crie um elemento do tipo "<li>"
        elemento.textContent = amigo;//atribua um texto.
        userLista.appendChild(elemento);// e adicione o elemento dentro da tag <ul>
    });
}

function sortearAmigo() {
    let indexSorteado = Math.floor(Math.random() * listaAmigos.length);//selecione um index aleatorio dentro lista "listaAmigos".
    let amigoSorteado = listaAmigos[indexSorteado];//selecione o amigo a partir do index selecionado.
    console.log(amigoSorteado, listaAmigos.length, indexSorteado);
    mostrarAmigoSorteado(amigoSorteado);
}

function mostrarAmigoSorteado(userSorteado) {
    let userResultado = document.getElementById("resultado");//seleciona o elemento do HTML pelo ID.
    userResultado.innerHTML = "";// esvazia o valor anterior para que não ocorra duplicação de valores.
    let elemento = document.createElement("li");//crie um elemento do tipo "<li>"
    elemento.textContent = userSorteado;//atribua um texto.
    userResultado.appendChild(elemento);// e adicione o elemento dentro da tag <ul>
}


