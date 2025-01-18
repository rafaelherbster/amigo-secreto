//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];
let amigosSorteados = [];

function adicionarAmigo() {
    //habilita o botão "sortear amigo" caso sejam adicionados novos amigos.
    document.querySelector(".button-draw").disabled = false;
    let amigo = document.querySelector('input').value;
    if (amigo == "") {//verifica se o campo estava vazio.
        alert("Porfavor insira um nome.");
    } else {
        //adiciona o novo amigo na lista.
        listaAmigos.push(amigo);
        //console.log(listaAmigos);
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
    //para cada "amigo" na lista "listaAmigos" faça o seguinte:
    listaAmigos.forEach(amigo =>{
        let elemento = document.createElement("li");//crie um elemento do tipo "<li>"
        elemento.textContent = amigo;//atribua um texto.
        userLista.appendChild(elemento);// e adicione o elemento dentro da tag <ul>
    });
}

function sortearAmigo() {
    //verifica  se o botao foi clicado antes de termos amigos adicionados.
    if (listaAmigos.length == 0) {
        alert("Adicione amigos antes de sortear!");
        return ;
    }

    //filtra a lista "listaAmigos" quais amigos ainda nao foram escolhidos.
    let amigosNaoSorteados = listaAmigos.filter(amigo => amigoDisponivel(amigo));

    //Verifica se todos os amigos ja foram escolhidos. Envia um alert e desabilita o botão "Sortear amigo"
    if (amigosNaoSorteados.length == 0) {
        alert("Todos os amigos fortam sorteados!");
        document.querySelector(".button-draw").disabled = true;
    }

    //selecione um index aleatorio dentro lista "listaAmigos".
    let indexSorteado = Math.floor(Math.random() * amigosNaoSorteados.length);
    //selecione o amigo a partir do index selecionado.
    let amigoSorteado = amigosNaoSorteados[indexSorteado];
    //console.log(amigoSorteado, listaAmigos.length, indexSorteado);
    amigosSorteados.push(amigoSorteado);

    mostrarAmigoSorteado(amigoSorteado);
}

function mostrarAmigoSorteado(userSorteado) {
    let userResultado = document.getElementById("resultado");//seleciona o elemento do HTML pelo ID.
    userResultado.innerHTML = "";// esvazia o valor anterior para que não ocorra duplicação de valores.
    let elemento = document.createElement("li");//crie um elemento do tipo "<li>"
    elemento.textContent = userSorteado;//atribua um texto.
    userResultado.appendChild(elemento);// e adicione o elemento dentro da tag <ul>
}

function amigoDisponivel(userSorteado) {
    return !amigosSorteados.includes(userSorteado);//Se amigo nao foi sorteado ainda retorna true.
}

