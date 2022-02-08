// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
  // seu código aqui
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area
}

// Desafio 3
function splitSentence(myString) {
  
  let splits = myString.split(' '); // torna a string em array
  return splits
}

/* console.log(splitSentence('Alisson Rech Honorato VENI sartori'));


  let myString = 'Alisson Rech Honorato VENI sartori';
  let splits = myString.split(' ');
  
  console.log(splits);  */

// Desafio 4
function concatName(myArray) {
  let first = myArray.shift() // remove o primeiro elemento da array
  let last = myArray.pop() // remove o ultimo elemento da array
  let newArray = [last, first].join(', '); // separa com espaço os elemetos do array em string 
  //let concatArray = newArray.join(', ');
  return newArray
}


// Desafio 5
function footballPoints(wins, ties) {
  let result = (wins * 3) + (ties * 1);
  return result
}

// Desafio 6
function highestCount(array) {
  
  let max = Math.max(...array);
  let contador = 0;
  for (let i = 0; i < array.length; i+= 1) {
      if (array[i] == max) {
        contador += 1;
    }  
  }    
  return contador 
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {

}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
