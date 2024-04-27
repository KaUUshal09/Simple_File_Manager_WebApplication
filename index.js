const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Route to render the index page
app.get('/', function (req, res) {
    fs.readdir('./files', function (err, files) {
        res.render('index', { files: files });
    });
});
app.get('/file/:filename', function (req, res) {
    const filePath = path.join(__dirname, 'files', req.params.filename);

    fs.readFile(filePath, 'utf-8', function (err, filedata) {
        res.render('show', { filename: req.params.filename, filedata:filedata });
    });
});


// Route to handle form submission and create files
app.post('/create', function (req, res) {
    const title = req.body.title;
    const details = req.body.details;
    const fileName = title.replace(/\s+/g, '') + '.txt'; // Remove whitespace from title and add .txt extension

    fs.writeFile(`./files/${fileName}`, details, function (err) {
        console.log('File created successfully:', fileName);
        res.redirect('/');
    });
});

app.listen(3000, function () {
    console.log('Server is running on port 3000');
});

