
function enviarMensagem(){
    navigator.clipboard.writeText("TESTE");
}



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




function enviado(){
    var enviar = document.getElementById('enviar');
    var enviado = document.getElementById('enviado');
    var botao = document.getElementById('botao-mensagem');

    enviar.style.display = "none";
    enviado.style.display = "grid"; 
    botao.style.backgroundColor = '#6bc590';
}
