import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GifExpert } from './GifExpert'

import "./styles.css"
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GifExpert />
  </StrictMode>,
)
