let url = 'https://sheets.googleapis.com/v4/spreadsheets/1m69ur2MbXpsb9T-FarE0QWvy5PCPpgc66YQZOZc_OEI/values/lista-presentes?alt=json&key=AIzaSyAdHQK3RJJ3hZyA5f6kuM-y6Bv4nLufIpg';

async function fetchListaJson() {
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  const listaJson = await response.json();
  return listaJson;
}

function trataLista(lista) {
  var vetores = lista.values;
  var chaves = lista.values[0];

  var listaPresentes = [];

  for ( let i=1; i <vetores.length; i++) {
      var presente = vetores[i];
      var x = 0;
      var novoPresente = {};
      presente.forEach(el => {
          novoPresente[chaves[x]] = el;
          x++;
      });
      listaPresentes.push(novoPresente);
  };

  var listaPresentesJson = JSON.parse(JSON.stringify(listaPresentes));
  return listaPresentesJson;
}


function carregarPresentes(listaPresentes) {
    let presentes_container = document.querySelector(".lista-presentes");
        presentes_container.innerHTML = "";

    listaPresentes.forEach(el => {
        let produto = el.produto;
        let preco = el.preco;
        let link = el.link;
        let imagem = el.imagem;
        let presente = ''
        if(preco == 'comprado') {
            presente = `
            <div class="presente">
                <div class="imagem-bg comprado">
                    <img src="${imagem}" alt="">
                </div>
                <p>Ganhamos!</p>
            </div>`;

        }else{
            presente = `
            <div class="presente">
                <div class="imagem-bg">
                    <a href="${link}" target="_blank"><img src="${imagem}" alt=""></a>
                </div>
                <p>${preco}</p>
            </div>`;
        } 
        presentes_container.innerHTML += presente;
    });
}


fetchListaJson().then(listaJson => {
  let listaPresentes = trataLista(listaJson);
  carregarPresentes(listaPresentes);
})