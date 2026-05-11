import { Box, Container, Skeleton } from '@mui/material'

export default function Loading() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header Skeleton */}
      <Skeleton variant="rectangular" height={64} animation="wave" />
      
      {/* Hero Skeleton */}
      <Skeleton variant="rectangular" height={400} animation="wave" />
      
      {/* Main Content Skeleton */}
      <Container maxWidth="md" sx={{ flex: 1, py: 4 }}>
        <Skeleton variant="text" height={60} width="60%" animation="wave" sx={{ mb: 2 }} />
        <Skeleton variant="rectangular" height={200} animation="wave" sx={{ mb: 2 }} />
        <Skeleton variant="rectangular" height={200} animation="wave" />
      </Container>
    </Box>
  )
}