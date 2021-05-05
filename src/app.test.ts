import { main } from './app'
import path from 'path'

describe('index', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation()
    jest.spyOn(console, 'log').mockImplementation()
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  describe('when the file does not exist', () => {
    beforeEach(async () => {
      await main('/foo/bar.txt')
    })

    test('it errors to the console', () => {
      expect(console.error).toBeCalledWith('Provided file path /foo/bar.txt does not exist')
    })
  })

  describe('when the file is not a .txt file', () => {
    beforeEach(async () => {
      await main('./app.test.ts')
    })

    test('console.error is called', () => {
      expect(console.error).toHaveBeenCalledWith('Provided file path ./app.test.ts is not a .txt file')
    })
  })

  describe('when the file exists', () => {
    beforeEach(async () => {
      await main(path.resolve(__dirname, '../test/data/example.txt'))
    })

    test('console.error is not called', () => {
      expect(console.error).not.toBeCalled()
    })

    test('console.log is called for each group', () => {
      expect(console.log).toBeCalledTimes(4)
      expect(console.log).toBeCalledWith('foo,oof')
      expect(console.log).toBeCalledWith('bar,bra,rab')
      expect(console.log).toBeCalledWith('pins')
      expect(console.log).toBeCalledWith('elephants')
    })
  })
})