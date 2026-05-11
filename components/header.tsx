"use client"

import { useState, MouseEvent } from "react"
import Link from "next/link"
import {
  AppBar,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Avatar,
  Box,
  Divider,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material"
import {
  Public as GlobeIcon,
  KeyboardArrowDown as ChevronDownIcon,
  Person as PersonIcon,
  Folder as FolderIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material"
import { euCountries as europeanBlueCardCountries, europeOtherCountries, northAmericaCountries, gccCountries, oceaniaCountries } from "@/lib/countries"

const europeanBlueCardCountriesForHeader = europeanBlueCardCountries
  .filter(country => country.slug !== "france")
  .map(country => ({ name: country.name, slug: country.slug }))

const europeOtherCountriesForHeader = europeOtherCountries.map(country => ({ name: country.name, slug: country.slug }))

const northAmericaCountriesForHeader = northAmericaCountries.map(country => ({ name: country.name, slug: country.slug }))

const gccCountriesForHeader = gccCountries.map(country => ({ name: country.name, slug: country.slug }))

const oceaniaCountriesForHeader = oceaniaCountries.map(country => ({ name: country.name, slug: country.slug }))

function NavDropdown({ 
  label, 
  countries, 
  basePath,
  showDivider = false 
}: { 
  label: string
  countries: { name: string; slug: string }[]
  basePath: string
  showDivider?: boolean
}) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Button
        onClick={handleClick}
        endIcon={<ChevronDownIcon />}
        sx={{
          color: "white",
          textTransform: "none",
          fontSize: { xs: "0.75rem", sm: "0.875rem" },
          px: { xs: 1, sm: 2 },
          "&:hover": {
            backgroundColor: "rgba(255,255,255,0.1)",
          },
        }}
      >
        {label}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            sx: { py: 1 },
          },
          paper: {
            sx: {
              maxHeight: 400,
              width: 240,
            },
          },
        }}
      >
        {countries.map((country, index) => (
          <Box key={country.slug}>
            <MenuItem
              component={Link}
              href={`${basePath}/${country.slug}`}
              onClick={handleClose}
              sx={{
                borderRadius: 1,
                mx: 1,
                "&:hover": {
                  backgroundColor: "primary.light",
                  color: "white",
                },
              }}
            >
              {country.name}
            </MenuItem>
            {showDivider && index === 10 && <Divider sx={{ my: 1 }} />}
          </Box>
        ))}
      </Menu>
    </>
  )
}

function AboutDropdown() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const menuItems = [
    { name: "À propos", path: "/about" },
    { name: "Témoignages", path: "/about/testimonials" },
    { name: "Partenaires", path: "/about/partners" },
  ]

  return (
    <>
      <Button
        onClick={handleClick}
        endIcon={<ChevronDownIcon />}
        sx={{
          color: "white",
          textTransform: "none",
          fontSize: { xs: "0.75rem", sm: "0.875rem" },
          px: { xs: 1, sm: 2 },
          "&:hover": {
            backgroundColor: "rgba(255,255,255,0.1)",
          },
        }}
      >
        À propos
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: { sx: { py: 1 } },
          paper: { sx: { maxHeight: 400, width: 240 } },
        }}
      >
        {menuItems.map((item) => (
          <MenuItem 
            key={item.path}
            component={Link}
            href={item.path}
            onClick={handleClose} 
            sx={{ borderRadius: 1, mx: 1, "&:hover": { backgroundColor: "primary.light", color: "white" } }}
          >
            {item.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export function Header() {
  const [userMenuAnchor, setUserMenuAnchor] = useState<null | HTMLElement>(null)
  const userMenuOpen = Boolean(userMenuAnchor)

  const handleUserMenuClick = (event: MouseEvent<HTMLElement>) => {
    setUserMenuAnchor(event.currentTarget)
  }

  const handleUserMenuClose = () => {
    setUserMenuAnchor(null)
  }

  return (
    <AppBar position="sticky" sx={{ bgcolor: "primary.main" }}>
      <Toolbar sx={{ justifyContent: "space-between", gap: 2 }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
          <Avatar sx={{ bgcolor: "secondary.main", width: 40, height: 40 }}>
            <GlobeIcon />
          </Avatar>
          <Typography
            variant="h6"
            sx={{
              color: "white",
              fontWeight: 600,
              display: { xs: "none", sm: "block" },
            }}
          >
            Global-Path
          </Typography>
        </Link>

        {/* Navigation Dropdowns */}
        <Box
          component="nav"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 0, md: 0.5 },
            flexWrap: "nowrap",
            overflow: "auto",
          }}
        >
        <Button
          component={Link}
          href="/evaluation"
          sx={{
            color: "white",
            textTransform: "none",
            fontSize: { xs: "0.75rem", sm: "0.875rem" },
            px: { xs: 1, sm: 2 },
            "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
          }}
        >
          Évaluation
        </Button>
          <NavDropdown 
            label="Carte Bleue Européenne" 
            countries={europeanBlueCardCountriesForHeader} 
            basePath="/european-blue-card"
            showDivider={true}
          />
          <NavDropdown 
            label="Europe (autres)" 
            countries={europeOtherCountriesForHeader} 
            basePath="/europe-other" 
          />
          <NavDropdown 
            label="Amérique du Nord" 
            countries={northAmericaCountriesForHeader} 
            basePath="/north-america" 
          />
          <NavDropdown 
            label="Golfe (GCC)" 
            countries={gccCountriesForHeader} 
            basePath="/gcc" 
          />
          <NavDropdown 
            label="Océanie" 
            countries={oceaniaCountriesForHeader} 
            basePath="/oceania" 
          />
        <AboutDropdown />
        </Box>

        {/* User Menu */}
        <Box>
          <IconButton
            onClick={handleUserMenuClick}
            sx={{ color: "white" }}
            aria-label="Menu utilisateur"
          >
            <Avatar sx={{ width: 32, height: 32, bgcolor: "secondary.main" }}>
              <PersonIcon fontSize="small" />
            </Avatar>
          </IconButton>
          <Menu
            anchorEl={userMenuAnchor}
            open={userMenuOpen}
            onClose={handleUserMenuClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={handleUserMenuClose}>
              <ListItemIcon>
                <PersonIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Mon profil</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleUserMenuClose}>
              <ListItemIcon>
                <FolderIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Mes dossiers</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleUserMenuClose}>
              <ListItemIcon>
                <SettingsIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Paramètres</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleUserMenuClose}>
              <ListItemIcon>
                <LogoutIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Déconnexion</ListItemText>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
