import { withApollo } from '../lib/apollo'
import "../styles/globals.scss"

function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default withApollo({ ssr: true })(App)