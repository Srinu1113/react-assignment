import Grid  from '@mui/material/Grid';
import React from 'react'
import Cardsection2 from './cards section2';

function CardsectionMain(){
  return (
    <div>
      <Grid container>
          <Grid item lg={4} md={6}>
               <Cardsection2
                percent="61%"
                data="267.3M€"
                data1="6.5% growth** vs 2020"
                img1=""/>
          </Grid>
          <Grid item lg={4} md={6}>
             <Cardsection2
         percent="69%"
        data="267.3M€"
        data1="6.5% growth** vs 2020"
        img1=""/>
        </Grid>

        <Grid item lg={4} md={6}>
        <Cardsection2
         percent="89%"
        data="267.3M€"
        data1="6.5% growth** vs 2020"
        img1=""/>
        </Grid>

        </Grid>

{/*  
        <Grid container rowspacing="1">
      <Grid item lg={4} md={6}>
        <Cardsection2
         percent="61%"
        data="267.3M€"
        data1="6.5% growth** vs 2020"
        img1=""/>
        </Grid>

        <Grid item lg={4} md={6}>
        <Cardsection2
         percent="55%"
        data="267.3M€"
        data1="6.5% growth** vs 2020"
        img1=""/>
        </Grid>
        
        <Grid item lg={4} md={6}>
        <Cardsection2
         percent="61%"
        data="267.3M€"
        data1="6.5% growth** vs 2020"
        img1=""/>
        </Grid>

        
        </Grid>

        <Grid container rowspacing="1">
      <Grid item lg={4} md={6}>
        <Cardsection2
         percent="61%"
        data="267.3M€"
        data1="6.5% growth** vs 2020"
        img1=""/>
        </Grid>

        <Grid item lg={4} md={6}>
        <Cardsection2
         percent="90%"
        data="267.3M€"
        data1="6.5% growth** vs 2020"
        img1=""/>
        </Grid>

        <Grid item lg={4} md={6}>
        <Cardsection2
         percent="96%"
        data="267.3M€"
        data1="6.5% growth** vs 2020"
        img1=""/>
        </Grid> */}

        {/* </Grid>    */}
    </div>
  )
}

export default CardsectionMain;
