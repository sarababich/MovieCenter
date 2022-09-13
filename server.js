const express = require("express")
const app = express()
const cors = require('cors')
const db = require("./database.js")

app.use(cors())
app.use(express.static('public'))

const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const port = 3000

// Start server
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get("/api/movies", (req, res, next) => {
    let sql = "select * from movie"
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
})


app.get("/api/movies/:id", (req, res, next) => {
    let sql = "select * from movie where movieId = ?"
    let params = [req.params.id]
    db.get(sql, params, (err, row) => {
        if (err) {
            res.status(400).json({"error":err.message});
            return;
        }
        res.json({
            "message":"success",
            "movie":row
        })
    })
})


app.post("/api/movies", (req, res, next) => {
    let data = {
        movieName: req.body.movieName,
        movieDescription: req.body.movieDescription,
        movieCategory: req.body.movieCategory,
        movieImg: req.body.movieImg
    }
    let sql ='INSERT INTO movie (movieId, movieName, movieDescription, movieCategory,movieImg) VALUES (?,?,?,?,?)'
    let params =[data.movieName, data.movieDescription, data.movieCategory, data.movieImg]
    db.run(sql, params, function (err, result) {
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "movie": data,
            "id" : this.lastID
        })
    })
})

app.put("/api/movies", (req, res, next) => {
    let data = {
        movieName: req.body.movieName,
        movieDescription: req.body.movieDescription,
        movieCategory: req.body.movieCategory,
        movieImg: req.body.movieImg,
        movieId: req.body.movieId
    }
    let sql ='UPDATE movie SET movieName = ?, movieDescription = ?, movieCategory = ?, movieImg = ? WHERE movieId = ?'
    let params =[data.movieName, data.movieDescription, data.movieCategory, data.movieImg, data.movieId]
    db.run(sql, params, function (err, result) {
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "movie": data,
            "id" : this.lastID
        })
    })
})

app.delete("/api/movies", (req, res, next) => {
    db.run(
        'DELETE FROM movies WHERE movieId = ?',
        req.body.movieId,
        function (err, result) {
            if (err){
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({"message":"deleted", rows: this.changes})
        })
})

