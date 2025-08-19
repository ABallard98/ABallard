'use client'

import React from 'react'
import { Box, Container, Typography, IconButton } from '@mui/material'
import { styled } from '@mui/material/styles'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const FooterContainer = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
  borderTop: '1px solid rgba(99, 102, 241, 0.2)',
  color: theme.palette.common.white,
  marginTop: 'auto',
  padding: theme.spacing(4, 0),
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(3, 0),
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100px',
    height: '1px',
    background: 'linear-gradient(90deg, transparent 0%, #6366f1 50%, transparent 100%)',
  },
}))

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.grey[400],
  background: 'rgba(99, 102, 241, 0.1)',
  border: '1px solid rgba(99, 102, 241, 0.2)',
  '&:hover': {
    color: theme.palette.common.white,
    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.3) 0%, rgba(236, 72, 153, 0.3) 100%)',
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 24px rgba(99, 102, 241, 0.3)',
  },
  transition: 'all 0.3s ease',
}))

const SocialContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: '0.5em',
  marginBottom: 2,
  [theme.breakpoints.down('sm')]: {
    gap: 0.5,
  },
}))

const onLinkedInClick = () => {
  window.open('https://www.linkedin.com/in/ayden-ballard-27512a125/', '_blank')
}

const onGitHubClick = () => {
  window.open('https://github.com/ABallard98', '_blank')
}

const Footer: React.FC = () => {
  return (
    <FooterContainer component="footer">
      <Container maxWidth="lg">
        <Box textAlign="center">
          <SocialContainer>
            <SocialIconButton aria-label="LinkedIn" onClick={onLinkedInClick}>
              <LinkedInIcon />
            </SocialIconButton>
            <SocialIconButton aria-label="GitHub" onClick={onGitHubClick}>
              <GitHubIcon />
            </SocialIconButton>
          </SocialContainer>
          
          <Typography variant="body2" color="grey.500">
            © {new Date().getFullYear()} Ayden Ballard. All rights reserved.
          </Typography>
        </Box>
    </Container>
    </FooterContainer>
  )
}

export default Footer
