// agrugar datos en la consola
console.group("cuadrados");


const perimetroCuadrado =(lado)=>lado*4;


const areaCuadrado =(lado)=> lado*lado;

console.groupEnd();

// Codigo del triangulo
console.group("triangulos")

const perimetroTriangulo =(base,lado1,lado2)=> base+lado1+lado2;



const areaTriangulo = (base,altura)=>(base*altura)/2;

console.groupEnd();

// Codigo del circulo
console.group("Circulos");


//Diametro
const diametroCirculo = (radio)=> radio*2;

//PI
const PI = Math.PI;


//Perimetro
const perimetroCirculo = (radio) => {
    const diametro = diametroCirculo(radio); 
    return (diametro * PI).toFixed(2);
}

// Area
const areaCirculo = (radio)=> ((radio*radio)*PI).toFixed(2);
console.groupEnd();



// ------EJECUCIÓN ------


//-------VALIDACIONES------

const checkInputsCuadrado = (l1) => {
    if (Number.isNaN(l1) || l1 <= 0) {
        e = document.getElementById('errorCL1');
        e.innerHTML = 'Ingrese un valor válido para el Lado';
        return false;
    }
    return true;
}

function checkInputsTriangulo (l1, l2, b, h) {
    if (h == false) {
        if (Number.isNaN(l1) || l1 <= 0) {
            e = document.getElementById('errorT1');
            e.innerHTML = 'Ingrese un valor válido para el Lado A';
            return false;
        }

        if (Number.isNaN(l2) || l2 <= 0) {
            e = document.getElementById('errorT2');
            e.innerHTML = 'Ingrese un valor válido para el Lado B';
            return false;
        }
        if (Number.isNaN(b) || b <= 0) {
            e = document.getElementById('errorTBase');
            e.innerHTML = 'Ingrese un valor válido para la Base';
            return false;
        }
        } else {
        if (Number.isNaN(b) || b <= 0) {
            e = document.getElementById('errorTBase');
            e.innerHTML = 'Ingrese un valor válido para la Base';
            return false;
        }
        if (Number.isNaN(h) || h <= 0) {
            e = document.getElementById('errorTAltura');
            e.innerHTML = 'Ingrese un valor válido para la Altura';
            return false;
        }

    }
    return true;
}

function checkInputsCirculo(l1) {
    if (Number.isNaN(l1) || l1 <= 0) {
        e = document.getElementById('errorCirculo');
        e.innerHTML = 'Ingrese un valor válido para el radio';
        return false;
    }
    return true;
}

// Cuadrado

const renderResultSquare = (r, dimension) =>{
    const resultado = document.getElementById("respuesta-cuadrado");
    const unit = dimension == 'Area' ? 'cm<span>2</span>' : 'cm';
    resultado.innerHTML = `El ${dimension} del cuadrado <br>es: <strong class="unit"> ${r} ${unit}</strong>`;
}

function calcularPerimetroCuadrado() {
    const lado = parseInt(document.getElementById('inputCuadrado').value);
    if(checkInputsCuadrado(lado)) {
        const result = perimetroCuadrado(lado);
        renderResultSquare(result, 'Perimetro');
    }
}

const perimetroBtnCuadrado = document.querySelector(".btn-square-p");
perimetroBtnCuadrado.addEventListener("click", calcularPerimetroCuadrado)



function calcularAreaCuadrado() {
    

    const lado = parseInt(document.getElementById('inputCuadrado').value);
    if (checkInputsCuadrado(lado)) {
        const result = areaCuadrado(lado);
        renderResultSquare(result, 'Area');
    }
}

const areaBtnCuadrado = document.querySelector(".btn-square-a")
areaBtnCuadrado.addEventListener("click",calcularAreaCuadrado);

//Triangulo

const renderResultTriangulo = (r, dimension) =>{
    const resultado = document.getElementById("respuesta-triangulo");
    const unit = dimension == 'Area' ? 'cm<span>2</span>' : 'cm';
    resultado.innerHTML = `El ${dimension} del triangulo <br> es: <strong class="unit"> ${r} ${unit}</strong>`;
}

function calcularAreaTriangulo() {
    const lado1 = false;
    const lado2 = false;
    const base = parseInt(document.getElementById('inputBase').value);
    const altura = parseInt(document.getElementById('inputHeight').value);

    if (checkInputsTriangulo(lado1, lado2, base, altura)) {
        const result = areaTriangulo(base, altura);
        renderResultTriangulo(result, 'Area');
    }
}

const areaBtnTriangulo = document.querySelector(".btn-triangle-a");
areaBtnTriangulo.addEventListener("click", calcularAreaTriangulo);

