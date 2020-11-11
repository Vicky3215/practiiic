const { response } = require('express')
const request=require('request')
const geocode=require('../utils/utils')
const tt=require('../utils/geocode')

/*

const url='http://api.weatherstack.com/current?access_key=c198c32c94a3ea206b3b53ce9adb920d&query=37.8267,-122.4233'


request({url:url,json:true},(error,response)=>{
  
  const t=`It is currently ${response.body.current.temperature} out`
  console.log(t)
})


const url='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoidmlja3llcyIsImEiOiJja2dyZW42enAwODhvMnFwbGNkemxuOThsIn0.Otd18il2qqbOVJ7rqIhvBw'

request({url:url,json:true},(error,response)=>{

    console.log(response.body.features[0].center[0])
    console.log(response.body.features[0].center[1])
})


setTimeout(() => {
     console.log('Two seconds are up')
 }, 2000)

 const names = ['Andrew', 'Jen', 'Jess']
 const shortNames = names.filter((name) => {
    return name.length <= 4
 })

 console.log(shortNames)
 const geocode = (address, callback) => {
     setTimeout(() => {
         const data = {
            latitude: 20,
            longitude: 78
         }

        callback(data)
    }, 2000)
 }

 geocode('Philadelphia', (data) => {
     console.log(data.latitude)
 })

const add = (a, b, callback) => {
  setTimeout(() => {
      callback(a + b)
  }, 2000)
}

add(1, 4, (sum) => {
  console.log(sum) // Should print: 5
})


geocode('Boston',(error,data)=>{
  if(error){
 return  console.log('Error',error)
  }

 
  console.log('Data',data)
})
*/
tt(37.8267,-122.4233,(error,data)=>{

  if(error){
    return console.log(error)
  }

  console.log(data)
})