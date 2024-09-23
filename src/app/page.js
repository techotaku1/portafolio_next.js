// pages/index.js
import Image from "next/image"; // Importa el componente de Next.js para manejar imágenes
import Link from "next/link";
import { skills, experience, portfolio } from "./components/profile"; // Ajusta la ruta según tu estructura

const Home = () => (
  <>
    {/* Sección de Presentación */}
    <section className="bg-dark text-white py-4 mb-4">
      <div className="container d-flex align-items-center">
        <Image
          src="/mi-imagen.jpg" // Asegúrate de que la imagen esté en la carpeta public
          alt="Foto de perfil"
          width={180}
          height={180}
          className="me-4 rounded" // Clases correctas y actualizadas de Bootstrap
          style={{ objectFit: "cover" }}
        />
        <div>
          <h1 className="h3 mb-1">Jose David Gonzalez</h1>
          <h2 className="h5">Ingeniero en Software y Programador</h2>
          <p className="mt-2">
            Soy un apasionado desarrollador con experiencia en tecnologías
            frontend y backend. Me especializo en React, Next.js y Python para
            crear aplicaciones modernas y eficientes.
          </p>
          <Link href="/hireme" className="btn btn-outline-light mt-2">
            Contratarme
          </Link>
        </div>
      </div>
    </section>

    {/* Sección de Skills y Experiencia */}
    <section>
      <div className="row">
        {/* Sección de Skills */}
        <div className="col-md-4 d-flex">
          <div className="card bg-light mb-3 w-100 flex-fill">
            <div className="card-body d-flex flex-column">
              <h1 className="card-title">Skills</h1>
              {skills.map((item, index) => (
                <div key={index} className="mb-4">
                  <h6>{item.skill}</h6>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${item.percentage}%` }}
                      aria-valuenow={item.percentage}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {item.percentage}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sección de Experiencia */}
        <div className="col-md-8 d-flex">
          <div className="card bg-light mb-3 w-100 flex-fill">
            <div className="card-body d-flex flex-column">
              <h1 className="card-title">Experiencia</h1>
              <ul>
                {experience.map((item, index) => (
                  <li key={index} className="mb-3">
                    <h3>{item.title}</h3>
                    <h5>{item.company}</h5>
                    <p>{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Seccion Portfolio */}
    <section>
      <div className="card card-body bg-dark mb-4">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center text-light">Portfolio</h1>
          </div>

          {portfolio.map((project, index) => (
            <div className="col-md-4 p-2" key={index}>
              <div className="card h-100">
                <div className="overflow">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={180}
                    height={180}
                    className="card-img-top"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                {/* Sección del texto para que no se vea afectada por el overflow */}
                <div className="card-body">
                  <h3 className="text-title">{project.title}</h3>
                  <p className="text-description">{project.description}</p>
                  <Link href="#" className="btn btn-outline-secondary">
                    Know More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Link More Proyect */}
        <div className="col-md-12">
          <Link href="/portfolio" className="btn btn-outline-light mt-2">
            Mas Proyectos
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default Home;
