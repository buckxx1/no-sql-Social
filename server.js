const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());

app.use(require('./routes'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/no-sql-social', {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.set('debug', true);
app.listen(PORT, () => console.log(`connected on local host ${PORT}`));
