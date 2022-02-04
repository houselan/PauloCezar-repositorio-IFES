document.addEventListener("DOMContentLoaded", criarBotao)
let tam = 3;
function criarBotao(){
    div = document.createElement("div");
    div.style.fontSize = `${tam}em`;
    div.innerHTML = `<button onclick="aumentarTitulo()"> + </button>
    <button onclick="diminuirTitulo()"> - </button>`;
    document.body.prepend(div)
}


function atualizarTam() {
    const h1 = document.querySelector("h1");
    h1.style.fontSize = `${tam}em`;
}

function diminuirTitulo() {
    if (tam > 1) {
        tam -= 1;
        atualizarTam();
    }
}

function aumentarTitulo() {
    if (tam < 7) {
        tam += 1;
        atualizarTam();
    }
}
