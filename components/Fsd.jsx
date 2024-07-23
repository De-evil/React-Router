import React from 'react'
import Card from './Card'


function Fsd({data}) {
  let fsd=data.filter(card=>card.category==="MERN Stack")
  return <div className="container">
  <div className="row">
    {
      fsd.map((e,i)=>{
        return <Card cardData={e} key={i}/>
      })
    }



    </div>
  </div>
}

export default Fsd;