// Stwórz canvas i inicjalizuj kontekst 2D
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Ustaw szerokość i wysokość planszy
const WIDTH = canvas.width;
const HEIGHT = canvas.height;

// Ustaw rozmiar pojedynczej komórki
const CELL_SIZE = 10;

// Oblicz liczbę komórek wzdłuż osi X i Y
const NUM_COLS = Math.floor(WIDTH / CELL_SIZE);
const NUM_ROWS = Math.floor(HEIGHT / CELL_SIZE);

// Inicjalizuj planszę
let grid = createEmptyGrid();

// Zmienna przechowująca stan gry
let isRunning = false;

// Funkcja tworząca pustą planszę
function createEmptyGrid() {
  const rows = new Array(NUM_ROWS);
  for (let i = 0; i < NUM_ROWS; i++) {
    rows[i] = new Array(NUM_COLS).fill(0);
  }
  return rows;
}

// Funkcja rysująca planszę na canvasie
function drawGrid() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  for (let row = 0; row < NUM_ROWS; row++) {
    for (let col = 0; col < NUM_COLS; col++) {
      if (grid[row][col] === 1) {
        ctx.fillRect(col * CELL_SIZE, row * CELL_SIZE, CELL_SIZE, CELL_SIZE);
      }
    }
  }
}

// Funkcja aktualizująca stan planszy
function updateGrid() {
  const newGrid = createEmptyGrid();
  for (let row = 0; row < NUM_ROWS; row++) {
    for (let col = 0; col < NUM_COLS; col++) {
      const cell = grid[row][col];
      const neighbors = countNeighbors(row, col);

      if (cell === 1 && (neighbors < 2 || neighbors > 3)) {
        newGrid[row][col] = 0;
      } else if (cell === 0 && neighbors === 3) {
        newGrid[row][col] = 1;
      } else {
        newGrid[row][col] = cell;
      }
    }
  }
  grid = newGrid;
}

// Funkcja zliczająca liczbę sąsiadujących komórek
function countNeighbors(row, col) {
  let count = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      const neighborRow = (row + i + NUM_ROWS) % NUM_ROWS;
      const neighborCol = (col + j + NUM_COLS) % NUM_COLS;
      count += grid[neighborRow][neighborCol];
    }
  }
  count -= grid[row][col];
  return count;
}

// Funkcja obsługująca kliknięcie na planszę
function handleClick(event) {
  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  const col = Math.floor(mouseX / CELL_SIZE);
  const row = Math.floor(mouseY / CELL_SIZE);

  grid[row][col] = 1;
  drawGrid();
}

// Funkcja przycisku start stop
function handleStartStop() {
  isRunning = !isRunning;
  if (isRunning) {
  startGame();
  }
  }
  
  // Funkcja rozpoczynająca grę
  function startGame() {
  if (!isRunning) return;
  updateGrid();
  drawGrid();
  setTimeout(startGame, 100); // Aktualizuj planszę co 100 ms
  }
  
  // Dodaj nasłuchiwanie zdarzeń dla planszy i przycisku
  canvas.addEventListener("click", handleClick);
  document.getElementById("startStopButton").addEventListener("click", handleStartStop);
  
  // Inicjalnie narysuj pustą planszę
  drawGrid();