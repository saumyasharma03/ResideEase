    const express = require('express');
    const dotenv = require('dotenv');
    const bodyParser = require('body-parser');
    const cors = require('cors');
    const AuthRouter=require('./routes/AuthRouter')
    const AccomodationRoutes= require('./routes/AccomodationRoutes')
    const FetchRoutes=require('./routes/Fetch.js')
    const RemoveRoutes=require('./routes/Remove.js')
    const AddRoutes=require('./routes/Add.js')
    const UserRoutes=require('./routes/User.js')
    const BookingRoutes=require('./routes/BookingRoutes.js')
    dotenv.config();
    require('./Models/db');

    const app = express();
    const port = process.env.PORT || 5000;

    app.use(bodyParser.json());
    app.use(cors());


    app.use('/auth', AuthRouter);
    app.use("/accommodations", AccomodationRoutes);
    app.use('/fetch',FetchRoutes)
    app.use('/remove',RemoveRoutes)
    app.use('/add',AddRoutes)
    app.use('/user',UserRoutes)
    app.use('/booking',BookingRoutes)
    app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });