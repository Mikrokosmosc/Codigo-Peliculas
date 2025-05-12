import { useEffect, useState } from "react"
import axios from "axios"

export function PopularMovies(){

    const [movies,setMovies] = useState([])

    useEffect(()=>{
        axios.get('https://xnr62zg7-4000.use.devtunnels.ms/allFilms',{
            params: {
                type: 'pelicula'
            }
        })
        .then((response)=>{
            const orden = response.data.sort((a, b) => b.numRating - a.numRating)
            setMovies(orden.slice(0,10))
        })
        .catch((error)=>{
            console.log('Se presento un error en la peticion ' + error)
        })
    },[])

    return(
        <div>
  <h4 className="text-warning">Peliculas mas populares</h4>
      <ul class="list-group">
        {movies.map((value,index)=>{
            return(
                <>
  <li class="list-group-item p-2">{index + 1}.  {value.name}</li>
  </>
            )
})}
</ul>
</div>
    )
}

export function PopularSeries(){

    const [movies,setMovies] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:4000/allFilms',{
            params: {
                type: 'serie'
            }
        })
        .then((response)=>{
            const orden = response.data.sort((a, b) => b.numRating - a.numRating)
            setMovies(orden.slice(0,10))
        })
        .catch((error)=>{
            console.log('Se presento un error en la peticion ' + error)
        })
    },[])

    return(
        <div>
        <h4 className="text-warning">Peliculas mas populares</h4>
            <ul class="list-group">
              {movies.map((value,index)=>{
                  return(
                      <>
        <li class="list-group-item p-2">{index + 1}.  {value.name}</li>
        </>
                  )
      })}
      </ul>
      </div>
    )
} 