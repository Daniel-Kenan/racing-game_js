const express = require('express');
const app = express();
const ejs = require('ejs');
const PORT = 8080;
const fs = require('fs');
const filename = __dirname + '/Settings.json';
const file = require(filename);

app.use('/', express.static('public'))
app.use(express.urlencoded({
    extended: false
}))

app.set('view engine', 'ejs');
app.get('/garage' , (req, res)=>res.render('Garage'))
app.get('/', (req, res) => res.render('Start'));
app.get('/entry', (req, res) => res.render('entry', file))
app.get('/settings', (req, res) => res.render('setting'))
app.get('/about', (req, res) => res.render('About'))
// app.get('/
app.post('/controls', (req, res) => {

    file['name'] = req.body.name;
    file.controls['accelerate'] = req.body.accelerate;
    file.controls['left'] = req.body.left;
    file.controls['right'] = req.body.right;
    file.controls['brake'] = req.body.brake;

    fs.writeFile(filename, JSON.stringify(file), err => {
        if (err) return console.log(err);

        console.log(JSON.stringify(file));
        console.log('writing to' + filename);

        res.render('Start')
    })

})

app.listen(8080, () => console.log(`server running at http://localhost:${PORT}`))