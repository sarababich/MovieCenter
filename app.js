const express = require('express')
const app = express()
const port = 3000

const db = require("./database");

app.get('/api/movies', function (req, res) {
    let sql = "select * from movie = ?"
    let params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({"error":err.message});
            return;
        }
        res.json({
            "message":"success",
            "movie":rows
        })
    })
    //res.send("Filmen heter " + movieName)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

