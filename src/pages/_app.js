// src/pages/_app.tsx
import "bootswatch/dist/cosmo/bootstrap.min.css"; // Asegúrate de usar un tema válido
import Layout from "../components/Layout";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
