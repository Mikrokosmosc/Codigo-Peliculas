import { useState,useEffect } from "react"
import axios from "axios"
import { Tooltip } from "react-tooltip"
import { Link } from "react-router-dom"

function BestRatingSerie(){

  const [data,setData] = useState([])

  useEffect(()=>{
    axios.get('https://xnr62zg7-4000.use.devtunnels.ms/allFilms',{
      params: {
        type: 'serie'
      }
    })
    .then((response)=>{
      const orden = response.data.sort((a, b) => b.rating - a.rating)
      setData(orden.slice(0,15))
    })
    .catch((error)=>{
      console.log('Se presento un error en la peticion' + error)
    })
  },[])

    return(

      <div>

         <div className='text-white'>
        <h6>Series</h6>
      </div>
    
      <div id="carouselExampleIndicators" class="carousel slide mt-3">
      <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" style={{display: 'none'}}></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" style={{display: 'none'}}></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" style={{display: 'none'}}></button>
  </div>
  <div class="carousel-inner">

    <div class="carousel-item active">
    {data.slice(0,5).map((valor,index)=>{
        return(
          <Link className='text-decoration-none' to={`/watch?name=${valor.name}&idMov=${valor.idMovie}`}>
          <div class="card d-inline-block bg-warning m-1" style={{width: '10rem'}}>
              <img src={valor.url_image} class="card-img-top" alt={`Imagen de ${valor.name}`} ></img>
              <div class="card-body pt-0" style={{height: '3rem', overflow: 'hidden'}}>
              <p class="card-text" data-tooltip-id="tooltipMovies" data-tooltip-content={valor.name}   
              >{valor.name}</p>
              </div>
              <Tooltip id="tooltipMovies" />
          </div>
          </Link>
        )
      })

      }
    </div>

    <div class="carousel-item">
      {data.slice(5,10).map((valor,index)=>{
        return(
          <Link className='text-decoration-none col' to={`/watch?name=${valor.name}&idMov=${valor.idMovie}`}>
          <div class="card d-inline-block bg-warning" style={{width: '10rem'}}>
              <img src={valor.url_image} class="card-img-top" alt={`Imagen de ${valor.name}`} ></img>
              <div class="card-body pt-0" style={{height: '3rem', overflow: 'hidden'}}>
              <p class="card-text" data-tooltip-id="tooltipMovies" data-tooltip-content={valor.name}   
              >{index + 6}. {valor.name}</p>
              </div>
              <Tooltip id="tooltipMovies" />
          </div>
          </Link>
        )
      })

      }
    </div>

    <div class="carousel-item row w-100 m-auto gy-3 gx-2">
    {data.slice(10,15).map((valor,index)=>{
        return(
          <Link className='text-decoration-none col' to={`/watch?name=${valor.name}&idMov=${valor.idMovie}`}>
          <div class="card d-inline-block bg-warning" style={{width: '10rem'}}>
              <img src={valor.url_image} class="card-img-top" alt={`Imagen de ${valor.name}`} ></img>
              <div class="card-body pt-0" style={{height: '3rem', overflow: 'hidden'}}>
              <p class="card-text" data-tooltip-id="tooltipMovies" data-tooltip-content={valor.name}   
              >{index + 11}. {valor.name}</p>
              </div>
              <Tooltip id="tooltipMovies" />
          </div>
          </Link>
        )
      })

      }
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" style={{position: 'relative', left:'-40px',top:'-160px'}}>
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" style={{position: 'relative', left:'750px',top:'-190px'}}>
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

</div>
    )
}

export default BestRatingSerie