import express from 'express';
import routes from './src/routes/weatherRoutes'
import bodyParser from 'body-parser';
var session = require('express-session')

const app = express();
const PORT = 3000;

// bodyparser setup
app.use(bodyParser.urlencoded({extender: true}));
app.use(bodyParser.json());

app.use(session({secret: "capone123"}));

routes(app);

app.get('/', (req, res) =>
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
);