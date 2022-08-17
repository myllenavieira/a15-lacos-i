const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let num = +prompt("Escolha um número para gerar a tabuada de 0 a 10")
for(let i = 0; i < numeros.length; i++) {
  console.log(`${numeros[i]} * ${num} = ${numeros[i]*num}`);
} 
