import {Component} from 'react'

import {Link} from 'react-router-dom'

import './index.css'

class LoginForm extends Component {
  state = {userInput: '',login:false, passwordInput: '', showError: false, errorMsg: ''}

  onUserInputChange = event => {
    this.setState({userInput: event.target.value})
  }

  onPasswordInputChange = event => {
    this.setState({passwordInput: event.target.value})
  }

  submitSuccess = () => {
      this.setState({login: true})
  }

  submitFailure = () => {
    this.setState({errorMsg:'Please Enter Valid Lgin Credentials!', showError: true})
  }
  
  onSubmitForm = (event) => {
    event.preventDefault()
    const {userInput, passwordInput} = this.state
    if (userInput==="SAI"&&passwordInput==="123456"){
        this.submitSuccess()
    }else{
        this.submitFailure()
    }
  }

  render() {
    const {userInput,passwordInput,showError,errorMsg,login}=this.state
    return (
      <div className="login-container">
        <div className="small-device-image">
          <img
            src="https://images.unsplash.com/photo-1520473378652-85d9c4aee6cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGpld2VsbGVyeSUyMGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
            alt="website login"
            className="small-device-image-im"
          />
        </div>
        <div className="form-container">
          <form onSubmit={this.onSubmitForm} className="form">
            <div className="web-logo-container">
            <img
              src="https://res.cloudinary.com/dfxkazmkc/image/upload/v1681194638/icon_mamdbc.png"
              alt="website logo"
              className="im"
            />
            <p>Sree Veerabhadra Jewellery Works</p>
            </div>
            <h1 className="heading">Login</h1>
            <label htmlFor="user" className="label">
              USERNAME
            </label>
            <input
              type="text"
              className="input"
              value={userInput}
              id="user"
              onChange={this.onUserInputChange}
            />
            <label htmlFor="password" className="label">
              PASSWORD
            </label>
            <input
              type="password"
              value={passwordInput}
              id="password"
              onChange={this.onPasswordInputChange}
              className="input"
            />
            <button className="login-button" type="submit">
              Login
            </button>
            {showError && <p>{errorMsg}</p>}
            {login && <Link to="/ownerPage">
            <button type="button">Go Now</button></Link>}
          </form>
        </div>
        <div className="large-device-image">
          <img
            src="https://images.unsplash.com/photo-1520473378652-85d9c4aee6cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGpld2VsbGVyeSUyMGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
            alt="website login"
            className="large-image"
          />
        </div>
      </div>
    )
  }
}

export default LoginForm