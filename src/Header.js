import React from 'react';
import home from './icons/home.svg';
import logo from './icons/logo.svg';
import search from './icons/search.svg';
import { IconButton } from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import './Styles.css';

function Header() {
    return (
<div class="container">
<div class="row">

  <div class="col-1">
  
  <IconButton >
  <img src={home} alt="home"/>
</IconButton> 

  </div>


  <div class="col-1">
 
  <IconButton >
  <img src={logo} alt="logo"/>
</IconButton> 
  </div>
  


  <div class="col-6">
  
  <IconButton >
  <img src={search} alt="search"/>   
</IconButton> 
  </div>
  
  <div class="col">
      <ButtonGroup size="large" variant="text" color="inherit" aria-label="text primary button group">
        <Button>About Us</Button>
        <Button>Models</Button>
        <Button>Reviews</Button>
        <Button>Add to Cart</Button>
      </ButtonGroup>

    </div>



</div>
</div>
    )
}

export default Header
