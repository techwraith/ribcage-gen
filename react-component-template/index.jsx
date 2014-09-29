'use strict';

var React = require('react')

module.exports = React.createClass({
  getInitialState(){
    return {name: null}
  }
  , onChange(e){
    this.setState({name: e.target.value})
  }
  , render(){
    return <div><h1>{this.state.name || this.props.name} component</h1>
      <input onChange={this.onChange} />
      <img src={'//' + (this.state.name || this.props.name) + '.jpg.to'} />
    </div>
  }
})
