#!/usr/bin/env node
import { program } from 'commander'
import app from './app'

program.version('0.0.1')

const main = async () => {
  program.command('run <file>', { isDefault: true })
    .description('groups anagrams from a given file')
    .action(app)

  await program.parseAsync(process.argv)
}

main()