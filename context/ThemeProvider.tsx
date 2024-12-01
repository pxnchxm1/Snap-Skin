'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'
import { useEffect, useState } from 'react'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false)

  // Ensuring that the component only runs on the client side (after SSR)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Prevent rendering of the theme until the component is mounted on the client-side
    return <>{children}</>
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
