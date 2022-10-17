// 1. Creare in JavaScript una griglia 8x8 con i numeri casuali da 1 a 64
//
// Ogni volta che clicco su un quadrato questo si colora di verde.

// step 2: colorare diversamente in base se è pari o dispari

// ESECUZIONE
// 1. Creare l'array con numeri casuali da 1 a 64
const squaresNumber = 64;
const generatedNumbers = generateRandomOrderArray(squaresNumber);
// console.log(generatedNumbers);

// 2. Per ogni numero creo un elemento squre e lo insersco nella griglia
const grid = document.querySelector(".grid");
for (let i = 0; i < generatedNumbers.length; i++) {
  const thisNumber = generatedNumbers[i];
  // Creo un elemnto square
  const thisSquare = createSquare(thisNumber);
  // aggiungo eventListener allo square creato
  thisSquare.addEventListener("click", handleSquareClick);

  // inserisco l'elemento nel DOM
  grid.append(thisSquare);
}

// FUNCTIONS
/**
 * Description Genera un numero random in range tra min e max (inclusi)
 * @param {number} min
 * @param {number} max
 * @returns {number} un numero intero generato in modo random
 */
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Description: La funzione che genera tutti i numeri da 1 a arrayLength in ordine casuale senza numeri doppi
 * @param {number} arrayLength
 * @returns {Array} Array di numeri in ordine casuale di lunghezza arrayLength
 */
function generateRandomOrderArray(arrayLength) {
  const numbersArray = [];
  while (numbersArray.length < arrayLength) {
    const rndNumber = getRndInteger(1, arrayLength);
    if (!numbersArray.includes(rndNumber)) {
      numbersArray.push(rndNumber);
    }
  }
  return numbersArray;
}

// TEST
// console.log(generateRandomOrderArray(5));

/**
 * Description: la funzione che verifica se un numero è pari o dispari
 * @param {number} numberToCheck
 * @returns {string} "pari" se numero è pari e "disapri" se è dispari 
 */
 function isOddOrEven(numberToCheck) {
    let result = "dispari";
    if(numberToCheck % 2 === 0) {
        result = "pari";
    }
    return result;
}

// UI FUNCTIONS
/**
 * Description: La funzione che crea l'elemento square da inserire nel dom
 * @param {number} innerNumber -> numero da inserire all'interno del square
 * @returns {object} elemento DOM che rappresenta lo square
 */
function createSquare(innerNumber) {
  const newSquare = document.createElement("div");
  newSquare.classList.add("square");
  newSquare.innerHTML = innerNumber;
  return newSquare;
}


/**
 * Description: La funzione che aggiunge il colore verde al click sullo square
 */
function handleSquareClick() {
    const clickedNumber = parseInt(this.textContent);
    const oddEven = isOddOrEven(clickedNumber);
    if (oddEven === "pari") {
        this.classList.add("even");
    } else {
        this.classList.add("odd");
    }
}