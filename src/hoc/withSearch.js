
import React, { Component } from 'react'
import { connect} from 'react-redux';
import {compose} from 'redux';
const WithSearch = (WrappedComponent) => {
  return class extends Component {
    state = {
      searchTerm: ''
    }
    handleSearch = event => {
      event.preventDefault()
      this.setState({ searchTerm: event.target.value })
    }
 
    render() {
      return (
        <div>
          <div>
            <input onChange={this.handleSearch} value={this.state.searchTerm} type="text" placeholder="Search" />
          </div>
          <WrappedComponent searchTerm={this.state.searchTerm} {...this.props}/>
        </div>
      )
    }
  }
 
}
const composeWithSearch = compose(connect (null),WithSearch)
export default composeWithSearch;
