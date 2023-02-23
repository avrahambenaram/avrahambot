import { readdirSync } from 'fs';
import { join } from 'path';

import { ICommand } from './ICommand';

const allowedExtension = '.ts';
const commandsPath = join(__dirname, 'implementations');
const commandsFiles = readdirSync(commandsPath);
const commandsAllowedFiles = commandsFiles.filter(commandFile =>
    commandFile.lastIndexOf(allowedExtension) === commandFile.length - allowedExtension.length
)
const commands = commandsAllowedFiles.map(commandFile => {
  const commandFilePath = join(commandsPath, commandFile);
  const command: ICommand = require(commandFilePath);
  return command;
})

export {
    commands
}