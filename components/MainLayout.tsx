import Link from 'next/link'
import Head from 'next/head'

export function MainLayout({ children, title = 'Nextjs Shop' }) {
  return (
    <>
      <Head>
        <title>Nextjs Shop</title>
        <meta name="keywords" content="next,shop,nextjs,shirt,pants" />
        <meta name="description" content="this is youtube tutorial for next" />
        <meta charSet="utf-8" />
      </Head>
      <nav>
        <Link href={'/'}><a>Home</a></Link>
        <Link href={'/add-items'}><a>Add items</a></Link>
      </nav>
      <main>
        {children}
      </main>
    </>
  )
}