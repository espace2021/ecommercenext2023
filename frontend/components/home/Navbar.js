"use client";

import { useEffect,useState } from 'react';

import { useRouter } from 'next/navigation';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Google from '@mui/icons-material/Google';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import FaceIcon from '@mui/icons-material/Face';

import {useSession, signOut,signIn} from 'next-auth/react';



function Navbar () {



  const {data} =useSession();

  console.log(data)

    const router = useRouter();
    
  const [onTop, setOnTop] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    if(window.pageYOffset === 0) {
      setOnTop(true);
    } else {
      setOnTop(false);
    }
  }

 return ( 
  <>

  <Box sx={{ flexGrow: 1 }}>
    <AppBar color={onTop ? 'transparent' : 'inherit'}>
          <Toolbar>
           
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color="default">
              E-Shopping
            </Typography>
         
            {data ? ( <>
             
             <Button color="inherit" onClick={() => {signOut();}}><ExitToAppRoundedIcon style={{ color: 'gray' }}/> Logout</Button>
            </>
            ): (<>
            <Button color="inherit" onClick={() => signIn()}><Google style={{ color: 'green' }}/> Login with Google </Button>
            <Button color="inherit" onClick={() => router.push('/login')}><FaceIcon style={{ color: 'green' }}/> Login </Button>
            </> 
            ) 
          }

                   
          </Toolbar>
        </AppBar>
      </Box>
     <Toolbar />
     
  </>  

     );
}

export default Navbar ;
