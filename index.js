var salario = Number.FloatParse(document.getElementById("#salBruto"))
var dep = Number.FloatParse(document.getElementById("#dependentes"))
var i_nss = 0

// Calculo de INSS 

if(salario<=1302.00){
    i_nss  = salario * 0.075
    i_nssRed = parseFloat(i_nss.toFixed(2));
    }
    
    else if(salario>=1302.01 && salario<=2571.29){
    i_nss  = salario * 0.09
    i_nssRed = parseFloat(i_nss.toFixed(2));
    }
    
    else if(salario>=2571.30 && salario<=3856.94){
    i_nss  = salario * 0.12
    i_nssRed = parseFloat(i_nss.toFixed(2));
    }
    
    else if(salario>=3856.95 && salario<=7507.49){
        i_nss = salario * 0.14
        i_nssRed = parseFloat(i_nss.toFixed(2));
    }
    
    else{
        i_nss = 7507.50 * 0.14
        i_nssRed = parseFloat(i_nss.toFixed(2));
    }


    



