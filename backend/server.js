const express = require('express')
const qrcode = require('qrcode')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.post('/',async(req,res)=>{
    const body = req.body;
    const link = body.link;
    const url = await qrcode.toDataURL(link)
    res.status(200).json({'qr': `<img src="${url}"></img>`});
})


app.listen(port,()=>{console.log(`server started at ${port}`)});

module.exports = app;
