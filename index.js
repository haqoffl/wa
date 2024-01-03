var express = require('express');
var app = express();
var qrcode = require('qrcode-terminal')
var {Client} = require('whatsapp-web.js')
let client = new Client()

client.on('qr',(qr)=>{
    console.log(qr)
   qrcode.generate(qr,{small:true})
})

client.on('ready',()=>{
    console.log("Now app is ready!")
})

client.on('message',(msg)=>{
 
    let obj = {
        phNo:msg.from,
        msg:msg.body
    }
    console.log(obj)
})
client.on('message_create',(msg)=>{
    let obj = {
       
        msg:msg.body
    }
    console.log(obj)
})
client.initialize()