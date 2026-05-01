import type { Metadata } from 'next'
import { MuiThemeProvider } from '@/components/mui-theme-provider'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import './globals.css'

export const metadata: Metadata = {
  title: 'Global Path | Portail de mobilité internationale',
  description: 'Passerelle vers la mobilité internationale pour les professionnels algériens : Carte Bleue Européenne, résidence permanente nord-américaine et visas du Golfe.',
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
    <html lang="fr">
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
