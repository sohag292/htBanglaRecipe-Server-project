const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chiefprofile = require('./chiefData/chiefProfile.json');
const chiefData = require('./chiefData/chiefDetails.json')

app.use(cors());

app.get('/', (req, res) => {
    res.send('IndianRecipe is running')
})

app.get('/chieprofile', (req, res) => {
    res.send(chiefprofile)
})

app.get('/chiefdetails', (req, res) => {
    res.send(chiefData)
})

app.get('/chiefdetails/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const chiefData = require('./chiefData/chiefDetails.json')
    const selectedChifRecpies = chiefData.find(chefRecpie => chefRecpie.chef_id == id);
    res.send(selectedChifRecpies)
   
})



app.listen(port, () => {
    console.log(`IndianRecipe API is running port ${port}`)
})