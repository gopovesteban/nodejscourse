const fs = require('fs')
const chalk = require('chalk')
const { Console } = require('console')
console.log('notes.js')

const getNotes = () =>{
    return 'some generic notes'
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) =>
         note.title !== title
    )

    if(notes.length > notesToKeep.length){
        saveNotes(notesToKeep)
        console.log(chalk.green('Note removed'))
    }else{
        console.log(chalk.red('Note not found'))  
    }
}

const addNote = (title, body) =>{
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)


    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
       saveNotes(notes)
       console.log(chalk.green('New note added'))
    }else{
        console.log(chalk.red('Note title taken'))
    }
}

const saveNotes = (notes) => {
    const stringDataJSON= JSON.stringify(notes)
    fs.writeFileSync('notes.json', stringDataJSON)
}

const listNotes = () => {  
    const notes = loadNotes()
    console.log(chalk.inverse("Your notes"))
    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) =>{
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if(note){
        console.log(chalk.inverse(note.title))
        console.log(chalk.inverse(note.body))
    }else{
        console.log(chalk.red('Note not found'))
    }

}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataString = dataBuffer.toString()
        return JSON.parse(dataString)
    } catch(e){
        return []
    }
   
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}