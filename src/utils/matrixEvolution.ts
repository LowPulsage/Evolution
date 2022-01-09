import { IMatrix } from "../components/Matrix/interface"
import { handleMinus, handlePlus } from "./handleCalc"

export const matrixEvolution = (
  matrix: IMatrix,
) => {
  const newMatr: IMatrix = []
  for (let i = 0; i < matrix.length; i++) {
    newMatr[i] = []
    for (let j = 0; j < matrix[0].length; j++) {
      
      let neighbour = 0
      let ml = matrix.length

      if (matrix[handleMinus(i, ml) - 1][j] === 1) neighbour++ //top
      if (matrix[handlePlus(i, ml) + 1][j] === 1) neighbour++ //bottom
      if (matrix[i][handlePlus(j, ml) + 1] === 1) neighbour++ //write
      if (matrix[i][handleMinus(j, ml) - 1] === 1) neighbour++ //left
      if (matrix[handlePlus(i, ml) + 1][handleMinus(j, ml) - 1] === 1) neighbour++ //top-left
      if (matrix[handlePlus(i, ml) + 1][handlePlus(j, ml) + 1] === 1) neighbour++ //top-right
      if (matrix[handleMinus(i, ml) - 1][handleMinus(j, ml) - 1] === 1) neighbour++ //bottom-left
      if (matrix[handleMinus(i, ml) - 1][handleMinus(j, ml) + 1] === 1) neighbour++ //bottom-right

      if (matrix[i][j] === 0 && neighbour === 3) {
        newMatr[i][j] = 1
        continue
      } //dead cell with 3 neighbors become alive and cycle goes to the next iteration

      matrix[i][j] === 1 && (neighbour === 2 || neighbour === 3)
        ? (newMatr[i][j] = 1)
        : (newMatr[i][j] = 0) //only alive cell with 2 or 3 neighbors kepps alive
    }
  }
  return newMatr
}
