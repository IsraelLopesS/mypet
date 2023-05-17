document.addEventListener("DOMContentLoaded", ()=> {
  let out = document.getElementById("years");
  let data = new Date("2022/11/30");
  out.innerHTML = calc.calcIdade(data);
});

let btn = document.getElementById("btn");

btn.addEventListener("click", ()=> {
  const consumoInput = document.getElementById("consumo");
  const consumo = Number(consumoInput.value);
  if (isNaN(consumo) || consumo <= 0) {
    alert("Por favor, insira um valor válido!");
    return;
  }
  let outcons = document.getElementById("food");
  outcons.innerHTML = calc.calcConsumo(consumo, calc.mesess);
});
