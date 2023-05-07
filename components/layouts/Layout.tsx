import { Navbar } from '@/components/ui/';
import Head from "next/head";

interface LayoutProps {
   children: React.ReactNode,
   titlePage?:String,
}

const Layout:React.FC<LayoutProps> = ({children, titlePage}) => {
  return (
   <>
      <Head>
         <title>{titlePage || "Pockemon"}</title>
         <meta name="author" content="Ernesto Alonso"/>
         <meta name="description" content={`Informacion del pokemon ${titlePage }`}/>
         <meta name="keywords" content={`${titlePage} , pokemon, pokedex`}/>
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