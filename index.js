const express = require('express');
const app = express()
const port = process.env.PORT||5000;

app.get('/', (req, res) => {
    res.send('IndianRecipe is running')
  })

app.listen(port, () => {
    console.log(`IndianRecipe API is running port ${port}`)
})