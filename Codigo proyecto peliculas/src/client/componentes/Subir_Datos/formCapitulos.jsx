import { useForm } from "react-hook-form"
import axios from "axios"

function Capitulos(){

    const { register, handleSubmit, unregister } =useForm()

    const enviar=(data)=>{

        unregister('categorys')

        const datos = {
            nameSerie: data.nameSerie,
            nameEpisode: data.nameEpisode,
            launchYear: data.launchYear,
            url_video: data.url_video,
            numEpisode: data.numEpisode,
            numSeason: data.numSeason

        }

        axios.post('https://xnr62zg7-4000.use.devtunnels.ms/sendDataCapitulos', datos)
        .then((response)=>{
            console.log('La informacion se ha enviado con exito: ', response)
        })
        .catch((error)=>{
            console.log('Se ha generado un error en el envio de los datos', error)
        })
        
    }

    return(
        <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Capitulo de serie
                </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                <form onSubmit={handleSubmit(enviar)} encType="multipart/form-data" acceptCharset="UTF-8">

<h4>Nombre de la serie</h4>
<input type="text"placeholder="Nombre" {...register('nameSerie')} required/>

<h4>Nombre del capitulo</h4>
<input type="text"placeholder="Nombre" {...register('nameEpisode')} required/>

<h4>Dirección de video</h4>
<input type="url" placeholder="Video" {...register('url_video')} required/>

<h4>Temporada</h4>
<input type="number" {...register('numSeason')}></input><br/>

<h4>Capitulo</h4>
<input type="number" {...register('numEpisode')}></input><br/>

<input type="submit" />
</form>
                </div>
                </div>
            </div>
    )
}

export default Capitulos