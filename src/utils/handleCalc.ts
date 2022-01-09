export const handlePlus = (num: number, matrixLength: number) => {
  if (num === matrixLength -1) return -1
  return num
}

export const handleMinus = (num: number, matrixLength: number) => {
  if (num === 0) return matrixLength
  return num
}
