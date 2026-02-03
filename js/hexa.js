const opcoes = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

document.querySelector('.mudar-cor button').addEventListener('click', () => {

    let hexagonal = '#';

    for(let i = 0; i < 6; i++) {
        hexagonal += opcoes[sortear()];
    }

    document.querySelector('main').style.backgroundColor = hexagonal;
    document.querySelector('h2 span').textContent = hexagonal;

})

function sortear() {

    const quant = opcoes.length;

    const num = Math.floor(Math.random() * quant);

    return num;
}

