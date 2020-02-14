const mongoose = require('mongoose')
const { MONGO_URI } = require('./config');
const { startServer } = require('./server');
mongoose.set("useCreateIndex", true);

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useFindAndModify: false })
    .then(() =>
        console.log('Conecto la db'),
        startServer()
    )
    .catch(console.log);