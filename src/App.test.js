import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const component = shallow( <App /> );
  expect( component.exists() ).toEqual(true);
});


/*
test('Should load with the right title', async t => {
  const title = getTitle();
  await t.expect( title ).eql( 'Todo List' );
});


test('Should allow me to create a Todo', async t => {
  const res = 'Get better at testing';
  
  const todoInput = await Selector(".todo-input");
  const todoSubmit = await Selector(".todo-submit");
  const todoText = await Selector(".todo-text");
  await t
    .typeText( todoInput, res )
    .click( todoSubmit )
    .expect( todoText.textContent ).eql( res );
});

test('Should allow me to delete a Todo', async t => {
  const res = 'Get better at testing';
  
  const todoInput = await Selector(".todo-input");
  const todoSubmit = await Selector(".todo-submit");
  const todoDelete = await Selector(".todo-delete");
  const todoText = await Selector(".todo-text");

  await t
    .typeText( todoInput, res )
    .click( todoSubmit )
    .click( todoDelete )
    .expect( todoText.exists ).ok();
});

*/