import Link from 'next/link'
import Head from 'next/head'

interface Props {
  children: JSX.Element
}
export function MainLayout({ children }) {
  return (
    <>
      <Head>
        <title>Nextjs Shop</title>
        <meta name="keywords" content="next,shop,nextjs,shirt,pants" />
        <meta name="description" content="this is youtube tutorial for next" />
        <meta charSet="utf-8" />
      </Head>

      <nav className="navigation">
        <Link href={'/'}><a className="navigation__home">Home</a></Link>
        <Link href={'/add-items'}><a className="navigation__add_item">Add items</a></Link>
      </nav>

      <main className="main">
        <div className="container">
          {children}
        </div>
      </main>
    </>
  )
}