import React from 'react'

const Tours = ({tours, deleteTour}) => {
  return (    
    <section>
      <div className='title'>FAMOUS TOURS 🌍🚗🛩️🚢</div>
      <h2> Our packages</h2>
      <div >{
        tours.map((tour) => {
          const {id,name,image,info,price} = tour;
          return(
            <article className='tour' key={id}>
              <img  className='image' src={image} alt={name}/>
              <footer className='description'>
                <div className="info">
                  <h4>{name}</h4>
                  <h3 className='price'>$ {price}</h3>
                </div>

                <p>{info}</p>
                <button className='delete-btn' onClick={() => deleteTour(id)}>Not Interested</button>
              </footer>
            </article>
          )
        }) }
      </div>
    </section>
  )
}

export default Tours