// Código cuadrado
console.group("Cuadrados:");
//const ladoCuadrado = 5;
//console.log("La medida del lado del cuadrado es: "+ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado*4;
} 


//console.log("El perímetro del cuadrado es: "+perimetroCuadrado + "cm");


function areaCuadrado(lado) {
    return lado * lado;
} 


//console.log("El área del cuadado es: "+areaCuadrado + "cm^2");
console.groupEnd();



// Código triángulo
console.group("Triángulos:");
//const ladoTriangulo = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//const alturaTriangulo = 5.5;

//console.log("Los lados del triángulo son: "+ladoTriangulo+ "cm, " + +ladoTriangulo2+ "cm, " + +baseTriangulo+ "cm" );

//console.log("La altura del triángulo mide: " +alturaTriangulo + "cm");

function perimetroTriangulo(lado,base,lado2){
    return lado+lado2+base;
}

//console.log("El perímetro del triángulo es: " +perimetroTriangulo+ "cm");

function areaTriangulo(base,altura){
    return (base*altura)/2;
}

//const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;

//console.log("El área del triángulo es: " +areaTriangulo + "cm^2");

console.groupEnd();



//Código del círculo

console.group("Círculos");

//const radioCirculo = 4;
//console.log("El radio del Círculo es: "+radioCirculo+"cm");

function diametroCirculo(radio){
    return radio+radio;
}

//const diametroCirculo = radioCirculo * 2;
//console.log("El diámetro del círculo es: " +diametroCirculo +"cm");

const PI = Math.PI;
console.log("PI es igual a: "+PI);

function perimetroCirculo(radio,PI){
    const diametro = diametroCirculo(radio);
    return diametro*PI;
}
//const perimetroCirculo = diametroCirculo*PI;
//console.log("El diámetro del círculo es: "+perimetroCirculo+"cm");

function areaCirculo(radio,PI){
    return (radio*radio)*PI;
}

//const areaCirculo = (radioCirculo*radioCirculo) * PI;
//console.log("El área del círculo es: "+areaCirculo+ "cm^2");

console.groupEnd();


function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const rta = document.getElementById("rtaCuadradoPerimetro");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    rta.innerHTML = "El perímetro del cuadrado es: "+perimetro;
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const rta = document.getElementById("rtaCuadradoArea");
    const value = input.value;
    const area = areaCuadrado(value);
    rta.innerHTML = "El área del cuadrado es: "+area;
}

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("inputTrianguloLado1");
    const input2 = document.getElementById("inputTrianguloLado2");
    const input3 = document.getElementById("inputTrianguloBase");
    const rta = document.getElementById("rtaTrianguloPerimetro");
    const value1 = parseFloat(input1.value);
    const value2 = parseFloat(input2.value);
    const value3 = parseFloat(input3.value);
    const perimetro = perimetroTriangulo(value1,value2,value3);
    rta.innerHTML = "El perímetro del triángulo es: " + perimetro;
}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("inputTrianguloBase");
    const input2 = document.getElementById("inputTrianguloAltura");
    const rta = document.getElementById("rtaTrianguloArea");
    const value1 = parseFloat(input1.value);
    const value2 = parseFloat(input2.value);
    const area = areaTriangulo(value1,value2);
    rta.innerHTML = "El área del triángulo es: " + area;
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculoRadio");
    const rta = document.getElementById("rtaCirculoPerimetro");
    const value = parseFloat(input.value);
    const perimetro = perimetroCirculo(value,PI);
    rta.innerHTML = "EL perímetro del círculo es: " +perimetro;
}

function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculoRadio");
    const rta = document.getElementById("rtaCirculoArea");
    const value = parseFloat(input.value);
    const area = areaCirculo(value,PI);
    rta.innerHTML = "El área del círculo es: " + area;
}