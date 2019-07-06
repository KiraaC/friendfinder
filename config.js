const express = require('express');
const router = express.Router();

const apiRoutes = require('./main');

router.use('/main', apiRoutes);
router.get('/', (req, res) => res.send("link to main.js"));

module.exports = router;


// router
router.get('/', (req, res) => {
        connection.query('SELECT * from todos', (err, todos) => {
            res.json(todos);
        });
    });

// server
const express = require("express");
const PORT = process.env.PORT || 3306;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(PORT,() => console.log("server started on port $(PORT)"));
