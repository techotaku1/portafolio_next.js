"use client";
import { usePathname } from "next/navigation";  // Hook para obtener la ruta actual
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { NavigationEvents } from "@/app/components/navigation-events";

export default function Template({ children }) {
  const pathname = usePathname();  // Obtenemos la ruta actual
  
  // Definimos las rutas en las que NO queremos mostrar el footer
  const hideFooterRoutes = ["/dashboard/blog", "/dashboard/github"];

  return (
    <>
      <NavigationEvents />
      <Navbar />
      <section className="container my-4 p-4 bg-light rounded shadow">
        {children}
      </section>
      {/* Si la ruta actual no está en las rutas donde queremos ocultar el footer, lo mostramos */}
      {!hideFooterRoutes.includes(pathname) && <Footer />}
    </>
  );
}
