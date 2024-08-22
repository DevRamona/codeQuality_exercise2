const sumMatrix = (matrix) => {
   return  matrix.flat().reduce((accumulator, value) => accumulator + value, 0)
}