import React, { Component } from 'react'

import Button from '../../misc/Button';

export default class Styles extends Component {
  render() {
    return (
      <div>
        <Button label="Dalej" position="center" onClick={() => this.props.onCompletePage(null)} />
      </div> 
    )
  }
}
