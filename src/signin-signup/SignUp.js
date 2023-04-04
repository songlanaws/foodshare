import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {Box, Button, Container, Divider, Grid, Typography, TextField } from '@mui/material';
import { ArrowBack } from '@mui/icons-material'; 
import { signUp } from '../redux/reducer/signUpReducer';
import '../styles/signin-signup/SignUp.css';

const SignUp = ({ error, signUp }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    signUp(name, email, password);
  };

  const handleBack = () => {
    navigate('/');
  }

  return (
    <Container maxWidth="sm">
        <Box sx={{ mt: 8, mb: 4 }}>
          <Typography variant="h4" align="center">
            Sign Up
          </Typography>
        </Box>
        <form className='signUpform' onSubmit={handleSubmit}>
          <Box mb={4}>
            <Grid container spacing={2} >
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  name="name"
                  label="Name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  type="email"
                  name="email"
                  label="Email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  type="password"
                  name="password"
                  label="Password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Button fullWidth type="submit" variant="contained" color="primary">
                  Sign Up
                </Button>
              </Grid>
            </Grid>
          </Box>
          <Divider variant="middle" />
          <p className='message'>
            Already have an account? Login <a href="/signin">Here</a>
          </p>
        </form>
        <Box
          sx={{
            position: "fixed",
            bottom: 30,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            size="small"
            startIcon={<ArrowBack />}
            onClick={handleBack}
          >
            Back
          </Button>
        </Box>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.signUp.user,
    error: state.signUp.error
  }
}

export default connect(mapStateToProps, { signUp })(SignUp);
