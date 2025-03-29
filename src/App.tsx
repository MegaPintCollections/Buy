import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import WineGlassComponent from './WineGlassComponent'
import AmazonLinkComponent from './AmazonLinkComponent'
import theme from './theme/theme';
import { Box, ThemeProvider, CssBaseline, Button } from '@mui/material';
import video from './videos/vid3.mp4'
import megaPintAudio from './assets/mega_pint.mp3'

const WINEGLASS = 0;
const BUYPAGE = 1;


function App() {

  const [state, setCount] = useState(0)
  const audio = new Audio(megaPintAudio)
  const onBuyClick = () => {
    audio.play()
    window.open('https://amzn.to/4hS0l2A', '_blank');
  }
  const renderState = () => {
    switch (state) {
      case WINEGLASS:
        return <WineGlassComponent onBuyNowClick = {(state) => onBuyClick()}/>
      case BUYPAGE:
        return <AmazonLinkComponent/>
    }
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <video
        autoPlay
        loop
        muted
        controls={false}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0, 
        }}
      >
        <source src={video} type="video/mp4" />
        
      </video>
      <Box 
          display="flex" 
          flexDirection="column" 
          alignItems="center" 
          justifyContent="center"
          sx={{ height: '100vh', width: '100%', zIndex: 2}} // Centers the content vertically and horizontally
      >
        <ThemeProvider theme={theme}>
          {renderState()}
        </ThemeProvider>
      </Box>
    </div>
  );
}
export default App
