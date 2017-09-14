import React, { Component } from 'react'

class Post extends Component {

  render() {
    let postItems = this.props.postItems
    return (
      <div className="flex-box horizontal-flex">
        {postItems.map((post, key) => (
          <div key={key+1}> 
            <div className="col-flex"><p>{key+1}. {post}</p></div>
            <button onClick={() => this.props.deleteItem(key)}>ลบf</button>
          </div>
        ))}
      </div>
    )
  }
}

export default Post
