import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react"
import { ThemeProvider as NextThemesProvider} from "next-themes";


export default function App({
  Component, pageProps: { session, ...pageProps }
}) {
  return (
    
    <SessionProvider session={session}>
      <Component {...pageProps}/>
    </SessionProvider>
  )
}
