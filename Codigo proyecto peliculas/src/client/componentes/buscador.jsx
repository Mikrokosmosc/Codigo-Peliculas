import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Tooltip } from "react-tooltip";
import { Link } from "react-router-dom";

function Buscador(){
    
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search);
    const busqueda = searchParams.get('buscar');

    const [result,setResults] = useState([])

    useEffect(()=>{
        axios.get('https://xnr62zg7-4000.use.devtunnels.ms/searchParam')
        .then((response)=>{
            const values = response.data
            setResults(values.filter(buscar => (buscar.name).toLowerCase().includes(busqueda.toLowerCase())))
        })
        .catch((error)=>{
            console.log('Hubo un error con la peticion' + error)
        })
    },[])
console.log(result)
    return(
        <div className="row w-75 m-auto gy-3 gx-2">
            {result.map((data)=>{
                return(
                    <Link className='text-decoration-none col' to={`/watch?name=${data.name}&idMov=${data.idMovie}`}>
                    <div class="card d-inline-block bg-warning" style={{width: '10rem'}}>
                        <img src={data.url_image} class="card-img-top" alt={`Imagen de ${data.name}`} ></img>
                        <div class="card-body pt-0" style={{height: '3rem', overflow: 'hidden'}}>
                        <p class="card-text" data-tooltip-id="tooltipMovies" data-tooltip-content={data.name}   
                        >{data.name}</p>
                        </div>
                        <Tooltip id="tooltipMovies" />
                    </div>
                    </Link>
                )
            })
            }
        </div>
    )
}

export default Buscador