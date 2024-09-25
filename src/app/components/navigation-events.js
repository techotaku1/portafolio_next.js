"use client";

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import LoadingBar from 'react-top-loading-bar';

const NavigationEvents = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const loadingBarRef = useRef(null); // Referencia para la barra de carga

  useEffect(() => {
    const handleRouteChangeStart = () => {
      loadingBarRef.current.continuousStart(); // Inicia la barra de carga
    };

    const handleRouteChangeEnd = () => {
      loadingBarRef.current.complete(); // Completa la barra de carga
      const url = `${pathname}${searchParams ? '?' + searchParams.toString() : ''}`;
      console.log("Current URL:", url);
    };

    // Inicia la barra de carga cuando la navegación comienza
    handleRouteChangeStart();

    // Completa la barra de carga cuando la navegación termina
    handleRouteChangeEnd();

    // Guardar la referencia de la barra de carga en una variable
    const currentLoadingBar = loadingBarRef.current;

    // Limpieza
    return () => {
      currentLoadingBar.complete(); // Asegura que la barra se complete al desmontar
    };
  }, [pathname, searchParams]);

  return <LoadingBar color="#39ff14" ref={loadingBarRef} height={4} />; // Ajusta la altura aquí
};

export default NavigationEvents;
