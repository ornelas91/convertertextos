$(function(){
    $("#bt").click(function(){
        mostraDados();
    })

    $("#bt2").click(function(){
        limparDados();
        window.location.reload();
    })
});  
    
function mostraDados(){
   var nome = $("#texto").val();
   $("#campomai").html(nome.toUpperCase())
   $("#campomin").html(nome.toLowerCase())
}
    
function limparDados(){
    document.getElementById('campomai').value='';
    document.getElementById('campomin').value='';
    document.getElementById('texto').value='';
}

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

