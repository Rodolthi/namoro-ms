import 'styles/globals.css'
import { ThemeProvider } from '@material-ui/styles'
import configuracaoDoTema from 'components/tema'
import Layout from "components/layout"
import { useEffect } from 'react'
import { visualizarPagina } from 'utils/analytics'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const mudarRota = (url) => {
      visualizarPagina(url)
    }

    router.events.on('routeChangeComplete', mudarRota)

    return () => {
      router.events.off('routeChangeComplete', mudarRota)
    }
  }, [router.events])

  return (
    <ThemeProvider theme={configuracaoDoTema}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
