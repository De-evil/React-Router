import React from 'react'
import Card from './Card'
function DataScience({data}) {
  const datascience=data.filter(card=>card.category==="Data Science")
  return <div className="container">
  <div className="row">
    {
      datascience.map((e,i)=>{
        return <Card cardData={e} key={i}/>
      })
    }


    </div>
  </div>
}

export default DataScience;