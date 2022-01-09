import { useEffect, useState } from "react"
import { matrixCreation } from "../../utils/matrixInitial"
import { matrixEvolution } from "../../utils/matrixEvolution"
import { GridContainer, GridTbody, GridTd, GridTr } from "./styles"

export const Matrix = () => {
  const [matrix, setMatrix] = useState(matrixCreation(50, 50))

  useEffect(() => {
    const tickInterval = setInterval(
      () => setMatrix(matrixEvolution(matrix)),
      400
    )
    return () => {
      clearInterval(tickInterval)
    }
  }, [matrix, setMatrix])

  return (
    <GridContainer>
      <GridTbody>
        {matrix.map((row, idxRow) => (
          <GridTr key={idxRow}>
            {row.map((col, idxCol) => (
              <GridTd state={col} key={idxCol} />
            ))}
          </GridTr>
        ))}
      </GridTbody>
    </GridContainer>
  )
}
