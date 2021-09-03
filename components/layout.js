import React, { useEffect } from "react"
import Cabecalho from "pages/site/cabecalho"
import CabecalhoPortal from "pages/portal/cabecalho"
import Rodape from "pages/site/rodape"
import { useRouter } from "next/dist/client/router"

const Layout = ({ children }) => {
  const router = useRouter();

  const estaEmAlgumaPaginaDoPortal = () => {
    const palavrasDoLink = router.pathname.split("/");
    return palavrasDoLink.some((palavra) => palavra === "portal");
  };

  return (
    <>
      {estaEmAlgumaPaginaDoPortal() ? <CabecalhoPortal /> : <Cabecalho />}
      {children}
      {estaEmAlgumaPaginaDoPortal() ? "" : <Rodape />}
    </>
  )
}

export default Layout