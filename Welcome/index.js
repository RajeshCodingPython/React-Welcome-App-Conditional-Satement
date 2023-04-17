import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isbutton: true}

  isButton = () => {
    this.setState({isbutton: false})
  }

  isButtonFaluse = () => {
    this.setState({isbutton: true})
  }

  render() {
    const {isbutton} = this.state
    let buttonOne

    if (isbutton) {
      buttonOne = (
        <button className="button" type="submit" onClick={this.isButton}>
          Subscribe
        </button>
      )
    } else {
      buttonOne = (
        <button className="button" type="submit" onClick={this.isButtonFaluse}>
          Subscribed
        </button>
      )
    }
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph">Thank you! Happy Learing</p>
        <div>{buttonOne}</div>
      </div>
    )
  }
}

export default Welcome
