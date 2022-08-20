// Algoritmo FizzBuzz:
//   > Número divisível por 3 => 'Fizz',
//   > Número divisível por 5 => 'Buzz',
//   > Número divisível por 3 e 5 => 'FizzBuzz',
//   > Se não for um número => 'Não é um número',
//   > Se não for divisível nem por 3 e nem por 5 => Entrada,

let resultado = fizzBuzz(15);
console.log(resultado);

function fizzBuzz(entrada) {
  let valor = entrada;

  if (typeof valor != "number") return "Não é um número";

  if (valor % 3 == 0 && valor % 5 == 0) return "FizzBuzz";
  else if (valor % 5 == 0) return "Buzz";
  else if (valor % 3 == 0) return "Fizz";
  else return valor;
}
