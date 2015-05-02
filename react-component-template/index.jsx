import React, {PropTypes} from 'react'
const namespace = '{{camelName}}'

export default class {{PascalName}} extends React.Component {
  render(){
    return <div className={namespace}>
      <h1 className={`${namespace}-title`}>{this.props.name} component</h1>
      <img src={`//${this.props.name}.jpg.to`} />
    </div>
  }
})

{{PascalName}}.propTypes = {
  name: PropTypes.string.isRequired
}
