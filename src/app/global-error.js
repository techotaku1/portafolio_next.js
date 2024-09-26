'use client'; // Error boundaries must be Client Components

export default function GlobalError({ error, reset }) {
  return (
    // global-error must include html and body tags
    <html>
      <body>
        <h2>¡Algo salió mal!</h2>
        <p>{error.message}</p>
        <button onClick={() => reset()}>Intenta de nuevo</button>
      </body>
    </html>
  );
}
