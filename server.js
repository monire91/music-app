const cors =require('cors');
const  connectDB = require('./db');
connectDB();

const express = require('express');
// const fileUpload = require('express-fileupload')
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());





// const fileUpload = require('express-fileupload')
// app.use(fileUpload())

// app.use('./upload', express.static('upload'))
app.use('/upload',express.static(__dirname+ '/upload'));

// Routes
// app.use('/api/',require('./routes/api/onlylogged'));
// app.use('/api',require('./routes/api/songs'))
//app.use('/api',require('./routes/api/images'))
app.use('/api',require('./routes/api/uploadSongs'));

app.use('/api',require('./routes/api/posts'));
app.use('/api',require('./routes/api/auth'));

app.get('/', (req,res)=>{
    res.send('home pageeee');
});

const PORT = process.env.PORT ||5000;

app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`);
});