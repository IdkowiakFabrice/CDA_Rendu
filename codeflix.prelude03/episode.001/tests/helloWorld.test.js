import { expect } from 'chai'
import helloWorld from '../src/helloWorld'

describe(':: helloWorld', () => {
  it('helloWorld()', () => {
    expect(helloWorld()).equal('Hello, World!')
  })

  it('helloWorld("Ch0pper")', () => {
    expect(helloWorld('Ch0pper')).equal('Hello, Ch0pper!')
  })
})
