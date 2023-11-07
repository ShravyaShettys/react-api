const { response } = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ShravyaShetty:Shravya2003@cluster0.viox1de.mongodb.net/?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true, }).then((response) => { console.log("Connected to Database"); }).catch((error) => { console.log(error); });