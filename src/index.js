const express = require ('express');
const engine = require('ejs-mate');


const app = express ();
require('./database.js');

app.engine('ejs', engine);

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});