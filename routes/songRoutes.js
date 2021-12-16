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

  