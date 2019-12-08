import { expect } from 'chai'
import cases from 'jest-in-case'
import Clock from '../src/clock'

describe(':: clock', () => {
  test('on the hour', () => {
    expect(new Clock(8).getTime()).equal('08:00')
  })

  cases(
    'Clock',
    opts => {
      expect(new Clock(opts.hour, opts.minute).getTime()).equal(opts.time)
    },
    [
      { name: '11:09', hour: 11, minute: 9, time: '11:09' },
      { name: '00:00', hour: 24, minute: 0, time: '00:00' },
      { name: '01:00', hour: 25, minute: 0, time: '01:00' },
      { name: '4:00', hour: 100, minute: 0, time: '04:00' },
      { name: '2:00', hour: 1, minute: 60, time: '02:00' },
      { name: '2:40', hour: 0, minute: 160, time: '02:40' },
      { name: '22:20', hour: 1, minute: -160, time: '22:20' }
    ]
  )
})
