'use client'

import React from 'react'
import { Card, CardContent, CardMedia, Typography, Chip, Box, CardActionArea } from '@mui/material'
import { styled } from '@mui/material/styles'
import Link from 'next/link'
import { BlogPost } from '@/types/blog'
import AccessTimeIcon from '@mui/icons-material/AccessTime'

interface BlogCardProps {
  post: BlogPost
}

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
  },
}))

const StyledCardMedia = styled(CardMedia)({
  height: 200,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
})

const CardContentStyled = styled(CardContent)({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
})

const PostTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  fontWeight: 600,
  lineHeight: 1.3,
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
}))

const PostExcerpt = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: theme.palette.text.secondary,
  flexGrow: 1,
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
}))

const PostMeta = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(2),
  color: theme.palette.text.secondary,
  fontSize: '0.875rem',
}))

const MetaItem = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 4,
})

const TagsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(0.5),
  marginTop: 'auto',
}))

const TagChip = styled(Chip)(({ theme }) => ({
  fontSize: '0.75rem',
  height: 24,
  background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.8) 0%, rgba(236, 72, 153, 0.8) 100%)',
  color: theme.palette.common.white,
  border: '1px solid rgba(99, 102, 241, 0.3)',
  '&:hover': {
    background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
    transform: 'scale(1.05)',
  },
  transition: 'all 0.2s ease',
}))

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
      <StyledCard>
        <CardActionArea>
          <StyledCardMedia
            image={post.image}
            title={post.title}
          />
          <CardContentStyled>
            <PostTitle variant="h6">
              {post.title}
            </PostTitle>
            
            <PostMeta>
              <MetaItem>
                <AccessTimeIcon fontSize="small" />
                <span>{post.readTime} min read</span>
              </MetaItem>
            </PostMeta>
            
            <PostExcerpt variant="body2">
              {post.excerpt}
            </PostExcerpt>
            
            <TagsContainer>
              {post.tags.slice(0, 3).map((tag) => (
                <TagChip
                  key={tag}
                  label={tag}
                  size="small"
                  variant="filled"
                />
              ))} 
            </TagsContainer>
          </CardContentStyled>
        </CardActionArea>
      </StyledCard>
    </Link>
  )
}

export default BlogCard
