import React from 'react';
import { shallow } from 'enzyme';
import Spinner from './Spinner';

describe('Spinner component', () => {
  const component = shallow(
    <Spinner />
  );

  it('Should render successfully', () => {
    expect( component.exists() ).toEqual( true );
  });
});
