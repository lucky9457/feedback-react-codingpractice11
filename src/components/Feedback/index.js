// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isclicked: true}

  updateState = () => {
    this.setState(prevState => ({isclicked: !prevState.isclicked}))
  }

  renderemojis = () => {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    return (
      <div className="main-container">
        <div className="emojicard">
          <h1 className="head">
            How satisfied are you with our customer support performance?
          </h1>
          <ul className="emojicontainer">
            {emojis.map(each => (
              <li className="listtag" onClick={this.updateState} key={each.id}>
                <img alt={each.name} className="imgg" src={each.imageUrl} />
                <p className="emojiname">{each.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  thankyousection = () => {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    return (
      <div className="main-container">
        <div className="emojicard">
          <div className="card">
            <img className="imgg" src={loveEmojiUrl} alt="love emoji" />
            <h1>Thank You</h1>
            <p className="emojiname">
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const {isclicked} = this.state
    return <div>{isclicked ? this.renderemojis() : this.thankyousection()}</div>
  }
}
export default Feedback
