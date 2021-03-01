import './App.css';
import Header from './components/Header'
import Banner from './components/Banner'
import Body from './components/Body'
import Footer from './components/Footer'
import theme from './components/Theme'
import { ThemeProvider } from "@material-ui/core/styles";
function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
      <Header/>
      <Banner/>
      <Body/>
      <Footer/>
      </ThemeProvider>
    </div>
  );
}

export default App;
