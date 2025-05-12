import { useState } from "react";
import axios from "axios";

function RatingCard({rating,numRatings,idMov}){
    const [userRating, setUserRating] = useState(0);

    const handleStarClick = (value) => {
        setUserRating(value);
        const info = {
            userRating : value,
            idMovie : idMov,
            globalRating : rating,
            numRatings: numRatings
        } 
        axios.patch('https://xnr62zg7-4000.use.devtunnels.ms/updateRating',info)
        .then((response)=>{
            console.log('Solicitud realizada correctamente: ' + response)
        })
        .catch((error)=>{
            console.log('Se ha presentado un error en la petición ' + error)
        })
      };

    return(
<div className="rating-form">
        <div className="stars">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
            <i
              key={value}
              className={value <= userRating ? "fas fa-star" : "far fa-star"}
              onClick={() => handleStarClick(value)}
              style={{ color: value <= userRating ? "gold" : "black" }}></i>
          ))}
          {userRating}
        </div>
        <p className="card-text">{`${numRatings} Votos`}</p>
      </div>
    )
}

export default RatingCard