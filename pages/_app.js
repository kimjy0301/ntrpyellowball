import Layout from "../components/Layout";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {

  document.addEventListener("touchstart", function() {}, true);
  
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
