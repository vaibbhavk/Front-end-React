import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


function TextHeader() {

    return (
        <div class="container">

        <div class="row">
        <Typography component="div" variant="h6" gutterBottom>
            <Box boxWidth="auto" fontWeight="fontWeightBold" m={1}> THE BEST CHOICE </Box>
        </Typography>
        </div>
        <div class="row">
        <Typography component="h2" variant="h2" gutterBottom>
            <Box boxWidth="auto" fontWeight="fontWeightBold" m={1}> Beats Studio Wireless </Box>
        </Typography>
        </div>



        <div class="row">
        <Typography component="div" variant="h6" gutterBottom>
            <Box fontWeight="fontWeightRegulat" m={1}> Almost before we knew it, we had left the<br/> ground. I watched the storm, so beautiful yet<br/>
terrific. </Box>
        </Typography>
        </div>
        
        </div>
    )
}

export default TextHeader
