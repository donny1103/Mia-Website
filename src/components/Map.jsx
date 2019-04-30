import React, { Component } from 'react';
import { render } from 'react-dom';
const { maps } = window.google;

class Map extends Component{

  state = {
    map: '',
    kwMarker: '',
  };

  componentDidMount(){
    this.initMap();
  }

  componentWillUnmount(){
    maps.event.clearListeners(this.state.kwMarker, 'click');
  }

  initMap = () =>{
    const mapOption = {
      center:{lat:45.369517, lng: -75.768708}, // toronto
      zoom: 15,
      mapTypeControl: false,
      draggableCursor: 'default',
      disableDefaultUI: false,
    }
    const map = new maps.Map(document.getElementById('map'), mapOption);
 
    const kwMarker = this.placeMarker(map, {lat:45.369517, lng: -75.768708});
    const infoWindow = this.createInfoWindow(map, kwMarker);
    kwMarker.addListener('click', () => infoWindow.open(map, kwMarker));
    this.setState({map, kwMarker});
  }

  placeMarker = (map, position) => {
    const marker = new maps.Marker({
      position,
      map,
    });
    return marker
  }

  createInfoWindow = (map, marker) => {
    const infoWindow = new maps.InfoWindow({
        content: '<div id="infoWindow" />',
    })

    infoWindow.addListener('domready', e => {
      render(<InfoWindow title='Keller Williams Integrity Realty, Brokerage' 
                         address='2148 Carling Avenue, Units 5 & 6, Ottawa, ON K2A 1H1'
      />, document.getElementById('infoWindow'))
    })

    infoWindow.open(map, marker)
    return infoWindow
  }

  render(){
    return(
      <div style={{ width: '100%', height: '300px' }} id='map' />
    )
  }
}

export default Map;

const InfoWindow = ({title, address}) =>(
  <div className='p-2'>
    <div className='text-center'>
      <h6>{title}</h6>
    </div>
    <div className='text-center'>
      {address}
    </div>
  </div>
)