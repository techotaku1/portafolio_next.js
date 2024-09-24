"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import nprogress from "nprogress";
import "nprogress/nprogress.css"; // Asegúrate de importar los estilos de NProgress

export function NavigationEvents() {
  const pathname = usePathname();

  useEffect(() => {
    // Iniciar NProgress al cambiar de ruta
    const handleRouteChangeStart = () => {
      nprogress.start();
    };

    // Completar NProgress al finalizar el renderizado
    const handleRouteChangeEnd = () => {
      nprogress.done();
    };

    // Asignar eventos para manejar la navegación
    handleRouteChangeStart(); // Iniciar NProgress al cambiar de ruta
    handleRouteChangeEnd(); // Completar NProgress al finalizar el renderizado

    // Retorna una función de limpieza para asegurarse de que NProgress esté completo
    return () => {
      nprogress.done();
    };
  }, [pathname]);

  return null; // No renderiza nada en el DOM
}
