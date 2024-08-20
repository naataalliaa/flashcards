import { SignIn } from '@clerk/nextjs'
import { Box } from '@mui/material'

export default function Page() {
  return (
    <Box 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '16px',
      }}
      >
      <SignIn fallbackRedirectUrl={'/flashcards'}/>
      </Box>
      );
      }

