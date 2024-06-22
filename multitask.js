process.env.UV_THREADPOOL_SIZE = 1
const https = require("https")
const crypto = require('crypto')
const fs = require('fs')

const start = Date.now()

function doRequest() {
    
    https.request('https://www.google.com',res=>{
        res.on('data',()=>{
    
        })
        res.on('end',()=>{
            console.log(Date.now() - start);
        })
    }).end()
}


function doHash(){
    crypto.pbkdf2('a','b',100000,512,'sha512',()=>{
        console.log("1:", Date.now() - start);
    })
}

doRequest() // call seq: 1 // doest not depend on thread pool


fs.readFile('multitask.js','utf8',()=>{ // loaded to thread pool,  after some time it will be in pause and execute when response is back from drive
    console.log("FS:", Date.now() - start);
})

doHash()  // loaded to thread pool
doHash()  // loaded to thread pool
doHash()  // loaded to thread pool
doHash() // loaded to thread pool after one of four pool is not busy




