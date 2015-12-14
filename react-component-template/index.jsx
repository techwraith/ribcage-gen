import React, {PropTypes, Component} from 'react'
import pureRender from 'pure-render-decorator'
import styles from './index.css'

// NOTE: if this component is used directly by react-router, not use the
// pureRender decorator. It will cause the <Link> component to not re-render.
@pureRender
export default class {{PascalName}} extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  }

  static defaultProps = {
    name: '{{titleName}}'
  }

  // initialize state values
  state = {}

  render () {
    return (<div>
      <h1 className={styles.title} testRef="title">{this.props.name} component</h1>
      <img src={`http://loremflickr.com/600/600/${this.props.name}`} alt={this.props.name} />
    </div>)
  }
}

