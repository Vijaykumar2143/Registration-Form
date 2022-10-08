// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    blur1: false,
    blur2: false,
    butt: false,
  }

  eventHandlerOne = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({blur1: true})
    } else {
      this.setState({blur1: false})
    }
  }

  eventHandlerTwo = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({blur2: true})
    } else {
      this.setState({blur2: false})
    }
  }

  onSubmitButt = () => {
    const {firstName, lastName} = this.state
    if (firstName !== '' && lastName !== '') {
      this.setState({butt: true})
    } else if (firstName !== '' && lastName === '') {
      this.setState({blur2: true})
    } else if (firstName === '' && lastName !== '') {
      this.setState({blur1: true})
    } else {
      this.setState({blur1: true})
      this.setState({blur2: true})
    }
  }

  anotherSubmitButton = () => {
    this.setState({butt: false})
  }

  firstNameFunction = event => {
    console.log(event.target.value)
    this.setState({firstName: event.target.value})
  }

  lastNameFunction = event => {
    console.log(event.target.value)
    this.setState({lastName: event.target.value})
  }

  render() {
    const {firstName, lastName, blur1, blur2, butt} = this.state
    const class1 = blur1 ? 'red-2' : ''
    const class2 = blur2 ? 'red-2' : ''
    if (butt === false) {
      return (
        <div className="bg-container">
          <h1 className="head">Registration</h1>
          <div className="card">
            <label htmlFor="firstName" className="l-text">
              FIRST NAME
            </label>
            <br />
            <input
              type="text"
              className={`input-text ${class1}`}
              id="firstName"
              placeholder="First name"
              onBlur={this.eventHandlerOne}
              onChange={this.firstNameFunction}
              value={firstName}
            />
            <br />
            {blur1 && <p className="red">Required</p>}
            <br />
            <label htmlFor="lastName" className="l-text">
              LAST NAME
            </label>
            <br />
            <input
              type="text"
              className={`input-text ${class2}`}
              id="lastName"
              placeholder="Last name"
              onBlur={this.eventHandlerTwo}
              onChange={this.lastNameFunction}
              value={lastName}
            />
            <br />
            {blur2 && <p className="red">Required</p>}
            <br />
            <div className="butt-container">
              <button
                type="button"
                className="butt"
                onClick={this.onSubmitButt}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div className="bg-container">
        <h1 className="head">Registration</h1>
        <div className="card">
          <div className="butt-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
              className="s-img"
            />
          </div>

          <p className="par">Submitted Successfully</p>
          <div className="butt-container">
            <button
              type="button"
              className="butt-2"
              onClick={this.anotherSubmitButton}
            >
              Submit Another Response
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default RegistrationForm
