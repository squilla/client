import React from 'react'

// eslint-disable-next-line react/prefer-stateless-function
export default class IconBtn extends React.Component {
  render() {
    const { link, img, alt } = this.props
    return (
      <div className="icon-btn">
        <a href="{link}">
          <img src="{img}" alt="{alt}" />
        </a>
      </div>
    )
  }
}

