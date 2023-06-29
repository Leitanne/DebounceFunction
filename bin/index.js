#! /usr/bin/env node
const debounceImport = require("../dist/debounce.js");
const program = require('commander');

program
    .version('1.0.0')
    .description('App for debounce function');

program
    .command('debounce <message>')
    .description('Ejecuta la funcion debounce')
    .action(console.log("Mensaje prefunción debounce"))
    .action(async(message) => await debounceImport.debounce(message).then(message => console.log(message)));

program.parse(process.argv);