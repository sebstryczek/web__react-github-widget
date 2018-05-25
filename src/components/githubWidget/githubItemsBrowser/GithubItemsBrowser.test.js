import React from 'react';
import { mount } from 'enzyme';
import GithubItemsBrowser from './GithubItemsBrowser';

describe('GithubItemsBrowser component', () => {
  const items = [
    { id: 1, name: 'obj 1', url: 'url 1' },
    { id: 2, name: 'obj 2', url: 'url 2' },
    { id: 3, name: 'obj 3', url: 'url 3' }
  ];
  const component = mount(
    <GithubItemsBrowser items={items} />
  );

  it('Should render successfully', () => {
    expect( component.exists() ).toEqual( true );
  });

  it('Should have the same number of children as the number items has been passed', () => {
    expect( component.children().children().length ).toEqual( items.length );
  });

  it('Should have one button per item', () => {
    expect( component.find('button').length ).toEqual( items.length );
  });
});
