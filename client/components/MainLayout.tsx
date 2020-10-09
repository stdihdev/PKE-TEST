import Link from 'next/link'
import Head from 'next/head'

export interface Props {
  children: React.ReactNode
}

export function MainLayout({ children }: Props) {
  return (
    <>
      <Head>
        <title>Nextjs Shop</title>
        <meta name="keywords" content="next,shop,nextjs,shirt,pants" />
        <meta name="description" content="this is youtube tutorial for next" />
        <meta charSet="utf-8" />
      </Head>

      <nav className="navigation">
        <div >
          <a href="/">
            <img src="/images/logo.png" alt="Shirts & Pants" className="navigation__logo" />
          </a>
        </div>
      </nav>

      <main className="main">
        <div className="container">
          {children}
        </div>
      </main>
    </>
  )
}
