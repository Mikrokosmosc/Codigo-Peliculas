import { useEffect, useState } from "react"
import axios from "axios"
import { useLocation } from "react-router-dom";

function WatchEpisode(){

    const location = useLocation()
    const searchParams = new URLSearchParams(location.search);
    const idSerie = searchParams.get('idSerie');
    const season = searchParams.get('season');
    const episode = searchParams.get('episode')
    
    const [data,setInfoEpisode] = useState([])

    useEffect(()=>{
        axios.get('https://xnr62zg7-4000.use.devtunnels.ms/infoEpisode',{
            params:{
                idSerie: idSerie,
                numSeason: season,
                numEpisode: episode
            }
        })
        .then((response)=>{
            setInfoEpisode(response.data[0])
        })
        .catch((error)=>{
            console.log('Se presento un error en la peticion ' + error)
        })
    },[])

    function preventClick(event){
        event.preventDefault()
      }

    return(
        <div>
             <>
             <div className="w-75 h-75 m-auto p-1 mt-3" style={{backgroundColor: 'orange'}}>
                      <iframe onClick={preventClick}  allowfullscreen="" src={data.url_video} width="100%" height="500px" frameborder="0"></iframe>
                  </div>
                  <div class="card mb-3 d-inline-block w-50 mt-3" style={{marginLeft: '13%'}}>
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img src={data.url_image} class="img-fluid rounded-start" alt={`imagen de ${data.name}`} ></img>
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h2 class="card-title">{data.nameSerie}</h2>
                        <h5 className="d-inline-block">Temporada {data.numSeason} : </h5>
                        <h5 className="d-inline-block mb-4">Episodio {data.numEpisode}</h5>
                        <p class="card-text">{data.description}</p>
                      </div>
                    </div>
                  </div>
                  </div>
                 </>
        </div>
    )
}

export default WatchEpisode