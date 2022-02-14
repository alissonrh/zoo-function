// Desafio 11
function generatePhoneNumber(array) {
  let counter = 0;
  //console.log(array.length);
  if (array.length !== 11) {
     return 'Array com tamanho incorreto.' }  

  for (let i = 0; i < array.length; i += 1) {
    if ( array[i] < 0 && array[i] > 9){ 
      return "não é possível gerar um número de telefone com esses valores"  
    } 
    for (let index = 0; index < array.length; index += 1) {
     if (array[i] == array[index])
      { counter += 1; 
        if (counter > 2){
          return 'não é possível gerar um número de telefone com esses valores'
        }  
      }
    }
  } 
  return "("+array[0]+array[1]+")"+" "+ array[2]+array[3]+array[4]+array[5]+array[6]+'-'+array[7]+array[8]+array[9]+array[10];
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
