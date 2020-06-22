const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
var dataString = dataBuffer.toString()
const dataJSON = JSON.parse(dataString)

dataJSON.name = 'Esteban'
dataJSON.age = 23

dataString = JSON.stringify(dataJSON) 
fs.writeFileSync('1-json.json', dataString)
