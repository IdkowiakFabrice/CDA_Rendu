import { expect } from 'chai'
import pangram from '../src/pangram'

describe(':: pangram', () => {
  it('pangram("The quick brown fox jumps over the lazy dog.")', () => {
    expect(pangram('The quick brown fox jumps over the lazy dog.')).equal(true)
  })

  it('pangram("Hello, World")', () => {
    expect(pangram('Hello, Worold')).equal(false)
  })
})
