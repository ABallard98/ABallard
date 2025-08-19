'use client'

import React from 'react'
import { Container, Typography, Box, Chip, Divider, Paper } from '@mui/material'
import { styled } from '@mui/material/styles'
import { notFound } from 'next/navigation'
import { blogPosts } from '@/data/blogPosts'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import ReactMarkdown from 'react-markdown'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

const HeroImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '400px',
  objectFit: 'cover',
  borderRadius: theme.spacing(2),
  marginBottom: theme.spacing(4),
}))

const PostHeader = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}))

const PostTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  fontWeight: 700,
  lineHeight: 1.2,
  [theme.breakpoints.down('md')]: {
    fontSize: '2.5rem',
  },
}))

const PostMeta = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(3),
  marginBottom: theme.spacing(3),
  flexWrap: 'wrap',
}))

const MetaItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  color: theme.palette.text.secondary,
}))

const TagsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(4),
}))

const ContentContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  '& h1': {
    ...theme.typography.h3,
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(4),
    '&:first-of-type': {
      marginTop: 0,
    },
  },
  '& h2': {
    ...theme.typography.h4,
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(3),
  },
  '& h3': {
    ...theme.typography.h5,
    marginBottom: theme.spacing(1.5),
    marginTop: theme.spacing(2.5),
  },
  '& p': {
    ...theme.typography.body1,
    marginBottom: theme.spacing(2),
    lineHeight: 1.7,
  },
  '& ul, & ol': {
    marginBottom: theme.spacing(2),
    paddingLeft: theme.spacing(3),
  },
  '& li': {
    marginBottom: theme.spacing(0.5),
  },
  '& pre': {
    backgroundColor: '#1e1e2e',
    border: '1px solid rgba(99, 102, 241, 0.3)',
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
    overflow: 'auto',
    marginBottom: theme.spacing(2),
    '& code': {
      backgroundColor: 'transparent',
      padding: 0,
      color: '#e2e8f0',
      fontSize: '0.875rem',
      fontFamily: 'Monaco, Consolas, "Courier New", monospace',
      lineHeight: 1.6,
    },
  },
  '& code': {
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
    color: '#e2e8f0',
    padding: theme.spacing(0.25, 0.5),
    borderRadius: theme.spacing(0.5),
    fontSize: '0.875rem',
    fontFamily: 'Monaco, Consolas, "Courier New", monospace',
    border: '1px solid rgba(99, 102, 241, 0.2)',
  },
  '& pre code': {
    backgroundColor: 'transparent',
    border: 'none',
    padding: 0,
  },
  '& blockquote': {
    borderLeft: `4px solid ${theme.palette.primary.main}`,
    paddingLeft: theme.spacing(2),
    marginLeft: 0,
    marginBottom: theme.spacing(2),
    fontStyle: 'italic',
    color: theme.palette.text.secondary,
    backgroundColor: 'rgba(99, 102, 241, 0.05)',
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
  },
  '& table': {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: theme.spacing(2),
    backgroundColor: 'rgba(99, 102, 241, 0.05)',
    borderRadius: theme.spacing(1),
    overflow: 'hidden',
  },
  '& th, & td': {
    padding: theme.spacing(1.5),
    textAlign: 'left',
    borderBottom: '1px solid rgba(99, 102, 241, 0.2)',
  },
  '& th': {
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
    fontWeight: 600,
    color: theme.palette.text.primary,
  },
  '& tr:last-child td': {
    borderBottom: 'none',
  },
  '& img': {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
}))

const BlogPostPage: React.FC<BlogPostPageProps> = ({ params }) => {
  const post = blogPosts.find(p => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <PostHeader>
        <PostTitle variant="h1">
          {post.title}
        </PostTitle>
        
        <PostMeta>
          <MetaItem>
            <CalendarTodayIcon fontSize="small" />
            <Typography variant="body2">
              {formatDate(post.publishedAt)}
            </Typography>
          </MetaItem>
          <MetaItem>
            <AccessTimeIcon fontSize="small" />
            <Typography variant="body2">
              {post.readTime} min read
            </Typography>
          </MetaItem>
        </PostMeta>

        <TagsContainer>
          {post.tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              variant="outlined"
              color="primary"
              size="small"
            />
          ))}
        </TagsContainer>
      </PostHeader>

      <HeroImage src={post.image} alt={post.title} />

      <Divider sx={{ mb: 4 }} />

      <ContentContainer elevation={0}>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </ContentContainer>
    </Container>
  )
}

export default BlogPostPage
