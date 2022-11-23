function perimetro(){
    let base=parseInt(document.getElementById("base").value);
    let altura=parseInt(document.getElementById("altura").value);
    let prmt=2*base+2*altura;
    
    document.getElementById ("respt"). innerHTML=prmt;
    
     
    }