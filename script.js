function mostrarData() {
  var dataHoje = document.querySelector('.data-hoje');

  var data = new Date();
  var diaSemana = data.getDay();
  var diaMes = data.getDate();
  var Mes = data.getMonth();
  var horas = data.getHours();
  var minutos = data.getMinutes();

  
  switch (diaSemana) {
    case 0:
      diaSemana = "Domingo";
      break;
    case 1:
        diaSemana = "Segunda";
        break;
    case 2:
          diaSemana = "Terça";
          break;
    case 3:
            diaSemana = "Quarta";
            break;
    case 4:
              diaSemana = "Quinta";
              break;
    case 5:
                diaSemana = "Sexta";
                break;
    case 6:
                  diaSemana = "Sábado";
                  break;
  }
  
  switch (Mes) {
    case 0:
      Mes = "Janeiro";
      break;
    case 1:
        Mes = "Fevereiro";
        break;
    case 2:
          Mes = "Março";
          break;
    case 3:
            Mes = "Abril";
            break;
    case 4:
              Mes = "Maio";
              break;
    case 5:
                Mes = "Junho";
                break;
    case 6:
                  Mes = "Julho";
                  break;
              
                  case 7:
                    Mes = "Agosto";
                    break;
                  case 8:
                      Mes = "Setembro";
                      break;
                  case 9:
                        Mes = "Outubro";
                        break;
                  case 10:
                          Mes = "Novembro";
                          break;
                  case 11:
                            Mes = "Dezembro";
                            break;
  }
  
  function horasFixed() {
if (horas == "0") {
  horas += "0" 
}
  }

  horasFixed();

  dataHoje.innerHTML = diaSemana + ", " + diaMes + " de " + Mes + ", " + horas + "h:" + minutos;


  function Aberto() {
    var abertoFechado = document.querySelector('#aberto-agora')
    var tempo = document.querySelector('.tempo-faltando');('#aberto-agora');
    var horasFaltando = 23 - horas;
    var minutosFaltando = 60 - minutos;
    if (diaSemana != "Quinta" && horas >= 16) {
        abertoFechado.innerHTML = "Aberto agora";
          tempo.innerHTML = "Fecha às 00h:00";
        
    } else {
       var horasAbrir = 15 - horas;
      var minutosAbrir = 60 - minutos;
      abertoFechado.innerHTML = "Fechado agora";
     if (diaSemana == "Quinta") {
      tempo.innerHTML = "Abre às 16h:00 amanha";
     } else {
      tempo.innerHTML = "Abre às 16h:00 hoje";   
     }
      
    }
  }
  Aberto();
}

setInterval(mostrarData, 1000)


function cardapios() {
    var btnCardapio = document.querySelectorAll('.btns-cardapio button');
  var cardapio = document.querySelectorAll('.container-cardapio .cardapios');

  function ativoCardapio(index) {
    cardapio.forEach((menu) => {
      menu.classList.remove('cardapio-ativo')
    })
    btnCardapio.forEach((menu) => {
      menu.classList.remove('btn-cardapio-ativo')
    })
    cardapio[index].classList.add('cardapio-ativo');
    btnCardapio[index].classList.add('btn-cardapio-ativo')
  }

  btnCardapio.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => {
      ativoCardapio(index);
    })
  })
}

cardapios()


/* header change color */

function headerScroll() {
  var header = document.querySelector('header')
  var headerTop = header.getBoundingClientRect().top

        if (headerTop <= 0) {
            header.classList.add('header-scroll')
        } else {
            header.classList.remove('header-scroll')
              }
}


window.addEventListener('scroll', headerScroll)


/* menu mobile */

var btnMobile = document.querySelector("#btn-menu")
var headerMobile = document.querySelector(".header-down .container")

function menuMobile(event) {
  if (event.type === "touchstart") event.preventDefault();
  headerMobile.classList.toggle('header-mobile-ativo');
  var ativo = headerMobile.classList.contains('header-mobile-ativo')
  event.currentTarget.setAttribute('aria-expanded', ativo)

  if (ativo) {
    event.currentTarget.setAttribute('aria-label', 'Fechar menu')
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir menu')
  }
}

btnMobile.addEventListener('click', menuMobile)
btnMobile.addEventListener('touchstart', menuMobile)