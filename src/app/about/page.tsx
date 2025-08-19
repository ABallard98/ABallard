'use client'

import React from 'react'
import { Container, Typography, Box, Paper, Avatar, Grid } from '@mui/material'
import { styled } from '@mui/material/styles'
import CodeIcon from '@mui/icons-material/Code'
import DesignServicesIcon from '@mui/icons-material/DesignServices'
import SchoolIcon from '@mui/icons-material/School'

const PageContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(6),
  minHeight: '100vh',
}))

const HeroSection = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(6),
}))

const ProfileAvatar = styled(Avatar)(({ theme }) => ({
  width: 150,
  height: 150,
  margin: '0 auto',
  marginBottom: theme.spacing(3),
  backgroundColor: theme.palette.primary.main,
  fontSize: '3rem',
}))

const ContentSection = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
}))

const SkillCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
}))

const SkillIcon = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  borderRadius: '50%',
  width: 80,
  height: 80,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
}))

const AboutPage: React.FC = () => {
  const skills = [
    {
      icon: <CodeIcon fontSize="large" />,
      title: 'Frontend Development',
      description: 'Expertise in React, Next.js, TypeScript, and modern JavaScript frameworks.',
    },
    {
      icon: <DesignServicesIcon fontSize="large" />,
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user interfaces with attention to detail.',
    },
    {
      icon: <SchoolIcon fontSize="large" />,
      title: 'Technical Writing',
      description: 'Sharing knowledge through clear and comprehensive technical articles.',
    },
  ]

  return (
    <PageContainer maxWidth="lg">
      <HeroSection>
        <ProfileAvatar>JD</ProfileAvatar>
        <Typography variant="h2" component="h1" gutterBottom fontWeight={700}>
          About Me
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          Passionate developer and writer sharing insights about modern web development
        </Typography>
      </HeroSection>

      <ContentSection elevation={1}>
        <Typography variant="h4" component="h2" gutterBottom fontWeight={600}>
          My Story
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to my blog! I'm a passionate full-stack developer with over 5 years of experience 
          building web applications. My journey in technology started during college when I first 
          discovered the power of code to solve real-world problems.
        </Typography>
        <Typography variant="body1" paragraph>
          I specialize in modern React development, particularly with Next.js, TypeScript, and 
          Material-UI. I believe in writing clean, maintainable code and sharing knowledge with 
          the developer community through this blog.
        </Typography>
        <Typography variant="body1" paragraph>
          When I'm not coding, you can find me exploring new technologies, contributing to open-source 
          projects, or writing articles about the latest trends in web development. I'm always excited 
          to learn new things and help others on their coding journey.
        </Typography>
      </ContentSection>

      <Box mb={4}>
        <Typography variant="h4" component="h2" gutterBottom fontWeight={600} textAlign="center">
          What I Do
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {skills.map((skill, index) => (
            <Grid item xs={12} md={4} key={index}>
              <SkillCard elevation={2}>
                <SkillIcon>
                  {skill.icon}
                </SkillIcon>
                <Typography variant="h6" component="h3" gutterBottom fontWeight={600}>
                  {skill.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {skill.description}
                </Typography>
              </SkillCard>
            </Grid>
          ))}
        </Grid>
      </Box>

      <ContentSection elevation={1}>
        <Typography variant="h4" component="h2" gutterBottom fontWeight={600}>
          Let's Connect
        </Typography>
        <Typography variant="body1">
          I love connecting with fellow developers and sharing ideas. Feel free to reach out if you 
          have questions about any of my articles, want to collaborate on a project, or just want 
          to say hello. You can find me on various social platforms or drop me a message through 
          the contact page.
        </Typography>
      </ContentSection>
    </PageContainer>
  )
}

export default AboutPage
