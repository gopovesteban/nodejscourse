// const http = require('http')
// const url = 'http://api.weatherstack.com/current?access_key=16586c73cb71fe1cecbb444b7c555076&query=45,-75&units=f'

// const request = https.request(url, (response) => {
//     let data = ''

//     response.on('data', (chunk) => {
//         data = data + chunk.toString()
//     })

//     response.on('end', () => {
//         const body = JSON.parse(data)
//         console.log(body)
//     })

// })

// request.on('error', (error) => {
//     console.log('An error', error)
// })

// request.end()