import React, { Component } from 'react';
import styled from 'styled-components';
import ListTask from './ListTask';

const Wrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin: 0px auto;
`
const Div = styled.div`
width: 100%;
display: flex;
justify-content: flex-start;
padding-top: 10px
`
const Form = styled.form`
width: 100%;
display: flex;
justify-content: flex-start;
`
const Textinput = styled.input`
width: 80%;
height: auto;
padding: 5px 20px;
font-size: 1em;
outline: none;
border: 1px solid black;
border-radius: 10px;
`
const Checkinput = styled.input`
justify-content: left;
margin: 10px 0px 20px;
`
const Button = styled.button`
width: 20%;
height: auto;
margin-left: 5px;
font-size: 1em;
border: 1px solid green;
border-radius: 10px;
background-color: green;
color: white;
outline:none;
cursor: pointer;
`
const Span = styled.span`
padding: 5px 5px;
`

export class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currenttask: {
                value: '',
                id: '',
                checked: false,
            },
            tasklist: [],
            allCheck: false,
        }
        this.inputHandler = this.inputHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.allChecked = this.allChecked.bind(this);
        this.deleteItems = this.deleteItems.bind(this);
        this.taskEdit = this.taskEdit.bind(this);
    }
    inputHandler = (e) => {
        this.setState({
            currenttask: {
                value: e.target.value,
                id: Date.now(),
                checked: false
            }
        })
    }
    submitHandler = (e) => {
        e.preventDefault()
        const newitem = this.state.currenttask;
        if (newitem.value !== '') {
            const newitems = [...this.state.tasklist, newitem]
            this.setState({
                tasklist: newitems,
                currenttask: {
                    value: '',
                    id: '',
                    checked: false,
                },
                allCheck: false,
            })
        }
    }
    deleteItems = (key) => {
        const filtered = this.state.tasklist.filter((item) => item.id !== key);
        let all = this.state.allCheck;
        if (filtered.length === 0){
            all = false
        }
        this.setState({
            tasklist: filtered,
            allCheck: all
        })
    }
    taskEdit = (value, key) => {
        const updated = this.state.tasklist
        updated.map((item) => {
            if (item.id === key) {
                item.value = value
            }
        })
        this.setState({
            tasklist: updated
        })
    }
    allChecked = () => {
        const current= this.state.allCheck;
        const items = this.state.tasklist;
        items.map((item) => {
            item.checked = !current
        })
        this.setState({
            tasklist: items,
            allCheck: !current
        })
        console.log(items)
    }
    checkHandler = (check,key) => {
        const items = this.state.tasklist;
        let current = true;
        items.map((item) => {
            if (item.id === key){
                item.checked = check
                if(item.checked === false){
                    current = false
                }
            }
            if (item.checked === false){
                current = false
            }
        })
        this.setState({
            tasklist: items,
            allCheck: current
        })
    }
    render() {
        return (
            <Wrapper>
                <Form onSubmit={this.submitHandler} >
                    <Textinput type='text' value={this.state.currenttask.value} placeholder='Enter task' onChange={this.inputHandler} />
                    <Button> Add Task </Button>
                </Form>
                <Div>
                    <Checkinput type='checkbox' checked={this.state.allCheck} onChange={this.allChecked} />
                    <Span>Select All</Span>
                </Div>
                <Div>
                    *Please click on the entries in log to edit.
                </Div>
                <ListTask value={this.state.tasklist} deleteTasks={this.deleteItems} editTask={this.taskEdit} checked={this.checkHandler}/>
            </Wrapper>
        )
    }
}

export default AddTask
