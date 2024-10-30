function calc_IMC()
{
    var altura = parseFloat(document.getElementById("height").value);
    var peso = parseFloat(document.getElementById("weight").value);
    var imc = peso/(altura * altura);
    var faixa = "";
    
    if(imc < 18.5)
    {
        faixa = "Abaixo do Normal";
    }
    else if((imc >= 18.5) && (imc < 25))
    {
        faixa = "Normal";
    }
    else if((imc >= 25) && (imc < 30))
    {
        faixa = "Sobrepeso"
    }
    else if((imc >= 30) && (imc < 40))
    {
        faixa = "Obesidade";
    }
    else
    {
        faixa = "Obesidade Grave";
    }

    if(imc > 0)
    {
        document.getElementById("resultado").innerHTML = "Seu IMC é: " + imc;
    document.getElementById("descResultado").innerHTML = "Seu IMC indica que seu peso está: " + faixa;
    }
}

function clear_text()
{
    document.getElementById("height").value = null;
    document.getElementById("weight").value = null;
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("descResultado").innerHTML = "";
}