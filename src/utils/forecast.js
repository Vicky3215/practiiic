const express = require('express')
const request=require('request')




const forecast=(latitude,longitude,callback)=>{


    const url='http://api.weatherstack.com/current?access_key=c198c32c94a3ea206b3b53ce9adb920d&query='+latitude+','+longitude
      console.log(url)
    request({url:url,json:true},(error,response)=>{

        if(error){
            callback('Unable to find',undefined)
        }else{
            callback(undefined,response)
        }
    })


}

module.exports=forecast