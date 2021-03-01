import { createMuiTheme } from '@material-ui/core/styles';
// const fhirBlue="#1a237e";
const fhirBlue="#2196f3";
const fhirRed="#ef5350";
const fhirGreen="#26a69a";
const fhirBlack="#141414";
export default createMuiTheme({
  palette:{
      common:{
          blue:`${fhirBlue}`,
          red:`${fhirRed}`,
          green:`${fhirGreen}`,
          black:`${fhirBlack}`
      },
      primary:{
          main:`${fhirBlack}`,
      },
      secondary:{
          main:`${fhirBlue}`
      }
      
  },
typography:{
     
  drawer:{
    fontFamily:"Roboto",
    textTransform: "none",
    fontWeight:500,
    fontSize:"0.9rem",
    padding:5
  },


}

});