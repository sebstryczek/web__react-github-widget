import { Selector, ClientFunction } from "testcafe";

const getTitle = ClientFunction( () => window.document.title );

fixture`Github Widget`.page`http://localhost:3000/`;

test('Should load with the right title', async t => {
  const title = getTitle();
  await t.expect( title ).eql( 'Github Widget' );
});
