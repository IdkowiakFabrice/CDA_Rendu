import { expect } from 'chai'
import strToMatrix from '../src/matrix'

describe(':: matrix', () => {
  it('strToMatrix(1)', () => {
    expect(strToMatrix('1').rows[0][0]).equal(1)
  })

  it('matrix(1 2\n3 4)', () => {
    expect(strToMatrix('1 2\n3 4').columns[1][0]).equal(2)
  })

  it('matrix(1 2\n3 4)', () => {
    expect(strToMatrix('1 2 6\n3 4 8\n5 6 0').columns[2][1]).equal(8)
  })

  it('matrix(1 2\n3 4)', () => {
    expect(strToMatrix('1 2\n3 4').rows[1][0]).equal(3)
  })
})
