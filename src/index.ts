rotulo.innerHTML = "Verificar si son multiplos cuantos divisores tiene";
let numero = document.getElementById("dato1.value");
let divisor = document.getElementById("dato2.value");
let btnCalcular = document.getElementById("btnCalcular");

function esMultiplo(numero: number, divisor: number): boolean {
  return numero % divisor === 0;
}

function cantidadDeDivisores(numero: number): number {
  let cantidad: number = 0;
  let divisor: number;
  for (divisor = 0; divisor <= numero; divisor++) {
    if (esMultiplo(numero, divisor)) {
      cantidad = cantidad + 1;
    }
  }
  return cantidad;
}

btnCalcular.addEventListener("click", () => {
  let numero: number = Number(dato1.value);
  let divisor: number = Number(dato2.value);

  if (esMultiplo(numero, divisor)) {
    console.log(numero + " ES múltiplo de " + divisor);
  } else {
    console.log(numero + " NO es múltiplo de " + divisor);
  }

  console.log(
    "El número " +
      numero +
      " tiene " +
      cantidadDeDivisores(numero) +
      " divisores"
  );
});
