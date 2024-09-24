// app/layout.js
import "bootswatch/dist/cosmo/bootstrap.min.css";
import "../styles/globals.css";

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
