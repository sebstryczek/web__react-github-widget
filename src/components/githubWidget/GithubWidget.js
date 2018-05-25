import React, { Component } from 'react';
import styled from 'styled-components';

import axiosGithub from '../../axios-github';
import Modal from '../modal/Modal';
import Spinner from '../spinner/Spinner';
import GithubControls from './githubControls/GithubControls';
import GithubItemsList from './githubItemsList/GithubItemsList';
import GithubItemsBrowser from './githubItemsBrowser/GithubItemsBrowser';

const StyledWrapper = styled.div`
    border: 1px solid #999999;
    border-radius: 4px;
    margin: 16px;
    padding: 16px;
`;

export const githubUrl = 'https://github.com';

export const publicOnly = r => r.private === false;

export const githubDataToItem = r => ({
  id: r.id,
  name: r.name,
  url: `${githubUrl}/${r.full_name}/`
});

class GithubWidget extends Component {
  state = {
    addedItems: [],
    items: [],
    isFetching: false,
    isModalVisible: false,
  }

  fetchGithubRepos = githubName => {
    this.setState({ isGithubLoading: true });
    axiosGithub
      .get(`users/${githubName}/repos`)
      .then(resp => {
        const items = resp.data
          .filter(publicOnly)
          .map(githubDataToItem);
        this.setState({ items: items, isGithubLoading: false });
      })
      .catch(err => console.log(err));
  }

  showModal = () => this.setState({ isModalVisible: true });

  hideModal = () => this.setState({ isModalVisible: false });

  openReposBrowser = githubName => {
    this.fetchGithubRepos(githubName);
    this.showModal();
  }

  addItem = id => {
    const item = this.state.items.find(x => x.id === id);
    if (item) {
      const addedItems = [...this.state.addedItems, item];
      this.setState({addedItems: addedItems});
    }
    this.hideModal();
  }

  removeItem = id => {
    const addedItems = this.state.addedItems.filter( x => x.id !== id);
    this.setState({addedItems: addedItems});
  }

  render() {
    return (
      <StyledWrapper>
        <GithubControls onAddItemClick={this.openReposBrowser}/>

        <GithubItemsList items={this.state.addedItems} onRemoveItemClick={this.removeItem}/>

        <Modal isVisible={this.state.isModalVisible} onRequestClose={this.hideModal}>
          {
            this.state.isGithubLoading
            ?
              <Spinner/>
            :
              <GithubItemsBrowser items={this.state.items} onItemClick={this.addItem} />
          }
        </Modal>
      </StyledWrapper>
    )
  }
}

export default GithubWidget;
