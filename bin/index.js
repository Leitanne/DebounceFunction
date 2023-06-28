#! /usr/bin/env node
const debounceImport = require("../dist/debounce.js");
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const commands = {
    mensaje: displayMessageCLI
}

consoleMenu();

function consoleMenu(){
    rl.question(`Se mostrará un mensaje sin retraso y otro con retraso
                   escribe mensaje + el texto que quieras escribir: `, (command) => {
        const parts = command.trim().split(' ');
        const commandName = parts[0];
        const args = parts.slice(1);
    
        if(commands.hasOwnProperty(commandName)){
            commands[commandName](args);
        } else{
            console.log('invalid command');
            consoleMenu();
        }
    })

}

async function displayMessageCLI(text){
    await debounceImport.displayMessage(text);
    exitCLI();
}

function exitCLI(){
    rl.close();
}
