function copyToClickBoard(){
    var content = document.getElementById('chave').innerHTML;
    var copiar = document.getElementById('copiar');
    var copiado = document.getElementById('copiado');
    var botao = document.getElementById('button2');

    copiar.style.display = "none";
    copiado.style.display = "grid"; 
    botao.style.backgroundColor = '#6bc590';
    navigator.clipboard.writeText(content) 
}