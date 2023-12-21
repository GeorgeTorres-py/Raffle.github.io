const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/raffle', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        res.status(400).send({ message: "Please enter your name and email" });
        return;
    }
    // Add the user to the raffle pool
    // ...
    res.send({ success: true });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
