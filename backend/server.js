const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


app.get("/",(req,res)=>{

    res.send("Hello")

})


app.get("/api/topheadings",async (req,res)=>{

    try {

        const {category='general',lang='en',country}=req.query;

        const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=${lang}&country=${country}&apikey=${process.env.API_KEY}`

        const response = await axios(url)

        res.json(response.data)

        
    } catch (error) {
        console.log(error)
    }

})

app.get("/api/customSearch",async (req,res)=>{

    try {

        const {topic='political',lang='en',country}=req.query;

        const url = `https://gnews.io/api/v4/top-headlines?q=${topic}&lang=${lang}&country=${country}&apikey=${process.env.API_KEY}`

        const response = await axios(url)

        res.json(response.data)

        
    } catch (error) {
        console.log(error)
    }

})
