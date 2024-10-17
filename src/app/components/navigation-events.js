"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import LoadingBar from "react-top-loading-bar";

const NavigationEvents = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const loadingBarRef = useRef(null); // Referencia para la barra de carga

  useEffect(() => {
    const currentLoadingBar = loadingBarRef.current; // Copiar la referencia

    if (!currentLoadingBar) return;

    // Inicia la barra de carga
    currentLoadingBar.continuousStart();

    // Completa la barra de carga cuando la navegación termina
    currentLoadingBar.complete();

    // Construye la URL completa con parámetros de búsqueda
    const url = `${pathname}${
      searchParams ? "?" + searchParams.toString() : ""
    }`;
    console.log("Current URL:", url);

    // Limpieza
    return () => {
      if (currentLoadingBar) {
        currentLoadingBar.complete(); // Asegura que la barra se complete al desmontar
      }
    };
  }, [pathname, searchParams]); // Dependencias que disparan el efecto

  return <LoadingBar color="#39ff14" ref={loadingBarRef} height={4} />; // Ajusta la altura aquí
};

export default NavigationEvents;
