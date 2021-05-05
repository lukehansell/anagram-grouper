import { fc } from 'jest-fast-check'
import { anagramGrouper, AnagramObject } from './anagramGrouper'

describe('anagramGrouper', () => {
  let result: AnagramObject | undefined

  afterEach(() => {
    result = undefined
  })

  describe('when passed an empty array', () => {
    beforeEach(() => {
      result = anagramGrouper([])
    })

    test('returns a blank object', () => {
      expect(result).toEqual({})
    })
  })

  describe('when passed one word', () => {
    beforeEach(() => {
      result = anagramGrouper(['foo'])
    })

    test('returns that word', () => {
      expect(result).toEqual({
        foo: ['foo']
      })
    })
  })

  describe('when passed two words', () => {
    describe('when the words are anagrams', () => {
      beforeEach(() => {
        result = anagramGrouper(['foo', 'oof'])
      })

      test('exports them both on the same line separated by a comma', () => {
        expect(result).toEqual({
          foo: ['foo', 'oof']
        })
      })
    })

    describe('when the words are not anagrams', () => {
      beforeEach(() => {
        result = anagramGrouper(['foo', 'bar'])
      })

      test('exports each on a new line', () => {
        expect(result).toEqual({
          foo: ['foo'],
          abr: ['bar']
        })
      })
    })

    describe('when words have different case', () => {
      beforeEach(() => {
        result = anagramGrouper(['foo', 'Foo'])
      })

      test('they are treated as equal', () => {
        expect(result).toEqual({
          foo: ['foo', 'Foo']
        })
      })
    })
  })

  describe('when passed n words', () => {
    test('it has the same resulting total number of words as the input', () => {
      fc.assert(
        fc.property(fc.array(fc.string()), words => {
          const result = anagramGrouper(words)
          const flattenedResults = Object.values(result).reduce((acc, curr) => [...acc, ...curr], [])
          expect(flattenedResults.length).toBe(words.length)
        })
      )
    })

    test('it returns all of the original words', () => {
      fc.assert(
        fc.property(fc.array(fc.string()), words => {
          const result = anagramGrouper(words)
          const flattenedResults = Object.values(result).reduce((acc, curr) => [...acc, ...curr], [])
          words.forEach(word => {
            expect(flattenedResults).toContain(word)
          })
        })
      )
    })

    test('it groups anagrams', () => {
      fc.assert(
        fc.property(fc.array(fc.string()), words => {
          const result = anagramGrouper([...words, 'seed', 'seed'])
          const groups = Object.values(result)
          groups.forEach(group => {
            const sortedWords = group.map(word => word.split('').sort().join(''))
            const firstWord = sortedWords[0]
            sortedWords.forEach(otherWord => {
              expect(otherWord).toBe(firstWord)
            })
          })
        })
      )
    })
  })
})
