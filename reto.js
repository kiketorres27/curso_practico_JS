

function calcularAltura() {
    const trianguloLado1 = document.getElementById("trianguloLado1");
    const Lado1 = trianguloLado1.value;
    const trianguloLado2 = document.getElementById("trianguloLado2");
    const Lado2 = trianguloLado2.value;
    const trianguloBase = document.getElementById("trianguloBase");
    const Base = trianguloBase.value;
    const rta_altura = document.getElementById("rta_altura");
    if (Lado1 != Lado2  && Lado1 === Base || Lado1 != Lado2  && Lado2 === Base){
        rta_altura.innerHTML ="Las medidas del triángulo no corresponde a un triángulo isósceles";
    }
     else if (Lado1 === Lado2 && Lado1 === Base && Lado2 === Base){
        rta_altura.innerHTML = "Las medidas del triángulo corresponden a un triángulo equilátero"
    }
    else if (Lado1 != Lado2 && Lado1 != Base && Lado2 != Base){
        rta_altura.innerHTML = "Las medidas del triángulo corresponden a un triángulo escaleno"
    }
    else  {
    const a = Base/2;
    const h = Lado1;
    const altura = Math.sqrt((h*h)-(a*a)); 
    rta_altura.innerHTML = "La altura del triángulo rectángulo es: " + altura;
    }
}