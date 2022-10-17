import React from 'react';
// import  Grid from '@mui/material/Grid'
import EmacCards from './Emac-cards';
import './emecCard.css'
const EmacCardsMain = () => {
  return ( 
 

    
 <div className='row ' style={{ 'minWidth': "400px"}}>
    <div className='col-lg-4 col-md-6'>
        <EmacCards
         text="sales"
         heading="267.3M€"
         matter="6.5% growth** vs 2020"
         imgUrl="snap/Resources/Sales.png"/>
    </div>
    <div className='col-lg-4 col-md-6'>
       <EmacCards
         text="CRP*%"
         heading="43.3%M€"
         matter="vs 2020,+3 M€ at constant exchange rate"
         imgUrl="snap/Resources/CRP.png"/>
    </div>
    <div className='col-lg-4 col-md-6'>
      <EmacCards
         text="Private*%"
         heading="169 M€"
         matter="8.4% growth Cpa vs 2020 in an increasing market (2.8%)"
         imgUrl="snap/Resources/Private.png"/>
    </div>
    <div className='col-lg-4 col-md-6'>
       <EmacCards
         text="Tenders*%"
         heading="39.8M€"
         matter="-18.5% growth Cpa vs 202 in an increasing (2.7%)"
         imgUrl="snap/Resources/Tender.png"/>
     </div>
  <div className='col-lg-4 col-md-6'>
  <EmacCards
         text="Innovation Launch*%"
         heading="42.9%M€"
         matter="12.6 M€ vs PY*"
         imgUrl="Snap\Resources\Innovation.png"/>

  </div>
  <div className='col-lg-4 col-md-6'>
  <EmacCards
         text="People*%"
         heading="248 FTEs*"
         matter="12.9M€ vs PY*"
         imgUrl="snap/Resources/People.png"/>

  </div>
   
  {/* <Grid container spacing={2}>
      <Grid item lg={4} md={6}>
        <EmacCards
         head1="sales"
        head2="267.3M€"
        para="6.5% growth** vs 2020"
        img="snap/Resources/Sales.png"/>
        </Grid>
        
        <Grid item lg={4} md={6}>
        <EmacCards
        head1="CRP*%"
        head2="43.3%M€"
        para="vs 2020,+3 M€ at constant exchange rate"
        img="snap/Resources/CRP.png"/>
        </Grid>

        <Grid item lg={4} md={6}>
        <EmacCards
        head1="Private*%"
        head2="169 M€"
        para="8.4% growth Cpa vs 2020 in an increasing market (2.8%)"
        img="snap/Resources/Private.png"/>
        </Grid>

    </Grid> */}
     
</div>

    
  )
}

export default EmacCardsMain;
