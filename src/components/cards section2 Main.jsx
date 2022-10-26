import React from 'react'
import Cardsection2 from './cards section2';
import Cardsub from './cards section sub';
import './cards section2 Main.css';

function CardsectionMain(){
  return (
    <div style={{'marginTop':"5%"}}>
        <div className='row '>
            <div className='col-lg-4 col-md-6'>
              <Cardsub
                percent="61%"
                data="267.3M€"
                data1="6.5% growth** vs 2020"/>
            </div>
           <div className='col-lg-4 col-md-6'>
              <Cardsection2
                percent1="Snap\Resources\percent.png"
                data="267.3M€"
                data1="6.5% growth** vs 2020"/>
           </div>
           <div className='col-lg-4 col-md-6'>
              <Cardsub
                percent="89%"
                data="267.3M€"
                data1="6.5% growth** vs 2020"/>
           </div>
           <div className='col-lg-4 col-md-6'>
              <Cardsection2
                percent1="Snap\Resources\user.png"
                data="267.3M€"
                data1="6.5% growth** vs 2020"/>
           </div>
           <div className='col-lg-4 col-md-6'>
              <Cardsub
                percent="55%"
                data="267.3M€"
                data1="6.5% growth** vs 2020"/>
           </div>
           <div className='col-lg-4 col-md-6'>
              <Cardsection2
                percent1="Snap\Resources\heart.png"
                data="267.3M€"
                data1="6.5% growth** vs 2020"/>
           </div>
           <div className='col-lg-4 col-md-6'>
              <Cardsection2
                percent1="Snap\Resources\think.png"
                data="267.3M€"
                data1="6.5% growth** vs 2020"/>
           </div>
           <div className='col-lg-4 col-md-6'>
              <Cardsub
                percent="90%"
                data="267.3M€"
                data1="6.5% growth** vs 2020"/>
           </div>
           <div className='col-lg-4 col-md-6'>
              <Cardsub
                percent="96%"
                data="267.3M€"
                data1="6.5% growth** vs 2020"/>
           </div>
       </div>
  </div>
  )
}

export default CardsectionMain;
