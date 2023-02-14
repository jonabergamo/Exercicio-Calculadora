function calcular() {
  var salBruto = document.querySelector("#salBruto");
  var dependentes = document.querySelector("#dependentes");
  var checkvale = document.querySelector("#caixinha");
  var caixinha = checkvale.checked;
  var salario = salBruto.value;
  var dep = dependentes.value;
  var i_nss = "";
  document.querySelector(".ContainerOutput").style.opacity = "1";
  document.querySelector("#reSalBruto").innerHTML = salario;

  //salario bruto

  // Calculo de INSS
  if (salario <= 1302.0) {
    i_nss = salario * 0.075;
  } else if (salario >= 1302.01 && salario <= 2571.29) {
    i_nss = salario * 0.09;
  } else if (salario >= 2571.3 && salario <= 3856.94) {
    i_nss = salario * 0.12;
  } else if (salario >= 3856.95 && salario <= 7507.49) {
    i_nss = salario * 0.14;
  } else {
    i_nss = 7507.5 * 0.14;
  }
  document.querySelector("#reInss").innerHTML = parseFloat(i_nss).toFixed(2);
  
  //vale Transporte
  if (caixinha) {
    var reVale = parseFloat(salario * 0.06).toFixed(2);
  } else {
    var reVale = 0;
  }

  if (caixinha) {
    document.querySelector("#reVale_txt").style.display = "flex";
    document.querySelector("#reVale").style.display = "flex";
    document.querySelector("#reVale").innerHTML = reVale;
  } else {
    document.querySelector("#reVale_txt").style.display = "none";
    document.querySelector("#reVale").style.display = "none";
  }

  //salário liquido
  document.querySelector("#reLiquido").innerHTML = parseFloat(
    salario - i_nss - reVale // tem que colocar - irrf ainda
  ).toFixed(2);

  // IRRF
  var salarioBase = (salario - i_nss) - (189.59 * dep)
  console.log("Salario Base é: " + salarioBase)

  if (salarioBase <= 1903.98) {
    i_rff=0
  }

  else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    i_rrf = ((salarioBase * 0.075) - 142.8)
  }

  else if (salarioBase >= 2826.66 && salarioBase <= 3751.05)
    {
    i_rrf = ((salarioBase*0.15)-354.80)
    }

    else if(salarioBase>=3751.06 && salarioBase<=4664.68)
    {
        i_rrf = ((salarioBase*0.225)-636.13)
    }

    else 
    {
            i_rrf = ((salarioBase*0.275)-869.36)

  }
  if (i_rrf >= 0) {
    document.querySelector("#reIrrf").innerHTML = parseFloat(i_rrf).toFixed(2);
  } 
  
  else 
  {
    document.querySelector("#reIrrf").innerHTML = 0
  }
  
}

function resetar() {
  document.querySelector("#reLiquido").innerHTML = "";
  document.querySelector("#reInss").innerHTML = "";
  document.querySelector(".ContainerOutput").style.opacity = "0";
}

//PUXAR i_nssRed por que ela é o valor arredondado
