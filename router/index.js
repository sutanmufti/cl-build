import express from 'express';

const router = express.Router()


router.get('/', (req, res)=>{

    res.json({message: 'hello from router. Now with continuous integration. this is deployed automatically.'})
})



export default router