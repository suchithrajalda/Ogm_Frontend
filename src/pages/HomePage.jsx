import React from 'react';
import SearchAppBar from '../components/NavBar';
import './HomePage.scss';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const HomePage = () => {
    return (
       <>
       <div className='homepage'>
       <SearchAppBar/>
        <Box
        
        sx={{
            display:'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'left',      
            position:'relative',
            top:'40%' ,
            left:'10%',         
        }}>
             <Typography 
             variant="h3" 
             sx={{ fontFamily: 'Roboto', fontWeight: '300', mb: 1,color: 'white' }}>
             Where Cricket Meets Collaboration <br/>
             
             </Typography>
                <Typography  
                variant='h3'
                 sx={{ fontFamily: 'Roboto', fontWeight: '300', mb: 1,color: 'black',ml:{xl:12} }} >
                 Connecting Players, Coaches, Umpires,<br/>
                Sponsors, and Events</Typography>
        </Box>
       </div>
       </>
    );
};

export default HomePage;