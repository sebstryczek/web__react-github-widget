import styled from 'styled-components';

const StyledGithubItem = styled.div`
  display: flex;

  & > * {
    flex: 0 0 auto;
  }

  & > *:first-of-type {
    flex: 1 1 auto;
  }
`;

export default StyledGithubItem;
