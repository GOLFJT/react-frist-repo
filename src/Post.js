import React, { Component } from 'react'
import { 
 FormBox,
 Button,
 TextPost
} from './MainStyle'

class Post extends Component {

  render() {
    let postItems = this.props.postItems
    return (
      <FormBox horizontal>
        {postItems.map((post, key) => (
            <FormBox listPost key={key+1}>
               <TextPost>{key+1}. {post}</TextPost>
               <Button delete onClick={() => this.props.deleteItem(key)}>ลบ</Button>
            </FormBox>
        ))}
      </FormBox>
    )
  }
}

export default Post
