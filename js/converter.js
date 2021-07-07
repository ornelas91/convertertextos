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