import React from 'react'

function Card({cardData}) {
  return  <div className="col-lg-4 col-sm-6 mb-4">
  <div className="card h-100">
    <a href="#"><img className="card-img-top" src={cardData.image} alt=""/></a>
    <div className="card-body">
      <h4 className="card-title">
        <a href="#">{cardData.title}</a>
      </h4>
      <p className="card-text">{cardData.text}</p>
    </div>
    <a href="#" className="read"> Read More &gt;&gt; </a>
    <div className="card-footer">
      <p className="card-footer-text">{cardData.date} . No Comments </p>
    </div>
  </div>
 </div>
  
  
}

export default Card