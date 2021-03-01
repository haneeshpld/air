import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    paper: {
        // height:'350px',
        // width:'350px'
        maxWidth: '100%',
        maxHeight: '100%',
        
      paddingTop: '200px',
        boxShadow:'0 4px 6px 0 rgb(0 0 0 / 40%)',
        backgroundImage: "url('https://airepo.mybluemix.net/assets/img/industry_img/manufacturing.jpg')"
    },
    root: {
        margin:'5px 30px 10px',
        [theme.breakpoints.down("md")]: {
          margin: '16px 49px 2px'
        },
    },
    text: {
        textAlign: 'center',
        fontSize:'20px',
        padding: '40px'
    },
    overlay:{
      backgroundColor:' rgba(0,0,0,.5)',
      height: '45%',
      width: '100%',
      left: 0,
      zIndex: 2,
      textAlign: 'center',
      color: '#ffffff'
      
    },
    content:{
      paddingBottom:'5%'
    }
    
  }));

export default function DataBox(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Paper elevation={3} className={classes.paper} >
        <div className={classes.overlay} ><div><h2 align="center">Whats it?</h2></div><div className={classes.content}>{props.text}</div></div>
    </Paper>
  </div>
  );
}
