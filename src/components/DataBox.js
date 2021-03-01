import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    paper: {
       
      paddingTop:'3rem',
    },
    root: {
        margin:'5px 30px 10px',
        marginTop:'-20%',
        [theme.breakpoints.down("md")]: {
            margin: 0,
          },
    },
    text: {
        textAlign: 'center',
        fontSize:'20px',
        paddingTop:'15px',
        padding: '40px'
    },
    img: {
        maxWidth: '100%',
        maxHeight: '100%'
    }
  }));

export default function DataBox(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Paper elevation={3} className={classes.paper} >
        <div><img src={props.image} className={classes.img}/></div>
        <h2 align="center">{props.heading}</h2>
        <div className={classes.text}>{props.text}</div>
    </Paper>
  </div>
  );
}
