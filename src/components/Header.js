import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import logosmall from '../images/logo-small.png'
const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom:'5%',
    flexGrow: 1,
    background:'#141414',
    fontFamily:'apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    
  },
  imgvisible:{
    maxWidth: '15%',

  },
  imghidden: {
display:'none',
maxWidth: '1%'
  }
}));
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 120) {
    document.getElementById("hiddenlogo").className = "makeStyles-imgvisible-4";
  } else {
    document.getElementById("hiddenlogo").className = "makeStyles-imghidden-5";
  }
}

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
<img src={logosmall} className={classes.imghidden} id='hiddenlogo'/>
          </Typography>
          <Button color="inherit">You and AiR</Button>
          <Button color="inherit">How AiR works?</Button>
          <Button color="inherit">What’s in AiR?</Button>
          <Button color="inherit">Contact us</Button>

        </Toolbar>
      </AppBar>
    </div>
  );
}
