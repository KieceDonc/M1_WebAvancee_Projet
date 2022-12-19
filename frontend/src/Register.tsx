import * as React from 'react';
import {useState} from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

function Register()
{
    const [first_name,setFirst_name]=useState("");
    const [last_name,setLast_name]=useState("");
    const [password,setPassWord]=useState("");
    const [email,setEmail]=useState("");
    async function signup()
    {
        let user={first_name,last_name,password,email};

        let result=await fetch("http://localhost:51001/api/register",{
            method:"POST",
            body:JSON.stringify(user),
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            }
        })

        result = await result.json();
        if(!result.error) 
        {
            localStorage.setItem("user-info",JSON.stringify(result));
        }
        else{
            console.log(result.error);
        }
    }
    return (    
        /*<div>
            <h1>Inscription</h1>
            <input type="text" onChange={(e)=>setFirst_name(e.target.value)} className="form-control" placeholder="Prénom"></input>
            <input type="text" onChange={(e)=>setLast_name(e.target.value)} className="form-control" placeholder="Nom"></input>
            <input type="text" onChange={(e)=>setEmail(e.target.value)}className="form-control" placeholder="Email"></input>
            <input type="text" onChange={(e)=>setPassWord(e.target.value)}className="form-control" placeholder="Mot de passe"></input>
            <button onClick={signup} className="btn btn-primary">S'inscrire</button>
        </div>*/

        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              S'inscrire
            </Typography>
            <Box component="form" noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="Prénom"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Nom"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Adresse Email"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Mot de Passe"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="Je souhaite recevoir par courrier électronique de l'inspiration, des promotions commerciales et des mises à jour."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Inscription
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                  Vous avez déjà un compte ? Connectez-vous
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
    )
}

export default Register;