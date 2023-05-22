///operador post-incremento / post-decremento
///ocurre post ejecucion de una sentencia

let num = 1;
num++; /// 2

function mostrarX(x) {
  console.log(x); // 2
}

mostrarX(num++);
console.log(num); //3


///operador pre-incremento / pre-decremento
///ocurre pre ejecucion de una sentencia
let num2 = 1;

mostrarX(++num2);

