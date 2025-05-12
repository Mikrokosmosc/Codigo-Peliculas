import express from 'express'
import { Controller } from './controller.js'

export const router = express.Router()

router.post('/sendDataMovies',Controller.sendDataMovies)
router.post('/sendDataCapitulos',Controller.sendDataCapitulos)
router.get('/allFilms',Controller.allFilms)
router.get('/infoSerie',Controller.infoSeries)
router.get('/infoEpisode',Controller.infoEpisode)
router.get('/infoMovie',Controller.infoMovie)
router.patch('/updateRating',Controller.updateRating)
router.get('/searchParam',Controller.searchParam)