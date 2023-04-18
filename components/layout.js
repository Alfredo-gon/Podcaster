import Head from "next/head"
import Header from "./header"

export default function Layout({children, loading}) {
  return (
    <>
        <Head>
            <title>{`Podcast`}</title>
        
        </Head>

        <Header
        loading={loading}/>
        
        {children}
    </>
  )
}
