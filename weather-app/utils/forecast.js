const request = require('request')

const forecast = (latitude, longitude, callback) => {
   
    console.log(latitude)
const url = 'http://api.weatherstack.com/current?access_key=16586c73cb71fe1cecbb444b7c555076&query=' + latitude + ',' + longitude + '&units=f'
    request({url, json: true}, (error, { body }) => {
        if(error){
            callback('Unable to connect to weather service',undefined)
        } else if (body.error) {
           callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                description:body.current.weather_descriptions[0],
                temperature: body.current.temperature,
                feelslike: body.current.feelslike
            } )
        }
    })
}


module.exports = forecast