// Este componente puede ser asíncrono para hacer fetch en el servidor
export default async function GitHub() {
  // Hacemos fetch a la API de GitHub directamente en el componente
  const res = await fetch("https://api.github.com/users/techotaku1");
  const profile = await res.json();

  return (
    <div className="row ">
      <div className="col-md-4 offset-md-4">
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
                rel="noopener noreferrer" className="btn btn-success"
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
