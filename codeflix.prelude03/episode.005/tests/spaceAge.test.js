import { expect } from 'chai'
import cases from 'jest-in-case'
import spaceAge from '../src/spaceAge'

describe(':: spaceAge', () => {
  cases(
    'spaceAge(sequence)',
    opts => {
      expect(spaceAge(opts.planet, opts.number)).equal(opts.time)
    },
    [
      {
        name: 'On Earth(1000000000)',
        planet: 'Earth',
        number: 1000000000,
        time: 31.69
      },
      {
        name: 'On Mercury(2134835688)',
        planet: 'Mercury',
        number: 2134835688,
        time: 280.88
      },
      {
        name: 'On Venus(189839836)',
        planet: 'Venus',
        number: 189839836,
        time: 9.78
      },
      {
        name: 'On Mars(2329871239)',
        planet: 'Mars',
        number: 2329871239,
        time: 39.25
      },
      {
        name: 'On Jupiter(901876382)',
        planet: 'Jupiter',
        number: 901876382,
        time: 2.41
      },
      {
        name: 'On Saturn(3000000000)',
        planet: 'Saturn',
        number: 3000000000,
        time: 3.23
      },
      {
        name: 'On Uranus(3210123456)',
        planet: 'Uranus',
        number: 3210123456,
        time: 1.21
      },
      {
        name: 'On Neptune(8210123456)',
        planet: 'Neptune',
        number: 8210123456,
        time: 1.58
      }
    ]
  )
})
