const request =require('postman-request') 

const geocode = (address , callback)=> {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoibXVydWdlc2hwZXRpdCIsImEiOiJja2JnbW16cGcxMHgxMzFwMmR1czdubGcwIn0.Q_IVBiFNfDlPg4PqujVLrw&limit=1'
    request( {url  , json:true}, (error , {body})=> {
        if(error){
            callback('unable to connect to the geolocation' , undefined)
        }else if(body.features.length === 0){
            callback('Unable to find the locatio. Try another search' , undefined)
        } else {
            callback(undefined , {
                latitude : body.features[0].center[1],
                longitude : body.features[0].center[0],
                location :body.features[0].place_name
            })
        }

    })

}

module.exports = geocode