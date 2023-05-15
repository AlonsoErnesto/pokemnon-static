import { Navbar } from '@/components/ui/';
import Head from "next/head";

interface LayoutProps {
   children: React.ReactNode,
   titlePage?:String,
}


const origin = (typeof window === 'undefined') ? '' :  window.location.origin;


const Layout:React.FC<LayoutProps> = ({children, titlePage}) => {


  return (
   <>
      <Head>
         <title>{titlePage || "Pockemon"}</title>
         <meta name="author" content="Ernesto Alonso"/>
         <meta name="description" content={`Informacion del pokemon ${titlePage }`}/>
         <meta name="keywords" content={`${titlePage} , pokemon, pokedex`}/>

         <meta property='og:title' content={`Informacion sobre ${titlePage}`}/>
         <meta property='og:description' content={`Esta es la pagina de ${titlePage}`}/>
         {/* Se recomienda usar URL de la imagen estatica, como aqui*/}
         {/* De forma DINAMICA (props) es recomendado no hacerlo  */}
         <meta property='og:image' content={`${origin}/img/banner.png`}/>

      </Head>
      <Navbar/>
      <main style={{
         padding:'0px 20px',

      }}>
         {children}
      </main>
   </>
  )
}

export default Layout;