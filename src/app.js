const express=require('express')
const path=require('path')
const app=express()
const hbs=require('hbs')
const geocode=require('../src/utils/geocode')
const forecast=require('../src/utils/forecast')


const port=process.env.PORT||3000

console.log(__dirname)
console.log(__filename)
const publicDir=path.join(__dirname,'../public')
const viewsPath=path.join(__dirname,'../templates/views')

const partialsPath=path.join(__dirname,'../templates/partials')

hbs.registerPartials(partialsPath)


app.use(express.static(publicDir))
app.set("view engine","hbs")
app.set("views",viewsPath)



app.get("/help",(req,res)=>{
res.render("index",{

    title:"This is shit",
    name:"abdaal"})
})

app.get("/weather",(req,res)=>{

    const t=req.query.address
    console.log(t)

    geocode(t,(error,data)=>{

        if(error){
           return res.send(error)
        }
     forecast(data.latitude,data.longitude,(error,response)=>{


        if(error){
           return res.render('show',{
               error:"You got an error"
           })
        }
        
      res.render('show',{

        ob_time:response.body.current.observation_time
      })
      
     })
    })



 
})

app.get("*",(req,res)=>{

    res.render("error")
})
app.listen(port,(req,res)=>{
    console.log("app has started")
})