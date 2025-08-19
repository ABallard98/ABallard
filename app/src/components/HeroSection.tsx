'use client'

import React from 'react'
import { Box, Container, Typography, Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import Link from 'next/link'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'

const HeroContainer = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
  color: theme.palette.common.white,
  minHeight: '70vh',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  padding: theme.spacing(4, 0),
  [theme.breakpoints.down('md')]: {
    minHeight: '60vh',
    padding: theme.spacing(2, 0),
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.1) 0%, transparent 25%),
      radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.1) 0%, transparent 25%),
      url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%236366f1" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
    `,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '10%',
    right: '10%',
    width: '200px',
    height: '200px',
    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%)',
    borderRadius: '50%',
    filter: 'blur(40px)',
    animation: 'float 6s ease-in-out infinite',
  },
  '@keyframes float': {
    '0%, 100%': {
      transform: 'translateY(0px)',
    },
    '50%': {
      transform: 'translateY(-20px)',
    },
  },
}))

const HeroContent = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  position: 'relative',
  zIndex: 1,
  padding: theme.spacing(0, 2),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(0, 1),
  },
}))

const HeroTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontWeight: 700,
  background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 50%, #6366f1 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  textShadow: '0 4px 20px rgba(99, 102, 241, 0.3)',
  [theme.breakpoints.down('md')]: {
    fontSize: '2.25rem',
    lineHeight: 1.2,
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
    lineHeight: 1.3,
  },
}))

const HeroSubtitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  opacity: 0.9,
  maxWidth: '600px',
  margin: '0 auto',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.1rem',
    maxWidth: '500px',
    marginBottom: theme.spacing(3),
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    maxWidth: '400px',
    lineHeight: 1.6,
  },
}))

const CTAButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
  color: theme.palette.common.white,
  padding: theme.spacing(1.5, 4),
  fontSize: '1.1rem',
  fontWeight: 600,
  borderRadius: 30,
  border: 'none',
  boxShadow: '0 8px 32px rgba(99, 102, 241, 0.4)',
  '&:hover': {
    background: 'linear-gradient(135deg, #818cf8 0%, #f472b6 100%)',
    transform: 'translateY(-3px)',
    boxShadow: '0 12px 48px rgba(99, 102, 241, 0.6)',
  },
  transition: 'all 0.3s ease',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(1.25, 3),
    fontSize: '1rem',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1, 2.5),
    fontSize: '0.95rem',
  },
}))

const ScrollIndicator = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(3),
  left: '50%',
  transform: 'translateX(-50%)',
  animation: 'bounce 2s infinite',
  [theme.breakpoints.down('md')]: {
    bottom: theme.spacing(2),
  },
  '@keyframes bounce': {
    '0%, 20%, 50%, 80%, 100%': {
      transform: 'translateX(-50%) translateY(0)',
    },
    '40%': {
      transform: 'translateX(-50%) translateY(-10px)',
    },
    '60%': {
      transform: 'translateX(-50%) translateY(-5px)',
    },
  },
}))

interface HeroSectionProps {
  onScrollToPosts: () => void
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToPosts }) => {
  return (
    <HeroContainer>
      <Container maxWidth="lg">
        <HeroContent>
          <HeroTitle variant="h1">
            Full Stack Engineer
          </HeroTitle>
          <HeroSubtitle variant="h5" paddingBottom={3}>
            I'm a passionate full-stack engineer with 5+ years of experience building scalable solutions for startups
            and scaleups in Manchester, UK.
          </HeroSubtitle>
         
        </HeroContent>
      </Container>
      <ScrollIndicator>
        <CTAButton
          size="large"
          startIcon={<ArrowDownwardIcon />}
          onClick={onScrollToPosts}
          style={{ textDecoration: 'none' }}
        >
          Explore Posts
        </CTAButton>
      </ScrollIndicator>
    </HeroContainer>
  )
}

export default HeroSection
