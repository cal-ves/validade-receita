const buttonTwo = document.getElementById("btn-data-2");
const dataAtual = new Date();

buttonTwo.addEventListener("click", function (e) {
  e.preventDefault();

  const dataTwo = new Date(document.getElementById("data-2").value);
  const dataVencimento = new Date();
  dataVencimento.setTime(dataTwo.getTime() + 181 * 24 * 60 * 60 * 1000);
  const resposta = document.getElementById("h3-data2");
  const difMs = dataAtual - dataTwo;
  const difDias = difMs / (1000 * 60 * 60 * 24);

  if (difDias > 180) {
    resposta.innerHTML = `A receita venceu em ${dataVencimento.toLocaleDateString(
      "pt-BR"
    )}.`;
  } else {
    resposta.innerHTML = `A receita irá vencer em ${dataVencimento.toLocaleDateString(
      "pt-BR"
    )}.`;
  }
});
