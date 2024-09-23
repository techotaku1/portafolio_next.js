// app/layout.js
import "bootswatch/dist/cosmo/bootstrap.min.css"; // Tema de Bootstrap
import "../styles/globals.css"; // Asegúrate de que la ruta sea correcta

export const metadata = {
  title: "My Portfolio",
  description: "PORTAFOLIO NEXT.JS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main> {/* Contenido principal se renderiza aquí */}
      </body>
    </html>
  );
}
