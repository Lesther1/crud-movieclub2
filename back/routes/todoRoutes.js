const router = require("express").Router();
const Movie = require("../models/Movie");
const moment = require('moment');


router.get("/", (req, res) => {
  Movie.find((err, result) => {
    if (err) throw new Error(err);
    const movies = result.map(movie => {
      return {
        ...movie.toObject(),
        mov_dt_rel: moment(movie.mov_dt_rel).format('DD/MM/YYYY')
      }
    });
    res.json(movies);
  });
});


router.post("/", (req, res) => {
  Movie.create(req.body, (err, result) => {
    if (err) throw new Error(err);
    res.json(result);
  });
});

router.get('/:id', (req, res) => {
  Movie.findById(req.params.id, (err, result) => {
    if (err) throw new Error(err);

    const movie = result.toObject();
    movie.movie.mov_dt_rel = moment(movie.movie.mov_dt_rel).format('DD/MM/YYYY');

    res.json(movie);
  });
});

router.put("/:id", (req, res) => {
Movie.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, result) => {    if (err) throw new Error(err);
    res.json(result);
  });
});

router.delete("/:id", (req, res) => {
  Movie.findOneAndRemove({ _id: req.params.id }, (err, result) => {
    if (err) throw new Error(err);
    res.end();
  });
});

module.exports = router;
