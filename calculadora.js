const campo1 = document.querySelector("#campo1");
const campo2 = document.querySelector("#campo2");
const operacao = document.querySelector("#operacao");
let resposta = document.querySelector("#resposta");

operacao.addEventListener("change", calcular);
campo1.addEventListener("keyup", calcular)
campo2.addEventListener("keyup", calcular)

function calcular() {

    if(campo1.value!='' && campo2.value!=''){
    const valor1 = parseFloat(campo1.value);
    const valor2 = parseFloat(campo2.value);
    let resultado;

    if (operacao.value === "somar") {
        resultado = valor1 + valor2;
    } else if (operacao.value === "subtrair") {
        resultado = valor1 - valor2;
    } else if (operacao.value === "multiplicar") {
        resultado = valor1 * valor2;
    } else if (operacao.value === "dividir") {
        resultado = valor1 / valor2;
    } else {
        resultado = "Operação inválida";
    }

    resposta.innerHTML = resultado;
    }
    
}