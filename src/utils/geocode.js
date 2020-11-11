const request  = require('request')
const express=require('express')





const geocode=(address,callback)=>{



    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1Ijoidmlja3llcyIsImEiOiJja2dyZW42enAwODhvMnFwbGNkemxuOThsIn0.Otd18il2qqbOVJ7rqIhvBw'

    request({url:url ,json:true},(error,response)=>{

        if(error){
        return   callback('Unable to get',undefined)
        }
        callback(undefined,{

            latitude:response.body.features[0].center[0],
            longitude:response.body.features[0].center[1]
        })

    })
}

module.exports=geocode