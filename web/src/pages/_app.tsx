import { ChakraProvider } from '@chakra-ui/react'

import theme from '../theme'
import { AppProps } from 'next/app'

import Navbar from "../components/Navbar" 

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Navbar router={router}/>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
