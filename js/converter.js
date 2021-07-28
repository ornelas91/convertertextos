//Função de botões
$(function(){
    $("#bt").click(function(){
        mostraDados();
    })

    $("#bt2").click(function(){
        limparDados();
        window.location.reload();
    })
});  

//Função De converter
function mostraDados(){
  let dtext = document.getElementById('texto')
   if (dtext.value.length == 0) {
    window.alert('Digite algum texto !')
   } else {
    var nome = $("#texto").val();
    $("#campomai").html(nome.toUpperCase())
    $("#campomin").html(nome.toLowerCase())
   }
  
}

//Função de limpar caixas
function limparDados(){
  if (texto.value.length == 0) {
    window.alert('Já está limpo !')
  } else {
    document.getElementById('campomai').value='';
    document.getElementById('campomin').value='';
    document.getElementById('texto').value='';
  }
    
}

//Copiar textos
let btn = document.querySelector('#copy');
btn.addEventListener('click', function(e) {
  let textArea = document.querySelector('.text');
  textArea.select();
  document.execCommand('copy');
});

let btn2 = document.querySelector('#copy2');

btn2.addEventListener('click', function(f) {
  let textArea = document.querySelector('.text2');
  textArea.select();
  document.execCommand('copy');
});

//Contagem de caracteres
$(document).on("keydown", "#texto", function () {
  var caracteresRestantes = 5000;
  var caracteresDigitados = parseInt($(this).val().length);
  var caracteresRestantes = caracteresRestantes - caracteresDigitados;
  
  $(".caracteres").text(caracteresRestantes);
});