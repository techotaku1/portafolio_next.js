import Navbar from "./components/Navbar"; // Asegúrate de que la ruta sea correcta
import Footer from "./components/Footer"; // Asegúrate de que la ruta sea correcta

export default function Template({ children }) {
  return (
    <>
      <Navbar />
      {/* Contenedor principal para el contenido secundario */}
      <main className="container my-4">{children}</main>
      <Footer />
    </>
  );
}
