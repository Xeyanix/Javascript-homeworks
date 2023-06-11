 // Wymiary planszy
 const numRows = 40; // Zmienna przechowująca liczbę wierszy planszy. W tym przypadku ustawiona na wartość 40.
 const numCols = 40;

 // Tworzenie planszy
 const board = document.getElementById("board"); //Pobiera element o identyfikatorze "board" z drzewa DOM. Ten element reprezentuje planszę gry.

 for (let i = 0; i < numRows; i++) { // Pętla iterująca przez wiersze planszy.
   const row = document.createElement("tr"); // Pętla iterująca przez wiersze planszy.
   for (let j = 0; j < numCols; j++) {
     const cell = document.createElement("td");  //Tworzy nowy element HTML td, który będzie reprezentować jedno pole na planszy.
     cell.classList.add("cell"); //Dodaje klasę "cell" do pola, umożliwiającą stylizację za pomocą CSS.
     cell.addEventListener("click", toggleCellState); //Dodaje nasłuchiwanie na zdarzenie kliknięcia pola, które uruchomi funkcję toggleCellState.
     row.appendChild(cell);   //Dodaje pole do aktualnego wiersza planszy.
   }
   board.appendChild(row);// Dodaje wiersz do planszy.
 }

 // Obsługa dodawania/usuwania pól
 function toggleCellState() { //Definicja funkcji toggleCellState, która zostanie wywołana po kliknięciu na pole.
   this.classList.toggle("alive");
 }

// Generowanie losowej planszy
const randomizeButton = document.getElementById("randomizeButton"); 
randomizeButton.addEventListener("click", generateRandomLayout); // Dodaje nasłuchiwanie na kliknięcie przycisku randomizeButton. Po kliknięciu wywoływana jest funkcja generateRandomLayout.

function generateRandomLayout() {                        //Rozpoczyna definicję funkcji generateRandomLayout. Ta funkcja generuje losową planszę.
  const cells = document.getElementsByClassName("cell"); //- Pobiera elementy HTML o klasie "cell" i przypisuje je do zmiennej cells. Prawdopodobnie są to komórki planszy.
  const cellsArray = Array.from(cells);                  // Konwertuje kolekcję elementów cells na tablicę i przypisuje ją do zmiennej cellsArray. Dzięki temu możliwe jest łatwiejsze operowanie na tych elementach.

  for (let i = 0; i < cellsArray.length; i++) {    //Rozpoczyna pętlę for, która iteruje po wszystkich elementach w tablicy cellsArray.
    const cell = cellsArray[i];                    //Przypisuje bieżący element tablicy cellsArray do zmiennej cell. Ta zmienna reprezentuje aktualnie rozpatrywaną komórkę planszy.
    const shouldLive = Math.random() < 0.5;       //Generuje losową wartość shouldLive (czy komórka powinna być żywa). Wykorzystuje do tego Math.random(), który zwraca losową liczbę z przedziału [0, 1). 
    //Jeśli wylosowana liczba jest mniejsza niż 0.5, to shouldLive jest prawdziwe (komórka powinna być żywa), 

    if (shouldLive) {
      cell.classList.add("alive");
    } else {
      cell.classList.remove("alive");
    }
  }
}

// Czyszczenie planszy
const clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", clearBoard);

function clearBoard() {
  const cells = document.getElementsByClassName("cell");
  const cellsArray = Array.from(cells);

  for (let i = 0; i < cellsArray.length; i++) {
    const cell = cellsArray[i];
    cell.classList.remove("alive");
  }
}

 // Rozpoczęcie gry
 const startButton = document.getElementById("startButton");
 startButton.addEventListener("click", startGame);

 let isGameRunning = false;
 let intervalId; //Zmienna przechowująca identyfikator interwału, który będzie używany do cyklicznego wywoływania funkcji updateBoard.

 //Ta funkcja obsługuje rozpoczęcie i zatrzymanie gry. Sprawdza wartość zmiennej isGameRunning, która wskazuje, czy gra jest aktualnie uruchomiona. 
 //Jeśli jest, to zatrzymuje grę, czyszcząc interwał za pomocą clearInterval(), ustawia wartość isGameRunning na false i zmienia tekst przycisku na "Start Game". 
 //W przeciwnym razie, jeśli gra nie jest uruchomiona, ustawia interwał za pomocą setInterval() na wywoływanie funkcji updateBoard() co 100 milisekund,
 // ustawia wartość isGameRunning na true i zmienia tekst przycisku na "Stop Game".

 function startGame() { 
   if (isGameRunning) {
     clearInterval(intervalId);
     isGameRunning = false;
     startButton.textContent = "Start Game";
   } else {
     intervalId = setInterval(updateBoard, 100);
     isGameRunning = true;
     startButton.textContent = "Stop Game";
   }

 }

//Ta funkcja updateBoard() jest odpowiedzialna za aktualizację stanu planszy gry. 
//Pobiera wszystkie elementy o klasie "cell" (czyli pola planszy) za pomocą document.getElementsByClassName("cell") i zamienia je na tablicę za pomocą Array.from(), aby móc na niej operować. 
//Tworzy również pustą tablicę newState, która będzie przechowywać nowy stan komórek.
//Następnie, dla każdego pola na planszy, sprawdza, czy jest żywe (cellIsAlive) oraz ilość żywych sąsiadów (neighbors) za pomocą funkcji countAliveNeighbors(). 
//Na podstawie tych informacji decyduje, czy komórka powinna umrzeć, ożyć lub pozostać bez zmiany. W zależności od tego, dodaje false, true lub aktualny stan komórki do tablicy newState.

 // Aktualizacja planszy
 function updateBoard() {
   const cells = document.getElementsByClassName("cell");
   const cellsArray = Array.from(cells);
   const newState = [];

   for (let i = 0; i < cellsArray.length; i++) {
     const cell = cellsArray[i];
     const cellIsAlive = cell.classList.contains("alive");
     const neighbors = countAliveNeighbors(i, cellsArray);

     if (cellIsAlive && (neighbors < 2 || neighbors > 3)) {
       newState.push(false); // Komórka umiera
     } else if (!cellIsAlive && neighbors === 3) {
       newState.push(true); // Komórka ożywa
     } else {
       newState.push(cellIsAlive); // Brak zmiany stanu komórki
     }
   }

//Na koniec, iteruje przez wszystkie komórki planszy i aktualizuje ich stan na podstawie wartości w tablicy newState.

   // Aktualizacja stanu planszy
   for (let i = 0; i < cellsArray.length; i++) {
     const cell = cellsArray[i];
     if (newState[i]) {
       cell.classList.add("alive");
     } else {
       cell.classList.remove("alive");
     }
   }
 }


// Funkcja pomocnicza do zliczania żywych sąsiadów komórki
function countAliveNeighbors(index, cellsArray) {
const numRows = 40;
const numCols = 40;
const directions = [
 [-1, -1], [0, -1], [1, -1],
 [-1, 0],           [1, 0],
 [-1, 1], [0, 1], [1, 1]
];

let count = 0;
const row = Math.floor(index / numCols);
const col = index % numCols;

for (const [dx, dy] of directions) {
 const newRow = row + dy;
 const newCol = col + dx;

 if (newRow >= 0 && newRow < numRows && newCol >= 0 && newCol < numCols) {
   const neighborIndex = newRow * numCols + newCol;
   if (cellsArray[neighborIndex].classList.contains("alive")) {
     count++;
   }
 }
}

return count;
}