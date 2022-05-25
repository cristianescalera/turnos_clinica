require('dotenv').config();
const express = require('express');
const cors = require('cors');
const compression = require('compression');
const db = require('./app/models');
const app = express();
app.use(compression());
( async ()=> {
    try {
        await db.sequelize.sync();
        console.log('Database connected.');
    } catch (e) {
        process.exit();
    }
})()

const PORT = process.env.PORT || 3000

app.use(cors());
app.use(express.json());

app.use('/api/1.0', require('./app/routes'))

app.listen(PORT, () => console.log(`API running on port ${ PORT }`));