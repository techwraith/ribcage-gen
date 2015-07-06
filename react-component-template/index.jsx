import React, {PropTypes, Component} from 'react'
import {addons} from 'react/addons'
import styles from './index.css'
const {shouldComponentUpdate} = addons.PureRenderMixin

export default class {{PascalName}} extends Component {
  // use the pure-render mixin without the mixin. This allows us to use es6
  // classes and avoid "magic" code. NOTE: if this component is used directly
  // by react-router, you should delete it, otherwise, the <Link> component will
  // not cause a re-render
  shouldComponentUpdate (...args) {
    return shouldComponentUpdate.apply(this, args)
  }

  render () {
    return (<div>
      <h1 className={styles.title} ref="title">{this.props.name} component</h1>
      <img src={`http://loremflickr.com/600/600/${this.props.name}`} alt={this.props.name} />
    </div>)
  }
}

{{PascalName}}.propTypes = {
  name: PropTypes.string.isRequired
}

{{PascalName}}.defaultProps = {
  name: '{{titleName}}'
}
