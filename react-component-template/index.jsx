import React, {PropTypes, Component} from 'react'
import {addons} from 'react/addons'
const {shouldComponentUpdate} = addons.PureRenderMixin
const namespace = '{{camelName}}'

export default class {{PascalName}} extends Component {
  constructor (props) {
    super(props)
    // initialize state values
    this.state = {}

    // bind your custom methods here (instead of render for example)
    // example:
    // this._handleSomething = this._handleSomething.bind(this)
  }

  // use the pure-render mixin without the mixin. This allows us to use es6
  // classes and avoid "magic" code. NOTE: if this component is used directly
  // by react-router, you should delete it, otherwise, the <Link> component will
  // not cause a re-render
  shouldComponentUpdate (...args) {
    return shouldComponentUpdate.apply(this, args)
  }

  render () {
    return (<div className={namespace}>
      <h1 className={`${namespace}-title`}>{this.props.name} component</h1>
      <img src={`http://loremflickr.com/600/600/${this.props.name}`} />
    </div>)
  }
}

{{PascalName}}.propTypes = {
  name: PropTypes.string.isRequired
}

{{PascalName}}.defaultProps = {
  name: '{{camelName}}'
}
