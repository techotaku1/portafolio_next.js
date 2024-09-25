// app/layout.js
import "bootswatch/dist/cosmo/bootstrap.min.css";
import "../styles/globals.css";
import { Suspense } from "react"; // Importar Suspense
import NavigationEvents from "./components/navigation-events"; // Asegúrate de que la ruta sea correcta


export const metadata = {
  title: "My Portfolio",
  description: "PORTAFOLIO NEXT.JS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Suspense fallback={<p>Cargando eventos de navegación...</p>}>
        <NavigationEvents />
      </Suspense>
        <main>{children}</main>
      </body>
    </html>
  );
}