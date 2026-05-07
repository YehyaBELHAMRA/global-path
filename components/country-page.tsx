import Link from "next/link"
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material"
import {
  ArrowBack as ArrowBackIcon,
  CheckCircle as CheckCircleIcon,
  Info as InfoIcon,
  Circle as CircleIcon,
  Public as PublicIcon,
  Assessment as AssessmentIcon,
} from "@mui/icons-material"
import { AIChatInterface } from "@/components/ai-chat-interface"
import type { Country } from "@/lib/countries"

interface CountryPageProps {
  country: Country
  backLink: string
  backLabel: string
}

export function CountryPage({ country, backLink, backLabel }: CountryPageProps) {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Breadcrumb */}
      <Box sx={{ mb: 3 }}>
        <Link href={backLink} passHref>
          <Button
            startIcon={<ArrowBackIcon />}
            color="inherit"
            sx={{ color: "text.secondary", "&:hover": { color: "text.primary" } }}
          >
            {backLabel}
          </Button>
        </Link>
      </Box>

      {/* Country Header */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
          <Typography variant="h2" component="span" sx={{ fontSize: "3rem" }}>
            {country.flag}
          </Typography>
          <Box>
            <Typography variant="h3" component="h1" sx={{ fontWeight: 700 }}>
              {country.name}
            </Typography>
            <Chip
              label={country.visaType}
              color="secondary"
              size="small"
              sx={{ mt: 1 }}
            />
          </Box>
        </Box>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 800, fontSize: "1.1rem" }}
        >
          {country.description}
        </Typography>
      </Box>

      {/* Main Content Grid */}
      <Grid container spacing={3}>
        {/* Highlights */}
        <Grid size={{ xs: 12, lg: 6 }}>
          <Card elevation={2} sx={{ height: "100%" }}>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                <CheckCircleIcon color="secondary" />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Points Forts
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Pourquoi choisir cette destination
              </Typography>
              <List disablePadding>
                {country.highlights.map((highlight, index) => (
                  <ListItem key={index} disableGutters sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <Box
                        sx={{
                          width: 24,
                          height: 24,
                          borderRadius: "50%",
                          bgcolor: "secondary.light",
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.75rem",
                          fontWeight: 600,
                        }}
                      >
                        {index + 1}
                      </Box>
                    </ListItemIcon>
                    <ListItemText primary={highlight} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Informations Générales */}
        <Grid size={{ xs: 12, lg: 6 }}>
          <Card elevation={2} sx={{ height: "100%" }}>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                <PublicIcon color="secondary" />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Informations Générales
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Détails sur le pays
              </Typography>
              <List disablePadding>
                <ListItem disableGutters sx={{ py: 0.5, alignItems: "flex-start" }}>
                  <ListItemIcon sx={{ minWidth: 28, mt: 1 }}>
                    <CircleIcon sx={{ fontSize: 8, color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary={<><Typography component="span" sx={{ fontWeight: 600 }}>Nom officiel :</Typography> {country.officialName}</>} 
                  />
                </ListItem>
                <ListItem disableGutters sx={{ py: 0.5, alignItems: "flex-start" }}>
                  <ListItemIcon sx={{ minWidth: 28, mt: 1 }}>
                    <CircleIcon sx={{ fontSize: 8, color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary={<><Typography component="span" sx={{ fontWeight: 600 }}>Capitale :</Typography> {country.capital}</>} 
                  />
                </ListItem>
                <ListItem disableGutters sx={{ py: 0.5, alignItems: "flex-start" }}>
                  <ListItemIcon sx={{ minWidth: 28, mt: 1 }}>
                    <CircleIcon sx={{ fontSize: 8, color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary={<><Typography component="span" sx={{ fontWeight: 600 }}>Langues officielles :</Typography> {country.officialLanguages.join(", ")}</>} 
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Chiffres Clés */}
        <Grid size={{ xs: 12, lg: 6 }}>
          <Card elevation={2} sx={{ height: "100%" }}>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                <AssessmentIcon color="secondary" />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Chiffres Clés
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Données démographiques et économiques
              </Typography>
              <List disablePadding>
                <ListItem disableGutters sx={{ py: 0.5, alignItems: "flex-start" }}>
                  <ListItemIcon sx={{ minWidth: 28, mt: 1 }}>
                    <CircleIcon sx={{ fontSize: 8, color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary={<><Typography component="span" sx={{ fontWeight: 600 }}>Population :</Typography> {country.population} millions</>} 
                  />
                </ListItem>
                <ListItem disableGutters sx={{ py: 0.5, alignItems: "flex-start" }}>
                  <ListItemIcon sx={{ minWidth: 28, mt: 1 }}>
                    <CircleIcon sx={{ fontSize: 8, color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary={<><Typography component="span" sx={{ fontWeight: 600 }}>Superficie :</Typography> {country.area.toLocaleString("fr-FR")} km²</>} 
                  />
                </ListItem>
                <ListItem disableGutters sx={{ py: 0.5, alignItems: "flex-start" }}>
                  <ListItemIcon sx={{ minWidth: 28, mt: 1 }}>
                    <CircleIcon sx={{ fontSize: 8, color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary={<><Typography component="span" sx={{ fontWeight: 600 }}>Devise :</Typography> {country.currency}</>} 
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Disclaimer */}
        <Grid size={{ xs: 12, lg: 6 }}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              bgcolor: "secondary.light",
              borderRadius: 3,
              height: "100%",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
              <InfoIcon sx={{ color: "white" }} />
              <Typography variant="h6" sx={{ fontWeight: 600 }} color="white">
                Information Importante
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.9)" }}>
              Les informations présentées sont à titre indicatif et peuvent évoluer. 
              Nous vous recommandons de consulter les sources officielles et de faire appel 
              à un conseiller en immigration agréé pour votre dossier personnel.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* AI Chat Interface */}
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4" component="h2" sx={{ mb: 3, textAlign: "center", fontWeight: 600 }}>
          Assistant IA - Conseils Personnalisés
        </Typography>
        <AIChatInterface country={country.slug} />
      </Box>

      {/* CTA */}
      <Box sx={{ mt: 5, textAlign: "center" }}>
        <Link href="/" passHref>
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            sx={{ px: 4, py: 1.5 }}
          >
            Explorer d&apos;autres destinations
          </Button>
        </Link>
      </Box>
    </Container>
  )
}
