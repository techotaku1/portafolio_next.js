// src/app/dashboard/github/page.js
'use client'; // Asegúrate de que este componente sea un Client Component

import React, { useEffect, useState} from 'react';
import Loading from './loading'; // Importa el componente de carga

export default function GitHub() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://api.github.com/users/techotaku1");

        // Verifica si la respuesta fue exitosa
        if (!res.ok) {
          throw new Error('Error al obtener los datos de GitHub');
        }

        const data = await res.json();
        setProfile(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // En este caso, manejas el estado de carga en el componente, así que el Suspense no es necesario.
  if (loading) {
    return <Loading />; // Usa el componente de carga mientras se obtienen los datos
  }

  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    );
  }

  return (
    <div className="row">
      <div className="col-md-12 offset-md-12">
        <div className="card card-body text-center">
          <h1>Mi GitHub</h1>
          <p>Explora los detalles de mi cuenta en GitHub.</p>

          {profile && (
            <div>
              <img
                src={profile.avatar_url}
                alt={profile.name}
                style={{ borderRadius: "50%", width: "150px", height: "150px" }}
              />
              <h2>{profile.name}</h2>
              <p>Biografía: {profile.bio}</p>
              <p>Ubicación: {profile.location}</p>
              <p>Repositorios públicos: {profile.public_repos}</p>
              <p>Seguidores: {profile.followers}</p>
              <p>Siguiendo: {profile.following}</p>
              <a
                href={profile.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success"
              >
                Visitar mi perfil en GitHub
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
