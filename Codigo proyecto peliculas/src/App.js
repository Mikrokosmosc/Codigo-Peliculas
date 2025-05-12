import NavBar from "./client/componentes/navbar.jsx";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import './client/styles/App.css'
import Categorys from "./client/componentes/categorys.jsx";
import Films from "./client/componentes/films.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import Begin from "./client/componentes/inicio/Index.jsx";
import UpDB from "./client/componentes/Subir_Datos/subirData.jsx";
import WatchFilm from "./client/componentes/watchFilm.jsx";
import WatchEpisode from "./client/componentes/watchEpisode.jsx";
import Buscador from "./client/componentes/buscador.jsx";
import Footer from "./client/componentes/footer.jsx";

function App() {
  return (
    <div className="App container p-0" style={{ backgroundColor: 'var(--main-color)'}}>

       <BrowserRouter>

        <NavBar></NavBar>

        <Routes>
          <Route path="films/:type" element={<Films/>}></Route>
          <Route path="/show" element={<Categorys/>}></Route>
          <Route path="/" element={<Begin/>}></Route>
          <Route path="/up:mikrokosmos" element={<UpDB/>}></Route>
          <Route path="/watch" element={<WatchFilm/>}></Route>
          <Route path="/watchEpisode" element={<WatchEpisode/>}></Route>
          <Route path="/search" element={<Buscador/>}></Route>               
              
        </Routes>

        <Footer></Footer>

      </BrowserRouter>

    </div>
  );
}

export default App;
