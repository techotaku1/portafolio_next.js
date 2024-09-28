# Despliegue de Proyecto Next.js en Render con Sitemap y SEO

Este archivo describe el proceso paso a paso para desplegar un proyecto estático de **Next.js** en **Render**, configurando `next.config.js`, generando un **sitemap** y habilitando SEO básico.

## 1. Configuración del Proyecto Next.js

### Configurar `next.config.js`

Este archivo se utiliza para definir la configuración básica del proyecto. En este caso, generamos un sitio estático optimizado para despliegue.

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Exporta el sitio como estático
  reactStrictMode: true, // Modo estricto de React
  images: {
    unoptimized: true, // Desactiva la optimización de imágenes, necesaria para sitios estáticos
  },
};

export default nextConfig;
```
# Instalar Dependencias

## Instala las dependencias necesarias para generar el sitemap y el archivo robots.txt automáticamente.

```bash
npm install next-sitemap
```
## 2. Configuración de Sitemap y Robots.txt
Para facilitar el SEO y la indexación de tu sitio en los motores de búsqueda, debes configurar next-sitemap.

## Crear next-sitemap.config.js

Este archivo configurará las opciones del sitemap y, opcionalmente, generará el archivo robots.txt.

```javascript
// next-sitemap.config.js
module.exports = {
    siteUrl: 'https://portafolio-next-js.onrender.com/', // URL base de tu proyecto en Render
    generateRobotsTxt: true, // Generar automáticamente robots.txt
};
```
## Agregar el Script de Generación de Sitemap en package.json

Añade el script necesario para generar el sitemap después de la compilación del proyecto.

```javascript
{
  "scripts": {
    "build": "next build && next-sitemap --config next-sitemap.config.js"
  }
}
```
Este comando asegura que cuando se construye el proyecto, también se genera el sitemap.

## 3. Desplegar en Render

## Preparar para el Despliegue

Antes de hacer el despliegue en Render, debes realizar un build de tu proyecto y asegurarte de que el directorio out (la salida estática) sea generado.

```bash
npm run build
```
Esto creará un directorio out/ que contendrá el proyecto exportado y listo para ser desplegado en Render.

## Subir el Proyecto a un Repositorio Git

Si tu proyecto aún no está en Git, inicializa un repositorio y realiza el primer commit.

```bash
git init
git add .
git commit -m "Initial commit"
```
Luego, sube tu código a un servicio como GitHub o GitLab.

```bash
git remote add origin <URL-de-tu-repositorio>
git push -u origin main
```


## Configurar Render para Despliegue

Inicia sesión en Render y selecciona la opción New Static Site.

Conecta tu cuenta de GitHub o GitLab y selecciona el repositorio que acabas de subir.

En la configuración de despliegue:

- Build Command: npm run build
- Publish Directory: out/

Render se encargará de construir tu proyecto y desplegarlo automáticamente.

## 4. Verificación del Sitemap y SEO

Verificar el Sitemap
Una vez que el sitio esté en línea, puedes verificar que tu sitemap esté correctamente generado visitando la siguiente URL:

https://portafolio-next-js.onrender.com/sitemap.xml

## Verificación con Google Search Console

Después del despliegue, puedes agregar tu sitio a Google Search Console para mejorar la visibilidad en motores de búsqueda:

1. Dirígete a Google Search Console.
2. Agrega tu sitio usando la URL de Render, por ejemplo:

https://portafolio-next-js.onrender.com

3. Verifica la propiedad del sitio mediante un archivo HTML o configurando un registro TXT en los DNS (esto último no será necesario si no tienes un dominio personalizado).

4. Envía el sitemap a Google usando la URL:

https://portafolio-next-js.onrender.com/sitemap.xml

5. Monitorea el estado de la indexación en Google Search Console.