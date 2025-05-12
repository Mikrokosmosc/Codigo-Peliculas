import RatingCard from "./ratingCard";

function WatchMovie({data,idMov}){

  const mayusStringCategorys = data.categorys.charAt(0).toUpperCase() + data.categorys.slice(1)

  function preventClick(event){
    event.preventDefault()
  }

        return(
          <>
                  <div class="card mb-3 d-inline-block w-75 mt-3" style={{marginLeft: '13%'}}>
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img src={data.url_image} class="img-fluid rounded-start" alt={`imagen de ${data.name}`} ></img>
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h2 class="card-title mb-5">{data.name}</h2>
                        <p class="card-text">{data.description}</p>
                        <p class="card-text">{mayusStringCategorys}</p>
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
                  <div className="w-75 h-75 m-auto p-1" style={{backgroundColor: 'orange'}}>
                      <iframe onClick={preventClick} allowfullscreen="" src={data.url_video} width="100%" height="500px" frameborder="0"></iframe>
                  </div>
                 </>
            
    )
}

export default WatchMovie