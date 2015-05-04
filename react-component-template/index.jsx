import React, {PropTypes, Component} from 'react'
import {addons} from 'react/addons'
const {shouldComponentUpdate} = addons.PureRenderMixin
const namespace = '{{camelName}}'

export default class {{PascalName}} extends Component {
  // use the pure-render mixin without the mixin. This allows us to use es6
  // classes and avoid "magic" code
  shouldComponentUpdate (...args) {
    return shouldComponentUpdate.apply(this, args)
  }

  render () {
    return (<div className={namespace}>
      <h1 className={`${namespace}-title`}>{this.props.name} component</h1>
      <img src={`//${this.props.name}.jpg.to`} />
    </div>)
  }
}

{{PascalName}}.propTypes = {
  name: PropTypes.string.isRequired
}
