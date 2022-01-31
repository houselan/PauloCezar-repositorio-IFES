
const subtitulos = document.querySelectorAll('h2');
const topicos = new Array();
subtitulos.forEach(elemento => {
    topicos.push(elemento.textContent);
    const link = document.createElement('a');
    link.setAttribute('name', elemento.textContent);
    elemento.append(link);
    const retornar = document.createElement('a');
    retornar.setAttribute('href', '#');
    retornar.textContent = 'começo';
    elemento.parentElement.insertBefore(retornar, elemento.nextElementSibling);

});

const lista = document.querySelector('ol');
topicos.forEach(topico => {
    const item = document.createElement('li');
    const linkk = document.createElement('a');
    lista.append(item);
    lista.append(linkk);
    linkk.setAttribute('href', `#${topico}`);
    linkk.textContent = topico;
});
