const request = require('postman-request')

const forecast = (latitude , longitude , callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=7960d98973322634f5e040679175b6e3&query='+latitude+','+longitude+'&units=m'

    request ({url , json:true}, (error , {body})=> {
        if(error){
            callback('Unable to connect the weather app', undefined)
        }else if(body.error){
            callback('Unable to find the location', undefined)
        }else {
            callback(undefined , 'Its currently '+ body.current.temperature +' degree out. It feels like '+ body.current.feelslike+ ' degree out. Humidity '+body.current.humidity)

        }

    })

}

module.exports = forecast