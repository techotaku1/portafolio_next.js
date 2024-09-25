'use client'; 
import React, { useEffect, useState } from 'react';
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
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card border">
            <div className="card-header text-center" style={{ backgroundColor: '#4a9', color: 'white' }}>
              <h1>Mi GitHub</h1>
            </div>
            <div className="card-body text-center">
              {profile && (
                <div>
                  <img
                    src={profile.avatar_url}
                    alt={profile.name}
                    className="rounded-circle border border-primary"
                    style={{ width: "150px", height: "150px", objectFit: "cover" }}
                  />
                  <h2 className="mt-3">{profile.name}</h2>
                  <p className="text-muted">{profile.bio || "No hay biografía disponible"}</p>
                  <p><strong>Ubicación:</strong> {profile.location || "No especificada"}</p>
                  <p><strong>Repositorios públicos:</strong> {profile.public_repos}</p>
                  <p><strong>Seguidores:</strong> {profile.followers}</p>
                  <p><strong>Siguiendo:</strong> {profile.following}</p>
                  <a
                    href={profile.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-light mt-3"
                    style={{ backgroundColor: '#4a9', color: 'white', borderColor: '#4a90e2' }}
                  >
                    Visitar mi perfil en GitHub
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
