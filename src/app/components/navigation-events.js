"use client";
import NProgress from 'nprogress';
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import 'nprogress/nprogress.css'; // Importar los estilos de NProgress

const NavigationEvents = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleRouteChangeStart = () => {
      NProgress.start();  // Comienza la barra de progreso
    };

    const handleRouteChangeEnd = () => {
      NProgress.done();  // Finaliza la barra de progreso
      const url = `${pathname}${searchParams ? '?' + searchParams.toString() : ''}`;
      console.log("Current URL:", url);
    };

    // Iniciar NProgress cuando la navegación comienza
    handleRouteChangeStart();

    // Detener NProgress cuando la navegación termina
    handleRouteChangeEnd();

    // Limpieza
    return () => {
      NProgress.remove(); // Remueve NProgress al desmontar el componente
    };
  }, [pathname, searchParams]);

  return null; // No renderiza nada, solo maneja los eventos de navegación
};

export default NavigationEvents;
