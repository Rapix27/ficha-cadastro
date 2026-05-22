const inputVenda = document.getElementById("valorVenda");
const inputPorcentagem = document.getElementById("porcentagem");
const botaoCalcular = document.getElementById("btnCalcular");
const divResultado = document.getElementById("resultado");


function calcularComissao() {
    
    const valorVenda = Number(inputVenda.value);
    const porcentagem = Number(inputPorcentagem.value);

    
    if (Number.isNaN(valorVenda) || Number.isNaN(porcentagem) || inputVenda.value === "" || inputPorcentagem.value === "") {
        divResultado.innerText = "Por favor, digite valores válidos.";
        return;
    }


    const valorComissao = (valorVenda * porcentagem) / 100;

    
    divResultado.innerText = `O valor da comissão é: R$ ${valorComissao.toFixed(2)}`;
}


botaoCalcular.addEventListener("click", calcularComissao);