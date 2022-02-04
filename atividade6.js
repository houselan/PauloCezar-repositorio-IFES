document.querySelector("#DDD").addEventListener("change",buscarCidades)
            

function buscarCidades(event)
{
    fetch(`https://brasilapi.com.br/api/ddd/v1/${event.target.value}`)
    .then(resp => resp.json())
    .then(dados => {
    listarCidades(dados.cities)
});
}
function listarCidades(cidades)

{
        const tam = cidades.length;
        const list = document.querySelector("ul");
        list.innerHTML = "<ul></ul>";
        for(let i = 0; i < tam; i++){
            item = document.createElement("li");
            item.textContent = cidades[i];
            list.append(item);
        }
}