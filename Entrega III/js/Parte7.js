function triangulo(){
    let catetoop=parseInt(document.getElementById("catetoop").value);
    let catetoad=parseInt(document.getElementById("catetoad").value);
    
    let suma=catetoop*2+catetoad*2;
    let hipotenusa=Math.sqrt(suma);
    
    document.getElementById ("rspt"). innerHTML=hipotenusa;
    }