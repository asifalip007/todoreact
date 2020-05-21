import React, { Component } from 'react';
import styled from 'styled-components';
import AddTask from './components/AddTask';

const Wrapper = styled.div`
margin: 0px auto;
`
const Navbar = styled.div`
width: 60vw;
height: auto;
margin: 0px auto;
background-color: black;
color: white;
font-size: 2.5rem;
padding: 10px 20px;
`

const Body = styled.div`
width: 60vw;
height: auto;
margin: 30px auto;
padding: 10px 20px;
`

export class App extends Component {
  componentDidMount(){
    document.title = `Todo List`
  }
  render() {
    return (
      <Wrapper>
        <Navbar>Todo List</Navbar>
        <Body>
          <AddTask />
        </Body>
      </Wrapper>
    )
  }
}

export default App

