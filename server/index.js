require('dotenv').config();

const express = require('express');
const fileUpload = require('express-fileupload')
const sequelize = require('./db');
const PORT = process.env.PORT || 5000;
const models = require('./models/models');
const cors = require('cors');
const routers = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')



const app = express();
app.use(cors());
app.use(express.json());
app.use(fileUpload({}))
app.use('/api', routers);


//мидлвара для обработки ошибок, должна быть последней
app.use(errorHandler)


app.get('/', (req, res) => {
    res.status(200).json({message: 'WORKING!!!'})
});

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Port started on port: ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}


start();