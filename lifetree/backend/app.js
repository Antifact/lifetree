const express = require('express');
const posts = require('../src/data/posts');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/user-routes');
const { notFound, errorHandler } = require('./middleware/error');

dotenv.config();
connectDB();

app.use(express.json())

app.get('/', (req, res) => {
  res.send('API IS RUNNING AGAIN YAYAYA');
});

app.get('/posts', (req, res) => {
  res.json(posts);
});

// app.get('/posts/:id/', (req, res) => {
//   const post = posts.find((p) => p.id === req.params.id);
//   res.send(post);
// });

app.use('/users', userRoutes);

app.use(notFound);
app.use(errorHandler);


const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log(`Server started on ${PORT}`));