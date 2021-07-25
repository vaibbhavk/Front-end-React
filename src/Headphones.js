import React from 'react';
import {useState} from 'react';
import img1 from './images/headphone-1.png';
import img2 from './images/headphone-2.png';
import img3 from './images/headphone-3.png';
import left from './icons/arrow-left.svg';
import right from './icons/arrow-right.svg';
import { IconButton } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import './Styles.css';


function Headphones() {
    const useStyles = makeStyles((theme) => ({
        root: {
          color: "#9ea9b1",
        },
      }));


    const [count, setCount] = useState(0);


    const imgArray = [img2,img1,img3];
    const boldTextArray = ["Use it EveryWhere","Deliver sound how you want it","Customise your beats"];
    const textArray = ["Originally unveiled in 2007 for the iPhone, iOS has been extended to support other Apple devices such as the iPod Touch(September 2007) and the iPad (January 2010). As of March2018, Apple's App Store contains more than 2.1million iOS applications, 1 million of which are native for iPads. These mobile aplls have colectively been downloaded more than 130 billion times.","Use the Beats app to choose a listening mode on your new Solo Pro headphones: Turn on Pure Adaptive Noise Cancelling (Pure ANC) to actively block external sounds or turn on Transparency to hear ambient noise and stay aware of your surroundings.","The Beats app makes it easy to give your Beats earphones, headphones or Pill+ speakers names that reflect your style. The Beats app can also suggest some spirited device names."];


    const classes = useStyles();
    
    return (
        <div>
            <br/>
            <img className="headphone" src={imgArray[count]} alt="" width="400" height="400"/>

  <div class="row justify-content-evenly">
      <div class="col-1">
      <IconButton onClick={() => setCount(count - 1)} disabled={count<1}>
  <img src={left} alt="left-arrow-button"/>
</IconButton>
      </div>


      <div class="col-1">
      <IconButton  onClick={() => setCount(count + 1)} disabled={count>1}>
  <img src={right} alt="right-arrow-button"/>
</IconButton> 
      </div>
  

  </div>

  <div class="row">
  <div className="center">
      
      <Typography className={classes.root} component="div" variant="body1">
      
      <Box fontWeight="fontWeightBold" m={1}> {boldTextArray[count]} </Box>
            </Typography>
      </div>
  <div className="center">
 
  <Typography component="div" variant="body2">
  
            <Box fontWeight="fontWeightRegular" m={1}> {textArray[count]} </Box>
        </Typography>
  </div>
 
  </div>

        </div>
    )
}

export default Headphones
