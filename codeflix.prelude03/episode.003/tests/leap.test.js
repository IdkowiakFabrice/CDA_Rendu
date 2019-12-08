import { expect } from 'chai'
import leap from '../src/leap'

describe(':: leap', () => {
  it('leap(1996)', () => {
    expect(leap(1996)).equal(true)
  })

  it('leap(1900)', () => {
    expect(leap(1900)).equal(false)
  })

  it('leap(2000)', () => {
    expect(leap(2000)).equal(true)
  })
})
