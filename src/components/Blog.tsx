import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Typography,
  Box,
  Container,
  Button,
  Grid,
  Card,
  CardContent,
  Stack,
  Chip,
  Avatar,
} from '@mui/joy';
import { THEME } from '../constants';

const Blog: React.FC = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Market Research in the Digital Age',
      excerpt:
        'Exploring how artificial intelligence and big data are revolutionizing the way we conduct market research and gather consumer insights.',
      author: 'Dr. Sarah Johnson',
      authorRole: 'Lead Research Analyst',
      date: 'December 15, 2024',
      readTime: '5 min read',
      category: 'Technology',
      image: '📊',
      tags: ['AI', 'Big Data', 'Digital Transformation'],
    },
    {
      id: 2,
      title: 'Understanding Consumer Behavior: A Deep Dive',
      excerpt:
        "How psychological factors and social influences shape consumer decision-making processes in today's complex marketplace.",
      author: 'Michael Chen',
      authorRole: 'Consumer Behavior Specialist',
      date: 'December 10, 2024',
      readTime: '7 min read',
      category: 'Consumer Insights',
      image: '👥',
      tags: ['Psychology', 'Behavioral Science', 'Consumer Trends'],
    },
    {
      id: 3,
      title: 'Competitive Intelligence: Staying Ahead of the Curve',
      excerpt:
        'Strategies for gathering and analyzing competitive intelligence to maintain market leadership and identify new opportunities.',
      author: 'Emily Rodriguez',
      authorRole: 'Strategic Analyst',
      date: 'December 5, 2024',
      readTime: '6 min read',
      category: 'Strategy',
      image: '🎯',
      tags: ['Competitive Analysis', 'Market Intelligence', 'Strategy'],
    },
    {
      id: 4,
      title: 'Data-Driven Decision Making: From Insights to Action',
      excerpt:
        'How to transform raw data into actionable business insights that drive growth and improve decision-making processes.',
      author: 'David Thompson',
      authorRole: 'Data Scientist',
      date: 'November 30, 2024',
      readTime: '8 min read',
      category: 'Analytics',
      image: '📈',
      tags: ['Data Analytics', 'Business Intelligence', 'Decision Making'],
    },
    {
      id: 5,
      title: 'The Rise of Voice Search and Its Impact on Market Research',
      excerpt:
        'How voice search technology is changing consumer behavior and what it means for market research methodologies.',
      author: 'Lisa Wang',
      authorRole: 'Digital Research Specialist',
      date: 'November 25, 2024',
      readTime: '4 min read',
      category: 'Technology',
      image: '🎤',
      tags: ['Voice Search', 'Digital Marketing', 'Consumer Behavior'],
    },
    {
      id: 6,
      title:
        'Sustainability in Market Research: Green Practices for the Future',
      excerpt:
        'Implementing sustainable practices in market research operations while maintaining data quality and research integrity.',
      author: 'James Wilson',
      authorRole: 'Sustainability Coordinator',
      date: 'November 20, 2024',
      readTime: '6 min read',
      category: 'Sustainability',
      image: '🌱',
      tags: ['Sustainability', 'Green Practices', 'Research Ethics'],
    },
  ];

  // const categories = [
  //   'All',
  //   'Technology',
  //   'Consumer Insights',
  //   'Strategy',
  //   'Analytics',
  //   'Sustainability',
  // ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: THEME.colors.background.gradient,
        py: THEME.spacing.section.vertical.lg,
      }}
    >
      <Container maxWidth='lg'>
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            component='h1'
            level='h1'
            fontSize='clamp(2.5rem, 4vw, 4rem)'
            sx={{
              background: THEME.colors.primary.gradient,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              mb: 2,
              fontWeight: 'bold',
            }}
          >
            Research Blog
          </Typography>
          <Typography
            level='h2'
            fontSize='clamp(1.2rem, 1.5vw, 1.5rem)'
            sx={{
              color: THEME.colors.text.secondary,
              mb: 4,
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            Insights, trends, and thought leadership in market research
          </Typography>
          <Button
            variant='outlined'
            size='lg'
            onClick={handleBackToHome}
            sx={{
              borderColor: THEME.colors.primary.main,
              color: THEME.colors.primary.main,
              '&:hover': {
                borderColor: THEME.colors.primary.dark,
                backgroundColor: 'rgba(46, 125, 50, 0.1)',
              },
            }}
          >
            Back to Home
          </Button>
        </Box>

        {/* Featured Post */}
        <Box sx={{ mb: 6 }}>
          <Typography
            level='h2'
            sx={{
              background: THEME.colors.primary.gradient,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              mb: 3,
              textAlign: 'center',
            }}
          >
            Featured Article
          </Typography>
          <Card
            variant='outlined'
            sx={{
              borderRadius: THEME.borderRadius.lg,
              boxShadow: THEME.shadows.lg,
              background: `linear-gradient(135deg, rgba(46, 125, 50, 0.05) 0%, rgba(27, 94, 32, 0.05) 100%)`,
            }}
          >
            <CardContent>
              <Grid container spacing={4} alignItems='center'>
                <Grid xs={12} md={4}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography fontSize='6rem'>
                      {blogPosts[0].image}
                    </Typography>
                  </Box>
                </Grid>
                <Grid xs={12} md={8}>
                  <Stack spacing={3}>
                    <Box>
                      <Chip
                        size='sm'
                        variant='soft'
                        sx={{
                          bgcolor: 'rgba(46, 125, 50, 0.1)',
                          color: THEME.colors.primary.main,
                          mb: 2,
                        }}
                      >
                        {blogPosts[0].category}
                      </Chip>
                      <Typography
                        level='h3'
                        sx={{
                          background: THEME.colors.primary.gradient,
                          backgroundClip: 'text',
                          WebkitBackgroundClip: 'text',
                          color: 'transparent',
                          mb: 2,
                          fontWeight: 'bold',
                        }}
                      >
                        {blogPosts[0].title}
                      </Typography>
                      <Typography
                        level='body-lg'
                        sx={{
                          color: THEME.colors.text.secondary,
                          lineHeight: 1.6,
                          mb: 2,
                        }}
                      >
                        {blogPosts[0].excerpt}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        flexWrap: 'wrap',
                      }}
                    >
                      <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                      >
                        <Avatar size='sm'>
                          {blogPosts[0].author.charAt(0)}
                        </Avatar>
                        <Box>
                          <Typography
                            level='body-sm'
                            sx={{
                              color: THEME.colors.text.primary,
                              fontWeight: 'bold',
                            }}
                          >
                            {blogPosts[0].author}
                          </Typography>
                          <Typography
                            level='body-xs'
                            sx={{ color: THEME.colors.text.secondary }}
                          >
                            {blogPosts[0].authorRole}
                          </Typography>
                        </Box>
                      </Box>
                      <Typography
                        level='body-xs'
                        sx={{ color: THEME.colors.text.secondary }}
                      >
                        {blogPosts[0].date} • {blogPosts[0].readTime}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      {blogPosts[0].tags.map((tag, index) => (
                        <Chip
                          key={index}
                          size='sm'
                          variant='outlined'
                          sx={{
                            borderColor: THEME.colors.primary.light,
                            color: THEME.colors.primary.main,
                          }}
                        >
                          {tag}
                        </Chip>
                      ))}
                    </Box>
                  </Stack>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>

        {/* Blog Posts Grid */}
        <Typography
          level='h2'
          sx={{
            background: THEME.colors.primary.gradient,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            mb: 4,
            textAlign: 'center',
          }}
        >
          Latest Articles
        </Typography>

        <Grid container spacing={4}>
          {blogPosts.slice(1).map((post, index) => (
            <Grid xs={12} md={6} lg={4} key={post.id}>
              <Card
                variant='outlined'
                sx={{
                  height: '100%',
                  borderRadius: THEME.borderRadius.lg,
                  boxShadow: THEME.shadows.sm,
                  transition: `all ${THEME.transitions.duration.medium}ms ${THEME.transitions.easing.easeInOut}`,
                  '&:hover': {
                    boxShadow: THEME.shadows.lg,
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <CardContent>
                  <Stack spacing={3}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography fontSize='3rem'>{post.image}</Typography>
                    </Box>

                    <Box>
                      <Chip
                        size='sm'
                        variant='soft'
                        sx={{
                          bgcolor: 'rgba(46, 125, 50, 0.1)',
                          color: THEME.colors.primary.main,
                          mb: 2,
                        }}
                      >
                        {post.category}
                      </Chip>
                      <Typography
                        level='h4'
                        sx={{
                          background: THEME.colors.primary.gradient,
                          backgroundClip: 'text',
                          WebkitBackgroundClip: 'text',
                          color: 'transparent',
                          mb: 2,
                          fontWeight: 'bold',
                          lineHeight: 1.3,
                        }}
                      >
                        {post.title}
                      </Typography>
                      <Typography
                        level='body-md'
                        sx={{
                          color: THEME.colors.text.secondary,
                          lineHeight: 1.6,
                          mb: 2,
                        }}
                      >
                        {post.excerpt}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        flexWrap: 'wrap',
                      }}
                    >
                      <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                      >
                        <Avatar size='sm'>{post.author.charAt(0)}</Avatar>
                        <Typography
                          level='body-sm'
                          sx={{
                            color: THEME.colors.text.primary,
                            fontWeight: 'bold',
                          }}
                        >
                          {post.author}
                        </Typography>
                      </Box>
                      <Typography
                        level='body-xs'
                        sx={{ color: THEME.colors.text.secondary }}
                      >
                        {post.date} • {post.readTime}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <Chip
                          key={tagIndex}
                          size='sm'
                          variant='outlined'
                          sx={{
                            borderColor: THEME.colors.primary.light,
                            color: THEME.colors.primary.main,
                          }}
                        >
                          {tag}
                        </Chip>
                      ))}
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Newsletter Signup */}
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Card
            variant='outlined'
            sx={{
              borderRadius: THEME.borderRadius.lg,
              boxShadow: THEME.shadows.sm,
              background: `linear-gradient(135deg, rgba(46, 125, 50, 0.05) 0%, rgba(27, 94, 32, 0.05) 100%)`,
            }}
          >
            <CardContent>
              <Stack spacing={3}>
                <Typography
                  level='h2'
                  sx={{
                    background: THEME.colors.primary.gradient,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  Stay Updated
                </Typography>
                <Typography
                  level='body-lg'
                  sx={{ color: THEME.colors.text.secondary }}
                >
                  Subscribe to our newsletter for the latest insights and
                  research trends.
                </Typography>
                <Button
                  size='lg'
                  sx={{
                    background: THEME.colors.primary.gradient,
                    '&:hover': {
                      background: `linear-gradient(135deg, ${THEME.colors.primary.dark} 0%, ${THEME.colors.primary.main} 100%)`,
                    },
                  }}
                  onClick={() => navigate('/contact')}
                >
                  Subscribe to Newsletter
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default Blog;
