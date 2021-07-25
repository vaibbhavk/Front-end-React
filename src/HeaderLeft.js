import React from 'react';
import home from './icons/home.svg';
import logo from './icons/logo.svg';
import search from './icons/search.svg';
import { IconButton } from '@material-ui/core';

import './Styles.css';

function HeaderLeft() {
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



</div>
</div>
    )
}

export default HeaderLeft
