const express = require('express');

const app = express();


// app.use('/',require('./routers/index'));
app.use(express.static('www'));

/*
    /user
    /user/add
*/
app.use('/api/user',require('./routers/users'));

app.listen(80);

