const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT||5000;

const chiefprofile = require('./chiefData/chiefProfile.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('IndianRecipe is running')
  })

app.get('/chieprofile', (req, res) => {
    res.send(chiefprofile)
})

app.listen(port, () => {
    console.log(`IndianRecipe API is running port ${port}`)
})