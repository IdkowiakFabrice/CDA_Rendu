import { expect } from 'chai'
import twoFer from '../src/twoFer'

describe(':: twoFer', () => {
  it('twoFer()', () => {
    expect(twoFer()).equal('One for you, one for me.')
  })

  it('twoFer("Ch0pper")', () => {
    expect(twoFer('Ch0pper')).equal('One for Ch0pper, one for me.')
  })
})
