'use client'

import React, { useState } from 'react'
import { Container, Typography, Box, Paper, TextField, Button, Grid, Alert } from '@mui/material'
import { styled } from '@mui/material/styles'
import SendIcon from '@mui/icons-material/Send'
import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import TwitterIcon from '@mui/icons-material/Twitter'

const PageContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(6),
  minHeight: '100vh',
}))

const FormContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
}))

const ContactCard = styled(Paper)(({ theme }) => ({
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

const ContactIcon = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  borderRadius: '50%',
  width: 60,
  height: 60,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
}))

const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(1.5, 4),
  fontSize: '1.1rem',
}))

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [showSuccess, setShowSuccess] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    setShowSuccess(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    // Hide success message after 5 seconds
    setTimeout(() => setShowSuccess(false), 5000)
  }

  const contactMethods = [
    {
      icon: <EmailIcon />,
      title: 'Email',
      description: 'Drop me a line anytime',
      value: 'hello@myblog.com',
    },
    {
      icon: <LinkedInIcon />,
      title: 'LinkedIn',
      description: 'Let\'s connect professionally',
      value: '/in/johndoe',
    },
    {
      icon: <GitHubIcon />,
      title: 'GitHub',
      description: 'Check out my code',
      value: '/johndoe',
    },
    {
      icon: <TwitterIcon />,
      title: 'Twitter',
      description: 'Follow for updates',
      value: '@johndoe',
    },
  ]

  return (
    <PageContainer maxWidth="lg">
      <Box textAlign="center" mb={6}>
        <Typography variant="h2" component="h1" gutterBottom fontWeight={700}>
          Get In Touch
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          Have a question or want to work together? I'd love to hear from you.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <FormContainer elevation={2}>
            <Typography variant="h4" component="h2" gutterBottom fontWeight={600}>
              Send Message
            </Typography>
            
            {showSuccess && (
              <Alert severity="success" sx={{ mb: 3 }}>
                Thank you for your message! I'll get back to you soon.
              </Alert>
            )}

            <Box component="form" onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    multiline
                    rows={6}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              
              <SubmitButton
                type="submit"
                variant="contained"
                size="large"
                endIcon={<SendIcon />}
                fullWidth
              >
                Send Message
              </SubmitButton>
            </Box>
          </FormContainer>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box>
            <Typography variant="h5" component="h2" gutterBottom fontWeight={600} textAlign="center">
              Connect With Me
            </Typography>
            <Grid container spacing={2}>
              {contactMethods.map((method, index) => (
                <Grid item xs={6} md={12} key={index}>
                  <ContactCard elevation={1}>
                    <ContactIcon>
                      {method.icon}
                    </ContactIcon>
                    <Typography variant="h6" component="h3" gutterBottom fontWeight={600}>
                      {method.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {method.description}
                    </Typography>
                    <Typography variant="body2" fontWeight={500}>
                      {method.value}
                    </Typography>
                  </ContactCard>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </PageContainer>
  )
}

export default ContactPage
