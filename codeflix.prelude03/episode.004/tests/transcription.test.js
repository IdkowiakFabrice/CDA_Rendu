import { expect, assert } from 'chai'
import cases from 'jest-in-case'
import transcription from '../src/transcription'

describe(':: transcription', () => {
  cases(
    'transcription(sequence)',
    opts => {
      expect(transcription(opts.sequence)).equal(opts.transformed)
    },
    [
      { name: 'A', sequence: 'A', transformed: 'U' },
      { name: 'C', sequence: 'C', transformed: 'G' },
      { name: 'G', sequence: 'G', transformed: 'C' },
      { name: 'T', sequence: 'T', transformed: 'A' }
    ]
  )

  it('transcription("AAGGCCTT")', () => {
    expect(transcription('AAGGCCTT')).equal('UUCCGGAA')
  })

  test('transcription("AAGGECTT")', () => {
    let wrapper = function() {
      transcription('AAGGZCTT')
    }
    assert.throws(wrapper, 'Nucleotide Z does not exist')
  })

  it('transcription("ACTCGTACGTA")', () => {
    expect(transcription('ACTCGTACGTA')).equal('UGAGCAUGCAU')
  })
})
