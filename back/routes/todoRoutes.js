const router = require("express").Router();
const Movie = require("../models/Movie");
const moment = require('moment');


router.post('/addmovie', (req, res) => {
  const nuevomovie = new modelomovie({
      title: req.body.mov_title,
      year: req.body.mov_year,
      time: req.body.mov_time,
      lang: req.body.mov_lang,
      date: req.body.mov_dt_rel,
      ountry: req.body.mov_rel_country
  })
  nuevomovie.save(function (err) {
      if (!err) {
          res.send('pelicula agregado correctamente')
      } else {
          res.send(err)
      }
  })
})

router.get('/getmovies', (req, res) => {
  modelomovie.find({}, function (docs, err) {
      if (!err) {
          res.send(docs)
      } else {
          res.send(err)
      }
  })
})

router.post('/obtenerdatamovie', (req, res) => {
  modelomovie.find({_id:req.body._id}, function (docs, err) {
      if (!err) {
          res.send(docs)
      } else {
          res.send(err)
      }
  })
})

router.post('/actualizarmovie', (req, res) => {
  modelomovie.findOneAndUpdate({_id:req.body._id},{
      mov_title: req.body.mov_title,
      mov_year: req.body.mov_year,
      mov_time: req.body.mov_time,
      mov_lang: req.body.mov_lang,
      mov_dt_rel: req.body.mov_dt_rel,
      mov_rel_country: req.body.mov_rel_country
  }, (err)=>{
      if (!err) {
          res.send('pelicula actualizada correctamente')
      } else {
          res.send(err)
      }
  })
})

router.post('/borrarmovie', (req, res) => {
  modelomovie.findOneAndDelete({_id:req.body._id},{
      mov_title: req.body.mov_title,
      mov_year: req.body.mov_year,
      mov_time: req.body.mov_time,
      mov_lang: req.body.mov_lang,
      mov_dt_rel: req.body.mov_dt_rel,
      mov_rel_country: req.body.mov_rel_country
  }, (err)=>{
      if (!err) {
          res.send('pelicula actualizada correctamente')
      } else {
          res.send(err)
      }
  })
})
module.exports = router;
