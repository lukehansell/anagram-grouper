export const heapsort = (arr: string[]): string[] => {
  const initialIndex = Math.floor(arr.length / 2 - 1)

  for (let index = initialIndex; index >= 0; index--) {
    createHeap(arr, arr.length, index)
  }

  for (let lastNode = arr.length - 1; lastNode >= 0; lastNode--) {
    [arr[0], arr[lastNode]] = [arr[lastNode], arr[0]]
    createHeap(arr, lastNode, 0)
  }

  return arr
}

const createHeap = (arr: string[], length:number, index:number) => {
  let largest = index
  const left = index * 2 + 1
  const right = left + 1

  if (left < length && arr[left] > arr[largest]) {
    largest = left
  }

  if (right < length && arr[right] > arr[largest]) {
    largest = right
  }

  if (largest != index) {
    [arr[index], arr[largest]] = [arr[largest], arr[index]]

    createHeap(arr, length, largest)
  }

  return arr
}

export default heapsort