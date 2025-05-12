function Footer(){
    return(
    <footer className="footer bg-dark text-white mt-5">
      <div className="container pt-3" style={{marginLeft: '15%'}}>
        <div className="row">
          <div className="col-md-5 col-lg-3 mb-3">
            <h5>Enlaces</h5>
            <ul className="list-unstyled text-decoration-none">
              <li><a href="#" className="text-decoration-none">Inicio</a></li>
              <li><a href="#" className="text-decoration-none">Películas</a></li>
              <li><a href="#" className="text-decoration-none">Series</a></li>
              <li><a href="#" className="text-decoration-none">Acerca de</a></li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <h5>Contacto</h5>
            <ul className="list-unstyled">
              <li>Dirección: 123 MikroPelis, MundoMundial</li>
              <li>Teléfono: (123) 456-7890</li>
              <li>Email: info@MikroPelis.com</li>
            </ul>
          </div>
          <div className="col-lg-4 mb-4">
            <h5>Síguenos</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none"><i className="fab fa-facebook-f"></i> Facebook</a></li>
              <li><a href="#" className="text-decoration-none"><i className="fab fa-twitter"></i> Twitter</a></li>
              <li><a href="#" className="text-decoration-none"><i className="fab fa-instagram"></i> Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-dark text-center py-3">
        <p className="mb-0">&copy; 2024 MikroPelis. Ninguna pelicula es de autoria propia, son tomadas de practica.</p>
      </div>
    </footer>
  )
}

export default Footer