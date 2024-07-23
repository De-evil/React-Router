import React from 'react'
import Card from './Card'

function All({data}) {
  return <div className="container">
  <div className="row">
      {
        data.map((e,i)=>{
          return <Card cardData={e} key={i}/>

        })
      }

  </div>
  </div>
    
  
}

export default All;