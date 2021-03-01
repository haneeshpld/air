import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  footer: {
      backgroundColor:'#343a40',
height:'500px',
width:'100%'
}
}));

export default function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
        
        
    </div>
  );
}
