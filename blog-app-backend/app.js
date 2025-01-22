const express = require('express');
const app = express();
const blogRoutes = require('./routes/blogRoutes');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();
require('./db/connection');
const cors = require('cors');



app.use(cors());
app.use('/blogs', blogRoutes);
app.use('/users',userRoutes);


// Start the server
app.listen(3000, () => {
    console.log('Blog app listening on port 3000!');
});