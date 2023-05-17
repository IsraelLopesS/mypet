const calc = {
  calcIdade: function (dataNascimento) {
    const dataAtual = new Date();
    meses = (dataAtual.getFullYear() - dataNascimento.getFullYear()) * 12;
    meses -= dataNascimento.getMonth();
    meses += dataAtual.getMonth();

    let dias = dataAtual.getDate() - dataNascimento.getDate();
    if (dias < 0) {
      const ultimoDiaDoMes = new Date(
        dataAtual.getFullYear(),
        dataAtual.getMonth(),
        0
      ).getDate();
      dias = ultimoDiaDoMes - dataNascimento.getDate() + dataAtual.getDate();
      meses--;
    }

    const anos = Math.floor(meses / 12);
    let mesess = meses % 12;

    return anos + " anos, " + mesess + " meses e " + dias + " dias";
  },
  calcConsumo: function (consumo) {
    let mesIndex = 0;
    for (let i = 0; i < consumoDiario.length; i++) {
      if (meses <= consumoDiario[i].mes) {
        mesIndex = i;
        break;
      }
    }

    let quantidade = 0;
    if (consumo <= 5) {
      quantidade = consumoDiario[mesIndex].peso5;
    } else if (consumo <= 10) {
      quantidade = consumoDiario[mesIndex].peso10;
    } else if (consumo <= 15) {
      quantidade = consumoDiario[mesIndex].peso15;
    } else if (consumo <= 20) {
      quantidade = consumoDiario[mesIndex].peso20;
    } else if (consumo <= 25) {
      quantidade = consumoDiario[mesIndex].peso25;
    } else if (consumo <= 30) {
      quantidade = consumoDiario[mesIndex].peso30;
    } else {
      quantidade = consumoDiario[mesIndex].peso35;
    }

    const resultado = `Deve consumir:<br> ${quantidade}g de alimento por dia.`;

    return resultado;
  },
};
