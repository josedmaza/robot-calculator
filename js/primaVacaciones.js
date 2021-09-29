const salariosCol = colombia.map(
    function (persona){
        return persona.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function (salaryA,salaryB) {
        return salaryA - salaryB;
    }
);

const esPar = (numero) =>{
    return (numero % 2 ===0);
}

const calcularMediaAritmetica = (lista) => {
    //let sumaLista = 0;

    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    // }
    
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    
    return promedioLista;
}

const medianaSalarios = (lista) =>{
    const mitad = parseInt(lista.length/2);

    if (esPar(lista.length)) {
        const personaMitad1=lista[mitad - 1];
        const personaMitad2=lista[mitad ];
        
        const mediana = calcularMediaAritmetica([personaMitad1,personaMitad2]);
        return mediana;
    }else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

const medianaGeneralCol = medianaSalarios(salariosColSorted)

//mediana del top 10%
const spliceStart = (salariosColSorted.length * 90)/100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(spliceStart,spliceCount);

const medianaColTop10 = medianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaColTop10,
})

// prima

const calculatePrima = (salario,dias)=> prima = (salario*dias)/360;
const calculateVacaciones = (salario,dias)=> vacaciones = (salario*dias)/720;

const resultBtn = document.getElementById('get-result-prima');
const resultBtnVacation = document.getElementById('get-result-vacation');

const getPrima = ()=> {
    const daysValue = document.getElementById('vDays').innerHTML
    const salaryValue = document.getElementById('input-salary').value;
  
    const renderResult = document.querySelector('.result');
    
    
    let prima = calculatePrima(salaryValue, daysValue);
    if(prima < 0) {
        renderResult.innerHTML = `<p>Datos incorrectos</p>`;
    } else if (daysValue >180) {
        renderResult.innerHTML = `<p>Los dias de trabajo no deben superar los 180 dias<p>`;
    } else {
        renderResult.innerHTML = `<p>Tu prima es de <strong>-> ${prima.toFixed(2)}</strong></p>`;
    }
}

resultBtn.addEventListener('click', getPrima);

const getVacaciones = ()=> {
    const daysValue = document.getElementById('vDays').innerHTML
    const salaryValue = document.getElementById('input-salary').value;
  
    const renderResult = document.querySelector('.result');
    
    
    let vacaciones = calculateVacaciones(salaryValue, daysValue);
    if(prima < 0) {
        renderResult.innerHTML = `Datos incorrectos`;
    } else {
        renderResult.innerHTML = `<p>el valor por tus vacaciones es de <strong>-> ${vacaciones.toFixed(2)}</strong></p>`;
    }
}

resultBtnVacation.addEventListener('click', getVacaciones);



