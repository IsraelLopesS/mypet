document.addEventListener("DOMContentLoaded", function() {

    
  });

  function calculaIdade(nascimento, hoje){
        return Math.floor(Math.ceil(Math.abs(nascimento.getTime() - hoje.getTime()) / (1000 * 3600 * 24)) / 365.25);
    }
    let nas = 30/11/2022;
 let dateAtual = new Date();
 console.log(calculaIdade(nas, dateAtual));