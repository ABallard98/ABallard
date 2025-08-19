'use client'

import React from 'react'
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material'
import { styled } from '@mui/material/styles'
import Link from 'next/link'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import ContactMailIcon from '@mui/icons-material/ContactMail'

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'rgba(26, 26, 46, 0.8)',
  backdropFilter: 'blur(20px)',
  color: theme.palette.text.primary,
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
  borderBottom: `1px solid rgba(99, 102, 241, 0.2)`,
  background: 'linear-gradient(135deg, rgba(26, 26, 46, 0.9) 0%, rgba(22, 33, 62, 0.9) 100%)',
}))

const Logo = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  textDecoration: 'none',
  cursor: 'pointer',
  fontSize: '1.5rem', // h5 size
  '&:hover': {
    background: 'linear-gradient(135deg, #818cf8 0%, #f472b6 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  transition: 'all 0.3s ease',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.25rem', // h6 size
  },
}))

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  marginLeft: theme.spacing(2),
  borderRadius: 20,
  padding: theme.spacing(1, 2),
  '&:hover': {
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
    boxShadow: '0 4px 12px rgba(99, 102, 241, 0.2)',
    transform: 'translateY(-1px)',
  },
  transition: 'all 0.3s ease',
  [theme.breakpoints.down('md')]: {
    marginLeft: theme.spacing(0.5),
    padding: theme.spacing(1),
    minWidth: 'auto',
    '& .MuiButton-startIcon': {
      marginRight: 0,
    },
    '& .nav-text': {
      display: 'none',
    },
  },
}))

const NavContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 2,
})

const Header: React.FC = () => {
  return (
    <StyledAppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar sx={{ minHeight: { xs: '56px', sm: '64px' } }}>
          <Link href="/" style={{ textDecoration: 'none', flexGrow: 1 }}>
            <Logo>
              Ayden Ballard
            </Logo>
          </Link>
          
          <NavContainer>
            <Link href="/" passHref>
              <NavButton startIcon={<HomeIcon />}>
                <span className="nav-text">Home</span>
              </NavButton>
            </Link>
            <Link href="/about" passHref>
              <NavButton startIcon={<InfoIcon />}>
                <span className="nav-text">About</span>
              </NavButton>
            </Link>
            <Link href="/contact" passHref>
              <NavButton startIcon={<ContactMailIcon />}>
                <span className="nav-text">Contact</span>
              </NavButton>
            </Link>
          </NavContainer>
        </Toolbar>
      </Container>
    </StyledAppBar>
  )
}

export default Header
