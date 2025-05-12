import { useEffect,useState } from "react"
import axios from "axios"
import { Link, useLocation } from "react-router-dom";
import { Tooltip } from "react-tooltip";

function AllFilms(){

    const location = useLocation()
    const searchParams = new URLSearchParams(location.search);
    const pagina = searchParams.get('page');

    const actPage = parseInt(pagina)

    const [showItems,setShowItems] = useState([])//Separar item por paginas
    const [numPaginas,setNumPaginas] = useState(0)

    const [movies,setMovies] = useState([])//Todas las peliculas

    useEffect(()=>{
        axios.get('https://xnr62zg7-4000.use.devtunnels.ms/searchParam')
        .then((response)=>{
            const datos = (response.data).reverse()
            setMovies(datos)
            setNumPaginas(Math.round(datos.length / 30))
            if(isNaN(actPage) || actPage == 1){
                setShowItems(datos.slice(0,30))
            }
        })
        .catch((error)=>{
            console.log('Se ha presentado un error en la peticion ' + error)
        })
    },[])

    function showElementsBack(){
        if(actPage == 1){
            setShowItems(movies.slice(0,30))
        }else{
            setShowItems(movies.slice((actPage - 2) * 30, (actPage - 1) * 30))
        }
    }

    function showElementsNext(){
        if(isNaN(actPage)){
            setShowItems(movies.slice(30,60))
        }else{
        setShowItems(movies.slice(actPage * 30,(actPage + 1) * 30))
        }
    }

    return(
        <div className="row w-100 m-auto gy-3 gx-2">
            <div className='text-white mt-4 w-100 text-center'>
        <h6>Mas contenido</h6>
      </div>
            {showItems.map((data)=>{
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
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                    <li class="page-item"><Link class="page-link text-black" to={(actPage > 1) ? `/?page=${actPage - 1}` : `/`}onClick={(actPage > 1 && showElementsBack)}>Previous</Link></li>

                    <li class="page-item"><Link class="page-link text-black" to={(isNaN(actPage)) ? `/page=1` : `/?page=${actPage - 1}`} onClick={(!isNaN(actPage)) && showElementsBack}>{(isNaN(actPage)) ? 1 : actPage - 1}</Link></li>

                    <li class="page-item"><Link class="page-link text-black" to={(isNaN(actPage)) ? `/?page=2` : `/?page=${actPage}`}>{(isNaN(actPage)) ? 2 : actPage}</Link></li>

                    <li class="page-item"><Link class="page-link text-black" to={(isNaN(actPage)) ? `/?page=3` : (actPage !== numPaginas && numPaginas > 0) && `/?page=${actPage + 1}`} onClick={showElementsNext}>{(isNaN(actPage)) ? 3 : (actPage === numPaginas) ? '.' : actPage + 1}</Link></li>

                    <li class="page-item"><Link class="page-link text-black" to={(isNaN(actPage)) ? `/?page=1` : (actPage < numPaginas) ? `/?page=${actPage + 1}` : `/?page=${actPage}`} onClick={showElementsNext}>Next</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default AllFilms