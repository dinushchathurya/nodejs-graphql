const express = require('express');
const cors = require('cors');
const colors = require('colors');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const connectDB = require("./config/db");

const port = process.env.PORT || 3000;

const app = express();

// Connect to database
connectDB();

app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

