import React from 'react';
import { shallow, mount } from 'enzyme';
import GithubControls from './GithubControls';

describe('GithubControls component', () => {
  const onAddItemClick = jest.fn();
  const component = mount(
    <GithubControls onAddItemClick={onAddItemClick} />
  );

  it('Should render successfully', () => {
    expect( component.exists() ).toEqual( true );
  });
  
  it('Should have one input', () => {
    expect(component.find('input').length).toEqual(1);
  });
  
  it('Should update state when input value changed', () => {
    const value = 'new value';
    component.find('input').simulate('change', {target: {value: value}});
    expect( component.find('input').prop('value') ).toBe( value );
  });
  
  it('Should have one button', () => {
    expect(component.find('button').length).toEqual(1);
  });

  it('Should call the onAddItemClick function when button clicked', () => {
    expect( onAddItemClick.mock.calls.length ).toEqual(0);
    component.find('button').simulate('click');
    expect( onAddItemClick.mock.calls.length ).toEqual(1);
  });
});
