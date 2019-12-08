import { expect } from 'chai'
import bob from '../src/bob'

describe(':: bob', () => {
  it('bob("How are you ?")', () => {
    expect(bob('How are you ?')).equal('Sure')
  })

  it('bob("Hey !")', () => {
    expect(bob('Hey !')).equal('Whoa, chill out!')
  })

  it('bob("Bob")', () => {
    expect(bob('Bob')).equal('Fine. Be that way!')
  })

  it('bob()', () => {
    expect(bob()).equal('Whatever')
  })

  it('bob("Yo")', () => {
    expect(bob('Yo')).equal('Whatever')
  })
})
