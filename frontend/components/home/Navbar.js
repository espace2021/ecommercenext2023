"use client";

import { useEffect,useState } from 'react';

import { useRouter } from 'next/navigation';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import FaceIcon from '@mui/icons-material/Face';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';


import {useSession, signOut} from 'next-auth/react';



function Navbar () {



  const {data} =useSession();

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
              <span style={{ marginRight: "15px",color :"orange" }}>USER : {data?.user?.user?.email}</span>
              {" "}
             <Button color="inherit" onClick={() => {signOut();}}><ExitToAppRoundedIcon style={{ color: 'gray' }}/> Logout </Button>
            </>
            ): <Button color="inherit" onClick={() => router.push('/login')}><FaceIcon style={{ color: 'green' }}/> Login </Button>
            }

           
          </Toolbar>
        </AppBar>
      </Box>
     <Toolbar />
     
  </>  

     );
}

export default Navbar ;
