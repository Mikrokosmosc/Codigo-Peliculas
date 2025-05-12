import { Modules } from './moduls.js'
import { v4 } from "uuid";

export class Controller{
    static sendDataMovies(req,res){
        const data = req.body
        const newData = {
            name: data.name,
            idMovie: v4(),//id-unico de la pelicula
            launchYear: data.launchYear,
            url_image : data.url_image,
            url_image_wide: data.url_image_wide,
            url_video: data.url_video,
            description: data.description,
            categorys: data.categorys,
            type: data.type,
            numSeasons: data.numSeasons  
        }

        Modules.sendData(newData,info=>{
            res.json(info)
        })
    }

    static sendDataCapitulos(req,res){
        const data = req.body
        Modules.sendDataCapitulos(data,callback=>{
            res.json(callback)
        })
    }

    static allFilms(req,res){
        const type = req.query.type
        Modules.allFilms(type,callback=>{
            res.json(callback)
        })
    }

    static infoMovie(req,res){
        const idMovie = req.query.idMovie
        Modules.infoMovie(idMovie,callback=>{
            res.json(callback)
        })
    }

    static updateRating(req,res){
        const info = {
            rating: (parseInt(req.body.userRating) + parseInt(req.body.globalRating)) / 2,
            idMovie: req.body.idMovie,
            numRatings: parseInt(req.body.numRatings) + 1
        } 
        Modules.updateRating(info)
    }

    static infoSeries(req,res){
        const id = req.query.idSerie
        
        Modules.infoSeries(id,callback=>{
            res.json(callback)
        })
    }

    static infoEpisode(req,res){
        const info = req.query
        Modules.infoEpisode(info,callback=>{
            res.json(callback)
        })
    }

    static searchParam(req,res){
        Modules.searchParam(callback=>{
            res.json(callback)
        })
    }
}