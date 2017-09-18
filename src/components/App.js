import React, { Component } from 'react'
import Post from './Post.js'
import { getApiSum } from './GetApi'
import { ThemeProvider } from 'styled-components'
import { 
  Section,
  darkTheme,
  lightTheme,
  InputTypePassword,
  Textarea,
  Button,
  Form,
  FormBox
} from './../styles/MainStyle'

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
      <ThemeProvider theme={darkTheme}>
        <Section>
          <FormBox>
            <Form id="form-submit" onSubmit={(e) => {     
                    e.preventDefault() 
                    this.click(e)
                  } 
              }>
              <FormBox>
                  <Textarea rows="4" name="main_input" className="ta-style" id="inputText"></Textarea>
                  <InputTypePassword name="password"/>
              </FormBox>
              <FormBox>
                  <Button primary size={{ fontSize : "1.5em;" }} type="submit">Submit</Button>
              </FormBox>
            </Form >
          </FormBox>
          <Post 
            postItems={this.state.valTextarea} 
            deleteItem={ this.deleteItem }
          />
        </Section>  
      </ThemeProvider>
    )
  }
}

export default App
