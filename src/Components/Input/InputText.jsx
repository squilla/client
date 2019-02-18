import React from 'react'

// eslint-disable-next-line react/prefer-stateless-function
export default class InputText extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.stateText,
    }
  }

  onChange(event) {
    let { stateValue } = this.state

    this.setState({ value: event.target.value })
    this.onChange(stateValue)
  }

  render() {
    const {
      divId, name, labelText, type, placeholder, stateText,
    } = this.props

    return (
      <div id={divId}>
        <label htmlFor={name}>
          {labelText}
          <input
            type={type}
            placeholder={placeholder}
            name={name}
            value={stateText}
            onChange={event => this.onChange(event)}
          />
        </label>
      </div>
    )
  }
}