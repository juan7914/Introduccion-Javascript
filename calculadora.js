function suma (){
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    var Resultado = numero1 + numero2;

    document.getElementById('Resultado').value = Resultado;
}
