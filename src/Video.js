import React from 'react';
import video from './ad.mp4';
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

      const classes = useStyles();

    return (
        <div>

            <div class="row">
                <div class="col-md-auto">

                <video className={classes.root} src={video} width="750" height="500" controls>
     </video>
                    </div>
                    <div class="col">
                        <br/>
                        <Typography component="div" variant="h6" gutterBottom>
            <Box fontWeight="fontWeightBold" m={1}> Mobile App </Box>
        </Typography>
        <br/>
                    
                        <Typography component="div" variant="body1" gutterBottom>
            <Box fontWeight="fontWeightRegular" m={1}> Mist enveloped the ship three hours out<br/> from port. </Box>
        </Typography>
                        <br/>
                        <br/>
                        <Typography component="div" variant="h6" gutterBottom>
            <Box borderBottom={1} width="25%" fontWeight="fontWeightBold" m={1}> Download for iOS and Android </Box>
        </Typography>
                    </div>
            </div>



         
        </div>
    )
}

export default Video
