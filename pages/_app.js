import { withApollo } from '../lib/apollo'

function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default withApollo({ ssr: true })(App)