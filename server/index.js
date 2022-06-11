const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 3000;

const app = express();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

