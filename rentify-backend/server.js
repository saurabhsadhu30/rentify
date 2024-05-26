// const express = require('express');
// const connectDB = require('./config/db');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const userRoutes = require('./routes/userRoutes');
// const propertyRoutes = require('./routes/propertyRoutes');

// const app = express();

// // Connect to MongoDB
// connectDB();

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Routes
// app.use('/api/users', userRoutes);
// app.use('/api/properties', propertyRoutes);

// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });



// const express = require('express');
// const cors = require('cors');

// const app = express();

// app.use(cors());
// app.use(express.json()); // If you're parsing JSON bodies

// const userRoutes = require('./routes/userRoutes');
// const projectRoutes = require('./routes/projectRoutes');

// app.use('/users', userRoutes);
// app.use('/projects', projectRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });



const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
// const propertyRoutes = require('./routes/propertyRoutes');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/rentify', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use('/register', userRoutes);
app.use('/login', userRoutes);
// app.use('/properties', propertyRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
