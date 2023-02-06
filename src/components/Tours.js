import React from 'react'
import Tour from './Tour';

const Tours = ({tours,deleteTour}) => {
  return (    
    <section>
    <div className='title'>FAMOUS TOURS 🌍🚗🛩️🚢</div>
    <div >
    <h2> Our packages</h2>
  {
      tours.map((tour) => {
        return(
          <Tour key={tour.id} tour={tour} deleteTour= {deleteTour} />
        )
      })}
    </div>
  </section>
  )
}

export default Tours