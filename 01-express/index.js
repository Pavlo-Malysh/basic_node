
import express from "express";

const app = express();

const PORT = 8080;

app.listen(PORT, (error) => {
    if (error) {
        throw (error);
    }
    console.log(`Server start on port ${PORT}`);

});

app.get('/books', (req, res) => {

    res.json({ message: "Hello World!" })
});