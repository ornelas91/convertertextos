//função converter
function converter() {
  let dtext = document.getElementById('texto')
  if (dtext.value.length == 0) {
    window.alert('Digite algum texto !')
  } else {
    var nome = $("#texto").val();
    $("#campomai").html(nome.toUpperCase())
    $("#campomin").html(nome.toLowerCase())
  }
}

//função limpar
function limpar(){
  if (texto.value.length == 0) {
    window.alert('Já está limpo !')
  } else {
    document.getElementById('texto').value=''
    campomai.innerHTML = ''
    campomin.innerHTML = ''
    cont.innerHTML = '0'
  }
}

//função copiar texto maiúsculo
function copiar() {
  if (campomai.value.length == 0) {
    window.alert('Não tem nada para copiar !')
  } else {
      let textArea = document.querySelector('.text')
      textArea.select()
      document.execCommand('copy')
      //window.alert('Texto Copiado !')
  }
}

//função copiar texto minúsculo
function copiar2() {
  if (campomin.value.length == 0) {
    window.alert('Não tem nada para copiar !')
  } else {
      let textArea = document.querySelector('.text2')
      textArea.select()
      document.execCommand('copy')
      //window.alert('Texto Copiado !')
  }
}

//função contagem de caracteres
$(document).on("keydown", "#texto", function () {
  var caracteresRestantes = 1
  var caracteresDigitados = parseInt($(this).val().length)
  var caracteresRestantes = caracteresRestantes + caracteresDigitados
  
  $(".caracteres").text(caracteresRestantes)
})

//função horas
function horas() {
  var msg = window.document.getElementById('msg')
  var data = new Date()
  var hora = data.getHours()
  //var hora = 9
  var min = data.getMinutes()
  //var min = 2
  msg.style.color = 'white'
  msg.style.fontSize = '12px'
  msg.style.textAlign = 'right'
  if (hora >= 0 && hora < 12) {
    //Bom dia
    if (min < 10) {
      msg.innerHTML = `Bom Dia ! \u{1F31E} Agora são - ${hora}:0${min} hs`
    } else {
      msg.innerHTML = `Bom Dia ! \u{1F31E} Agora são - ${hora}:${min} hs`
    }
  } else if (hora >= 12 && hora < 18) {
      //Boa tarde
      if (min < 10) {
        msg.innerHTML = `Boa Tarde ! \u{1F31D} Agora são - ${hora}:0${min} hs`
      } else {
        msg.innerHTML = `Boa Tarde ! \u{1F31D} Agora são - ${hora}:${min} hs`
      }
  } else {
      //Boa noite
      if (min < 10) {
        msg.innerHTML = `Boa Noite ! \u{1F311} Agora são - ${hora}:0${min} hs`
      } else {
        msg.innerHTML = `Boa Noite ! \u{1F311} Agora são - ${hora}:${min} hs`
      }
  }
}