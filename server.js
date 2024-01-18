import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();


const __dirname = path.dirname(fileURLToPath(import.meta.url));


app.get('/index', function (req, res) {
  console.log(__dirname)
  res.sendFile(path.join(__dirname,  "view/index.html"))

});
app.get('/about', function (req, res) {
  console.log(__dirname)
  res.sendFile(path.join(__dirname,  "view/about.html"))

});
app.get('/services', function (req, res) {
  console.log(__dirname)
  res.sendFile(path.join(__dirname,  "view/services.html"))

});
app.get('/contact', function (req, res) {
  console.log(__dirname)
  res.sendFile(path.join(__dirname,  "view/contact.html"))

});

app.get('/about', function (req, res) {
  res.send('<h1>About Page</h1>')
})

app.get('/services', function (req, res) {
  res.send('<small>services Page</small>')
})

app.get('/contact', function (req, res) {
  res.send('<p>contact Page</p>')
})

app.get('/home', function (req, res) {
  res.send('<i>home Page</i>')
})


app.listen(3000, function (res, req) {
  console.log("server start")
})