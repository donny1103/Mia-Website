import React, { Component } from 'react';
import FeaturedItem from './FeaturedItem';
import Map from './Map';

export default class Home extends Component{

  render(){
    return(
      <div id='home-page'>
        <div className='row justify-content-center home-page-profile ml-0 mr-0'>
        
          <div className='col-sm-5 image-container d-none d-sm-flex'>
              <img src={require('./mia.png')} alt='mia' className='align-self-end'/>
          </div>

          <div className='info col-sm-7 text-light text-center text-sm-left'>
            <div className='row flex-column justify-content-around'  style={{height: '100%'}}>
              <div className='col text-center'>
                <h1>Mia Li</h1>
                <h4>
                  <a href = 'tel: 6137162998' className='text-light'>
                    <i className='fas fa-phone'/> 6137162998
                  </a>
                </h4>
                <h4>
                  <a href = 'mailto: miali@kw.ca' className='text-light'>
                    <i className='fas fa-envelope'/> miali@kw.ca
                  </a>
                </h4>
                {/* <img src='https://static1.squarespace.com/static/555269d2e4b012049c615617/t/593566e89de4bb5dfbc316c8/1496671983414/KW+Integrity+Realty+logo-blck+text-JAN+2017.jpg' alt='kw' /> */}
              </div>

              <div className='col mt-3'>
                <div className='d-flex justify-content-around'>
                  <button className='mr-2'>Home Evaluation</button>
                  <button>Properities</button>
                </div>
              </div>
            </div>

          </div>

        </div>

        <div className='card featured-listings mt-3 mt-sm-0'>
          <div className='card-title text-center mt-3'><h2>FEATURED LISTINGS</h2></div>
          <div className='card-body'>
            <div className='card-group'>
              <FeaturedItem 
                imgSrc='https://pmcvariety.files.wordpress.com/2018/07/bradybunchhouse_sc11.jpg?w=1000&h=563&crop=1'
                price='$1,729,900'
                address='2390 Merivale Road'
                area='3,400 square feet'
                info={{bed: 4, bath: 3, garage: 3}}
                ribbon={{color: 'green', text: 'New Listing'}}
              />

              <FeaturedItem 
                imgSrc='https://eieihome.com/articles/wp-content/uploads/2018/04/architecture-building-driveway-186077.jpg'
                price='$1,394,900'
                address='3905 Nelson Street'
                area='3,630 square feet'
                info={{bed: 5, bath: 4, garage: 3}}
                ribbon={{color: 'blue', text: 'New Price'}}
              />

              <FeaturedItem 
                imgSrc='https://www.porterdavis.com.au/~/media/homes/verona/22/facades/verona-island-facade-classic.jpg?w=582&amp;h=320&amp;crop=1'
                price='$1,295,000'
                address='1022 Albert Street'
                area='2,710 square feet'
                info={{bed: 3, bath: 2.5, garage: 2}}
                ribbon={{color: 'red', text: 'Sold'}}
              />

            </div>
          </div>
        </div>

        <div className='row mt-3'>
            <div className='col-sm-8'>
              <Map />
            </div>
        </div>
      </div>
    )
  }
}