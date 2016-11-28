import React, { PureComponent, PropTypes } from 'react'
import transform from './transform'

export default class ReactDown extends PureComponent {
  props: {
    src: PropTypes.string.isRequired
  }

  render() {
    return transform(this.props.src)
  }
}
