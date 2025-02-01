import { StrictMode } from 'react'
import { ChakraProvider } from "@chakra-ui/react"
import { createRoot } from 'react-dom/client'
import './index.css'
import theme from './styles/theme.ts'
import { Root } from './Root.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <Root />
    </ChakraProvider >
  </StrictMode>,
)
