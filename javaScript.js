
function converterTemperatura() {
    var valorTemp = document.getElementById("valor1").value; 
    var element = document.getElementById("deUnidade1"); 
    var unidadeTemp = element.options[element.selectedIndex].text; 
    var resultadoTemp;

    if (unidadeTemp === "Celsius(°C)") {
        resultadoTemp = parseFloat(valorTemp) * 9/5 + 32;
    } else if (unidadeTemp === "Fahrenheit(°F)") {
        resultadoTemp = (parseFloat(valorTemp) - 32) * 5/9; 
    }

    document.getElementById("resultadoCalculo1").innerHTML = resultadoTemp.toFixed(2);
}

function converterComprimento() {
    var valorComp = document.getElementById("valor2").value;
    var element2 = document.getElementById("deUnidade2");
    var unidadeComp = element2.options[element2.selectedIndex].text;
    var resultadoComp;

    if (unidadeComp === "Metros(m)") {
        resultadoComp = parseFloat(valorComp) * 3.28;
    } else if (unidadeComp === "Pés(ft)") {
        resultadoComp = parseFloat(valorComp) / 3.28;
    }

    document.getElementById("resultadoCalculo2").innerHTML = resultadoComp.toFixed(2)
}

function converterPeso() {
    var valorPeso = document.getElementById("valor3").value;
    var element3 = document.getElementById("deUnidade3");
    var unidadePeso = element3.options[element3.selectedIndex].text;
    var resultadoPeso;

    if (unidadePeso === "Quilogramas(kg)") {
        resultadoPeso = parseFloat(valorPeso) * 2.20;
    } else if (unidadePeso === "Libras(lb)") {
        resultadoPeso = parseFloat(valorPeso) / 2.20;
    } 

    document.getElementById("resultadoCalculo3").innerHTML = resultadoPeso.toFixed(2)
}