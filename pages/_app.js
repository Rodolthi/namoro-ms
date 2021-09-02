import '../styles/globals.css'
import { ThemeProvider } from '@material-ui/styles'
import configuracaoDoTema from './components/tema'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={configuracaoDoTema}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
