import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import StarIcon from '@mui/icons-material/Star';
import SchoolIcon from '@mui/icons-material/School';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { Container, Typography, Button, Box, Grid } from '@mui/material';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';


const Home = () => {
  return (
    <Container maxWidth="lg">
      <Head>
        <title>Flashcards SaaS</title>
        <meta name="description" content="Generate flashcards easily from any text." />
      </Head>

      {/* Hero Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "30vh",
          textAlign: "center",
          mt: 8,
          padding: '0 16px'
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          AI Flashcards Creation
        </Typography>
        <Typography variant="h5" color="textSecondary" paragraph>
          Transform any text into effective study flashcards with our AI-powered tool.
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <SignedOut>
            <Link href="/sign-in" passHref>
              <Button variant="outlined" size="small" sx={{ mx: 1 }} color="primary">
                Login
              </Button>
            </Link>
            <Link href="/sign-up" passHref>
              <Button variant="contained" size="small" sx={{ mx: 1 }} color="secondary">
                Sign Up
              </Button>
            </Link>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </Box>
      </Box>

      {/* Features Section */}
      <Box sx={{ my: 10 }}>
        <Typography variant="h4" component="h2" gutterBottom textAlign="center">
          Key Features
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: "center" }}>
              <StarIcon sx={{ fontSize: 60 }} color="primary" />
              <Typography variant="h6" component="h3" gutterBottom>
                AI-Powered Flashcards
              </Typography>
              <Typography color="textSecondary">
                Our AI intelligently analyzes your text and generates the most effective flashcards.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: "center" }}>
              <SchoolIcon sx={{ fontSize: 60 }} color="primary" />
              <Typography variant="h6" component="h3" gutterBottom>
                User-Friendly Interface
              </Typography>
              <Typography color="textSecondary">
                A simple and intuitive interface that makes flashcard creation a breeze.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: "center" }}>
              <FlashOnIcon sx={{ fontSize: 60 }} color="primary" />
              <Typography variant="h6" component="h3" gutterBottom>
                Instant Results
              </Typography>
              <Typography color="textSecondary">
                Generate your flashcards in seconds and start studying right away.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Pricing
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;

