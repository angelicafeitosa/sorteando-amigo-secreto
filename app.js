let amigos = [];
let sorteados = [];

function adicionarAmigo() {
    // 1. capturar o valor do campo de entrada
    let input = document.getElementById("nomeAmigo");
    let nome = input.value.trim(); // trim() remove espaços extras

    // 2. validar a entrada
    if (nome === "") {
        alert("Por favor, insira um nome válido");
        return; // interrompe a função se estiver vazio
    }

    // 3. atualizar o array de amigos
amigos.push(nome);

// mostrar a lista atualizada
atualizarLista();

// 4. limpar o campo de entrada
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

    atualizarLista(); // atualiza a lista com o nome riscado
}

function reiniciarSorteio() {
    amigos = []; // limpa a lista de amigos
    sorteados = []; // limpa os sorteados
    atualizarLista(); // atualiza a interface
    document.getElementById("resultado").innerHTML = ""; // limpa o resultado
}
