// const express = require('express');
// const { register, login } = require('../controllers/userController');

// const router = express.Router();

// router.post('/register', register);
// router.post('/login', login);

// module.exports = router;

// routes/propertyRoutes.js
// const express = require('express');
// const { createProperty, getProperties } = require('../controllers/propertyController');

// const Router = express.Router();

// router.post('/', createProperty);
// router.get('/', getProperties);

// module.exports = router;


const express = require('express');
const router = express.Router();

// Define your routes here
router.get('/', (req, res) => {
  res.send('User route');
});

module.exports = router;
