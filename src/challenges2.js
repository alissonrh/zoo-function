// Desafio 11
function generatePhoneNumber(array) {
  if (array.length < 11) {
    return "Array com tamanho incorreto"
  } else if (array.length == 11 ) {
    let telNumber = array.toString();
    return telNumber
  }
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
   if (
    lineA < (lineC + lineB) && lineA > (Math.abs(lineC - lineB))
     &&
    lineB < (lineA + lineC) && lineB > (Math.abs(lineC - lineB))
     &&
    lineC < (lineA + lineB) && lineC > (Math.abs(lineC - lineB)) 
    ) 
    { return true
    } else {
     return false }
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
