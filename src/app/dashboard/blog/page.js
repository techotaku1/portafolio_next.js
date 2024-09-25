"use client";

import Image from "next/image"; // Importa el componente Image para manejar imágenes
import Link from "next/link"; // Importa Link para la navegación
import BlogItems from '@/app/components/profile'; // Importa el array de blogItems

const Blog = () => {
  return (
    <div className="row">
      {BlogItems.map((item) => (
        <div key={item.id} className="col-md-3 mb-4"> {/* Ajusta el tamaño de las columnas */}
          <div className="card text-center"> {/* Tarjeta Bootstrap */}
            <div className="card-body">
              <div className="image-container" style={{ width: '100px', height: '100px', overflow: 'hidden', margin: '0 auto' }}>
                <Image 
                  src={item.icon} 
                  alt={item.title} 
                  width={100} 
                  height={100} 
                  className="card-img-top" 
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }} // Asegura que la imagen cubra el área
                />
              </div>
              <h5 className="card-title">{item.title}</h5>
              <Link href={item.link} target="_blank">
                <button className="btn btn-primary">Visitar</button> {/* Botón Bootstrap */}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;