// src/App.tsx
import "./App.css";

function App() {
  return (
    <div className="bg-light">

      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
             Mundo Animal UwU
          </a>
        </div>
      </nav>

      {/* HERO */}
      <header
        className="text-white text-center py-5"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container py-5 bg-dark bg-opacity-50 rounded-4">
          <h1 className="display-4 fw-bold">Explora el Mundo Animal</h1>
          <p className="lead">
            Conoce algunas de las criaturas más increíbles del planeta.
          </p>
        </div>
      </header>

      {/* SECCIÓN DE ANIMALES */}
      <div className="container my-5">

        <h2 className="fw-bold text-success mb-4 text-center">
          🐾 Animales Destacados
        </h2>

        <div className="row g-4">

          {/* CARD 1 – TIGRE (ARREGLADA) */}
          <div className="col-md-4">
            <div className="card h-100 shadow-lg border-0 animal-card">
              <img
                src="https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg"
                className="card-img-top"
                alt="Tigre Siberiano"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">Tigre Siberiano</h5>
                <p className="card-text text-secondary">
                  El tigre más grande del mundo. Ágil, sigiloso y poderoso,
                  símbolo de fuerza en la naturaleza.
                </p>
              </div>
            </div>
          </div>

          {/* CARD 2 – TORTUGA */}
          <div className="col-md-4">
            <div className="card h-100 shadow-lg border-0 animal-card">
              <img
                src="https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9ydHVnYSUyMGRlJTIwbWFyfGVufDB8fDB8fHww"
                className="card-img-top"
                alt="Tortuga Marina"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">Tortuga Marina</h5>
                <p className="card-text text-secondary">
                  Viajeras oceánicas que recorren miles de kilómetros y pueden
                  vivir más de un siglo.
                </p>
              </div>
            </div>
          </div>

          {/* CARD 3 – ÁGUILA */}
          <div className="col-md-4">
            <div className="card h-100 shadow-lg border-0 animal-card">
              <img
                src="https://images.pexels.com/photos/326900/pexels-photo-326900.jpeg"
                className="card-img-top"
                alt="Águila Calva"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">Águila Calva</h5>
                <p className="card-text text-secondary">
                  Dueña del cielo, con visión capaz de detectar presas a más de
                  3 kilómetros.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* SECCIÓN DE ÍCONOS */}
      <section className="bg-white py-5 shadow-inner">
        <div className="container text-center">
          <h2 className="fw-bold text-success mb-4">🌿 Datos Curiosos</h2>

          <div className="row g-4">

            <div className="col-md-4">
              <div className="p-4 rounded-4 shadow-sm bg-light fact-box">
                <h1>🐅</h1>
                <p className="text-secondary">
                  Cada tigre tiene un patrón de rayas único, como una huella digital.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 rounded-4 shadow-sm bg-light fact-box">
                <h1>🐢</h1>
                <p className="text-secondary">
                  Las tortugas existen desde hace más de 200 millones de años.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 rounded-4 shadow-sm bg-light fact-box">
                <h1>🦅</h1>
                <p className="text-secondary">
                  Un águila puede volar a más de 120 km/h en picada.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-dark text-white text-center py-3 mt-4">
        <p className="mb-0">
          © 2025 - Proyecto React + Bootstrap | Mundo Animal
        </p>
      </footer>

      {/* ESTILOS EXTRA */}
      <style>
        {`
          .animal-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            cursor: pointer;
          }
          .animal-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 15px 30px rgba(0,0,0,0.2);
          }

          .fact-box {
            transition: transform 0.3s ease, background-color 0.3s ease;
          }
          .fact-box:hover {
            transform: scale(1.05);
            background-color: #e8f8ed;
          }
        `}
      </style>
    </div>
  );
}

export default App;
