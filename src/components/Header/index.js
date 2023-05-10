import {Link} from 'react-router-dom'

import {GiHamburgerMenu} from 'react-icons/gi'

import {HiShoppingCart} from 'react-icons/hi'

import {AiOutlineHome} from 'react-icons/ai'

import {Component} from 'react'

import './index.css'

class Header extends Component {
  state = {display: false}

  onDisplayHeader = () => {
    this.setState(prevState => ({display: !prevState.display}))
  }

  render() {
    const {display} = this.state
    return (
      <>
        <div className="large-devices-header">
          <Link to="/" className="loi">
            <img
              src="https://res.cloudinary.com/dfxkazmkc/image/upload/v1681194638/icon_mamdbc.png"
              alt="website logo"
              className="im"
            />
            <p>Sree Veerabhadra Jewellery Works</p>
          </Link>
          <ul className="ul large-ul">
            <Link to="/" className="loi">
              <li className='joint'><p>Home</p>
                <AiOutlineHome className='font'/>
              </li>
            </Link>
            <Link to="/contact" className="loi">
                <li>Contact</li>
              </Link>
            <Link to="/cart" className="loi">
              <li className='joint'><p>Cart</p>
              <HiShoppingCart className='font'/>
              </li>
            </Link>
            <Link to="/login">
            <li>
              <button
                type="button"
                onClick={this.onLogIn}
                className="logout-button"
            >
                LogIn
              </button>
            </li>
            </Link>
          </ul>
        </div>
        <div className="small-devices-header">
          <div className="logo-cont">
          <Link to="/" className="loi">
            <img
              src="https://res.cloudinary.com/dfxkazmkc/image/upload/v1681194638/icon_mamdbc.png"
              alt="website logo"
              className="im"
            />
            <p>Sree Veerabhadra Jewellery Works</p>
          </Link>
            <button
              onClick={this.onDisplayHeader}
              type="button"
              className="burger-button"
            >
              <GiHamburgerMenu />
            </button>
          </div>
          {display && (
            <ul className="ul small-ul">
              <Link to="/" className="loi">
                <li>Home</li>
              </Link>
              <Link to="/contact" className="loi">
                <li>Contact</li>
              </Link>
              <Link to="/cart" className="loi">
                <li>Cart</li>
              </Link>
              <Link to="/login">
              <li>
                <button
                  type="button"
                  onClick={this.onLogIn}
                  className="logout-button"
                >
                  LogIn
                </button>
              </li>
              </Link>
            </ul>
          )}
        </div>
      </>
    )
  }
}

export default Header