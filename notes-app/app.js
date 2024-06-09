const chalk = require('chalk') // Importing the chalk library for styling terminal output
const getNotes = require('./notes.js') // Importing functions from notes.js file
const yargs = require('yargs') // Importing yargs for command-line argument parsing

yargs.version('1.1.0') // Setting the version of yargs to 1.1.0

// Create an 'add' command
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true, // Title is a required option
            type: 'string' // Title must be a string
        },
        body: {
            describe: 'note body',
            demandOption: true, // Body is a required option
            type: 'string' // Body must be a string
        }
    },
    handler: function(argv) {
        notes.addNote(argv.title, argv.body) // Call addNote function from notes with title and body
    }
})

// Create a 'remove' command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true, // Title is a required option
            type: 'string' // Title must be a string
        }
    },
    handler: function(argv) {
        notes.removeNote(argv.title) // Call removeNote function from notes with title
    }
})

// Create a 'list' command
yargs.command({
    command: 'list',
    describe: 'list your notes',
    handler: function() {
        console.log('listing out all notes') // Placeholder for listing all notes functionality
    }
})

// Create a 'read' command
yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function() {
        console.log('reading a note') // Placeholder for reading a note functionality
    }
})

console.log(yargs.argv) // Parse the arguments and execute the appropriate command