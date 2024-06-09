const fs = require('fs') // Importing the fs (file system) module for file operations
const chalk = require('chalk') // Importing the chalk library for styling terminal output

const getNotes = function () {
    return 'your notes..' // Placeholder function to get notes
}

const addNote = function (title, body) {
    const notes = loadNotes() // Load existing notes
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title // Check for duplicate titles
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        savedNotes(notes) // Save new note
        console.log(chalk.green.inverse('new note taken')) // Log success message
    } else {
        console.log(chalk.red.inverse('note title taken')) // Log error message for duplicate title
    }
}

const removeNote = function (title) {
    const notes = loadNotes() // Load existing notes
    const notesToKeep = notes.filter(function (note) {
        return note.title !== title // Filter out the note with the given title
    })

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('note removed')) // Log success message
        savedNotes(notesToKeep) // Save notes without the removed note
    } else {
        console.log(chalk.red.inverse('no note removed')) // Log error message if no note was removed
    }
}

const savedNotes = function (notes) {
    const dataJSON = JSON.stringify(notes) // Convert notes array to JSON string
    fs.writeFileSync('notes.json', dataJSON) // Write JSON string to notes.json file
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json') // Read data from notes.json file
        const dataJSON = dataBuffer.toString() // Convert buffer to string
        return JSON.parse(dataJSON) // Parse JSON string to object
    } catch (e) {
        return [] // Return empty array if file doesn't exist or an error occurs
    }
}

module.exports = {
    getNotes: getNotes, 
    addNote: addNote,
    removeNote: removeNote
}