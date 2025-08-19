'use client'

import React from 'react'
import { Container, Typography, Box, Paper, Grid } from '@mui/material'
import { styled } from '@mui/material/styles'
import CodeIcon from '@mui/icons-material/Code'
import DesignServicesIcon from '@mui/icons-material/DesignServices'
import CloudIcon from '@mui/icons-material/Cloud'

const PageContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(6),
  minHeight: '100vh',
}))

const HeroSection = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(6),
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
      icon: <DesignServicesIcon fontSize="large" />,
      title: 'Frontend',
      description: 'Expertise in React, Next.js, TypeScript, and modern JavaScript frameworks.',
    },
    {
      icon: <CodeIcon fontSize="large" />,
      title: 'Backend',
      description: 'Expertise in Express, FastAPI, Postgres, MongoDB, and much more.',
    },
    {
      icon: <CloudIcon fontSize="large" />,
      title: 'Infrastructure',
      description: 'Expertise in Infrastructure as Code, Docker, AWS, GCP, Digital Ocean',
    },
  ]

  return (
    <PageContainer maxWidth="lg">
      <HeroSection>
        <Typography variant="h2" component="h1" gutterBottom fontWeight={700}>
          About Me
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          Full Stack Developer and Technical Writer
        </Typography>
      </HeroSection>

      <ContentSection elevation={1}>
        <Typography variant="h4" component="h2" gutterBottom fontWeight={600}>
          My Story
        </Typography>
        <Typography variant="body1" paragraph>
          My love affair with programming started when I was thirteen, tinkering with video game mods 
          late into the night. What began as curiosity about how games worked has turned into over 5 years 
          of building solutions for startups and growing companies.
        </Typography>
        <Typography variant="body1" paragraph>
          I'm the kind of developer who gets genuinely excited about solving complex problems and turning 
          ideas into reality. Whether it's crafting APIs, building web applications, or setting up infrastructure 
          - I love the challenge of making things work seamlessly.
        </Typography>
        <Typography variant="body1" paragraph>
          What makes me thrive is helping startups and scaleups turn their vision into reality. I love the fast-paced environment where every decision matters 
          and you get to see the direct impact of your work.
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
