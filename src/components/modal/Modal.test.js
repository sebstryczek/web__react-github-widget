import React from 'react';
import { shallow, mount } from 'enzyme';
import Modal from './Modal';

describe('Modal component', () => {
  const onRequestClose = jest.fn();
  const component = mount(
    <Modal isVisible={true} onRequestClose={onRequestClose}/>
  );

  it('Should render successfully', () => {
    expect( component.exists() ).toEqual( true );
  });

  it('Should have one Backdrop element', () => {
    expect(component.find( '.js--modal-backdrop' ).length ).toEqual( 1 );
  });

  it('Should call the onRequestClose function when Backdrop is clicked', () => {
    onRequestClose.mockReset();
    expect( onRequestClose.mock.calls.length ).toEqual( 0 );
    component.find( '.js--modal-backdrop' ).simulate( 'click' );
    expect( onRequestClose.mock.calls.length ).toEqual( 1 );
  });

  it('Should have one Dialog element', () => {
    expect(component.find( '.js--modal-dialog' ).length ).toEqual( 1 );
  });

  it('Should not call the onRequestClose function when Dialog is clicked', () => {
    onRequestClose.mockReset();
    expect( onRequestClose.mock.calls.length ).toEqual( 0 );
    component.find( '.js--modal-dialog' ).simulate( 'click' );
    expect( onRequestClose.mock.calls.length ).toEqual( 0 );
  });
});
