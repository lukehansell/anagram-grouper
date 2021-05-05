import { fc } from 'jest-fast-check'
import sort from './sort'

const allowedCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

describe('sorting algorithm', () => {
  describe('when passed a single character', () => {
    it('returns that character', () => {
      expect(sort(['a'])).toEqual(['a'])
    })
  })

  describe('when passed multiple characters', () => {
    describe('when the first is the smallest', () => {
      expect(sort(['a', 'b'])).toEqual(['a', 'b'])
    })
  })

  it('should always return the same amount of characters', () => {
    fc.assert(
      fc.property(fc.array(fc.char()), elements => {
        expect(sort(elements).length).toBe(elements.length)
      })
    )
  })

  it('returns the elements in order', () => {
    fc.assert(
      fc.property(fc.stringOf(fc.constantFrom(...allowedCharacters.split(''))), word => {
        const result = sort(word.split(''))
        for (let i = 0; i < result.length - 2; i++) {
          expect(result[i] <= result[i + 1]).toBeTruthy()
        }
      })
    )
  })
})