import React from 'react'
import Ribbon from './Ribbon';
const FeaturedItem = ({imgSrc, price, address, info,  ribbon}) => (
  <div className='card'>

    {ribbon.text && <Ribbon text={ribbon.text} colorName={ribbon.color} />}

    <img src={imgSrc} className='card-img-top' alt='feature-listing' />

    <div className='card-img-overlay'>
      <span>View Listing</span>
      <div className='img-overlay-background' />
    </div>

    <div className='card-body text-center'>

      <div>{price}</div>
      <div>{address}</div>

      <div className='d-flex justify-content-center'>
        <div className='mr-3'><i className='fas fa-bed' /> {info.bed}</div>
        <div className='mr-3'><i className="fas fa-bath" /> {info.bath}</div>
        <div> <i className="fas fa-warehouse" /> {info.garage}</div>
      </div>
    
    </div>

  </div>
);

export default FeaturedItem;