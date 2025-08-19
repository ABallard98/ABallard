'use client'

import React, { useRef } from 'react'
import { Container, Typography, Grid, Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import BlogCard from '@/components/BlogCard'
import HeroSection from '@/components/HeroSection'
import { blogPosts } from '@/data/blogPosts'

const MainContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '10%',
    width: '300px',
    height: '300px',
    background: 'radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%)',
    borderRadius: '50%',
    filter: 'blur(60px)',
    zIndex: -1,
    [theme.breakpoints.down('md')]: {
      width: '200px',
      height: '200px',
      left: '5%',
    },
  },
}))

const SectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  textAlign: 'center',
  background: 'linear-gradient(135deg, #e2e8f0 0%, #6366f1 50%, #ec4899 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  fontWeight: 600,
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(3),
    fontSize: '2rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.75rem',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-8px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80px',
    height: '2px',
    background: 'linear-gradient(90deg, #6366f1 0%, #ec4899 100%)',
    borderRadius: '1px',
    [theme.breakpoints.down('md')]: {
      width: '60px',
    },
  },
}))

const LatestPostsSection = styled(Box)(({ theme }) => ({
  scrollMarginTop: '80px', // Static offset for header + padding
  [theme.breakpoints.down('md')]: {
    scrollMarginTop: '100px', // Extra padding for mobile
  },
}))

const HomePage: React.FC = () => {
  const latestPostsRef = useRef<HTMLDivElement>(null)

  const scrollToLatestPosts = () => {
    if (latestPostsRef.current) {
      latestPostsRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      })
    }
  }

  return (
    <>
      <HeroSection onScrollToPosts={scrollToLatestPosts} />
      <MainContainer maxWidth="lg">
        <LatestPostsSection ref={latestPostsRef} sx={{ my: { xs: 4, md: 6 } }}>
          <SectionTitle variant="h3">
            Latest Posts
          </SectionTitle>
          <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
            {blogPosts.map((post) => (
              <Grid item xs={12} sm={6} lg={4} key={post.id}>
                <BlogCard post={post} />
              </Grid>
            ))}
          </Grid>
        </LatestPostsSection>
      </MainContainer>
    </>
  )
}

export default HomePage
