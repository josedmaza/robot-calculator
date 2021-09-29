const coupons = ["fastidiosa", "platzi", "brave"];

const calcularPrecioConDescuento = (precio, descuento)=> ((100 - descuento) / 100) * precio;

const calcularConDescuentoMasCupon = (precio, descuento, cupon) => ((100 - descuento - cupon) / 100) * precio;

const mostrarNuevoPrecio=()=> {
    const inputPrecio = document.getElementById("input-price");
    const inputDescuento = document.getElementById("input-discount");
    const inputCupon = document.getElementById("input-coupon");
    const textResultado = document.getElementById("answer-price");
    let precioValue = inputPrecio.value;
    let descuentoValue = inputDescuento.value;
    let couponValue = inputCupon.value;
   
  
    if (precioValue != 0 && descuentoValue != 0) {
      let resultado = 0;
      if (couponValue != "") {
        let cuponValue = 0;
        couponValue = couponValue.toLowerCase();
        // Validar cual cupon es
        if (!coupons.includes(couponValue)) {
          alert(`The coupon "${couponValue}" is invalid`);
        } else if (couponValue === coupons[0]) {
          cuponValue = 5;
        } else if (couponValue === coupons[1]) {
          cuponValue = 10;
        } else if (couponValue === coupons[2]) {
          cuponValue = 15;
        }
        resultado = calcularConDescuentoMasCupon(precioValue, descuentoValue, cuponValue);
      } else {
        resultado = calcularPrecioConDescuento(precioValue, descuentoValue);
      }
      resultado = resultado.toFixed(2);
      textResultado.innerHTML = `Discounted price: <span>$${resultado}</span>`;
    } else {
      textResultado.innerHTML = `Try again`;
    }
  }

const resultadoBtn = document.querySelector(".btn-form");
resultadoBtn.addEventListener("click", mostrarNuevoPrecio);