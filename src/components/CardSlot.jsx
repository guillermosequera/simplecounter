import React from 'react';

function CardSlot(props) {
    return (
      <div className="card text-white bg-dark mb-3" style={{maxwidth : '18rem'}}>
    <div className="card-header">Header</div>
    <div className="card-body">
    <h5 className="card-title">Dark card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
    );
  }
  
  export default CardSlot;
