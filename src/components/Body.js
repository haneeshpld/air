import React from "react";
import Grid from '@material-ui/core/Grid'
import { makeStyles } from "@material-ui/core/styles";
import DataBox from './DataBox'
import BottomBox from './BottomBox'
import animation from '../images/Animation.png'
const useStyles = makeStyles((theme) => ({
  root: {
    background:'#ececec',
},
  header:{ 
      fontSize:'64px'
  },
  grid:{
      paddingLeft:'4rem'
  },
  content:{
    fontSize: '20px',
    lineHeight:'32px',
    
  },
  secondGrid: {
      marginTop:'5%'
  },
  container1:{
      background:'#f5f5f5',
      paddingTop:'30px',
      paddingBottom:'50px'
  },
  container2:{
    background:'#ececec',
    paddingTop:'30px',
    paddingBottom:'50px'
},
container3:{
    background:'#f5f5f5',
    paddingTop:'30px',
    paddingBottom:'50px'
},
h1:{
    paddingTop:'10px',
    paddingBottom:'100px',
    color:'#49586d'
}
}));
const heading='Are you an Industry Evangelist ?'
const text='Are you an Industry Evangelist Evaluate the published industry problems and assess the better suited AI solution for your industry '
export default function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <div className={classes.container1}>
        <Grid container spacing={3}>
        <Grid item xs>
          <DataBox image={animation} text={text}  heading={heading}/>
        </Grid>
        <Grid item xs>
        <DataBox image={animation} text={text}  heading={heading}/>
        </Grid>
        <Grid item xs>
        <DataBox image={animation} text={text}  heading={heading}/>
        </Grid>
      </Grid>
      </div>
      <div className={classes.container2}>
          <h1 align="center" className={classes.h1}>How AiR Works</h1>
          <div className={classes.secondGrid}>
          <Grid container spacing={3}>
        <Grid item xs>
          <DataBox image={animation} text={text} heading={heading}/>
        </Grid>
        <Grid item xs>
        <DataBox image={animation} text={text}  heading={heading}/>
        </Grid>
        <Grid item xs>
        <DataBox image={animation} text={text}  heading={heading}/>
        </Grid>
      </Grid>
      </div>
      </div>
      <div className={classes.container3}>
          <h1 align="center" className={classes.h1}>What’s in AiR?</h1>
      <Grid container spacing={3}>
      <Grid item xs>
           <BottomBox className={classes.bg1} text={text}/>
        </Grid>
        <Grid item xs>
           <BottomBox className={classes.bg2} text={text}/>
        </Grid>
        <Grid item xs>
           <BottomBox className={classes.bg3} text={text}/>
        </Grid>
        <Grid item xs>
           <BottomBox className={classes.bg4} text={text}/>
        </Grid>
      </Grid>
      </div>
    </div>
  );
}
