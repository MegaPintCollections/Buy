import React from 'react';
import { Card, CardContent, Typography, Box, Button, Avatar } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import wineglass from './assets/wine_glass_cropped.png'
import Paper from '@mui/material/Paper';
import backgroundImage from './assets/Capture.png'


type ChildProps = {
    onBuyNowClick: (state: number) => void; // `onButtonClick` accepts a string and returns void
}

function WineGlassComponent({onBuyNowClick}: ChildProps) {
    return (
                <Box 
                    display="flex" 
                    flexDirection="column" 
                    alignItems="center" 
                    justifyContent="center"
                    sx={{zIndex: 2}} // Centers the content vertically and horizontally
                >
                    <Typography variant="h5" color = "text.primary" textAlign= "center">Thanks for supporting the channel!</Typography>
                    <Paper elevation = {3} sx={{paddingTop: "10px", paddingBottom: "10px", paddingLeft: "50px", paddingRight: "50px", margin: "20px auto", backgroundImage: `url(${backgroundImage})`}}>
                        <Avatar 
                            src = {wineglass}
                            variant="square"
                            alt="Rectangular"
                            sx={{
                            width: 150, 
                            height: 400, 
                            img:{
                                objectFit: 'contain',
                            },
                        }}/>
                    </Paper>
                    <Button variant="contained" 
                        color="primary" 
                        onClick={() => onBuyNowClick(1)}> 
                        Buy Now!
                    </Button>
                </Box>
    );
}
export default WineGlassComponent