function calcularPerimetroTriangulo() {
    

    const lado1 = parseInt(document.getElementById('inputTriangulo1').value);
    const lado2 = parseInt(document.getElementById('inputTriangulo2').value);
    const base = parseInt(document.getElementById('inputBase').value);
    const altura =  false;

    if (checkInputsTriangulo(lado1, lado2, base, altura)) {
        const result = perimetroTriangulo(lado1, lado2, base);

        renderResultTriangulo(result, 'Perimetro');
    }    
}

const perimetroBtnTriangulo = document.querySelector(".btn-triangle-p");
perimetroBtnTriangulo.addEventListener("click", calcularPerimetroTriangulo);


// Circulo

const renderResultCirculo = (r, dimension) =>{
    const resultado = document.getElementById("respuesta-circulo");
    const unit = dimension == 'Area' || 'Diametro' ? 'cm<span>2</span>' : 'cm';
    resultado.innerHTML = `El ${dimension} del Circulo <br> es: <strong class="unit"> ${r} ${unit}</strong>`;
}

function calcularPerimetroCirculo() {
    
    
    const radio = parseInt(document.getElementById('inputCirculo').value);

    if(checkInputsCirculo(radio)){
        const result = perimetroCirculo(radio);
        renderResultCirculo(result, 'Perimetro');
    }
}

const perimetroBtnCirculo = document.querySelector(".btn-circle-p");
perimetroBtnCirculo.addEventListener("click", calcularPerimetroCirculo);


function calcularAreaCirculo() {
    
    
    const radio = parseInt(document.getElementById('inputCirculo').value);

    if(checkInputsCirculo(radio)){
        const result = areaCirculo(radio);
        renderResultCirculo(result, 'Area');
    }
}

const areaBtnCirculo = document.querySelector(".btn-circle-a");
areaBtnCirculo.addEventListener("click", calcularAreaCirculo);

function calcularDiametroCirculo() {
   
    
    const radio = parseInt(document.getElementById('inputCirculo').value);

    if(checkInputsCirculo(radio)){
        const result = diametroCirculo(radio);
        renderResultCirculo(result, 'Diametro');
    }
}

const diametroBtnCirculo = document.querySelector(".btn-circle-d");
diametroBtnCirculo.addEventListener("click", calcularDiametroCirculo);








/* let areaBtnCuadrado = document.querySelector(".areaBtn");
let perimetroBtnCuadrado = document.querySelector(".perimetroBtn");
let outputCuadrado = document.querySelector(".outPut");
let perimetroBtnTriangulo = document.querySelector(".perimetroBtnTriangulo")
let areaBtnTriangulo = document.querySelector(".areaBtnTriangulo")
let outputTriangulo = document.querySelector(".outPutTriangulo");
const perimetroBtnCirculo = document.querySelector(".perimetroBtnCirculo")
const areaBtnCirculo= document.querySelector(".areaBtnCirculo")
const outPutCirculo = document.querySelector(".outPutCirculo")



const calcularPerimetroCuadrado=()=> {
    const value = document.getElementById("InputCuadrado").value;
    
    outputCuadrado.innerHTML=perimetroCuadrado(value); 

}

const calcularAreaCuadrado=()=> {
    const value = document.getElementById("InputCuadrado").value;
    

    outputCuadrado.innerHTML = areaCuadrado(value);

}

const calcularPerimetroTruangulo=()=> {
    const inputLadoA= parseInt(document.getElementById("ladoATriangulo").value)
    const inputLadoB = parseInt(document.getElementById("ladoBTriangulo").value)
    const inputBase = parseInt(document.getElementById("baseTriangulo").value)
    
    outputTriangulo.innerHTML= perimetroTriangulo(inputBase,inputLadoA,inputLadoB)

}

const calcularAreaTriangulo=()=> {
    const inputAltura = parseInt(document.getElementById("alturaTriangulo").value);
    const inputBase = parseInt(document.getElementById("baseTriangulo").value)
    

    outputTriangulo.innerHTML= areaTriangulo(inputBase,inputAltura);
}

const calcularPerimetroCirculo=()=> {
    const inputRadio = document.getElementById("InputCirculo").value;
    
    outPutCirculo.innerHTML=perimetroCirculo(inputRadio);
}

const calcularAreaCirculo=()=> {
    const inputRadio = document.getElementById("InputCirculo").value;

    outPutCirculo.innerHTML= areaCirculo(inputRadio);
}

areaBtnCuadrado.addEventListener("click",calcularAreaCuadrado);
perimetroBtnCuadrado.addEventListener("click", calcularPerimetroCuadrado);
perimetroBtnTriangulo.addEventListener("click", calcularPerimetroTruangulo);
areaBtnTriangulo.addEventListener("click", calcularAreaTriangulo)
perimetroBtnCirculo.addEventListener("click", calcularPerimetroCirculo)
areaBtnCirculo.addEventListener("click", calcularAreaCirculo);



 */

   
    





