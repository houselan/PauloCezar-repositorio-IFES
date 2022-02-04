const tamCelula = 50;
document.body.append(criarTabuleiro());

function criarTabuleiro() {
    const tam = 8;
    let tabela = document.createElement("table");
    tabela.style.borderStyle = "solid";
    tabela.style.borderSpacing = 0;
    tabela.style.margin = "auto";
    tabela.style.borderColor = "red";
    tabela.style.position = "absolute";
    tabela.style.top = '25%';
    tabela.style.left = '35%';

    for (let i = 0; i < tam; i++) {
        let lin = document.createElement("tr");
        tabela.append(lin);
        for (let j = 0; j < tam; j++) {
            let celula = document.createElement("td");
            lin.append(celula);
            celula.style.width = `${tamCelula}px`;
            celula.style.height = `${tamCelula}px`;
            if (i % 2 == j % 2) {
                celula.style.backgroundColor = "#00BECC";
                celula.classList.add("container");
                celula.id = `${i}${j}`
                if (i * 10 + j <= 28) {
                    celula.append(criarPeca("black"));
                } else if (i * 10 + j >= 50) {
                    celula.append(criarPeca("red"));
                }
            } else {
                celula.style.backgroundColor = "white";
            }
        }
    };
    return tabela;
}

function criarPeca(cor) {
    let imag = document.createElement("img");
    imag.setAttribute("src", `img/${cor}.png`);
    imag.setAttribute("width", `${tamCelula-6}px`);
    imag.setAttribute("height", `${tamCelula-6}px`);
    imag.setAttribute("draggable","true");
    imag.classList.add("draggable");4
    return imag;
}

const containers = document.querySelectorAll(".container");
const draggables = document.querySelectorAll(".draggable");

containers.forEach(container => {
    container.addEventListener("dragover", e => {
        e.preventDefault();
    });
    container.addEventListener("drop", e => {
        const draggable = document.querySelector(".dragging");
        let bloco = e.target.id
        let casa = document.querySelector(".dragging").parentElement.id
        //limitar movimento peças
        if(bloco[0] != casa[0] && 2 > bloco[0]-casa[0] && bloco[0]-casa[0] > -2 && bloco[1]-casa[1] < 2 && bloco[1]-casa[1] > -2){
            container.appendChild(draggable);
        }
    });
});


draggables.forEach(draggable => {
    draggable.addEventListener("dragstart", e => {
        draggable.classList.add("dragging");
    });
    draggable.addEventListener("dragend", () => {
        draggable.classList.remove("dragging");
    });
});