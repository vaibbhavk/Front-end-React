import React from 'react';
import video from './videos/ad.mp4';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';

function Video() {

    const useStyles = makeStyles({
        root: {
          maxWidth: 275,
          maxHeight:275,
          marginLeft:15,
          marginTop:10,
          boxShadow: "0px 0px 10px #fff",
          backgroundColor:"#121212",
        },
      });

      const s = makeStyles((theme) => ({
        root: {
          color: "#757575",
        },
      }));


      const classes = useStyles();
      const c = s();

    return (
        <div>

            <div class="row">
                <div class="col-md-auto">

                <video className={classes.root} src={video} width="750" height="500" controls>
     </video>
                    </div>
                   

                   <div class="col">
                
                        <br/>
                        <br/>
                        <Typography component="div" variant="h6" color="secondary"  gutterBottom>
            <Box fontWeight="fontWeightBold" m={1}> Mobile App </Box>
        </Typography>
      
                    
                        <Typography className={c.root} component="div" variant="body1" gutterBottom>
            <Box fontWeight="fontWeightRegular" m={1}> Mist enveloped the ship three hours out<br/> from port. </Box>
        </Typography>
                        <br/>
                        <br/>
                        <Typography component="div" variant="h6" gutterBottom>
            <Box width="69.8%" fontWeight="fontWeightBold" m={1}> Download for iOS and Android </Box>
            <Box borderBottom={4} m={1} width="69.8%"></Box>
            <Box borderBottom={4} m={1} width="69.8%"></Box>
        </Typography>
                        
                    </div>
                   
            </div>



         
        </div>
    )
}

export default Video
