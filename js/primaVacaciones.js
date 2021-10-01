
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
        let numero = new Intl.NumberFormat('es-MX').format(prima.toFixed(2));
        renderResult.innerHTML = `<p>Tu prima es de <strong>-> ${numero}</strong></p>`;
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
        let numero = new Intl.NumberFormat('es-MX').format(vacaciones.toFixed(2));
        renderResult.innerHTML = `<p>El valor de tus vacaciones es de  <strong>-> ${numero}</strong></p>`;
    }
}

resultBtnVacation.addEventListener('click', getVacaciones);



