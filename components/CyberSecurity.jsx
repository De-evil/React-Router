import React from 'react'
import Card from './Card'

function CyberSecurity({data}) {
  const cyber=data.filter(card=>card.category==="Cyber-Security")
  return  <div className="container">
  <div className="row">
    {
      cyber.map((e,i)=>{
        return <Card cardData={e} key={i}/>
      })
    }


  </div>
  </div>
    
  
}

export default CyberSecurity;