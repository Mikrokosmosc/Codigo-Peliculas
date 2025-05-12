import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

function NavBar() {
  const { register, handleSubmit, unregister } =useForm()

  const enviar=(data)=>{
    setTimeout(()=>{
      window.location.href=`https://xnr62zg7-3000.use.devtunnels.ms/search?buscar=${data.search}`
    },500)
  }

    return(
        <nav class="navbar navbar-expand-lg bg-warning">
        <div class="container-fluid">
          <Link class="navbar-brand border-bottom border-secondary" to="/">MikroPelis</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active border-end border-secondary" aria-current="page" to="/">Inicio</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="films/pelicula">Peliculas</Link>
              </li>
              <li class="nav-item dropdown border-end border-secondary">
                <Link to='show?type=pelicula' class="nav-link dropdown-toggle active"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categorías
                </Link>
                <ul class="dropdown-menu">
                  <li><Link class="dropdown-item" to='show?type=pelicula&category=accion'>Acción</Link></li>
                  <li><Link class="dropdown-item" to="show?type=pelicula&category=aventura">Aventura</Link></li>
                  <li><Link class="dropdown-item" to="show?type=pelicula&category=animacion">Animación</Link></li>
                  <li><Link class="dropdown-item" to="show?type=pelicula&category=anime">Anime</Link></li>
                  <li><Link class="dropdown-item" to="show?type=pelicula&category=belico">Belico</Link></li>
                  <li><Link class="dropdown-item" to="show?type=pelicula&category=comedia">Comedia</Link></li>
                  <li><Link class="dropdown-item" to="show?type=pelicula&category=drama">Drama</Link></li>
                  <li><Link class="dropdown-item" to="show?type=pelicula&category=fantasia">Fantasia</Link></li>
                  <li><Link class="dropdown-item" to="show?type=pelicula&category=romance">Romance</Link></li>
                  <li><Link class="dropdown-item" to="show?type=pelicula&category=suspenso">Suspenso</Link></li>
                  <li><hr class="dropdown-divider"/></li>
                  <li><Link class="dropdown-item" to="movies/Populares">Populares</Link></li>
                </ul>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="films/serie">Series</Link>
              </li>
              <li class="nav-item dropdown border-end border-secondary">
                <Link to='show?type=serie' class="nav-link dropdown-toggle active"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categorías
                </Link>
                <ul class="dropdown-menu">
                  <li><Link class="dropdown-item" to='show?type=serie&category=accion'>Acción</Link></li>
                  <li><Link class="dropdown-item" to="show?type=serie&category=aventura">Aventura</Link></li>
                  <li><Link class="dropdown-item" to="show?type=serie&category=animacion">Animación</Link></li>
                  <li><Link class="dropdown-item" to="show?type=serie&category=anime">Anime</Link></li>
                  <li><Link class="dropdown-item" to="show?type=serie&category=belico">Belico</Link></li>
                  <li><Link class="dropdown-item" to="show?type=serie&category=comedia">Comedia</Link></li>
                  <li><Link class="dropdown-item" to="show?type=serie&category=drama">Drama</Link></li>
                  <li><Link class="dropdown-item" to="show?type=serie&category=fantasia">Fantasia</Link></li>
                  <li><Link class="dropdown-item" to="show?type=serie&category=romance">Romance</Link></li>
                  <li><Link class="dropdown-item" to="show?type=serie&category=suspenso">Suspenso</Link></li>
                  <li><hr class="dropdown-divider"/></li>
                  <li><Link class="dropdown-item" to="movies/Populares">Populares</Link></li>
                </ul>
              </li>
            </ul>
    
            <form onSubmit={handleSubmit(enviar)} class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Buscar..." aria-label="Search" {...register('search')}/>
              <button class="btn btn-outline-dark" type="submit"><i class="bi bi-search"></i></button>
            </form>
          </div>
        </div>
      </nav>
    )
}

export default NavBar