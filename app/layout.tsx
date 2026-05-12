import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { MuiThemeProvider } from '@/components/mui-theme-provider'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { CssBaseline } from '@mui/material'
import './globals.css'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'Global-Path | Portail de mobilité internationale',
  description: 'Passerelle vers la mobilité internationale pour les professionnels algériens : Carte Bleue Européenne, résidence permanente nord-américaine et visas du Golfe.',
  openGraph: {
    title: 'Global-Path | Portail de mobilité internationale',
    description: 'Passerelle vers la mobilité internationale pour les professionnels algériens.',
    siteName: 'Global-Path',
    locale: 'fr_FR',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={roboto.variable}>
      <body>
        <AppRouterCacheProvider>
          <MuiThemeProvider>
            {children}
          </MuiThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
