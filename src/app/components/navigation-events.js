"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import nprogress from "nprogress";

export function NavigationEvents() {
  const pathname = usePathname();

  useEffect(() => {
    // Iniciar NProgress al cambiar de ruta
    nprogress.start();

    // Completar NProgress al finalizar el renderizado
    const handleComplete = () => {
      nprogress.done();
    };

    // Completar NProgress después de un breve retraso para permitir que el contenido se cargue
    const timeoutId = setTimeout(handleComplete, 1000); // Ajusta el tiempo según sea necesario

    return () => {
      clearTimeout(timeoutId); // Limpia el timeout al desmontar
      nprogress.done(); // Asegúrate de que NProgress esté completo al desmontar
    };
  }, [pathname]);

  return null; // No renderiza nada en el DOM
}
