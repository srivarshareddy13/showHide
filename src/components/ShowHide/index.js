// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFrst: false, isLast: false}
  onFrst = () => {
    this.setState(prevState => ({isFrst: !prevState.isClick}))
  }
  onLast = () => {
    this.setState(prevState => ({isLast: !prevState.isClick}))
  }
  render() {
    const {isFrst, isLast} = this.state
    const FrstName = isFrst ? <p>Joe</p> : null
    const LastName = isLast ? <p>Jonas</p> : null
    return (
      <div className="app-container">
        <h1>Show/Hide</h1>
        <div className="container">
          <div className="name-container">
            <button type="button" onClick={onFrst}>
              Show/Hide Firstname
            </button>
            <FrstName />
          </div>
          <div className="name-container">
            <button type="button" onClick={onLast}>
              Show/Hide Lastname
            </button>
            <LastName />
        </div>
      </div>
    )
  }
}
export default ShowHide
