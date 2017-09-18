import React from 'react'
import Post from './../components/Post.js'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
const prop = ['prop']  
const jsonPost = renderer.create(<Post postItems={ [...prop] } deleteItem={()=>{}} />).toJSON()
  expect(jsonPost).toMatchSnapshot()
})

