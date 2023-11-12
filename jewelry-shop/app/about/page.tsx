"use client"

import { BrowserRouter as Router } from 'react-router-dom';
import { Container, Box, Typography, makeStyles } from '@material-ui/core';
import { Navbar } from '../../components/Navbar';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    background: 'linear-gradient(90deg, rgba(2,0,36,0) 0%, rgba(255,253,206,1) 65%, rgba(255,253,206,1) 100%), url("/couple.png")',
    backgroundSize: 'contain',
    backgroundPosition: 'left bottom',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
  },
  button: {
    background: '#FFE55E',
    fontFamily: 'Inria Sans',
    color: 'black',
    // fontWeight: 'bold',
    marginTop: '23px',
  },
  h1: {
    fontFamily: 'Gwendolyn',
    fontSize: '120px',
    fontWeight: 400,
    lineHeight: '85px',
    letterSpacing: '0em',
    textAlign: 'left',
  },
});

export default function AboutPage() {
  const classes = useStyles();

  return (
    <Router>
        <Box className={classes.container}>
          <Navbar />
          <Box>
            <Typography className={classes.h1} variant="h1">The Hallmark of Elegance</Typography>
            <Typography variant="body1">Your paragraph text here</Typography>
            <Button className={classes.button} variant="contained" color="primary">Discover More</Button>
          </Box>
        </Box>
    </Router>
  );
}
