import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GithubControls extends Component {
  state = {
    githubName: "sebstryczek"
  }

  onGithubNameChangeHandler = e => {
    this.setState({githubName: e.target.value});
  }
  
  onAddItemClickHandler = () => {
    this.props.onAddItemClick(this.state.githubName);
  }
  
  render() { 
    return (
      <div>
        <span>https://github.com/</span>
        <input type="text"
          value={this.state.githubName}
          onChange={this.onGithubNameChangeHandler} />
        <button onClick={this.onAddItemClickHandler}>Add Item</button>
      </div>
    );
  }
}

GithubControls.propTypes = {
  onAddItemClick: PropTypes.func.isRequired
}

export default GithubControls;
