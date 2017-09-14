import React from 'react'
import App from './App.js'
import renderer from 'react-test-renderer'
import { expect as chaiExpect } from 'chai'
import { shallow,mount } from 'enzyme'

describe('component app', () => {
  it('renders correctly app', () => {
  const jsonPost = renderer.create(<App/>).toJSON()
      expect(jsonPost).toMatchSnapshot()
  })

  it('id inputText heve 1', () => {
      const wrapper = shallow(<App/>)
      expect(wrapper.find('#inputText')).toHaveLength(1)
  })

  it('onSubmit call function Click', () => {
      const wrapper = mount(<App/>)
      const click = jest.spyOn(wrapper.instance(),'click')
      const fromSubmit = wrapper.find('#form-submit')
       //  const epreventDefault = () => {}

      // wrapper.find('#inputText').node.value = 'test'
      // fromSubmit.simulate('submit')
      fromSubmit.simulate('submit', {  target: { main_input: { value: 'test' } } } )
      expect(click).toHaveBeenCalledTimes(1)
  })

  it('test function click', () => {
      const resute = ['one-post','two-post','three-post']
      const wrapper = shallow(<App/>)
      wrapper.setState({ valTextarea: ['one-post','two-post'] })
      wrapper.instance().click({  target: { main_input: { value: 'three-post' } } })
      const newState = wrapper.state().valTextarea
      expect(newState).toEqual(resute)
  })

  it('test function deleteItem', () => {
      const resute = ['one-post','three-post']
      const wrapper = shallow(<App/>)
      wrapper.instance().authFunction = jest.fn().mockReturnValue(true)
      wrapper.setState({ valTextarea: ['one-post','two-post','three-post'] })
      wrapper.instance().deleteItem(1)
      const newState = wrapper.state().valTextarea
      expect(newState).toEqual(resute)
  })
})



