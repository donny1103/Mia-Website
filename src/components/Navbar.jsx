import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

class Navbar extends Component {
  
  render(){
    const path = this.props.location.pathname;
    
    return(<>
        <div className='d-flex justify-content-between navbar-contact-info'>
          <a href = 'tel: 6137162998' className='text-light'>
            <i className='fas fa-phone'/> 6137162998
          </a>
          <a href = 'mailto: miali@kw.ca' className='text-light'>
            <i className='fas fa-envelope'/> miali@kw.ca
          </a>
        </div>
        <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
          <Link className='nav-link' to='/'>
            <div className="navbar-brand">Mia Li</div>
          </Link>
          
          <button className='navbar-toggler' type="button" data-toggle="collapse" data-target="#navbar-menu">
            <span className='navbar-toggler-icon'/>
          </button>
    
          <div className='navbar-collapse justify-content-center collapse' id="navbar-menu">
            <ul className='navbar-nav'>
              <Link className='nav-link' to='/about'>
                <li className={classnames({'nav-item':true, 'active': path === '/about'})}>
                  About
                </li>
              </Link>
              <Link className='nav-link' to='/buy'>
                <li className={classnames({'nav-item':true, 'active': path === '/buy'})}>
                  Buy   
                </li>  
              </Link>
              <Link className='nav-link' to='/sell'>
                <li className={classnames({'nav-item':true, 'active': path === '/sell'})}>
                  Sell
                </li>
              </Link>
              <Link className='nav-link' to='/tools'>
                <li className={classnames({'nav-item':true, 'active': path === '/tools'})}>
                  Tools
                </li>
              </Link>
              <li className={classnames({'nav-link':true})}>
                <div className='nav-item'>中文</div>
              </li>
            </ul>
          </div>
        </nav>
      </>
    )
  }
}

export default Navbar;