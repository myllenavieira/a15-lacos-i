let escolhaComer = prompt("Você quer comer coxinha?");
let valorCoxinha = 2.50;
let conta = 0;

while(escolhaComer.toUpperCase() !== "NÃO"){
    conta++;
    escolhaComer = prompt("Você quer comer mais uma coxinha?")

}
console.log(` Você comeu ${conta} coxinhas, você deve pagar R$ ${valorCoxinha*conta} reais`);
