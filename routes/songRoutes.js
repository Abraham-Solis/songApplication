const router = require('express').Router()
const db = require('../db')
const { Songs } = require('../models')

//GET ALL SONGS

router.get('/songs', (req,res)=> Songs.findAll()
.then(songs => res.json(songs))
.catch(err => console.log(err)))


// POST ONE SONG

router.post('/songs', (req, res) => Songs.create(req.body)
  .then(songs => res.json(songs))
  .catch(err => console.log(err)))


  //PUT ONE SONG 

router.put('/songs/:id', ({ params: { id }, body }, res) => Songs.update(body, { where: { id } })
.then(() => res.sendStatus(200))
  .catch(err => console.log(err)))


  //DELETE ONE MOVIE 