// Variables
const express = require('express');
const app = express();
const path = require('path');

// Settings
app.set('port', 3000)
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// Routes
app.use(require('./routes/index'));

// Static files
app.use(express.static(path.join(__dirname, 'public')))

// Listening server
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
})
