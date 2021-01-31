import React from 'react';

export default class NavigationButton extends React.Component {
  getButtonLayout = () => {
    if (this.props.active) {
      return "navigation-button active-btn";
    }
    return "navigation-button"
  }

  render() {
    return (
      <span className={this.getButtonLayout()} onClick={this.props.onClick}>
        {this.props.label}
      </span>
    )
  }
}