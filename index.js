const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;
mongoose.connect('mongodb://localhost:27017/test');

app.use(cors());
app.use(express.json()); //middleware function, a body ezért nem lesz undefined

const Dog = mongoose.model('Dog', { name: String }); //new collection

app.post('/api/dog', (req, res) => {
    const puppy = new Dog({ name: req.body.name });
    puppy.save().then(() => res.send('created'));
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


/*
const Cat = mongoose.model('Cat', { name: String }); //new collection
const kitty = new Cat({ name: 'Zildjian' }); //new object to the collection
kitty.save().then(() => console.log('meow'));

const Man = mongoose.model('Man', { name: String }); //new collection
const man = new Man({ name: 'Zildjian' }); //new object to the collection
man.save().then(() => console.log('tsts'));
*/