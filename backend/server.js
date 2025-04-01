    const express = require('express');
    const dotenv = require('dotenv');
    const bodyParser = require('body-parser');
    const cors = require('cors');
    const AuthRouter=require('./routes/AuthRouter')
    const AccomodationRoutes= require('./routes/AccomodationRoutes')
    const FetchRoutes=require('./routes/Fetch.js')
    dotenv.config();
    require('./Models/db');

    const app = express();
    const port = process.env.PORT || 8080;

    app.use(bodyParser.json());
    app.use(cors());


    app.use('/auth', AuthRouter);
    app.use("/accommodations", AccomodationRoutes);
    app.use('/fetch',FetchRoutes)
    app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });