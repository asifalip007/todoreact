import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
width: 100%;
margin: 0px auto;
height: auto;
`
const Div = styled.div`
width: 100%;
display: flex;
justify-content: flex-start;
padding-top: 10px;

.striked{
    text-decoration: line-through;
}
`
const Checkinput = styled.input`
justify-content: left;
margin: auto 0px;
`
const Textinput = styled.input`
width: 80%;
height: auto;
padding: 5px 20px;
font-size: 1em;
outline: none;
border: none;
`
const Button = styled.button`
width: 30%;
height: auto;
margin-left: 5px;
font-size: 1em;
border: 1px solid red;
border-radius: 10px;
background-color: red;
color: white;
outline:none;
cursor: pointer;
`

function ListTask(props) {

    const items = props.value;
    return (
        <Wrapper>
            {
                items.map((item) => {
                    return (
                        <Div key={item.id}>
                            <Checkinput type='checkbox' id='all' checked={item.checked} onChange={(e) => props.checked(e.target.checked,item.id)}/>
                            <Textinput type='text' value={item.value} onChange={(e) => { props.editTask(e.target.value, item.id) }} className={item.checked?'striked':null}/>
                            <Button onClick={() => props.deleteTasks(item.id)}>Delete Task</Button>
                        </Div>
                    )
                })
            }
        </Wrapper>
    )
}

export default ListTask





