import React from 'react';
import StyledGithubButton from '../styledGithubButton/StyledGithubButton';
import StyledGithubItem from '../styledGithubItem/StyledGithubItem';

const GithubItemsList = props => (
    props.items.map( item => (
      <StyledGithubItem key={item.id}>
        <StyledGithubButton onClick={() => window.open(item.url, "_blank")}>
          {item.name}
        </StyledGithubButton>
        <StyledGithubButton onClick={() => props.onRemoveItemClick(item.id)}>
          x
        </StyledGithubButton>
      </StyledGithubItem>
    ))
)

export default GithubItemsList;
