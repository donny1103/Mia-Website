import React from 'react'
import Ribbon from './Ribbon';
const FeaturedItem = ({imgSrc, price, address, area, info,  ribbon}) => (
  <div className='card'>

    {ribbon.text && <Ribbon text={ribbon.text} colorName={ribbon.color} />}

    <img src={imgSrc} className='card-img-top' alt='feature-listing' />

    <div className='card-img-overlay'>
      <span>View Listing</span>
      <div className='img-overlay-background' />
    </div>

    <div className='card-body text-center'>

      <div>{price}</div>
      {/* <small>{address}</small> */}
      <div>
       <small>{area}</small>
      </div>
      <div className='d-flex justify-content-center'>
        <small className='mr-3'><i className='fas fa-bed' /> {info.bed}</small>
        <small className='mr-3'><i className="fas fa-bath" /> {info.bath}</small>
        <small> <i className="fas fa-warehouse" /> {info.garage}</small>
      </div>
    
    </div>

  </div>
);

export default FeaturedItem;