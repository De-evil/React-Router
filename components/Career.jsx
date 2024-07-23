import React from 'react'
import Card from './Card'

function Career({data}) {
  const careerData=data.filter(card=>card.category==="Career")
  return <div className="container">
  <div className="row">
    {
      careerData.map((e,i)=>{
        return <Card cardData={e} key={i}/>
      })
    }

  </div>
 </div>
}

export default Career;