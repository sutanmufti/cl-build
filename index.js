import express from "express";
import router from "./router/index.js";

const app = express();

app.use('/test', router)

app.get('/', (req, res)=>{
    
    return res.json({
        message: 'hello world!! this is a dev'
    })
})

const port = process.env.PORT || 3000
app.listen(port)