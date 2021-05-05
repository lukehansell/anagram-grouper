import fs from 'fs'
import readline from 'readline'
import { anagramGrouper, AnagramObject } from './utils/anagramGrouper'

export const main = async (filePath: string): Promise<void> => {
  if (!filePath.match(/\.txt$/)) {
    return console.error(`Provided file path ${filePath} is not a .txt file`)
  }

  if (await !fs.existsSync(filePath)) {
    return console.error(`Provided file path ${filePath} does not exist`)
  }

  const fileStream = fs.createReadStream(filePath)
  const lines = readline.createInterface({
    input: fileStream,
  })

  let currentLineLength = 0
  let words: string[] = []

  for await (const line of lines) {
    const word = line.trim()

    // lines are in size order so until the length is different we can
    // assume a possible anagram match
    if (currentLineLength === word.length) {
      words.push(word)
      continue
    }

    const groupedAnagrams = anagramGrouper(words)
    outputGroups(groupedAnagrams)

    // reset for next run
    words = [word]
    currentLineLength = word.length
  }

  // final sort and output of last iteration
  const groupedAnagrams = anagramGrouper(words)
  outputGroups(groupedAnagrams)
}

const outputGroups = (groupedAnagrams: AnagramObject): void => {
  Object.values(groupedAnagrams).forEach(words => {
    console.log(formatGroupForOutput(words))
  })
}

const formatGroupForOutput = (words: string[]) => words.join(',')

export default main