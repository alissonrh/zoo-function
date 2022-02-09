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
 let distancia1 = Math.abs(cat1 - mouse); 
 let distancia2 = Math.abs(cat2 - mouse);

 if (distancia1 < distancia2) {
   return 'cat1';
  } else if (distancia2 < distancia1) {
   return 'cat2';
  } else (distancia1 == distancia2) 
   return 'os gatos trombam e o rato foge'
}

// usei Math.abs porque o João Pster usou (vi no slack). Procurei entender pq usar antes de usar.. vi nos erros que (mouse = 1, cat1 = 0, cat2 = 2). 
// cat1 - mouse = -1 e cat2 - mouse = 1. A resposta dava sempre 'cat1' pq -1 é < 1. Vi que o Math.abs retorna o valor 
// absuloto de um número assim igualando as duas distancias e condicionando o meu return 'os gatos trombam e o rato foge' acontecer 

// Desafio 8
function fizzBuzz(array) {
  let newArray = []
  for (let i = 0; i < array.length; i +=1) {
      if (array[i] % 3 == 0 && array[i] % 5 == 0) {
      newArray.push(array[i] = "fizzBuzz");
    } else if (array[i] % 3 == 0) {
      newArray.push(array[i] = "fizz");
    } else if (array[i] % 5 == 0) {
      newArray.push(array[i] = "buzz");
    } else {
      newArray.push(array[i] = "bug!");
    } 
  }
  return newArray;
  }
   

 


// Desafio 9
function encode(myString) {

  let myStringAtt = myString
    .replace(/a/gi,'1')
    .replace(/e/gi,'2')
    .replace(/i/gi,'3')
    .replace(/o/gi,'4')
    .replace(/u/gi,'5');
  return myStringAtt
}
  
function decode(myStringD) {
  // seu código aqui
  let myStringAttD = myStringD
    .replace(/1/gi,'a')
    .replace(/2/gi,'e')
    .replace(/3/gi,'i')
    .replace(/4/gi,'o')
    .replace(/5/gi,'u');
  return myStringAttD
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
