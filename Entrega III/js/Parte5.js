 function circulo(){
    let radio=parseFloat(document.getElementById("radio").value);
    const pi=3.1416;
    let areaCi=pi*(radio**2);
    document.getElementById ("opten"). innerHTML=areaCi;

    } 