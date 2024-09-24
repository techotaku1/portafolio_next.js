'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css'; // Asegúrate de importar los estilos de NProgress

export function NavigationEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Construir la URL actual
    const url = `${pathname}${searchParams.toString() ? '?' + searchParams.toString() : ''}`;
    console.log('Current URL:', url);

    // Iniciar NProgress al cambiar de ruta
    const handleRouteChangeStart = () => {
      nprogress.start();
    };

    // Completar NProgress al finalizar el renderizado
    const handleRouteChangeEnd = () => {
      nprogress.done();
    };

    // Ejecutar ambos eventos: NProgress y console.log
    handleRouteChangeStart();
    handleRouteChangeEnd();

    // Retorna una función de limpieza para asegurarse de que NProgress esté completo
    return () => {
      nprogress.done();
    };
  }, [pathname, searchParams]); // Dependencias: se ejecuta cuando pathname o searchParams cambian

  return null; // No renderiza nada en el DOM
}
