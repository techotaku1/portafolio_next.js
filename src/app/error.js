// app/error.js
"use client"; // Siempre se debe usar "use client" ya que maneja el error en el cliente

import { useEffect } from "react";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error(error); // Puedes registrar el error para depuración
  }, [error]);

  return (
    <html>
      <body>
        <div className="container text-center my-5">
          <h1>¡Oh no! Algo salió mal.</h1>
          <p>{error.message}</p>
          <button className="btn btn-primary" onClick={() => reset()}>
            Intentar de nuevo
          </button>
        </div>
      </body>
    </html>
  );
}
