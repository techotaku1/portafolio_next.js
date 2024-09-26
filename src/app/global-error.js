'use client'; // Los componentes de manejo de errores deben ser de cliente

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", flexDirection: "column", backgroundColor: "#f8d7da", color: "#721c24" }}>
        <h2>¡Algo salió mal!</h2>
        <p>{error.message}</p>
        <button 
          onClick={() => reset()} 
          style={{ padding: "10px 20px", backgroundColor: "#721c24", color: "white", border: "none", cursor: "pointer", marginTop: "20px" }}
        >
          Intenta de nuevo
        </button>
      </body>
    </html>
  );
}
