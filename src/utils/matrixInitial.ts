import { IMatrix } from "../components/Matrix/interface"


export const matrixCreation = (row: number, col: number): IMatrix => {
  const createdMatrix: IMatrix = []
  for (let i = 0; i < row; i++) {
    createdMatrix[i] = []
    for (let j = 0; j < col; j++) {
      createdMatrix[i][j] = Math.round(Math.random())
    }
  }
  return createdMatrix
}
