import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import WatchSerie from "./watchSerie";
import WatchMovie from "./watchMovie";

function WatchFilm (){

    const location = useLocation()
    const searchParams = new URLSearchParams(location.search);
    const idMov = searchParams.get('idMov');

    const [infoMovie,setInfoMovie] = useState([])

    useEffect(()=>{
        axios.get('https://xnr62zg7-4000.use.devtunnels.ms/infoMovie',{
            params:{
                idMovie : idMov
            }
        })
        .then((response)=>{
            setInfoMovie(response.data[0])
        })
        .catch((error)=>{
            console.log('Se ha presentado un error en la solicitud' + error)
        })
    },[])

    return(
        <div>
            {(infoMovie.type === 'pelicula') && <WatchMovie data={infoMovie} idMov={idMov}/>}
            {(infoMovie.type === 'serie') && <WatchSerie data={infoMovie} idMov={idMov}/>}
        </div>
    )
}

export default WatchFilm