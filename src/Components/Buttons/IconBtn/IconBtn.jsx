import React from 'react'
import { BrowserRouter as Link } from 'react-router-dom'

// eslint-disable-next-line react/prefer-stateless-function
export default class IconBtn extends React.Component {
  render() {
    const { link, img, alt } = this.props
    return (
      <div className="icon-btn">
        <Link to={link}>
          <img src={img} alt={alt} />
        </Link>
      </div>
    )
  }
}
