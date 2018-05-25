import React from 'react';
import { shallow } from 'enzyme';
import StyledGithubItem from './StyledGithubItem';

describe('StyledGithubItem component', () => {
  const component = shallow(
    <StyledGithubItem />
  );

  it('Should render successfully', () => {
    expect( component.exists() ).toEqual( true );
  });
});
