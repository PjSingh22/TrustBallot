'use client'
// combine this with react context to see if it fixes style bugs
import { ChakraProvider } from '@chakra-ui/react'

export function Providers({ children }) {
  return <ChakraProvider>{children}</ChakraProvider>
}
