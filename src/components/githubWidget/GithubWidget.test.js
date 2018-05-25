import React from 'react';
import { shallow } from 'enzyme';
import GithubWidget, { githubUrl, githubDataToItem, publicOnly } from './GithubWidget';

describe('publicOnly', () => {
  it('Should be a function', () => {
    expect( typeof publicOnly ).toBe('function');
  });

  it('Should filter objects that have atribute private set to false', () => {
    const data = [
      { private: true },
      { private: true },
      { private: true },
      { private: false },
      { private: false }
    ]
    expect( data.filter(publicOnly).length ).toBe( 2 );
  });

  it('Should works for empty array', () => {
    const data = [];
    expect( data.filter(publicOnly) ).toEqual( [] );
  });
});

describe('githubDataToItem', () => {
  it('Should be a function', () => {
    expect( typeof githubDataToItem ).toBe( 'function' );
  });
  
  it('Should transform github data to object with id, name and url', () => {
    const data = [
      { id: 1, name: 'obj 1', full_name: 'url 1', other: 'other 1' },
      { id: 2, name: 'obj 2', full_name: 'url 2', other: 'other 2' },
      { id: 3, name: 'obj 3', full_name: 'url 3', other: 'other 3' }
    ];
    const result = [
      { id: 1, name: 'obj 1', url: `${githubUrl}/url 1/` },
      { id: 2, name: 'obj 2', url: `${githubUrl}/url 2/` },
      { id: 3, name: 'obj 3', url: `${githubUrl}/url 3/` }
    ];
    expect( data.map(githubDataToItem) ).toEqual( result );
  });

  it('Should works for empty array', () => {
    const data = [];
    expect( data.map(githubDataToItem) ).toEqual( [] );
  });
});

describe('GithubWidget component', () => {
  it('Should render successfully', () => {
    const component = shallow( <GithubWidget /> );
    expect( component.exists() ).toEqual( true );
  });
});