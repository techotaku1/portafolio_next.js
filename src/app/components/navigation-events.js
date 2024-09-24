'use client'; // Marca este archivo como un componente cliente

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function NavigationEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}?${searchParams.toString()}`; // Asegúrate de convertir a string
    console.log(url);
    // Puedes utilizar la URL actual aquí
    // ...
  }, [pathname, searchParams]);

  return null; // No renderiza nada en el DOM
}
