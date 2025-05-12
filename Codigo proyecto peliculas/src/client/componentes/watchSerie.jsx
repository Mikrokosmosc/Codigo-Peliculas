import { useEffect, useState } from "react";
import RatingCard from "./ratingCard";
import axios from "axios";
import { Link } from "react-router-dom";
import WatchEpisode from "./watchEpisode";

function WatchSerie({data,idMov}){

    const numEnIngles = [
        "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
        "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty",
        "twenty-one", "twenty-two", "twenty-three", "twenty-four", "twenty-five", "twenty-six", "twenty-seven", "twenty-eight", "twenty-nine", "thirty",
        "thirty-one", "thirty-two", "thirty-three", "thirty-four", "thirty-five", "thirty-six", "thirty-seven", "thirty-eight", "thirty-nine", "forty",
        "forty-one", "forty-two", "forty-three", "forty-four", "forty-five", "forty-six", "forty-seven", "forty-eight", "forty-nine", "fifty"
      ]

      const [infoSerie,setInfoSerie] = useState([])

    useEffect(()=>{
        axios.get('https://xnr62zg7-4000.use.devtunnels.ms/infoSerie',{
            params:{
                idSerie: idMov
            }
        })
        .then((response)=>{
            setInfoSerie(response.data)
        })
        .catch((error)=>{
            console.log('Se presento un error en la peticion ' + error)
        })
    },[])

    return(
        <>
        <div class="card mb-3 d-inline-block" style={{maxWidth: '800px'}}>
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img src={data.url_image} class="img-fluid rounded-start" alt={`imagen de ${data.name}`} ></img>
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">{data.name}</h5>
                        <p class="card-text">{data.description}</p>
                        <p class="card-text">{data.categorys}</p>
                        <p class="card-text d-inline-block"><small class="text-body-secondary">{data.launchYear}</small></p>
                        <h4 className="card-text d-inline-block">{`${data.rating}` }<img src={require('../imagenes/estrella.png')} style={{width: '4%'}}></img></h4>
                        
                        <p class="gap-1 w-25 m-auto">
                          <button class="btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                          Calificar
                          </button>
                        </p>
                        <div class="collapse" id="collapseExample">
                          <div class="card card-body">
                           <RatingCard rating={data.rating} numRatings={data.numRatings} idMov={idMov}/>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                  </div>
                  <div class="accordion accordion-flush" id="accordionFlushExample">
                  {(() => {
                    const temporadas = []
            for (let i = 0; i < Number(data.numSeasons); i++) {
              temporadas.push(
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${numEnIngles[i]}`} aria-expanded='false' aria-controls={`flush-collapse${numEnIngles[i]}`}>
        Temporada {i + 1}
      </button>
    </h2>
    <div id={`flush-collapse${numEnIngles[i]}`} class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
    <div class="accordion-body p-0">
    <ul class="list-group">
        {infoSerie.map((info)=>{
            return(
                <>
                {(info.numSeason === i + 1) &&
                <Link className="text-decoration-none" to={`/watchEpisode?name=${info.nameSerie}&idSerie=${info.idSerie}&season=${info.numSeason}&episode=${info.numEpisode}`}>
                    <li class="list-group-item p-2">{info.nameEpisode}</li>
                    </Link>
                }
                </>
            )
        })
        }
        </ul>
      </div>
    </div>
  </div>
              ) 
            }
            return temporadas
          })()}
          </div>
                  </>
    )
}

export default WatchSerie