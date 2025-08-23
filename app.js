let amigos = [];
let sorteados = [];

function adicionarAmigo() {

    let input = document.getElementById("nomeAmigo");
    let nome = input.value.trim(); // trim() remove espaços extras

    if (nome === "") {
        alert("Por favor, insira um nome válido");
        return;
    }

amigos.push(nome);

atualizarLista();

input.value = "";
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // limpa a lista antes de atualizar

    amigos.forEach(function(amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;

        if (sorteados.includes(amigo)) {
            li.style.textDecoration = "line-through";
            li.style.color = "gray";
}
        lista.appendChild(li); 
    });
}

function sortearAmigo() {
    let disponiveis = amigos.filter(amigo => !sorteados.includes(amigo));

    if (disponiveis.length === 0) {
        alert("Todos os amigos já foram sorteados!");
        return;
}

let indiceAleatorio = Math.floor(Math.random() * disponiveis.length);
    let amigoSorteado = disponiveis[indiceAleatorio];

    sorteados.push(amigoSorteado); // adiciona à lista de sorteados

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // limpa resultado anterior

    let li = document.createElement("li");
    li.textContent = "🎉 O amigo sorteado foi: " + amigoSorteado;
    resultado.appendChild(li);

    atualizarLista();
}

function reiniciarSorteio() {
    amigos = [];
    sorteados = [];
    atualizarLista();
    document.getElementById("resultado").innerHTML = "";
}
