import 'tailwindcss/tailwind.css'
import '../styles/style.css'
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) 
}

export default MyApp
