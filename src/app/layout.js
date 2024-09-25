// app/layout.js
import "bootswatch/dist/cosmo/bootstrap.min.css";
import "../styles/globals.css";
import { Suspense } from "react"; // Importar Suspense


export const metadata = {
  title: "My Portfolio",
  description: "PORTAFOLIO NEXT.JS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}