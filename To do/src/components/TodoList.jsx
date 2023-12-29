import React from 'react';
import { TodoHeaderStyle, InputDisplay, RenderList} from './TodoListStyles';
import { useState } from 'react';

const TodoList = () => {
 
const [input, setInput] = useState("");
const [task, setTask] = useState([])
const [check, setCheck] = useState(false)

const handleClick = (e) => {
   e.preventDefault();
   setTask([ ...task, { 
      todos: input,
      id: Math.random(),
    completed: check,
     date: new Date().getHours(),
    }]),
  setInput("")
}

const handleClickDelete = (pass) => { 
     let list = task.filter( newlist => {
       return  newlist.id !== pass

     })
    setTask(list);
}


  return (
    <>
    <TodoHeaderStyle>
          <label >New Task</label>        
          <input id="input" value={input} onChange={(e) => setInput(e.target.value)} placeholder='Waiting ...' ></input>
           <button onClick={handleClick}>Add</button>
      
      
      </TodoHeaderStyle>   
      { 
        task?.map( todo => {
          const {id,date, todos} = todo;

        return <RenderList key={id}>
           <li >{todos}</li><input value={check} onChange={() => setCheck(!check)} type='checkbox'/>
            <button onClick={() => handleClickDelete(id)}>Delete</button>
            </RenderList>
        })

      }

    </>
  )
}



export default TodoList
