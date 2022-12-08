import listaPresentes from './lista.json' assert {type: 'json'};

function carregarPresentes() {
    let presentes_container = document.querySelector(".lista-presentes");
        presentes_container.innerHTML = "";

    listaPresentes.forEach(el => {
        let produto = el.produto;
        let preco = el.preco;
        let link = el.link;
        let imagem = el.imagem;
        let presente = `
        <div class="presente">
            <div class="imagem-bg">
                <a href="${link}" target="_blank"><img src="${imagem}" alt=""></a>
            </div>
            <p>${preco}</p>
        </div>`;
        presentes_container.innerHTML += presente;
    });
}

carregarPresentes();