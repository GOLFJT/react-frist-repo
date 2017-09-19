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
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

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
    if (this.authFunction()) {
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
      <ThemeProvider theme={lightTheme}>
        <Layout>
          <Header className="header">
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
          <Layout>
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
              >
                <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                  <Menu.Item key="1">option1</Menu.Item>
                  <Menu.Item key="2">option2</Menu.Item>
                  <Menu.Item key="3">option3</Menu.Item>
                  <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                  <Menu.Item key="5">option5</Menu.Item>
                  <Menu.Item key="6">option6</Menu.Item>
                  <Menu.Item key="7">option7</Menu.Item>
                  <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                  <Menu.Item key="9">option9</Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                  <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '12px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Content style={{ background: '#fff', margin: 0, minHeight: 280 }}>
                <Section>
                  <FormBox>
                    <Form id="form-submit" onSubmit={(e) => {
                      e.preventDefault()
                      this.click(e)
                    }
                    }>
                      <FormBox>
                        <Textarea rows="4" name="main_input" className="ta-style" id="inputText"></Textarea>
                        <InputTypePassword name="password" />
                      </FormBox>
                      <FormBox>
                        <Button primary size={{ fontSize: "1.5em;" }} type="submit">Submit</Button>
                      </FormBox>
                    </Form >
                  </FormBox>
                  <Post
                    postItems={this.state.valTextarea}
                    deleteItem={this.deleteItem}
                  />
                </Section>
              </Content>
              <Footer style={{ textAlign: 'center' }}>
                Footer
              </Footer>
            </Layout>
          </Layout>
        </Layout>
      </ThemeProvider>
    )
  }
}

export default App
