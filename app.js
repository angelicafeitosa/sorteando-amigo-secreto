let amigos = [];

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
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Nenhum amigo disponível para o sorteio!");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // limpa resultado anterior

    let li = document.createElement("li");
    li.textContent = "🎉 O amigo sorteado foi: " + amigoSorteado;
    resultado.appendChild(li);
}