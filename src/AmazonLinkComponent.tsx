import React from 'react';
import { Card, CardContent, Typography, Box, Button, Avatar } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

function AmazonLinkComponent() {
    return (

        <Box 
            display="flex" 
            flexDirection="column" 
            alignItems="center" 
            justifyContent="center"
            sx={{zIndex: 2}} // Centers the content vertically and horizontally
        >
            <iframe
            src="https://amzn.to/3Rfw0At"
            title="WebView"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            />
        </Box>     
    );
}

export default AmazonLinkComponent