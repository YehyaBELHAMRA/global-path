'use client'

import { Box, Button, Container, Typography } from '@mui/material'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <Container maxWidth="sm">
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '50vh', gap: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Une erreur est survenue
        </Typography>
        <Typography variant="body1" color="text.secondary" align="center" gutterBottom>
          Nous sommes désolés, une erreur inattendue s'est produite.
        </Typography>
        <Button variant="contained" onClick={() => reset()}>
          Réessayer
        </Button>
      </Box>
    </Container>
  )
}