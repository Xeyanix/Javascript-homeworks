class Matrix {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.data = Array.from(Array(this.rows), () => Array(this.cols).fill(1));
  }

  static multiply(matrixA, matrixB) {
    const result = new Matrix(matrixA.rows, matrixB.cols);

    for (let i = 0; i < result.rows; i++) {
      for (let j = 0; j < result.cols; j++) {
        let sum = 0;
        for (let k = 0; k < matrixA.cols; k++) {
          sum += matrixA.data[i][k] * matrixB.data[k][j];
        }
        result.data[i][j] = sum;
      }
    }

    return result;
  }

  print() {
    console.table(this.data);
  }
}

const matrixA = new Matrix(2, 2);
matrixA.data = [
  [1, 1],
  [2, 2]
];
const matrixB = new Matrix(2, 2);
matrixB.data = [
  [1, 1],
  [2, 2]
];
const result = Matrix.multiply(matrixA, matrixB);
result.print();
