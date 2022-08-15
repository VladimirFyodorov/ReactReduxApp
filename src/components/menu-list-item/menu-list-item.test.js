import React from 'react';
import MenuListItem from './index';
import {shallow} from 'enzyme';

// npm run test
describe('Testing <MenuListItem/>', () => {
  const itemData = {title: '', price: '', url: '', category: ''};
  const fakeFunc = () => console.log('fake');
  const item = shallow(<MenuListItem menuItem={itemData} onAddToCart={fakeFunc}/>);

  describe('Testing snap & state', () => {
    it('MenuListItem has rendered correctly', () => {
      expect(item).toMatchSnapshot();
    })
    // it('MenuListItem props "menuItem" is object', () => {
    //   expect({}).toBeObject();
    // })
  })

  // describe('Testing methods of the object:', () => {
  //   it('method_1', () => {
  //     item.instance().method_1();
  //     // method_1 shange 'error' in 'state' to false
  //     expect(item.state().error).toBeFalsy();
  //   })
  // })
})



// import renderer from 'react-test-renderer';
// describe('Testing <MenuListItem/>', () => {
//   it('MenuListItem has rebdered correctly', () => {
//     // const itemData
//     const item = renderer.create(<MenuListItem/>).toJSON();
//     expect(item).toMatchSnapshot();
//   })
// })