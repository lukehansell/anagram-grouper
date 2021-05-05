# Anagram Grouper
## Constraints
- not all of the file will fit in memory, but all words of a given size will
- words appear in size order
- words do not have to be valid within the English language

### Assumptions
- only one word will appear per line
- words will only contain alphabetical letters (no punctuation or numeric characters)
- character case does not matter
- zero length lines are not words so are not included
- the output does not have to arrive at the same time
## Ideas
- split the problem into smaller problems
  - how to tell if one word is an anagram of another?
  - how to group the items effectively for memory size?

# Anagram checker
## Ideas
### Idea 1
loop through characters and assert that each character exists, removing the character as we go to check for multiples of the same character

### Idea 2
instead of removing characters, sort the characters alphabetically first as the order of the characters isn't important, then loop through the characters asserting that each index has the same character

### Idea 3
sort the characters alphabetically and strict assert their equality <- can use indexes of object to group

# grouping
## Constraints
## Ideas
### Idea 1
Object with alphabetised characters as keys. Value is an array of the words which are anagrams of that key. When new word is read, sort it, check if the object has a key of that value. If so, push the value to the array at that index. If not, create a new index with a fresh array containing that value.
When a word of a different length is encountered, output the current object's values and clear the object.

#### Performance
- complexity: O(1)
- memory: O(n)
# creating hash for object keys
## Ideas

### Idea 1
sort the characters using `word.split('').sort().join('')` to allow JS engine to optimise the algorithm chosen
- can't use this method as instructions specify to write it myself :)

### Idea 2
simple bubble sort of letters
#### Performance
- complexity: O(n^2)
- memory: O(1)

The memory requirement is good, but the complexity is poor.

### Idea 3
Use a heapsort to organise the letters as there's a good performance and a good use of memory.
Since the words we get could be any length, memory needs to be a priority here.

#### Performance
- complexity: O(n log n)
- memory: O(1)

## Program design
Since we know that we don't need to process all the words at once (they won't fit in memory) and only words of the same length can be anagrams
we can batch the processing and provide output to the user. Once we've done that we can clear the memory and continue with the next batch.
Since all words of a size will fit in memory, we shouldn't come across any memory issues.

The code will look something like this:
// read file line by line
// if line is same length then add it to the batch
// if line is not same length then process batch
// - loop through items and re-order words to be alphabetical
// - use alphabetised word as object key and add to the array value at that location
// - return grouped object
// output grouped object (using ',' to separate items)
// repeat for remaining lines