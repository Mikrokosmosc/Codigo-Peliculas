import { Connection } from "./connectionDB.js";

export class Modules{
    static sendData(newData, callback){
        Connection.query('INSERT INTO films SET ?',newData,(error) => {
            if (error) throw error;
            callback('Todo correcto')
        })
    }

    static sendDataCapitulos(data,callback){
        Connection.query('SELECT idMovie,url_image,description FROM films WHERE name = ?',data.nameSerie,(error,results)=>{
            if (error) throw error;
            const infoEpisode = {
                ...data,
                idSerie: results[0].idMovie,
                url_image: results[0].url_image,
                description: results[0].description
            }
            Connection.query('INSERT INTO episodes SET ?',infoEpisode,(error)=>{
                if (error) throw error
                callback('Todo correcto')
            })
        })
    }

    static allFilms(type,callback){
        Connection.query('SELECT * FROM films WHERE type = ?',type,(error,results) =>{
            if (error) throw error;
            callback(results)
        })
    }

    static infoMovie(idMovie,callback){
        Connection.query('SELECT * FROM films WHERE idMovie = ?',idMovie,(error,results)=>{
            if (error) throw error;
            callback(results)
        })
    }

    static updateRating(info){
        Connection.query('UPDATE films SET rating = ?, numRatings = ? WHERE idMovie = ?',[info.rating,info.numRatings,info.idMovie],(err)=>{
            if (err) throw err
        })
    }

    static infoSeries(id,callback){
        Connection.query('SELECT * FROM episodes WHERE idSerie = ?',id,(error,results)=>{
            if (error) throw error;
            callback(results)
        })
    }

    static infoEpisode(info,callback){
        Connection.query('SELECT * FROM episodes WHERE idSerie = ? AND numEpisode = ? AND numSeason = ?',[info.idSerie,info.numEpisode,info.numSeason],(error,results)=>{
            if (error) throw error;
            callback(results)
        })
    }

    static searchParam(callback){
        Connection.query('SELECT * FROM films',(error,results)=>{
            if (error) throw error;
            callback(results)
        })
    }
}