import { useForm } from "react-hook-form"
import axios from "axios"
import Capitulos from "./formCapitulos"

function UpDB(){
    const { register, handleSubmit, unregister } =useForm()

    const enviar=(data)=>{

        const category = data.categorys

        const datos = {
            name: data.name,
            launchYear: data.launchYear,
            url_image: data.url_image,
            url_image_wide: data.url_image_wide,
            url_video: data.url_video,
            description: data.description,
            categorys: category.join(','),//volver un string el array de datos
            type: data.type,
            numSeasons: data.numSeasons
        }

        axios.post('https://xnr62zg7-4000.use.devtunnels.ms/sendDataMovies', datos)
        .then((response)=>{
            console.log('La informacion se ha enviado con exito: ', response)
        })
        .catch((error)=>{
            console.log('Se ha generado un error en el envio de los datos', error)
        })
        
    }

    return(
        <div>
            <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Pelicula y Serie
                </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                <form onSubmit={handleSubmit(enviar)} encType="multipart/form-data" acceptCharset="UTF-8">

<h4>Nombre de la película</h4>
<input type="text"placeholder="Nombre" {...register('name')} required/>

<h4>Año de publicación</h4>
<input type="number" placeholder="Año" {...register('launchYear')} required/>

<h4>Dirección de imagen (Larga)</h4>
<input type="url" placeholder='Imagen' {...register('url_image')} required/>

<h4>Dirección de imagen (Ancha)</h4>
<input type="url" placeholder='Imagen' {...register('url_image_wide')} />

<h4>Dirección de video</h4>
<input type="url" placeholder="Video" {...register('url_video')} />

<h4>Descripción</h4>
<textarea rows='4' cols='50' placeholder="Breve descripción del film" {...register('description')} required/>

<h4>Categoría</h4>

<label class="form-check-label">
<input class="form-check-input" type="checkbox" value="accion" {... register('categorys')} />
Acción
</label><br/>

<label class="form-check-label">
<input class="form-check-input" type="checkbox" value="aventura" {... register('categorys')} />
Aventura
</label><br/>

<label class="form-check-label">
<input class="form-check-input" type="checkbox" value="animacion" {... register('categorys')} />
Animación
</label><br/>

<label class="form-check-label">
<input class="form-check-input" type="checkbox" value="anime" {... register('categorys')} />
Anime
</label><br/>

<label class="form-check-label">
<input class="form-check-input" type="checkbox" value="belico" {... register('categorys')} />
Belico
</label><br/>

<label class="form-check-label">
<input class="form-check-input" type="checkbox" value="comedia" {... register('categorys')} />
Comedia
</label><br/>

<label class="form-check-label">
<input class="form-check-input" type="checkbox" value="drama" {... register('categorys')} />
Drama
</label><br/>

<label class="form-check-label">
<input class="form-check-input" type="checkbox" value="fantasia" {... register('categorys')} />
Fantasía
</label><br/>

<label class="form-check-label">
<input class="form-check-input" type="checkbox" value="romance" {... register('categorys')} />
Romance
</label><br/>

<label class="form-check-label">
<input class="form-check-input" type="checkbox" value="suspenso" {... register('categorys')} />
Suspenso
</label><br/>

<h4>Tipo de film</h4>

<label>
Película
<input type="radio" value="pelicula" {... register('type')} />
</label>

<label>
Serie
<input type="radio" value="serie" {... register('type')} />
</label><br/>

<h4>Temporadas</h4>
<input type="number" {...register('numSeasons')}></input><br/>

<input type="submit" />
</form>
                </div>
                </div>
            </div>
            <Capitulos></Capitulos>
            </div>

        </div>
    )
}

export default UpDB
