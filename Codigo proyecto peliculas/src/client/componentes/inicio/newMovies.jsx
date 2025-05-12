import axios from 'axios'
import { useEffect, useState } from 'react'
import '../../styles/newMovies.css'
import { Link } from 'react-router-dom'

function NewMovies(){

  const [data,setData] = useState([])

  useEffect(()=>{
    axios.get('https://xnr62zg7-4000.use.devtunnels.ms/allFilms',{
            params:{
                type: "pelicula"
            }
        })
    .then((response)=>{
      const moviesPopulares = (response.data).slice(-10) 
      setData(moviesPopulares)
    })
    .catch((error)=>{
      console.log('Hubo un error en la peticion: ' + error)
    })
  },[])

    return(
      <>
      <div className='w-75 m-auto text-white mt-2'>
        <h4>Ultimos estrenos</h4>
      </div>
      <div id="carouselExampleCaptions" class="carousel slide w-75 m-auto">
        
      <div class="carousel-indicators">
      {data.map((datos,index)=>{
          return(
            <>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={index} class={(index == 0) ? 'active' : 'hola'} aria-current="true" aria-label={(index == 0) ? `Slide ${1}` : `Slide ${index + 1}`}></button>
        </>
          )})}
      </div>
      
      <div class="carousel-inner">
      {data.map((datos,index)=>{
          return(
            <Link to={`/watch?name=${datos.name}&idMov=${datos.idMovie}`}>
        <div  className={(index == 0) ? 'carousel-item active' : `carousel-item ${index}`}>
          <img src={datos.url_image_wide} class="d-block img-fluid w-100" alt={`Imagen de ${datos.name}`} style={{height: '33rem'}}/>
          <div class="carousel-caption d-none d-md-block shadow-text-carrusel" style={{position: 'absolute', left: '0',textAlign: 'left',marginLeft: '5%'}}>
            <h3>{datos.name}</h3>
            <h6 className="card-text d-inline-block">{`${datos.rating}` }/10<img src={require('../../imagenes/estrella.png')} style={{width: '2%'}}></img></h6>
            <p>{datos.description.slice(0,200)}...</p>
            <h6 style={{fontSize: '.8rem'}}>{datos.launchYear}</h6>
          </div>
        </div>
        </Link>
        )})}
      </div>

      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev" style={{zIndex: '100'}}>
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next" style={{zIndex: '100'}}>
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    </>
    )
}

export default NewMovies