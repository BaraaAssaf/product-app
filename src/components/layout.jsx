import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';
import Link from 'next/link';

const Layout = ({ children }) => {
    return (
        <Box sx={{ backgroundColor: '#f0f0f0', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>MyApp</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
            
            <Container component="main" sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
                {children}
            </Container>
        </Box>
    );
};

export default Layout;
