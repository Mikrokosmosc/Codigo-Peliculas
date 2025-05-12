import NewMovies from "./newMovies.jsx"
import AllFilms from './allFilms.jsx'
import { PopularMovies, PopularSeries } from "./popular.jsx"
import BestRatingMovies from "./bestRatingPeliculas.jsx"
import BestRatingSerie from "./bestRatingSeries.jsx"

function Begin (){
    return(
        <div>
            <NewMovies/>
            <div className="row mt-4">
                <div className="col-9">
                <h4 className="text-white mb-4">Mejor calificadas</h4>
                <BestRatingMovies/>
                <BestRatingSerie/>
                <AllFilms/>
                </div>
                <div className="col-3 mt-5">
                <PopularMovies/>
                <PopularSeries/>
                </div>
            </div>
        </div>
    )
}

export default Begin