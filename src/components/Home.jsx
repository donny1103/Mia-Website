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
            <div className='info-item'>
              <div className='text-center w-100'>
                <h1>Mia Li</h1>
                {/* <h4>
                  <a href = 'tel: 6137162998' className='text-light'>
                    <i className='fas fa-phone'/> 6137162998
                  </a>
                </h4>
                <h4>
                  <a href = 'mailto: miali@kw.ca' className='text-light'>
                    <i className='fas fa-envelope'/> miali@kw.ca
                  </a>
                </h4>
                
                <img src='https://static1.squarespace.com/static/555269d2e4b012049c615617/t/593566e89de4bb5dfbc316c8/1496671983414/KW+Integrity+Realty+logo-blck+text-JAN+2017.jpg' alt='kw' /> */}
                <div className='d-flex justify-content-around'>
                  <button className='mr-2'>Home Evaluation</button>
                  <button>Properities</button>
                </div>
              </div>

              {/* <div className='col mt-3'>
                <div className='d-flex justify-content-around'>
                  <button className='mr-2'>Home Evaluation</button>
                  <button>Properities</button>
                </div>
              </div> */}
            </div>

          </div>

        </div>

        <div className='card featured-listings mt-3 mt-sm-0'>

          <div className='card-title text-center mt-3'>
            <h2>FEATURED LISTINGS</h2>
          </div>

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
          <div className='col-sm-6 col-xl-7'>
            <iframe
              width='100%'
              height="300"
              frameBorder="0" 
              title='Keller Williams Integrity Realty'
              style={{border: 0}}
              src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAP_API}
                &q=Keller+Williams+Integrity+Realty,+Brokerage, Ottawa+ON&center=45.371746, -75.776367&zoom=14`} 
                allowFullScreen
            />
    
            </div>
            <div className='col-sm-6 col-xl-5 mt-3 mt-sm-0'>
              <div className='card h-100'>
                <div className='card-body'>
                  <div className='cad-title text-center'>
                    <strong>Keller Williams Integrity Realty, Brokerage</strong>
                  </div>
                  <div className='row justify-content-center align-items-center mt-3'>
                    <i className="fas fa-map-marker-alt col-2 text-center"/>
                    <div className='col-10'>2148 Carling Avenue, Units 5 & 6, Ottawa, ON K2A 1H1</div>
                  </div>

                  <div className='row justify-content-center align-items-center'>
                    <i className='fas fa-phone col-2 text-center'/> 
                    <a href = 'tel: 6138291818' className='col-10'>6138291818</a>
                  </div>

                  <div className='row justify-content-center align-items-center'>
                    <div className='col-2 d-flex align-items-center justify-content-center'>
                      <i className="material-icons " >public</i>
                    </div>
                    <a href='http://kwintegrity.ca' target='__blank' className='col-10'>kwintegrity.ca</a>
                  </div>
                </div>
              </div>
            </div>
         </div>
      </div>
    )
  }
}