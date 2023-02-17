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
  const id = req.params.id;
  const { mov_title, mov_year, mov_time, mov_lang, mov_dt_rel, mov_rel_country } = req.body;
  const updatedMovie = { mov_title, mov_year, mov_time, mov_lang, mov_dt_rel, mov_rel_country };

  Movie.findOneAndUpdate({ _id: id }, updatedMovie, { new: true }, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error al actualizar la película en la base de datos.");
    } else {
      console.log(`Película ${id} actualizada en la base de datos.`);
      res.json(result);
    }
  });
});


router.delete("/:id", (req, res) => {
  Movie.findOneAndRemove({ _id: req.params.id }, (err, result) => {
    if (err) throw new Error(err);
    res.end();
  });
});

module.exports = router;
