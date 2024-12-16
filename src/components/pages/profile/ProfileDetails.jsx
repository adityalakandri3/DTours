import React from 'react';
import { useLogout, useProfileDetails } from '../../../hooks/react-query/user.query';
import ProfileHeader from './ProfileHeader';
import { Box, Button, Card, CardMedia, Container, Paper, Typography, useTheme, useMediaQuery } from '@mui/material';
import { profile_pic } from '../../../api/endPoints/endPoints';

const ProfileDetails = () => {
  const { data } = useProfileDetails();
  const logout = useLogout();

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <ProfileHeader />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 6 }}>
        <Typography
          component="h1"
          sx={{
            mb: 7,
            mt: 7,
            fontWeight: '200',
            color: '#1f79ad',
            textAlign: 'center',
            fontFamily: 'Abril Fatface',
            fontSize: isSmallScreen ? '2.5rem' : '4rem',
          }}
        >
          Profile Details
        </Typography>
        <Paper elevation={3}>
          <Card
            sx={{
              display: 'flex',
              flexDirection: isSmallScreen ? 'column' : 'row',
              minHeight: '400px',
              overflow: 'hidden',
            }}
          >
            <CardMedia
              component="img"
              sx={{
                width: isSmallScreen ? '100%' : '50%',
                height: isSmallScreen ? '200px' : 'auto',
                objectFit: 'cover',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
              image={profile_pic(data?.data?.profile_pic)}
              alt={data?.data?.name}
            />

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                padding: 4,
                width: isSmallScreen ? '100%' : '50%',
                position: 'relative',
              }}
            >
              <Typography
                variant="h4"
                component="h1"
                sx={{
                  mb: 3,
                  fontWeight: 'bold',
                  color: '#32a2e3',
                  textAlign: 'center',
                  fontFamily: 'Abril Fatface',
                  fontSize: isSmallScreen ? '2rem' : '3rem',
                }}
              > Welcome,<br />
                {data?.data?.first_name.toUpperCase()} {data?.data?.last_name.toUpperCase()}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.8,
                  color: '#505359',
                  flex: 1,
                  fontSize: isSmallScreen ? '1.5rem' : '2rem',
                  borderBottom: '1px solid #505359',
                  textAlign:'center',
               
                }}
              >
                Email: {data?.data?.email}
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: isSmallScreen ? 'column' : 'row',
                  alignItems: isSmallScreen ? 'stretch' : 'center',
                  justifyContent: isSmallScreen ? 'center' : 'flex-end',
                  gap: 2,
                  mt: 3,
                }}
              >
                <Typography
                  variant="overline"
                  color="text.secondary"
                  sx={{ mb: 1, mt: 1, fontSize: '0.9rem', textAlign: 'center' }}
                >
                  Created At: {new Date(data?.data?.createdAt).toLocaleDateString()}
                </Typography>


                <Button
                  variant="contained"
                  
                  sx={{ width: isSmallScreen ? '100%' : 'auto' ,backgroundColor:"#32a2e3",color:"#fff",cursor:"pointer"}}
                  onClick={logout}
                >
                  Logout
                </Button>
              </Box>
            </Box>
          </Card>
        </Paper>
      </Container>
    </>
  );
};

export default ProfileDetails;
