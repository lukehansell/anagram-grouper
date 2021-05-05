import sort from './sort'

export interface AnagramObject {
  [key: string]: string[]
}

export const anagramGrouper = (words: string[]): AnagramObject => {
  if (words.length === 0) return {}
  return words.reduce(reduceMatchingAnagrams, {})
}

const reduceMatchingAnagrams = (acc: AnagramObject, word: string): AnagramObject => {
  // creating index for hash
  const hashIndex = sort(word.toLowerCase().split('')).join('')

  const matchingAnagrams = acc[hashIndex] || []
  return {
    ...acc,
    [hashIndex]: [...matchingAnagrams, word]
  }
}

export default { anagramGrouper }
