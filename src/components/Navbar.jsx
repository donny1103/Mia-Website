import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

class Navbar extends Component {
  
  render(){
    const path = this.props.location.pathname;
    
    return(
      <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
        <div className="navbar-brand">Logo</div>
        <button className='navbar-toggler' type="button" data-toggle="collapse" data-target="#navbar-menu">
          <span className='navbar-toggler-icon'/>
        </button>
  
       <div className='navbar-collapse justify-content-center collapse' id="navbar-menu">
          <ul className='navbar-nav'>

            <Link className='nav-link' to='/'>
              <li className={classnames({'nav-item':true, 'active': path === '/'})}>
                Home
              </li>
            </Link>
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
    )
  }
}

export default Navbar;