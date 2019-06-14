const express = require('express');
const swig = require('swig');

const app = express();

// swig.setDefaults({
//     cache: false
// });
// app.set('view cache', false);

app.set('views','./www');
app.set('view engine','html');
app.engine('html', swig.renderFile);

app.use('/',require('./routers/index'));
// app.use(express.static('www'));


app.listen(80);

