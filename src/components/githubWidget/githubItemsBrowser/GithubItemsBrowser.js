import React from 'react';
import StyledGithubButton from '../styledGithubButton/StyledGithubButton';
import StyledGithubItem from '../styledGithubItem/StyledGithubItem';

const GithubItemsBrowser = props => props.items.map(
  item =>
  <StyledGithubItem key={item.id}>
    <StyledGithubButton onClick={()=> props.onItemClick(item.id)}>
      {item.name}
    </StyledGithubButton>
  </StyledGithubItem>
);

export default GithubItemsBrowser;
