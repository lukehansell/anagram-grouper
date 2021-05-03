# Anagram Grouper

## Questions
- does only one word appear per line?
- are words always in size order when received from the files?

## Constraints
- not all of the file will fit in memory, but all words of a given size will

### Assumptions
- words will only contain alphabetical letters (no punctuation or numeric characters)

## Ideas
- split the problem into smaller problems
  - how to tell if one word is an anagram of another?
  - how to group the items effectively for memory size?

# Anagram checker
## Constraints
- words do not have to be valid within the English language

### Assumptions
- zero length lines are not words and so are not included

## Ideas
### Idea 1
loop through characters and assert that each character exists, removing the character as we go to check for multiples of the same character

### Idea 2
instead of removing characters, sort the characters alphabetically first as the order of the characters isn't important, then loop through the characters asserting that each index has the same character

### Idea 3
sort the characters alphabetically and strict assert their equality

# grouping
## Constraints

## Assumptions
- words are provided in size order
- the same word can appear multiple times

## Ideas
### Idea 1
Object with alphabetised characters as keys. Value is an array of the words which are anagrams of that key. When new word is read, sort it, check if the object has a key of that value. If so, push the value to the array at that index. If not, create a new index with a fresh array containing that value.

#### Performance
O(1)
