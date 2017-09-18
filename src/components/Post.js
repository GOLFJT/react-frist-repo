import React, { Component } from 'react'
import { 
 FormBox,
 Button
} from './../styles/MainStyle'

class Post extends Component {

  render() {
    let postItems = this.props.postItems
    return (
      <FormBox horizontal>
        {postItems.map((post, key) => (
            <FormBox listPost key={key+1}>
               <span>{key+1}. {post}</span>
               <Button delete onClick={() => this.props.deleteItem(key)}>ลบ</Button>
            </FormBox>
        ))}
      </FormBox>
    )
  }
}

export default Post
