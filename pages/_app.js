import '../styles/globals.css'
import { ThemeProvider } from '@material-ui/styles'
import configuracaoDoTema from '../components/tema'
import Layout from "../components/layout"

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={configuracaoDoTema}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
