'use client'

import React from 'react'
import { Container, Typography, Box, Paper, Grid, Chip, Avatar } from '@mui/material'
import { styled } from '@mui/material/styles'
import BusinessIcon from '@mui/icons-material/Business'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import CodeIcon from '@mui/icons-material/Code'

const PageContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(6),
  minHeight: '100vh',
}))

const HeroSection = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(6),
}))

const CompanyCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  background: 'linear-gradient(145deg, #1a1a2e 0%, #16213e 100%)',
  border: '1px solid rgba(99, 102, 241, 0.2)',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 16px 64px rgba(99, 102, 241, 0.3)',
    border: '1px solid rgba(99, 102, 241, 0.4)',
  },
}))

const CompanyLogo = styled(Avatar)(({ theme }) => ({
  width: 80,
  height: 80,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: theme.spacing(2),
  boxShadow: '0 8px 32px rgba(99, 102, 241, 0.3)',
}))

const TechChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  backgroundColor: 'rgba(99, 102, 241, 0.1)',
  color: theme.palette.text.primary,
  border: '1px solid rgba(99, 102, 241, 0.3)',
  '&:hover': {
    backgroundColor: 'rgba(99, 102, 241, 0.2)',
    border: '1px solid rgba(99, 102, 241, 0.5)',
  },
}))

const DateRange = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(2),
  '& .MuiSvgIcon-root': {
    marginRight: theme.spacing(1),
    fontSize: '1rem',
  },
}))

const PortfolioPage: React.FC = () => {
  const companies = [
    {
      name: 'NeuWave',
      logo: 'NW',
      role: 'Senior Full Stack Developer',
      duration: 'Q3 2025',
      description: 'AI-driven nearshore wave assessment tool to accelerate climate change resilient offshore infrastructure planning',
      technologies: ['React', 'AWS', 'FastAPI', 'MongoDB', 'Terraform', 'CI/CD'],
      achievements: [
        'Reduced deployment time by 75% through automated CI/CD',
        'Improved application performance by 40%',
        'Led team of 5 developers'
      ]
    },
    {
      name: 'GoodWith',
      logo: 'GW',
      role: 'Full Stack Developer',
      duration: 'Q2-Q3 2025',
      description: 'Financial wellbeing app built by psychologists and proven to reduce money anxieties',
      technologies: ['GCP', 'React', 'Terraform', 'CI/CD'],
      achievements: [
        'Consultancy and mentorship to external team of developers',
        'Refactored infrastructure to be reusable and scalable',
        'Implemented CI/CD pipeline for automation of deployments'
      ]
    },
    {
      name: 'Spotlight Pathology',
      logo: 'SP',
      role: 'Full Stack Developer',
      duration: 'Q4 2024 - Q1 2025',
      description: 'Descision support tools powered by AI to help diagnosis of blood cancers',
      technologies: ['FastAPI', 'AWS', 'Terraform', 'CI/CD'],
      achievements: [
        'Architected and deployed a scalable AI-driven infrastructure on AWS, utilising ECS to support high-performance model inference on demand',
        'Developed FastAPI server to efficiently manage, queue and process AI-driven requests'
      ]
    },
    {
      name: 'Clio - WriteBusinessResults',
      logo: 'CL',
      role: 'Full Stack Developer',
      duration: 'Q1 2024 - Q2 2024',
      description: 'ClioTech combines AI-powered voice assistance with human expertise to redefine ghostwriting',
      technologies: ['React', 'Express', 'DigitalOcean', 'Postgres', 'LLMs', 'CI/CD'],
      achievements: [
        'LLM query development with LangChain, OpenAI and Anthropic',
        'Designed and implemented scalable infrastructure on DigitalOcean.',
        'Frontend and backend development in ReactJs and Express'
      ]
    },
    {
        name: 'CoPerceptuo',
        logo: 'CP',
        role: 'Full Stack Developer',
        duration: 'Q3 2023 - Q1 2024',
        description: 'AI powered consultancy to help businesses understand their IT infrastructure and improve their security',
        technologies: ['React', 'Express', 'DigitalOcean', 'Postgres', 'CI/CD'],
        achievements: [
          'Designed and implemented scalable infrastructure on DigitalOcean.',
          'Frontend and backend development in ReactJs and Express'
        ]
    }
  ]

  return (
    <PageContainer maxWidth="lg">
      <HeroSection>
        <Typography variant="h2" component="h1" gutterBottom fontWeight={700}>
          Portfolio
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          Companies and projects I've had the pleasure to work with
        </Typography>
      </HeroSection>

      <Grid container spacing={4}>
        {companies.map((company, index) => (
          <Grid item xs={12} md={6} key={index}>
            <CompanyCard elevation={3}>
              <Box display="flex" alignItems="center" mb={2}>
                <CompanyLogo>
                  {company.logo}
                </CompanyLogo>
                <Box ml={2} flexGrow={1}>
                  <Typography variant="h5" component="h2" fontWeight={600} gutterBottom>
                    {company.name}
                  </Typography>
                  <Typography variant="h6" color="primary.main" gutterBottom>
                    {company.role}
                  </Typography>
                  <DateRange>
                    <CalendarTodayIcon />
                    <Typography variant="body2">
                      {company.duration}
                    </Typography>
                  </DateRange>
                </Box>
              </Box>

              <Typography variant="body1" paragraph color="text.secondary">
                {company.description}
              </Typography>

              <Box mb={3}>
                <Typography variant="h6" gutterBottom fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
                  <CodeIcon sx={{ mr: 1 }} />
                  Technologies
                </Typography>
                <Box>
                  {company.technologies.map((tech, techIndex) => (
                    <TechChip
                      key={techIndex}
                      label={tech}
                      size="small"
                      variant="outlined"
                    />
                  ))}
                </Box>
              </Box>

              <Box mt="auto">
                <Typography variant="h6" gutterBottom fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
                  <BusinessIcon sx={{ mr: 1 }} />
                  Key Achievements
                </Typography>
                <Box component="ul" sx={{ pl: 2, m: 0 }}>
                  {company.achievements.map((achievement, achIndex) => (
                    <Typography key={achIndex} component="li" variant="body2" color="text.secondary" paragraph>
                      {achievement}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </CompanyCard>
          </Grid>
        ))}
      </Grid>

      <Box mt={6} textAlign="center">
        <Paper sx={{ p: 4, background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)' }}>
          <Typography variant="h4" component="h2" gutterBottom fontWeight={600}>
            Ready to Work Together?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
            I'm always excited about new opportunities and interesting projects. 
            Whether you're a startup looking to build your MVP or an established company 
            needing to scale your tech stack, let's discuss how we can work together.
          </Typography>
        </Paper>
      </Box>
    </PageContainer>
  )
}

export default PortfolioPage
