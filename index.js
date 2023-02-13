console.log(salario, dep);

function calcular() {
  var salBruto = document.querySelector("#salBruto");
  var dependentes = document.querySelector("#dependentes");
  var checkvale = document.querySelector("#caixinha");
  var caixinha = checkvale.checked;
  var salario = salBruto.value;
  var dep = dependentes.value;
  var i_nssRed = "";
  var i_nss = 0;
  document.querySelector(".ContainerOutput").style.opacity = "1";

  if (caixinha) {
    document.querySelector("#reVale").innerHTML =
      "R$" + parseFloat(salario * 0.06).toFixed(2);
  } else {
    document.querySelector("#reVale").innerHTML = "none";
  }

  // Calculo de INSS
  if (salario <= 1302.0) {
    i_nss = salario * 0.075;
    i_nssRed = parseFloat(i_nss.toFixed(2));
  } else if (salario >= 1302.01 && salario <= 2571.29) {
    i_nss = salario * 0.09;
    i_nssRed = parseFloat(i_nss.toFixed(2));
  } else if (salario >= 2571.3 && salario <= 3856.94) {
    i_nss = salario * 0.12;
    i_nssRed = parseFloat(i_nss.toFixed(2));
  } else if (salario >= 3856.95 && salario <= 7507.49) {
    i_nss = salario * 0.14;
    i_nssRed = parseFloat(i_nss.toFixed(2));
  } else {
    i_nss = 7507.5 * 0.14;
    i_nssRed = parseFloat(i_nss.toFixed(2));
  }

  if (reLiquido){
    
  }

  document.querySelector("#reInss").innerHTML = "R$" + i_nssRed;
}

function resetar() {
  document.querySelector("#reInss").innerHTML = "";
  document.querySelector(".ContainerOutput").style.opacity = "0";
}

//PUXAR i_nssRed por que ela é o valor arredondado
