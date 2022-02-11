// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate(frase) {
  let newArray = frase.match(/\d+/g);
  let soma = 0;
    for (let i = 0; i < newArray.length; i += 1) {
     soma+= Number(newArray[i])}
  
     if (soma == 1 ) {
  return soma + " copo de água" 
 } else {
   return soma + " copos de água"
 }
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
