import React, { PureComponent, PropTypes } from 'react'
import transform from './transform'
import combinePlugins from './plugin'

export default class ReactDown extends PureComponent {
  static propTypes = {
    src: PropTypes.string.isRequired,
    plugins: PropTypes.arrayOf(PropTypes.func)
  }

  static defaultProps = {
    plugins: []
  }

  constructor(props) {
    super(props)
    this.transform = combinePlugins(...props.plugins)(transform)
  }

  render() {
    return this.transform(this.props.src)
  }
}
