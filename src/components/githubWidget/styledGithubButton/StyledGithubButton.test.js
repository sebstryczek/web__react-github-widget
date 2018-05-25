import React from 'react';
import { shallow } from 'enzyme';
import StyledGithubButton from './StyledGithubButton';

describe('StyledGithubButton component', () => {
  const component = shallow(
    <StyledGithubButton />
  );

  it('Should render successfully', () => {
    expect( component.exists() ).toEqual( true );
  });
});
