import React from "react";
import HomepageBanner from '../images/HomepageBanner.jpg'
import logo from '../images/logo.png'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  banner: {
  backgroundImage: `url(${HomepageBanner})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100%',
  height: 'calc(100vh + 70px)',
  color:'#ffffff',
  [theme.breakpoints.down("md")]: {
    backgroundSize: 'auto',
  },
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
    [theme.breakpoints.down("md")]: {
        marginLeft: '-3rem',
        marginRight: '-9rem'
      },
  },
  logo:{
    maxWidth: '100%',
    maxHeight: '100%'
  },
  button1:{
backgroundColor: '#ffffff',
marginRight:'5%',
marginTop:'5%',
paddingLeft:'5%',
paddingRight:'5%',
paddingTop:'1.5%',
paddingBottom:'1.5%',
border:'none',
borderRadius:'1px',
fontSize:'18px',
  },
  button2:{
    backgroundColor: '#484098',
    marginLeft:'5%',
    marginTop:'5%',
    paddingLeft:'5%',
    paddingRight:'5%',
    paddingTop:'1.5%',
    paddingBottom:'1.5%',
    border:'none',
borderRadius:'1px',
fontSize:'18px',
  }
  
}));

export default function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
        
        <Grid container spacing={3} className={classes.grid}>
        <Grid item xs={6}>
        <img src={logo} className={classes.logo} />
        <div className={classes.header}>AI Repository</div>
        <div className={classes.content} >AiR is an AI Jumpstart , seamlessly integrated with IBM Cloud Pak ® For Data & IBM Watson ™ , to accelerate the AI adoption in an enterprise.
AiR provides the access to industry specific AI solutions with associating building blocks, stepwise guide for implementation, algorithms, models, solution demos and code base for faster solution development.
AiR solutions are compatible with any cloud installations of IBM Cloud Pak® for Data and IBM Watson™ as well as the corresponding services on IBM public cloud.
By adopting AiR, the enterprises can easily hop on to IBM Cloud Pak® for Data & IBM Watson™, make smarter and better decisions, reduce dependencies on data scientists and efficiently manage the enterprise models.
Gain access to
180+
AI Solutions across
10+
Industry Areas!
Log In
Sign Up
Are you an Industry Evangelist ?
Evaluate the published industry problems and assess the better suited AI solution for your industry ​
</div>
<button variant="contained" className={classes.button1} >
  Login
</button>
<button variant="contained" className={classes.button2}>
  Sign Up
</button>
</Grid></Grid>
    </div>
  );
}
