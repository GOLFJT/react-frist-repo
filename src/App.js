import React, { Component } from 'react'
import './App.css'
import Post from './Post.js'
import { getApiSum } from './GetApi'

class App extends Component {

  constructor(props) {
      super(props)
      this.state = {
           valTextarea: []
      }
  }  

  authFunction = () => {
      return true
  }

  deleteItem = (key) => {
    if(this.authFunction()){
      this.state.valTextarea.splice(key, 1)
      this.setState({
        valTextarea: this.state.valTextarea
      })
      return this.state.valTextarea
    }
  }

  click = (event) => {
    const inputText = event.target.main_input.value  
    if (inputText !== '') {
      let addPost = this.state.valTextarea
      addPost.push(inputText)
      this.setState({
         valTextarea: addPost
      })
      event.target.main_input.value = ''
    }
    return this.state.valTextarea
  }

  render() {
    return (
      <div>
        <div className="flex-box">
          <form id="form-submit" onSubmit={(e) => {     
                  e.preventDefault() 
                  this.click(e)
                } 
            }>
            <div className="col-flex">
                <textarea rows="4" name="main_input" className="ta-style" id="inputText"></textarea>
                <input name="text" type="text"/>
            </div>
            <div className="col-flex">
                <button type="submit">Submit</button>
            </div>
          </form >
        </div>
        <Post 
          postItems={this.state.valTextarea} 
          deleteItem={ this.deleteItem }
        />
      </div>  
    )
  }
}

export default App
