import { Box, CircularProgress, Container } from '@mui/material'

export default function Loading() {
  return (
    <Container maxWidth="md">
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
        <CircularProgress />
      </Box>
    </Container>
  )
}